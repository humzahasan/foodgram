import React, {useState, useEffect, createContext, useContext} from 'react';
import {projectAuth} from '../config/firebase';
export const UserContext = createContext({user: null});
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setuser({
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setuser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
