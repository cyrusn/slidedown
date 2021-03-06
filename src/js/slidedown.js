var marked = require('marked'),
  hljs = require('highlight.js'),
  plantuml = require('./plantuml.js');

function Slidedown() {
  this.target = 'body';
}

var slideLayouts = {
  'title-only': {
    pattern: /^H1$/
  },
  'title-subtitle': {
    pattern: /^H1,H2$/
  },
  'side-by-side': {
    pattern: /^H1,.+,H1,.+$/,
    postprocess: function(content) {
      var left = document.createElement('DIV');
      left.className = 'left';
      // content.appendChild(left);

      // Insert the first <H1> and the stuff below it (but before the second
      // <H2>) into the left pane.
      do {
        left.appendChild(content.firstChild);
      } while (content.firstChild.tagName !== 'H1');

      var right = document.createElement('DIV');
      right.className = 'right';

      // Insert everything else into the right pane.
      do {
        right.appendChild(content.firstChild);
      } while (content.firstChild);

      content.appendChild(left);
      content.appendChild(right);
    }
  }
};

Slidedown.prototype = {

  to: function(target, cb) {
    this.target = target;

    whenReady(function() {
      if (typeof cb === "function") {
        cb();
      }
    });
  },

  destination: function() {
    var dest = typeof this.target === 'string' ? document.querySelector(this.target) : this.target;
    return dest;
  },

  append: function(element) {
    this.destination().appendChild(element);
  },

  fromElements: function(elements) {
    var slidedown = this;

    whenReady(function() {
      eachSlide(elements, function(slide, number) {
        var element = document.createElement('DIV');
        element.id = 'slide-' + number;
        element.className = 'slide';

        // .slideNo will only be shown on print view
        var addSlideNumberToSlide = "<div class='slideNo'><span>slide " + number + "</span></div>";

        var content = document.createElement('DIV');
        content.className = 'content';
        content.setAttribute('data-layout', slide.layout);

        // add class `responsiveIframe` for iframe
        // TODO: use cheerio/jquery
        var resultHTML = slide.html.replace(new RegExp("<iframe", "g"), '<iframe class="responsiveIframe"');

        content.innerHTML = resultHTML + addSlideNumberToSlide;
        element.appendChild(content);

        var layout = slideLayouts[slide.layout];
        if (layout && typeof layout.postprocess === 'function') {
          layout.postprocess(content);
        }
        if (number === 1) {
          addNavigationInstructions(element);
        }
        slidedown.append(element);
      });

      // Attach left/right keyboard shortcuts
      handleKey(39, nextSlide);
      handleKey(37, prevSlide);
      handleClick('x > 90%', nextSlide);
      handleClick('x < 10%', prevSlide);

      var slides = document.getElementsByClassName('slide');

      // more key feature:
      // using `home` key to go to first page
      handleKey(36, goToSlide(1));

      // using `end` key to go to last page
      handleKey(35, goToSlide(slides.length - 1));

      // using `t` to go to toc page;
      var tocElement = document.getElementById('toc');
      if(tocElement){
        handleKey(84, goToSlide(getElementSlideNo(tocElement)));
      }

      // using `h` key to go to root page
      handleKey(72, function() {
        location.assign(location.pathname);
      });

      // Hammer integration with feature detect
      if (typeof Hammer !== 'undefined') {
        (function(Hammer) {
          var hammer = Hammer(document, {
            drag_block_horizontal: true
          });
          hammer.on('swipeleft', nextSlide);
          hammer.on('swiperight', prevSlide);
        }(Hammer));
      }

      // change title by first h1 of document
      changeTitle();

      mermaid.init();
      setMermaidSvgViewBox();
      responsiveIframe();
      focusTargetSlide();
      MathJax.Hub.Typeset();
      createTOC();
      hideAllIframe();

      window.addEventListener('hashchange', function(){
        focusTargetSlide();
        // Correct for any rogue dragging that occurred.
        setTimeout(function() {
          window.scrollTo(0, window.scrollY);
        }, 0);
      });

      // for fix the width and height of iframe and mermaid
      ['orientationchange', 'resize'].forEach(function(event){
        window.addEventListener(event, function(){
          responsiveMermaid();
          responsiveIframe();
        });
      });
    });

    return slidedown;
  },

  fromHTML: function(html) {
    var elements = parseHTML(html);
    return this.fromElements(elements);
  },

  fromMarkdown: function(markdown) {
    marked.setOptions({
      renderer: new CustomRenderer(),
      gfm: true,
      breaks: true
    });

    var html = marked(markdown);
    return this.fromHTML(html);
  },

  fromXHR: function(title) {
    var slidedown = this,
      format = inferFormat(title);

    var request = new XMLHttpRequest();
    request.open('GET', title);

    request.addEventListener('load', function() {
      slidedown['from' + format](request.responseText);
    });

    request.send();

    return this;
  },

  parseQuery: function() {
    // remove any preceding url and split
    var querystring = document.location.search;
    querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');
    var params = {},
      pair, d = decodeURIComponent;
    // march and parse
    for (var i = querystring.length - 1; i >= 0; i--) {
      pair = querystring[i].split('=');
      params[d(pair[0])] = d(pair[1]);
    }
    return params;
  }
};

