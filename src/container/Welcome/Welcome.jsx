import { useNavigate } from 'react-router-dom'
import { SubHeading } from '../../components'
import images from '../../constants/images'
import './welcome.css'

const Welcome = () => {
  const Navigate = useNavigate()

  return (
    <div className="app__welcome app__wrapper section__padding" id='home'>
      <div className="app__wrapper_info">
        <SubHeading title={'Chase the new Flavour'}/>
        <h1 className='app__welcome-h1'>The key to Fine dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <button type='button' className='custom__button' onClick={() => Navigate('/menu')}>Explore Menu</button>
      </div>
      <div className="app__wrapper_img app__welcome-img">
        <img src={images.welcome} alt="Comida bievenida" />
      </div>
    </div>
  )
}

export default Welcome