import Home from './pages/Home/Home.tsx'
import './App.css'
import NavBar from './pages/Navbar/Nav.tsx'
import joodDetails from './details.js'
function App() {
  return (
    <div className='droid-arabic-kufi backgruand' dir='rtl'>
      <NavBar />
      <Home />
      <div className='bottom-span tooltip'>
        <span className='tooltiptext'>تواصلوا معنا</span>
        <a
          href={joodDetails.whatsapp.url}
          target='_blank'
          rel='noopener noreferrer'
          className=''
        >
          <img
            src={joodDetails.whatsapp.img}
            className='margin-whatsapp'
            alt='whatsapp'
          />
        </a>
      </div>
    </div>
  )
}

export default App
