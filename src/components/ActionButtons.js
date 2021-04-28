import React, {useContext} from 'react';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi';
import { FaThList } from "react-icons/fa";
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {projectAuth, googleProvider} from '../config/firebase';
import {UserContext} from '../providers/UserProvider';
import './ActionButtons.css';
const ActionButtons = () => {
  const user = useContext(UserContext);
  

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
        {user ? (
          <button><FaThList /></button>
        ) : (
          <button>
            <BsFillGrid3X3GapFill />
          </button>
        )}
      </div>
      <div className='actionbuttons__auth'>
        {user ? (
          <button onClick={signOutHandler}>
            <FiLogOut size='1.5em' />
            &nbsp;Sign Out
          </button>
        ) : (
          <button onClick={signInHandler}>
            Sign In With&nbsp;
            <AiOutlineGooglePlus size='2em' />
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
