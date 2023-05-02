import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { gallery } from '../../constants/images';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Gallery = () => {

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if(window.innerWidth > 650) return;
    const interval = setInterval(() => {
        selectNewImage(selectedIndex, gallery)
    }, 3000);
    return () => clearInterval(interval);
  })

  const selectNewImage = (index, images, next = true) => {
    const condition = next ? index < images.length - 1 : index > 0;
    const nextIndex = next ? condition ? index + 1 : 0 : condition ? index - 1 : images.length - 1;
    setSelectedIndex(nextIndex);
  }

  const previous = () => {
      selectNewImage(selectedIndex, gallery, false);
  }

  const next = () => {
      selectNewImage(selectedIndex, gallery);
  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title={'Instagram'} />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', margin: '2rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <a href="https://www.instagram.com/">
          <button className='custom__button' type='button'>View More</button>
        </a>
      </div>
      <div className="app__gallery-photos">
        <div className="app__gallery-photos_arrow-container" onClick={previous}>
          <BsArrowLeftShort className="gallery__arrow-icon" />
        </div>
        <div className="app__gallery-photos_card flex__center">
          <img src={gallery[selectedIndex]} alt="" />
          <div className="app__gallery-photos_instagram flex__center">
            <a href="https://www.instagram.com/" target='e_blank'>
              <BsInstagram className="gallery__photo-icon"/>
            </a>
          </div>
        </div>
        <div className="app__gallery-photos_arrow-container" onClick={next}>
          <BsArrowRightShort className="gallery__arrow-icon" /> 
        </div>
      </div>
    </div>
  )
}
export default Gallery;
