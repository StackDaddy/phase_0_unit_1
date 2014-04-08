#### Include an inline screenshot of your codeschool's points from the profile page:

<img src="https://i.imgur.com/BabTbpbs.jpg"/> 

##QUIZZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
   If look at the very top of your computer and find the button with the three lines stacked on top of eachother, click on that, and then go to tools, and then developer tools.  In order to do realtime editing of HTML and CSS have open the elements tab.  When highlighting a specific elemtent, the corresponding CSS will appear.  
  * Javascript Debugging
    The console tab supports Javascript debugging.  It allows you to run tests and the tool wiill break down where the errros are occuring.  
  * Performance Optimization
   The Network tab supports this.  It shows you how much time it takes for the html, css, and javascript tabs to load.  You can also use page speed which will run several uatomated tests.  

* What's the quick key for your OS to spawn the Dev Tools inspector?
 option, command, I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  #0b0f11
  * Tweak the background color to white.
  
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  
<img src="https://i.imgur.com/VSdacuos.jpg" />

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

My best guess is because no color attribute was assigned to it.  
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
  The picture of Times Square.  316KB.  
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  you find this image by going to "Network and then sorting by size.  http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
The lowest hanging fruit would be to inline some of the CSS.  