function whenReady(callback) {
  if (document.readyState === "complete") {
    setTimeout(callback, 0);
    return;
  }
  window.addEventListener('load', callback);
}

function inferFormat(title) {
  var extension = title.split('.').pop();

  switch (extension) {
    case 'htm':
    case 'html':
      return 'HTML';

    case 'md':
    case 'markdown':
    default:
      return 'Markdown';
  }
}

function parseHTML(html) {
  var wrapper = document.createElement('DIV');
  wrapper.innerHTML = html;
  return wrapper.children;
}

function eachSlide(doc, callback) {
  var parts = [],
    counter = 1;

  forEach(doc, function(element) {
    if (element.tagName === 'HR') {
      callback(createSlide(parts), counter++);
      parts = [];
      return;
    }

    parts.push(element);
  });

  if (parts.length > 0) {
    callback(createSlide(parts), counter++);
  }
}

function forEach(collection, callback) {
  return Array.prototype.forEach.call(collection, callback);
}

function createSlide(parts) {
  return {
    layout: getSlideLayout(parts),
    html: parts.map(function(part) {
      return part.outerHTML;
    }).join('')
  };
}

function getSlideLayout(parts) {
  var key = parts.map(function(part) {
    return part.tagName;
  }).join(',');

  for (var layout in slideLayouts) {
    if (slideLayouts[layout].pattern.test(key)) {
      return layout;
    }
  }

  return 'default';
}

function addNavigationInstructions(element) {
  var footer = document.createElement('FOOTER');
  element.appendChild(footer);

  var instructions = document.createElement('DIV');
  instructions.className = 'navigation-instructions';
  footer.appendChild(instructions);

  var label = document.createElement('P');
  label.textContent = 'Navigation options:';
  instructions.appendChild(label);

  var list = document.createElement('UL');
  instructions.appendChild(list);

  var options = [
    'Use left + right arrow keys',
    'Click on the left + right sides of the screen',
    'Use home/ end key to go to first/ last page',
    'Use h key to go to root page',
    'Use t key to go to Table of Content'
  ];

  forEach(options, function(option) {
    var listItem = document.createElement('LI');
    listItem.textContent = option;
    list.appendChild(listItem);
  });

}

function removeClass(element, className) {
  if (!element) {
    return;
  }
  element.classList.remove(className);
}

function addClass(element, className) {
  if (!element) {
    return;
  }
  element.classList.add(className);
}

function handleKey(keyCode, callback) {
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === keyCode) {
      callback();
    }
  });
}

function handleClick(conditions, callback) {
  conditions = parseConditions(conditions);

  document.addEventListener('click', function(e) {
    if (conditions(e)) {
      callback();
    }
  });
}

