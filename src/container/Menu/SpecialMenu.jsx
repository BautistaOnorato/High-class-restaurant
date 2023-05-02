import { images, data } from '../../constants';
import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';
import { useNavigate } from 'react-router-dom';

const SpecialMenu = () => {
  const Navigate = useNavigate()

  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className="app__menu-title">
        <SubHeading title={'Menu that fits you palatte'} />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
      <div className="app__menu-content">
        <div className="app__menu-content_wine flex__center">
          <h3>Wine & Beer</h3>
          <div className="app__menu-content_items">
            {
              data.wines.map((wine, i) => (
                <MenuItem key={i} title={wine.title} price={wine.price} ingredients={wine.tags.join(' | ')}/>
              ))
            }
          </div>
        </div>
        <div className="app__menu-content_img">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__menu-content_cocktails flex__center">
          <h3>Cocktails</h3>
          <div className="app__menu-content_items">
            {
              data.cocktails.map((cocktail, i) => (
                <MenuItem key={i} title={cocktail.title} price={cocktail.price} ingredients={cocktail.tags.join(' | ')}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className="app__menu-button">
        <button type='button' className='custom__button' onClick={() => Navigate('/menu')}>View More</button>
      </div>
    </div>
  );
}

export default SpecialMenu;
