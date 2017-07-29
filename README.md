Intro:
By making a copy of the HBO front-page, I wanted - to learn more about media queries and - to create a webpage of an actual responsive website.

After - notes/impressions:

First, trying to modify the CSS using javascript can make the whole thing difficult and it is not the purpose of javascript (using style.display, find a breakpoint, etc.), especially when developing a responsive website with media queries. Triggering css classes like 'class—open' is way smoother and accurate. Styles should stay in css.
Secondly, even if I tried to create modules for each of my items (using BEM), at 768px the project started to become a headache due to a lack of modularity on some components properties of a module (font-size, color, position, padding of wrappers, etc.). Which led me to many small changes and page refresh.
Finally, planning the whole thing in advance, see how modules change when jumping from one breakpoint to another, is probably the most important lesson, especially with a “dynamic” website where components literally change place at each breakpoint.
I never used the “position” property like this (actually almost never as I always felt the page was going to “break”) and it is actually a very nice way to create this kind of design.
But it is a good thing to plan the positions of an item in advance, at the beginning of the project.
Also, planning the relative parents, because when we reach a breakpoint and its position changes suddenly, the element will not be modified in the HTML source code, but relatively to its closest relative or absolute parent.

Planning things at first for floats is similar.
Since some items were changing from a floating position to an absolute position and vice-versa, or to a block display, I sometimes had to remove the 'clearfix' and put it back. So I created it in the css file for each class that needed it, and removed if necessary with a media query. I'm not sure that creating 'clearfix' in the css file (instead of just putting a class in the HTML), is a good thing but it worked. Removing a 'clearfix' class (or group) with JS didn't work because using breakpoint with javascript (window.innerWidth > '768' => remove class) work only at runtime but is not responsive when resizing the window. And resize event triggers too much.

Also, I liked the technique they used to position two text elements side by side, so when the line of the right-block breaks it doesn't float under the left-block. We put min-width = ..px on the left-block which is floated and padding-left = 'min-width left-block', on the right-block.
For the design it was interesting to see all the small changes they brought at each breakpoint: changing margin between elements, font-size, position, border-color, wrapper size, etc.
Finally, I realized that transition is a great tool to add some design details ( like changing a border color of an input smoothly, or the border-bottom of the navigation link using ::after), and can really make the whole website feel nicer to use.  
