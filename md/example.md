# Example
## [See Orginal Markdown File](md/example.md)

-----
# Table of Content

<!-- Add table of Content -->
<div id='toc'></div>

-----
# Tutorial

Use the links below to learn several syntax, the most basic syntax you have to learn is `markdown`, please reach the first two link for detail.
- Markdown Syntax
    + [Markdown Basic][basic]
    + [GitHub Flavored Markdown][gfm]
- MathJax for typing equation
    + [MathJax and TeX Syntax][mathjax]
    + [TeX Syntax for Chemistry][chem]
- TimelineJS for beautifully crafted timlines
    - [TimelineJS][timelinejs]
- Mermaid for drawing graph by text
    + [Mermaid Flowchart][flowchart]
    + [Mermaid Sequence][sequence]
    + [Mermaid Gantt][gantt]
- [PlantUML][plantuml] for drawing graph by text
    + [PlantUML Sequence][plantuml-sequence]
    + [PlantUML Use Case][plantuml-usecase]
    + [PlantUML Classes][plantuml-classes]
    + [PlantUML Activity][plantuml-activity]
    + [PlantUML Component][plantuml-component]
    + [PlantUML State][plantuml-state]
    + [PlantUML Object][plantuml-object]
    + [PlantUML Salt][plantuml-salt]
    + [PlantUML Sitemap][plantuml-sitemap]

-----
# Headings 1
## Headings 2
### Headings 3

    heading 1 - 2 will be aligned to aligned center and parsed to Table of Content
    heading 4 - 6 will be aligned to left

#### Headings 4
##### Headings 5
###### Headings 6

-----
# Styling text

- *Italic*
- **Bold**
- ***Bold and Italic***
- ~~Delete~~

### markdown syntax
``` md
- *Italic*
- **Bold**
- ***Bold and Italic***
- ~~Delete~~
```

-----
# Blockquotes
> Empty your mind, be *formless*. *Shapeless*, like **water**. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can *flow* or it can *crash*. ***Be water, my friend***.”

### markdown syntax
``` md
> Empty your mind, be *formless*. *Shapeless*, like **water**. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can *flow* or it can *crash*. ***Be water, my friend***.”
```

-----
# Syntax Highlight

There are **multiple syntax highlighting themes** to choose from. Here's one of them:

``` javascript
// All the code you will ever need
var hw = "Hello World!"
alert(hw);
```

-----
# List

- You just **type naturally**, and the result looks good.
- You **don't have to worry** about clicking formatting buttons.
  - Or fiddling with indentation. (Two spaces is all you need.)

To see what else you can do with [Markdown][basic]
(including **tables**, **images**, **numbered lists**, and more)

-----
# Image
you can also make link to your image
``` md

[![caption](link/to/image.jpg)](link/to/page.html)

```
![Text here will work like caption of image][image1]



-----
# Table

|Name      | Lunch order        | Owes       |
|:-------  | :----------------: | ---------: |
|Joan      | saag paneer        | $11        |
|Sally     | vindaloo           | $14        |
|Erin      | lamb madras        | $5         |

-----
# [Octicons][octicons]

There are many icons you can use, here are some example.
For Details, please go to [octicons page][octicons]

| Icon                                            | Code                                              |
| :---:                                           | :---:                                             |
| <span class="octicon octicon-heart"></span>     | `<span class="octicon octicon-heart"></span>`     |
| <span class="octicon octicon-hourglass"></span> | `<span class="octicon octicon-hourglass"></span>` |
| <span class="octicon octicon-lock"></span>      | `<span class="octicon octicon-lock"></span>`      |
| <span class="octicon octicon-gear"></span>      | `<span class="octicon octicon-gear"></span>`      |
| <span class="octicon octicon-person"></span>    | `<span class="octicon octicon-person"></span>`    |
| <span class="octicon octicon-tag"></span>       | `<span class="octicon octicon-tag"></span>`       |
| <span class="octicon octicon-squirrel"></span>  | `<span class="octicon octicon-squirrel"></span>`  |

-----
# Column 1

1. apple
2. orange
3. pear


# Column 2
- foo
- bar

-----
# GFM markdown line break

