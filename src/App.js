
import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from'./Home';
import Contact from './Contact';
import About from './About';
import Concept from './Concept';
import Register from './Register';


const router = createBrowserRouter([
  {
    path: "Home",
    element: <Home/>
  },
  {
    path: "Contact",
    element: <Contact/>
  },
  {
    path: "About",
    element: <About/>
  },
  {
    path: "Concept",
    element: <Concept/>
  },
  {
    path: "Register",
    element: <Register/>
  },
  
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
       </div>
  );
}

export default App;
