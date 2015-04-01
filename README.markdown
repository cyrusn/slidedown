# Slidedown
- [Download](http://github.com/cyrusn/slidedown)
- Forked From [Danial Tao](http://danieltao.com/slidedown)

***

# The basic idea
Write your presentations in a text editor.

- No fancy WYSIWIG editor
- No hand-written HTML
- Just text (Markdown)

Separate slides with `***`.

***
# Markdown Syntax

## Learn `markdown syntax`
- [Basic](https://help.github.com/articles/markdown-basics/)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)

***

# How it works

Slidedown parses Markdown, then splits up the HTML into slides by splitting at
every `<HR>` tag.

***

# How it works

Every slide has a *layout* which is inferred by the elements making up that
slide.

***

# For example
## this slide has an `<h1>` and an `<h2>`

***

# Pros

- easy
- saves time
- looks great

# Cons

- none?

***

# Navigation

You can navigate left/right through the slides using the keyboard.

You can also click on either side of the screen, or use swipe gestures
on mobile devices.

***

# How to use it
Specify Markdown file with `src` in URL:

```bash
# defaults to 'README.markdown'
http://localhost:8000/

# to any files you created
http://localhost:8000/?src=path/to/your_markdown.md
```

***

# How to use it - 2

```javascript
// Fetch the source Markdown using an AJAX request
Slidedown.fromXHR('path/to/slides.markdown');

// Or if you have the Markdown in a string already
Slidedown.fromMarkdown('markdown source');

// Or if you actually have HTML rendered from Markdown already
Slidedown.fromHTML('html source');
```

***
# How to use it - 3
By default, slides will be dumped directly into the document's `<body>` element.
You can change this:

```javascript
var slides = document.getElementById('slides');
Slidedown.fromMarkdown('markdown source').to(slides);
```

Or even just:

```javascript
Slidedown.fromMarkdown('markdown source').to('#slides');
```

***

# The End
