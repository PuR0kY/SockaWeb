import { useState, useEffect } from 'react';
import React from 'react';
import './Logo.css';

const Logo = () => {
    const [showLogo, setShowLogo] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowLogo(true);
      }, 2000);
  
      return () => clearTimeout(timeout);
    }, []);

    return (
    <div className={`socka-gang ${showLogo ? 'show' : ''}`} alt="Logo" style={{ opacity: showLogo ? 1 : 0 }}>SockA GanG</div>
    );
};
    export default Logo;