Lorem *ipsum* dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim **veniam**, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in ***reprehenderit*** in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint ~~occaecat~~ cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.

-----
# YouTube


<div class="screen-only"><iframe width="560" height="315" src="https://www.youtube.com/embed/4O9o4CKTGzQ" frameborder="0" allowfullscreen></iframe></div>

<div class="print-only">www.youtube.com/embed/4O9o4CKTGzQ</div>

-----
# [TimelineJS][timelinejs]

<div class="screen-only"><iframe src='http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650' width='960' height='650' frameborder='0'></iframe></div>

-----

# GoogleMap

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1844.1148177117416!2d114.20711185515593!3d22.420381136700325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404089ce8ada749%3A0x5bd1c53294d0f7ce!2sThe+Chinese+University+of+Hong+Kong!5e0!3m2!1sen!2s!4v1429842328715" width="600" height="450" frameborder="0" style="border:0"></iframe>


-----
# [MathJax][mathjax]

Equaton are type inside `$ ... $` for inline, or `$$ ... $$` for paragraph.

### Example

>My math is so rusty that I barely remember the _quadratic equation_:

>When $$$a \ne 0$$$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

```tex
% example of math equation
ax^2 + bx + c = 0
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
```

-----
# [Chemistry Equation][chem]

Chemistry Equation can work like math equation, inline sytle like $\ce{C6H5}$, or paragraph style like below:
$$
\ce{C6H5-CHO}
\ce{$A$ ->[\ce{+H2O}] $B$}
\ce{SO4^2- + Ba^2+ -> BaSO4 v}
$$



``` tex
% example code of chemistry equation
\ce{C6H5-CHO}
\ce{$A$ ->[\ce{+H2O}] $B$}
\ce{SO4^2- + Ba^2+ -> BaSO4 v}
```

-----
# Mermaid
## Flowchart, Sequence Diagram, Gantt

Include all graph syntax with code language `mermaid`:

<pre class="hljs md">
``` mermaid
graph LR;
    A[Hard edge] -->|Link text| B((Round edge))
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->two
```
</pre>


-----
# Flowchart

``` mermaid
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A subgraph
        od>Odd shape]-- Two line<br>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
```
<div class="caption">FlowChart</div>

[Learn][flowchart] and [try][editor] Mermaid.JS for flowchart.

-----
# Squence

``` mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts<br/>prevail...
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
<div class="caption">Sequence</div>

[Learn][sequence] and [try][editor] Mermaid.JS for sequence diagram.

-----
# Gantt

``` mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      : 20h
    Add another diagram to demo page    : 48h
```
<div class="caption">Gantt Example</div>


[Learn][gantt] and [try][editor] Mermaid.JS for gantt graph.

----
# PlantUML

We also support [PlantUML][plantuml], but can only be parsed when you connected to internet.
for more about PlantUML, please go to PlantUML [sitemap][plantuml-sitemap].

``` plantuml
@startuml
start
:ClickServlet.handleRequest();
:new page;
if (Page.onSecurityCheck) then (true)
  :Page.onInit();
  if (isForward?) then (no)
    :Process controls;
    if (continue processing?) then (no)
      stop
    endif

    if (isPost?) then (yes)
      :Page.onPost();
    else (no)
      :Page.onGet();
    endif
    :Page.onRender();
  endif
else (false)
endif

if (do redirect?) then (yes)
  :redirect process;
else
  if (do forward?) then (yes)
    :Forward request;
  else (no)
    :Render page template;
  endif
endif

stop
@enduml
```
<!-- another way to add caption of image -->

<div class="caption">Activity</div>

``` plantuml
@startuml
skinparam handwritten true
left to right direction
skinparam packageStyle rect
actor customer
actor clerk
rectangle checkout {
  customer -- (checkout)
  (checkout) .> (payment) : include
  (help) .> (checkout) : extends
  (checkout) -- clerk
}
@enduml

```
<div class="caption">Use Case</div>

``` plantuml
@startsalt
{+
{* File | Edit | Source | Refactor
 Refactor | New | Open File | - | Close | Close All }
{/ General | Fullscreen | Behavior | Saving }
{
    { Open image in: | ^Smart Mode^ }
    [X] Smooth images when zoomed
    [X] Confirm image deletion
    [ ] Show hidden images
}
[Close]
}
@endsalt

