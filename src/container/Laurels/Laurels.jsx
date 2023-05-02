import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import Award from '../../components/Award/Award';
import './Laurels.css';

const Laurels = () => (
  <div className="flex__center section__padding app__bg app__wrapper" id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title={'Awards & recognition'} />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__awards-content">
        {
          data.awards.map((award, i) => (
            <Award image={award.imgUrl} title={award.title} description={award.subtitle} key={i} />
          ))
        }
      </div>
    </div>
    <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
