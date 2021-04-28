import React from 'react';
import './Modal.css';
import {motion} from 'framer-motion';
function Modal({selectedImage, setSelectedImage, user}) {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) setSelectedImage(null);
  };
  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img
        src={selectedImage}
        alt='englared pic'
        initial={{y: '-100vh'}}
        animate={{y: '0'}}
      />
      {user ? <p>{user}</p> : ''}
    </motion.div>
  );
}

export default Modal;
