import { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [suscribed, setSuscribed] = useState(false)
  const [error, setError] = useState(false) 

  const handleSubmit = (e) => {
    e.preventDefault()
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const fields = new FormData(e.target)
    const query = fields.get('email')
    if (regexEmail.test(query)) {
      setSuscribed(true)
      setError(false)
    } else {
      setSuscribed(false)
      setError(true)
    }
  }

  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title={'Newsletter'} />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <form 
        className="app__newsletter-input" 
        id='newsletter_form' 
        style={{ display: suscribed ? 'none' : 'flex' }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="app__newsletter-input_container">
          <input name='email' type='text' placeholder='Email Address' className={ error ? 'input-error' : '' } />
          <p className='p__opensans' style={{ display: error ? 'block' : 'none' }}>Please enter a valid email address</p>
        </div>
        <button className="custom__button" type='submit'>Suscribe</button>
      </form>
      <div className="app__newsletter-success flex__center">
        <h3 className='p__cormorant' style={{ color: '#DCCA87', marginTop: '2rem', display: suscribed ? 'block' : 'none' }}>Thank you for subscribing our newsletter</h3>
      </div>
    </div>
  )
}

export default Newsletter;
