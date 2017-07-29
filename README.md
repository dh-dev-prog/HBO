INTRO

By making a copy of the HBO front-page, I wanted - to learn more about media queries and - to create a webpage of an actual responsive website. I tried not to look at the original code except when I didn't know or couldn't understand a technique.

AFTER - notes, impressions, mistakes, lessons ... :

First, trying to modify the CSS using javascript can make the whole thing difficult and it is not the purpose of javascript (using style.display, find a breakpoint, etc.). Especially with a responsive website and media queries. Triggering css classes like 'class—open' is way smoother and accurate.
Styles should stay in css.
Secondly, even if I tried to create modules for each of my items (using BEM), at 768px the project started to become a headache. It was due to a lack of modularity on some elements' properties inside a module (font-size, color, position, padding of wrappers, etc.). Which led me to many small changes and page refresh.
Finally, planning the whole thing in advance, see how modules change when jumping from one breakpoint to another, is probably the most important lesson, especially with a “dynamic” website where components literally change place at each breakpoint.

I never used the “position” property to create a dynamic design (actually almost never as I always felt the page was going to “break”) and it is a pretty powerful tool.
But like the module, it has to be planned at the beginning of the project.
When we reach a breakpoint, if the position of an element is supposed to change, the element will not be modified in the HTML source code, but relatively to its closest relative or absolute parent. Therefore thinking of all positions of an element ahead, can help determining its relative parent and its place in the source code.
Same things for floated elements. Since some items were changing from a floating position to an absolute position and vice-versa, or to a block display, I sometimes had to remove the 'clearfix' class and put it back in the HTML source code.
Instead I put the clearfix directly in the css of each element that needed it, allowing me to remove it at each media queries if necessary. I'm not sure that creating a 'clearfix' in the css file (instead of just putting a class in the HTML), is a good thing but it worked.
Removing a 'clearfix' class (or 'group' class) with JS didn't work because using breakpoint with javascript (window.innerWidth > '768' => remove class) works only at runtime but is not responsive when resizing the window. And a resize event triggers too much.

On a final note, I found it nice how they positioned two text elements side by side, which prevents the line of the right-block breaks to float under the left-block. To do so, we put min-width = ..px on the left-block which is floated and padding-left = 'min-width left-block', on the right-block.
For the design it was interesting to see all the small changes they brought at each breakpoint: changing margin between elements, font-size, position, border-color, wrapper size, etc.
And I realized that transition is a great tool to add some design details ( like changing a border color of an input smoothly, or the border-bottom of the navigation link using ::after), and can really make the whole website feel nicer to use.  
