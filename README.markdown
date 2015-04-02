# Slidedown
<<<<<<< HEAD
- [Download](http://github.com/cyrusn/slidedown)
- Forked From [Danial Tao](http://danieltao.com/slidedown)
=======
## Markdown [slide decks](http://danieltao.com/slidedown)
>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee

***

# The basic idea
<<<<<<< HEAD
=======

>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee
Write your presentations in a text editor.

- No fancy WYSIWIG editor
- No hand-written HTML
- Just text (Markdown)

Separate slides with `***`.

***
<<<<<<< HEAD
# Markdown Syntax

## Learn `markdown syntax`
- [Basic](https://help.github.com/articles/markdown-basics/)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
=======

# For example

This is the source for the previous slide:

```markdown
***

# The basic idea

Write your presentations in a text editor.

- No fancy WYSIWIG editor
- No hand-written HTML
- Just text (Markdown)

Separate slides with `***`.
>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee

***

# How it works

Slidedown parses Markdown, then splits up the HTML into slides by splitting at
every `<HR>` tag.

***

# How it works

Every slide has a *layout* which is inferred by the elements making up that
slide.

***

<<<<<<< HEAD
# For example
## this slide has an `<h1>` and an `<h2>`
=======
# For example, this slide has an `<h1>` and an `<h2>`
## So Slidedown infers that the layout should be like this
>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee

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
<<<<<<< HEAD
Specify Markdown file with `src` in URL:

```bash
# defaults to 'README.markdown'
http://localhost:8000/

# to any files you created
http://localhost:8000/?src=path/to/your_markdown.md
```

***

# How to use it - 2
=======
>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee

```javascript
// Fetch the source Markdown using an AJAX request
Slidedown.fromXHR('path/to/slides.markdown');

// Or if you have the Markdown in a string already
Slidedown.fromMarkdown('markdown source');

// Or if you actually have HTML rendered from Markdown already
Slidedown.fromHTML('html source');
```

***
<<<<<<< HEAD
# How to use it - 3
=======

# How to use it

>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee
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
<<<<<<< HEAD
=======
# Usage

Specify Markdown file with `src` in URL:

```bash
http://localhost:8000/   # defaults to 'README.markdown'
# http://localhost:8000/?src=path/to/file.md
http://localhost:8000/?src=alternate.md
```
>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee

***

# The End
<<<<<<< HEAD
=======

>>>>>>> 1ea527b7f2a6a02f26196a5e506c7c974a9005ee
