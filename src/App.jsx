import Contact from "./components/Contact.jsx"
import NavBar from "./components/NavBar"


function App() {
  return (
    <>
      <div className="relative w-full"> 
        <img src="/BG.png" alt="image" className="absolute inset-0 h-full w-full object-cover z-10" />
        <img src="/Footer_Vector.png" alt="FooterVector" className="w-90 h-90 absolute top-0 right-0 z-10"/>
        <img src="/Footer_Vector_2.png" alt="FooterVector2" className="w-90 h-90 absolute bottom-0 left-0 z-10"/>
        
        <NavBar />
        <Contact /> {/* Outlet (If there are many pages, then use it) */}
      </div>
    </>
  )
}

export default App