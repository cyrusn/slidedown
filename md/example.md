# Example
## [See Orginal Markdown File](/md/example.md)

-----
# Simple
...is really just ordinary text, *plain and simple*. How is it good for you?

-----

# Headings
use `#` for heading

### example
`### example` is heading 3 like above

-----
# Styling text
- *Italic*
- **Bold**
- ***Bold and Italic***
- ~~Delete~~

-----

# Blockquotes
> Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.”

-----
# List

- You just **type naturally**, and the result looks good.
- You **don't have to worry** about clicking formatting buttons.
  - Or fiddling with indentation. (Two spaces is all you need.)

To see what else you can do with Markdown
(including **tables**, **images**, **numbered lists**, and more)

take a look at the [Cheatsheet][1]. And then try it out by typing in this box!

[1]: https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet

-----
# Order List
1. apple
2. orange
3. pear

# Unorder List
- foo
- bar

-----
# Table

Name | Lunch order | Spicy      | Owes
------- | ---------------- | ---------- | ---------:
Joan  | saag paneer | medium | $11
Sally  | vindaloo        | mild       | $14
Erin   | lamb madras | HOT      | $5

-----
# GFM markdown line break

Lorem *ipsum* dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim **veniam**, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in ***reprehenderit*** in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint ~~occaecat~~ cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.

-----
# Image

![image](http://2.bp.blogspot.com/-dxJbW0CG8Zs/TmkoMA5-cPI/AAAAAAAAAqw/fQpsz9GpFdo/s1600/voyage-dans-la-lune-1902-02-g.jpg)

-----
# YouTube
<iframe width="560" height="315" src="https://www.youtube.com/embed/4O9o4CKTGzQ" frameborder="0" allowfullscreen></iframe>


<div class="hidden">
www.youtube.com/embed/4O9o4CKTGzQ
</div>

-----
# Using [TimelineJS][timelinejs]

<iframe src='http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650' width='960' height='650' frameborder='0'></iframe>

[timelinejs]:http://timeline.knightlab.com/

-----

# GoogleMap
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.2846272490374!2d114.134638!3d22.380625000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8879a29465f%3A0x3c08b62c00fb5048!2sS.K.H.+Li+Ping+Secondary+School!5e0!3m2!1sen!2s!4v1429584782923" width="600" height="450" frameborder="0" style="border:0"></iframe>

-----
# Syntax Highlight

There are **multiple syntax highlighting themes** to choose from. Here's one of them:

``` javascript
// All the code you will ever need
var hw = "Hello World!"
alert(hw);
```

-----

# [MathJax][1]
My math is so rusty that I barely remember the _quadratic equation_:

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

[1]:http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference

-----

# [Graph][flowchart]

```
graph LR;
    A[Hard edge] -->|Link text| B((Round edge))
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->two
```

[flowchart]:http://knsv.github.io/mermaid/flowchart.html

-----

# [Squence][sequence]

```
sequenceDiagram
    participant Alice
    participant Bob

    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    John-xBob: How about you?
    Bob-->John: Jolly good!
```
[sequence]:http://knsv.github.io/mermaid/sequenceDiagram.html

-----

# [Gantt][gantt]
```
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram functionality to mermaid
section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d
section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser and jison          :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d
```

[gantt]:http://knsv.github.io/mermaid/gantt.html

----

# gantt 2

```
gantt
    title A Gantt Diagram

    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    anther task      : 24d
```


----
# End

