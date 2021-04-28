import React from 'react';
import './Modal.css';
import {motion} from 'framer-motion';
import moment from 'moment';
function Modal({selectedImage, setSelectedImage, user, createdAt}) {
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
      {user ? (
        <motion.div initial={{y: '-100vh'}} animate={{y: '0'}}>
          <p>Uploaded By : {user.split(' ')[0]}</p>
          <p>{moment(createdAt).fromNow()}</p>
        </motion.div>
      ) : (
        ''
      )}
    </motion.div>
  );
}

export default Modal;