function parseConditions(conditions) {
  conditions = conditions.split(/\s+/);

  var property = conditions[0],
    operator = conditions[1],
    threshold = conditions[2];

  if (threshold.charAt(threshold.length - 1) === '%') {
    threshold = Number(threshold.substring(0, threshold.length - 1));
    threshold /= 100;
  } else {
    threshold = Number(threshold);
  }

  var comparisonProperty;
  switch (property) {
    case 'x':
      property = 'clientX';
      comparisonProperty = 'innerWidth';
      break;

    case 'y':
      property = 'clientY';
      comparisonProperty = 'innerHeight';
      break;

    default:
      throw "Unrecognized property: '" + property + '"';
  }

  switch (operator) {
    case '<':
      return function(e) {
        return e[property] < (window[comparisonProperty] * threshold);
      };

    case '>':
      return function(e) {
        return e[property] > (window[comparisonProperty] * threshold);
      };

    default:
      throw "Unrecognized operator: '" + operator + '"';
  }
}

function nextSlide() {
  var current = document.querySelector('.slide.current'),
    prev = current.previousElementSibling,
    next = current.nextElementSibling,
    following = next && next.nextElementSibling;

  if (next) {
    removeClass(prev, 'previous');
    removeClass(current, 'current');
    removeClass(next, 'next');

    addClass(current, 'previous');
    addClass(next, 'current');
    addClass(following, 'next');

    // Correct for any rogue dragging that occurred.
    setTimeout(function() {
      window.scrollTo(0, window.scrollY);
    }, 0);

    setSlideId(next.id);
  }
}

function prevSlide() {
  var current = document.querySelector('.slide.current'),
    prev = current.previousElementSibling,
    next = current.nextElementSibling,
    preceding = prev && prev.previousElementSibling;

  if (prev) {
    removeClass(next, 'next');
    removeClass(current, 'current');
    removeClass(prev, 'previous');

    addClass(current, 'next');
    addClass(prev, 'current');
    addClass(preceding, 'previous');

    setSlideId(prev.id);
  }
}

function setSlideId(id) {
  window.history.pushState({}, '', '#' + id);
}

function focusTargetSlide() {
  var current = document.querySelector('.slide.current'),
    previous = document.querySelector('.slide.previous'),
    next = document.querySelector('.slide.next');

  removeClass(current, 'current');
  removeClass(previous, 'previous');
  removeClass(next, 'next');
  var targetSlide = document.querySelector(window.location.hash || '.slide:first-child');

  addClass(targetSlide, 'current');
  addClass(targetSlide.previousElementSibling, 'previous');
  addClass(targetSlide.nextElementSibling, 'next');
}

function goToSlide(slideNo) {
  return function() {
    setSlideId('slide-' + slideNo);
    focusTargetSlide();
  };
}

function responsiveMermaid(){
  var svgs = document.querySelectorAll('.mermaid>svg');
  var width = window.innerWidth;

  forEach(svgs, function(svg){
    var viewBox = svg.viewBox.baseVal;
    var parentNode = svg.parentNode;
    switch (true) {
        case /gantt/i.test(parentNode.className):
          svg.setAttribute('width', Math.min(width * 0.8, viewBox.width)  + 'px');
          break;
        default:
          svg.setAttribute('width', Math.min(width, viewBox.width) * 0.8 + 'px');
        break;
    }
  });
}

function setMermaidSvgViewBox() {
  // set width, height, and viewBox for responsive view
  var svgs = document.querySelectorAll('.mermaid>svg');
  var width = window.innerWidth;

  if (!svgs.length) return;

  forEach(svgs, function(svg) {
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    var viewBox = svg.viewBox.baseVal;
    var parentNode = svg.parentNode;
    switch (true) {
        case /gantt/i.test(parentNode.className):
          // for gantt responsive
          // as mermaid gantt didn't genernate viewBox,
          // so set the dimension(viewBox) to 1024 and default height
          // then reset back the width of parent, height to auto and 100% respectively
          var height = svg.style.height.replace('px','');
          viewBox.width = 1024;
          viewBox.height = height;
          svg.setAttribute('width', width * 0.8 + 'px');
          svg.style.height = '100%';
          parentNode.style.width = "auto";
          break;
        default:
          var ratio = viewBox.height / viewBox.width;
          svg.setAttribute('width', Math.min(width, viewBox.width) * 0.8 + 'px');
          svg.setAttribute('height', '100%');
        break;
    }
  });
}

