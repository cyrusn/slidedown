<img src="image/slidedown_xl.png" style="width:50%;border:none; background-color:transparent;">

***
# SlideDown
## README

***
<!-- Add table of Content -->
# Table of Content
<div id="toc"></div>

***
# Support Browser
- Chrome (OSX, Window, Linux)
- Safari (OSX)

***
# Navigation Options

- Use `left` + `right` arrow keys
- Click on the `left` + `right` sides of the screen
- Use `home`/ `end` key to go to first/ last page
- Use `h` key to go to root page
- Use `t` key to go to Table of Content

***
# Markdown Syntax

## Learn `markdown syntax`
- [Basic](https://help.github.com/articles/markdown-basics/)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)

***

# How to use it
Specify Markdown file with `src` in URL:

```bash
# defaults to 'index.md'
http://localhost:8000/

# to any files you created
http://localhost:8000/?src=path/to/file.md

# or even any files on internet
http://localhost:8000/?src=http://site.com/path/to/file.md
```
***
# How to use it - 2
## Use Dropbox share link

if you got a share link of a markdown file like below
``` bash
https://www.dropbox.com/s/wqudvpda2pd2ybt/readme.md?dl=0
```

copy the string ***after*** `.com/` and ***before*** `?dl=0` and paste after `?db=`
``` bash
http://localhost:8000/?db=s/wqudvpda2pd2ybt/readme.md
```

***
# How to use it - 3
### For Advance User

``` html
<!-- Or if you have the Markdown in a string already -->
<script type="text/javascript">
  Slidedown.fromMarkdown('markdown source');
</script>

<!-- Or if you actually have HTML rendered from Markdown already -->
<script type="text/javascript">
  Slidedown.fromHTML('html source');
</script>
```
***
# How to use it - 4
### For Advance User
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
# Example

## [Click me to example](/?src=md/example.md)

***
# Installation Guide

1. markdown editor
  + e.g. [Haroopad][haroopad]
2. ftp tools
  + e.g. [FileZilla][FileZilla]
3. write your presentation
4. upload to your host
5. (option) add link of your presentation to `index.md`

[haroopad]: http://pad.haroopress.com/
[FileZilla]: https://filezilla-project.org/
[StackEdit]: https://stackedit.io/editor

***
# Contributors
- Forked From [Danial Tao](http://danieltao.com/slidedown)
- [leesei](https://github.com/leesei/)
