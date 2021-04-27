import React, {useState, useEffect, createContext, useContext} from 'react';
import {projectAuth} from '../config/firebase';
export const UserContext = createContext({user: null});
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [user, setuser] = useState(null);
  console.log(user);
  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      console.log('CHANGED');
      if (user) {
        setuser({
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setuser(null);
      }
      //console.log(user.displayName);
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
