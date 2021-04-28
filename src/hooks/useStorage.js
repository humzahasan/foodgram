import {useState, useEffect, useContext} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../config/firebase';
import {UserContext} from '../providers/UserProvider';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const user = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        collectionRef.add({
          url: url,
          createdAt: timestamp(),
          name: user.displayName,
        });
      }
    );
  }, [file]);
  return {progress, error, url};
};

export default useStorage;
