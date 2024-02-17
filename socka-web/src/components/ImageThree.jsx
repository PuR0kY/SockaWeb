import { Parallax } from 'react-parallax';
import Three from '../components/img/3.jpg';

import React from 'react'

const ImageThree = () => {
  return (
    <Parallax className='image' bgImage={Three} strength={800}>
        <div className='content'>
            
        </div>
    </Parallax>
  )
}

export default ImageThree
