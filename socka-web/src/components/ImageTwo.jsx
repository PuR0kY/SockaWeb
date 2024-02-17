import { Parallax } from 'react-parallax';
import Two from '../components/img/2.jpg';

import React from 'react'

const ImageTwo = () => {
  return (
    <Parallax className='image' bgImage={Two} strength={800}>
        <div className='content'>
            
        </div>
    </Parallax>
  )
}

export default ImageTwo
