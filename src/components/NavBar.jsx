import React from 'react'

function NavBar() {
  return (
    // NavBar -- 
    // Future Integration --
    // OnClick on the img-"Main_ICON" user redirect to the Home page (useNavigate() from react-router-dom)
    // OnClick on the img-"TOP_LEFT_VECTOR" a drop down button appear, in which different pages show like(home, contact, services, etc.)

    <div className="sticky top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-transparent">
        <img 
            src="Main_ICON.png" alt="ICON" className='w-32 h-12' 
        />
        <img src="TOP_LEFT_VECTOR.png" alt="Menu icon" className='w-6 h-5 cursor-pointer' />
        
    </div>

  )
}

export default NavBar
