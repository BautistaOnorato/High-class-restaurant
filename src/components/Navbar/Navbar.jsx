import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const Location = useLocation()
  const Navigate = useNavigate()

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header className='app__header'>
      {
        Location.pathname === '/' ? (
          <nav className='app__navbar'>
            <div className='app__navbar-logo'>
              <img src={images.gericht} alt='Gericht logo' />
            </div>
            <ul className='app__navbar-links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>Awards</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='app__navbar-login'>
              <a href='#login' className='p__opensans'>Newsletter</a>
            </div>
            <div className='app__navbar-smallscreen'>
              <GiHamburgerMenu color='#fff' fontSize={27} onClick={handleToggle} />
              {
                toggleMenu && (
                  <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                    <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={handleToggle} />
                    <ul className='app__navbar-links'>
                      <li className='p__opensans'><a onClick={handleToggle} href='#home'>Home</a></li>
                      <li className='p__opensans'><a onClick={handleToggle} href='#about'>About</a></li>
                      <li className='p__opensans'><a onClick={handleToggle} href='#menu'>Menu</a></li>
                      <li className='p__opensans'><a onClick={handleToggle} href='#awards'>Awards</a></li>
                      <li className='p__opensans'><a onClick={handleToggle} href='#contact'>Contact</a></li>
                      <li className='p__opensans'><a onClick={handleToggle} href='#login'>Newsletter</a></li>
                    </ul>
                  </div>
                )
              }
            </div>
          </nav>
        ) : (
          <nav className="app__navbar">
            <div className='app__navbar-logo'>
              <img src={images.gericht} alt='Gericht logo' />
            </div>
            <div className="app__navbar-arrow" onClick={() => Navigate('/')}>
              <IoIosArrowRoundBack size={30} />
              <p className='p__opensans'>Go Back</p>
            </div>
          </nav>
        )
      }
    </header>
  )
}

export default Navbar
