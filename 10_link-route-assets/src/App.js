/*
 * Different nav options:
 * -> navigation bar::
 * -> navBar, sideBAr, burger,
 * -> Drop down nav menu
 * -> mega menu:: hide nehind nav menu
 * -> Footer menu
 * -> Horizonataal nav bar with dropdown menu
 * -> vertical menu bar
 */

/**
 *
 * Like Traditional web, react nav does not work
 * since only one page is there, index.html
 * so not visiting diff pages like in hyper link
 * and content(entire app) is loaded in the div#root update based on the route
 * and this is controlled by react updated by virtual DOM.
 * It's like having (home, about, career button in an elevator), and clicking a button
 * will move the correspoding button content(.js) inside the (React App) controlled place
 */

/**
 * In React, the entire app is loaded inside a single div,
 * you're not actually visiting different pages,
 * and Different views are rendered when React makes changes to the Virtual DOM,
 * with React updating the real DOM accordingly.
 */

/* How Does a Single-Page App Work?
When the user navigates to the web application in the browser, 
the Web Server will return the necessary resources to run the application. 
There are two approaches to serving code and resources in Single Page Applications.

When the browser requests the application, return and load all necessary HTML, CSS and JavaScript immediately. 
This is known as bundling. 

When the browser requests the application, return only the minimum HTML, CSS and JavaScript needed to load the application.
 Additional resources are downloaded as required by the application, 
 for example, when a user navigates to a specific section of the application. 
 This is known as lazy loading or code splitting. 

Both approaches are valid and are used depending on the size, complexity and bandwidth requirements of the application. 
If your application is complex and has a lot of resources, 
your bundles will grow quite large and take a long time to download – possibly ending up slower than a traditional web application!

Once the application is loaded, all logic and changes are applied to the current webpage. */
/**
 * 
 *  You have a web application that has a navigation bar on top and two pages. One page shows the latest news, and the other shows the current user’s profile page. The navigation bar contains a link for each page.

In a traditional website, when the user clicks the Profile link, the web browser sends the request to the web server. The web server generates the HTML page and sends it back to the web browser. The web browser then renders the new web page.

In a Single Page Application, different pages are broken into templates (or views). Each view will have HTML code containing variables that can be updated by the application.

The web browser sends the request to the web server, and the web server sends back a JSON object. The web browser then updates the web page by inserting the template with the variables replaced by the values in the JSON object.
 */
/**
 * 
 *  Anchor Tag Elements in Single-Page Elements
A single-page application can’t have regular anchor tag elements as a traditional web app can. 

The reason for this is that the default behavior of an anchor tag is to load another HTML file from a server and refresh the page. This page refresh is not possible in a SPA that's powered by a library such as React because a total page refresh is not the way that a SPA works, as explained earlier in this lesson item. 

Instead, a SPA comes with its own special implementation of anchor tags and links, which only give an illusion of loading different pages to the end user when in fact, they simply load different components into a single element of the real DOM into which the virtual DOM tree gets mounted and updated.

That's why navigation in a single-page app is fundamentally different from its counterpart in a multi-page app. Understanding the concepts outlined in this lesson item will make you a more well-rounded React developer.
 */

/**
 * Routing App
 */

import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import { Routes, Route, Link } from "react-router-dom";
import LoggedInOutBtn from "./LoggedInOutBtn";
import "./App.css";
import Animal from "./Animal";
//import { useState } from "react";

function App() {
  //const {login, setLogin} = useState(true);
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          HomePage
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>

        <Link to="/cat-image">Cat Images</Link>
        <LoggedInOutBtn isLoggedIn={false} />
      </nav>10
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="cat-image"element={<Animal/>}/>
      </Routes>
    </div>
  );
}

export default App;


/**
 * Assets
 * -->Images, stylesheets, fonts,-> files that react app needs 
 */

//folder structures
//src-> assets -> 
//if app can compile without an assets keep it in public folder.
//img -> best to store in assets folder
//using assets
//import cat from './assets/images/cat.jpg
//-> create func return asset as component
//




