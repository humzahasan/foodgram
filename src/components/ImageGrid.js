import React, {useContext} from 'react';
import './ImageGrid.css';
import useFireStore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImage, setUser, setCreatedAt}) => {
  const {docs} = useFireStore('images');
  return (
    <div className='image__grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='image__wrapper'
            key={doc.id}
            whileHover={{opacity: 1}}
            layout
            onClick={() => {
              setSelectedImage(doc.url);
              setUser(doc.name);
              setCreatedAt(doc.createdAt.toDate());
            }}
          >
            <motion.img
              src={doc.url}
              alt={doc.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5}}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
