import { Parallax } from 'react-parallax';
import One from '../components/img/1.jpg';

import React from 'react'

const ImageOne = () => {
  return (
    <Parallax className='image' bgImage={One} strength={800}>
        <div className='content'>
            <span className='img-txt'>welcome to socka web!</span>
        </div>
    </Parallax>
  )
}

export default ImageOne
