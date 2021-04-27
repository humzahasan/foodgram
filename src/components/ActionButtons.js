import React, {useContext} from 'react';
import firebase from 'firebase';
import {projectAuth, googleProvider} from '../config/firebase';
import {UserContext} from '../providers/UserProvider';
import './ActionButtons.css';
const ActionButtons = () => {
  const user = useContext(UserContext);

  console.log(user);

  const signInHandler = () => {
    projectAuth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutHandler = () => {
    projectAuth
      .signOut()
      .then(() => {
        console.log('LOGGED OUT');
        console.log(user);
      })
      .catch((error) => console.log('FAILED'));
  };
  return (
    <div className='actionbuttons'>
      <div className='actionbuttons__layout'>
        {user ? <button>Scroll</button> : <button>Grid</button>}
      </div>
      <div className='actionbuttons__auth'>
        {user ? (
          <button onClick={signOutHandler}>Sign Out</button>
        ) : (
          <button onClick={signInHandler}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