```
<div class="caption">Salt</div>

-----
# [GraphViz][graphviz]

### PlantUML can also render GraphViz Code

``` plantuml
digraph finite_state_machine {
    rankdir=LR;
    size="8,5"
    node [shape = doublecircle]; LR_0 LR_3 LR_4 LR_8;
    node [shape = circle];
    LR_0 -> LR_2 [ label = "SS(B)" ];
    LR_0 -> LR_1 [ label = "SS(S)" ];
    LR_1 -> LR_3 [ label = "S($end)" ];
    LR_2 -> LR_6 [ label = "SS(b)" ];
    LR_2 -> LR_5 [ label = "SS(a)" ];
    LR_2 -> LR_4 [ label = "S(A)" ];
    LR_5 -> LR_7 [ label = "S(b)" ];
    LR_5 -> LR_5 [ label = "S(a)" ];
    LR_6 -> LR_6 [ label = "S(b)" ];
    LR_6 -> LR_5 [ label = "S(a)" ];
    LR_7 -> LR_8 [ label = "S(b)" ];
    LR_7 -> LR_5 [ label = "S(a)" ];
    LR_8 -> LR_6 [ label = "S(b)" ];
    LR_8 -> LR_5 [ label = "S(a)" ];
}
```
<div class="caption">Dot Layout</div>


```plantuml
graph G {
layout=neato
run -- intr;
intr -- runbl;
runbl -- run;
run -- kernel;
kernel -- zombie;
kernel -- sleep;
kernel -- runmem;
sleep -- swap;
swap -- runswap;
runswap -- new;
runswap -- runmem;
new -- runmem;
sleep -- runmem;
}

```
<div class="caption">Neato Layout</div>



----
# Google Drawing

### You can also use Google Drawing and public it to here.
<iframe width="420" height="315" src="https://www.youtube.com/embed/5Vr7inMMnrs" frameborder="0" allowfullscreen></iframe>

-----
# Furthermore

- Print this presenation
- View it on mobile
- Show The Table of Content
    + `<div id='toc'></div>`
- Caption
    + `<div class="caption">Caption Text</div>`
- Print Only
    + `<div class='print-only'> your code </div>`
- Screen Only
    + `<div class='screen-only'> your code </div>`


----
# End

[basic]: https://help.github.com/articles/markdown-basics/
[gfm]: https://help.github.com/articles/github-flavored-markdown/
[timelinejs]: http://timeline.knightlab.com/
[mathjax]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
[chem]: ftp://ftp.comp.hkbu.edu.hk/pub/TeX/CTAN/macros/latex/contrib/mhchem/mhchem.pdf
[octicons]: https://octicons.github.com/
[flowchart]: http://knsv.github.io/mermaid/flowchart.html
[sequence]: http://knsv.github.io/mermaid/sequenceDiagram.html
[gantt]: http://knsv.github.io/mermaid/gantt.html
[editor]: http://knsv.github.io/mermaid/live_editor/
[image1]: http://2.bp.blogspot.com/-dxJbW0CG8Zs/TmkoMA5-cPI/AAAAAAAAAqw/fQpsz9GpFdo/s1600/voyage-dans-la-lune-1902-02-g.jpg
[plantuml]: http://plantuml.sourceforge.net/index.html
[plantuml-sequence]:http://plantuml.sourceforge.net/sequence.html
[plantuml-usecase]:http://plantuml.sourceforge.net/usecase.html
[plantuml-classes]:http://plantuml.sourceforge.net/classes.html
[plantuml-activity]:http://plantuml.sourceforge.net/activity2.html
[plantuml-component]:http://plantuml.sourceforge.net/component.html
[plantuml-state]:http://plantuml.sourceforge.net/state.html
[plantuml-object]:http://plantuml.sourceforge.net/objects.html
[plantuml-salt]:http://plantuml.sourceforge.net/salt.html
[plantuml-sitemap]: http://plantuml.sourceforge.net/sitemap.html
[graphviz]: http://www.graphviz.org/
