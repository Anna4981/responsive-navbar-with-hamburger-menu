Responsive Navbar with Hamburger Menu

Veda Technology Web Development Internship · Level 1 · Task 21 (Day 21 of 45)

A responsive navigation bar that stays horizontal on desktop and collapses into a hamburger menu with a slide-in panel on small screens.

Objective

Practice responsive design, media queries, and toggle interactions.

Tools Used
HTML5
CSS3
JavaScript
Features
Horizontal navbar on desktop
Hamburger icon on screens 768px wide and below
Slide-in menu from the right with a smooth transition
Hamburger icon animates into an X when the menu is open
Dark overlay behind the menu on mobile
Menu closes when you click a link, click the overlay, or press Esc
Menu resets automatically when the window is resized back to desktop
Basic accessibility: aria-label, aria-expanded and aria-controls on the toggle button
Project Structure
responsive-navbar/
├── index.html    # Page structure and navbar markup
├── style.css     # Styling, media query and transitions
├── script.js     # Menu toggle logic
└── README.md     # Project documentation
How to Run
Download or clone the project folder.
Keep index.html, style.css and script.js in the same folder.
Open index.html in any browser (or use the Live Server extension in VS Code).
Resize the browser window below 768px to see the hamburger menu.
How It Works

1. Media query breakpoint CSS is written desktop-first. Inside @media (max-width: 768px), the hamburger button is shown and the menu list is turned into a fixed side panel pushed off-screen with transform: translateX(100%).

2. Toggling a class JavaScript adds or removes the .open class on the menu (and .active on the hamburger, .show on the overlay). The CSS decides how each state looks.

3. CSS transitions transition: transform 0.35s ease on the menu makes it slide in and out smoothly. The hamburger bars and overlay use transitions too.

Interview Questions

How do media queries change layout at different widths? A media query applies a block of CSS only when a condition is met, such as a maximum screen width. Below the breakpoint, the navbar styles switch from a horizontal row to a hidden side panel with a visible hamburger button.

How would you animate a menu opening? Position the menu off-screen with transform: translateX(100%), add a transition on transform, then toggle a class that sets transform: translateX(0). The browser animates between the two states.

Why toggle a class instead of inline styles? It keeps styling in the CSS and behaviour in the JavaScript. It is easier to maintain, easier to override, works with transitions, and avoids messy inline style strings in the script.

Customising

Colours, navbar height and the logo can be changed from the :root variables at the top of style.css and the logo text in index.html.

Author

Anna Makgabo Thantsha Diploma in Computer Science, Tshwane University of Technology# responsive-navbar-with-hamburger-menu
