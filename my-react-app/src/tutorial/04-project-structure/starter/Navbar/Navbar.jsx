// Importing this directly to App.jsx leads to 
// import Navbar from './tutorial/04-project-structure/starter/Navbar/Navbar'
// Solution 1.0 - Creating index.jsx and throwing the code there
// Solution 2.0 ( best ) just import and export in index.jsx

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}
export default Navbar