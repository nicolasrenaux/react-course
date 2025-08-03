// Named exports - Solution to complex and very verbose exports/imports... without it, App.jsx looks like this:
// import Home from './tutorial/04-project-structure/starter/Pages/Home'
// import About from './tutorial/04-project-structure/starter/Pages/About'

// With it, App.jsx looks like this:

import Home from "./Home";
import About from "./About";

export {Home, About}