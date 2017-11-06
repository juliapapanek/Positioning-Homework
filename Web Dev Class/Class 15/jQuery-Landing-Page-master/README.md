# jQuery Landing Page

- For this project we will be using the attached front end to enhance it with jQuery.
- Step 1: Add the class "affix" to the nav element when the scroll distance reaches past 50 pixels.
.addClass()
.scrollTop()
var scrollDistance = $(window).scrollTop();
if the scroll distance is greater than 50 then grab the navigation and add the class of affix, else grab the navigation and remove the class of affix

- Step 2: When the navbar links are clicked, animate a page scroll down to that anchor.
Reference lab (smooth scroll) where we scrolled to the different sections
Target href in anchor tags with .attr()

- Step 3: Use Bootstrap scrollspy to change the navbar links on scroll.
Link in slack channel - via javascript section on link (position relative has already been done for you)
go into HTML and figure out how you can target the navigation

- Step 4: Implement Font Awesome icons where applicable.
http://fontawesome.io/icons/
cdnjs has the font awesome cdn for you if you search on their website. the link goes above your own css link

- Step 5: Use [Animate.css](https://github.com/daneden/animate.css) and [WOW JS](https://github.com/matthieua/WOW) to fade in elements of your choice on page scroll.
encouraged to use wow js
it wont work if you dont add the active (new WOW.init etc) to your html
