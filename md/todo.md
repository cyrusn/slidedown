# Todos
-----
# slidedown.js (core)

Node.js repo to build slidedown.build.js and themes with `browserify` and other build tools
possibly put on npm and/or bower (not needed if we stick on [`deft`](https://github.com/dtao/deft))
instruction for build and dist files

use gulp to browserify and minify.

``` sh
npm install
gulp watch
```

-----
# slidedown (gh-page)

- frontend page (index.html + mds) with [`deft`](https://github.com/dtao/deft) to pull dependencies
- index.md
  index.md should replace README.markdown as the default file to load in index.html
  README.md in `gh-pages` are deployment instructions (with little duplication in index.md)
- advanced.md
  demos `?src=advanced.md`, slide as a service `?src=<url>`, CSS customization, MathJax integration
- better documentations to show integration and customization points

-----
# MathJax integration
## [Done, please review]

We have to wait for `marked`'s returned HTML before invoking MathJax to process the math markup

[Modifying Math on the Page — MathJax 2.5 documentation](http://docs.mathjax.org/en/latest/typeset.html)
[Synchronizing your code with MathJax — MathJax 2.5 documentation](http://docs.mathjax.org/en/latest/synchronize.html)

- enabled if the query `?mathjax` exist
- example `http://localhost:8080?src=path/to/file.md&mathjax`
- ref: `Slidedown.addMathJax()` in `slidedown.js`

-----
# CSS

- slidedown.css (or slidedown.layout.css?) only controls the layout and transition
- factor out presentation CSS
    + color will be controlled by theme
    + `themes/slidedown.dark.css` and `themes/slidedown.light.css` are available
    + allow user customization
- add `@media print` and `@media screen`
    + plan to seperate file?
- responsive feature
    + still ugly on landscape mode on mobile
    + ok on potrait mode

-----
# set config of markedjs in slidedown.js

- marked.js can set line break as GFM, should enable it by default

```js
// slidedown.js line: 118
marked.setOptions({
  renderer: new CustomRenderer(),
  gfm: true,
  breaks: true
});
```

> it's actually better to allow user to pass in config object and extends on our default config (also for MathJax)

-----
# open external link on `_blank`

it probably involves using cheerio to add `target` attribute to `_blank` after the HTML is ready
but the presenter can use control click during the presentation to open in new tab, so this is of lower priority

-----
# add option to list bullet point one by one
- use cheerio.js
- add `.hidden` `.current-list` `[data-list]=number`
- lower priority

-----
# change the title by using the first h1 tag.
## [Done, please review]
- done
- ref. `changeTitle()` in `slidedown.js`

-----
# advance keycode
## [Done, please review]
- key `1 - 9` will go to slide#, key `0` will go to last slide.
- `esc` go to root

### kylee
- not very useful, changing # in url can goto a specific slide
- `home`/`end` goto first/last slide is better
- `esc` is used to exit full screen mode, don't override it

### cyrusn
- depreciated key `1-9`
- `home`/`end` goto first/last slide instead
- use `h` key to go to root page instead
-----
# End
