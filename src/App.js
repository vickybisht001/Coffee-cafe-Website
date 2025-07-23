import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Main />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path:'/menu',
      element:(
        <>
        <Navbar/>
        <Menu/>
        <Footer/>
        
        </>
      ),
    },
    {
      path:'/blog',
      element:(
        <>
        <Navbar/>
        <Blog/>
        <Footer/>
        
        </>
      ),

    },
     {
      path:'/contact',
      element:(
        <>
        <Navbar/>
        <Contact/>
        <Footer/>
        
        </>
      )
    }
  ]);

  return <RouterProvider router= {router} />; 
}

export default App;