function responsiveIframe() {
  var iframes = document.getElementsByClassName('responsiveIframe');
  if (!iframes.length) return;
  forEach(iframes, function(iframe) {

    var newWidth = Math.min(window.innerWidth * 0.8, iframe.width);
    var currentHeight = iframe.height ? iframe.height : iframe.offsetHeight;
    var currentWidth = iframe.width ? iframe.width : iframe.offsetWidth;
    var ratio = currentHeight / currentWidth;
    iframe.style.width = Math.floor(newWidth) + "px";

    var keepHeightRegExp = new RegExp(window.keepHeightIframeLink ? window.keepHeightIframeLink.join('|') : 'cdn.knightlab.com');
    switch(true){
      case keepHeightRegExp.test(iframe.src):
        // empty for keep height
        break;
      default:
        iframe.style.height = Math.floor(newWidth * ratio) + "px";
    }
  });
}

function hideAllIframe() {
  var iframes = document.getElementsByClassName('responsiveIframe');
  forEach(iframes, function(iframe){
    // hide iframe when finish loading
    iframe.addEventListener('load', function(){
      iframe.style.display = "none";
    });
  });
}

function changeTitle() {
  var firstH1 = document.getElementsByTagName("h1")[0];
  var title = firstH1 ? firstH1.textContent : 'slidedown';
  document.title = title;
  return title;
}

function getElementSlideNo (element) {
  while (!(/slide/.test(element.className) || element===null)) {
      element = element.parentNode;
  }
  return parseInt(element.id.substr(6));
}

function createTOC(){
  var tocElement = document.getElementById('toc');
  if (!tocElement) return ;
  var headings = document.querySelectorAll("h1, h2");
  var tocMarkdownString = "";

  forEach(headings, function(heading){
    switch (heading.tagName) {
      case 'H1':
        tocMarkdownString += '- [' + heading.textContent + '](#slide-' + getElementSlideNo(heading) +')\n';
      break;
      case 'H2':
        tocMarkdownString += '\t+ [' + heading.textContent + '](#slide-' + getElementSlideNo(heading) +')\n';
      break;
      default:
    }
  });

  tocElement.innerHTML = marked(tocMarkdownString);
}


function CustomRenderer() {}

CustomRenderer.prototype = new marked.Renderer();

// CustomRenderer.prototype.link = function(href, title, text) {
//   return '<a href="' + href + '" target="_blank">' + text + '</a>';
// };

CustomRenderer.prototype.image = function(href, title, text) {
  return '<img src="' + href + '" alt="' + text + '"/><div class="caption">' + text + '</div>';
};

CustomRenderer.prototype.code = function(code, lang) {

  if (!lang) {
    return '<pre class="hljs"><code>' + code + '</code></pre>';
    // return marked.Renderer.prototype.code.call(this, code, lang);
  }
  switch (lang) {
    case 'mermaid':
      if (code.match(/^\s*sequenceDiagram/)) {
        return '<div class="mermaid sequenceDiagram">' + code + '</div>';
      } else if (code.match(/^\s*graph/)) {
        return '<div class="mermaid graph">' + code + '</div>';
      } else if (code.match(/^\s*gantt/)) {
        return '<div class="mermaid gantt">' + code + '</div>';
      }
    break;
    case 'plantuml':
      if(!navigator.onLine) return "<blockquote><p>Image of PlantUML <strong>cannot</strong> be loaded, image can only be loaded when connected to <strong>internet</strong></p></blockquote>";
      return '<img class="plantuml" alt="PlantUML Graph" src="' + plantuml.compress(code) + '"/>';
    default:
    var html = hljs.highlight(lang, code).value;
    return '<pre class="hljs ' + lang + '">' + html + '</pre>';
  }

};

function staticize(constructor, properties) {
  var staticized = {};

  forEach(properties, function(property) {
    staticized[property] = function() {
      var instance = new constructor();
      return instance[property].apply(instance, arguments);
    };
  });

  return staticized;
}

window.Slidedown = staticize(Slidedown, [
  'fromElements',
  'fromHTML',
  'fromMarkdown',
  'fromXHR',
  'parseQuery'
]);
