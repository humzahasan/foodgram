import React, {useContext, useState} from 'react';
import {UserContext} from '../providers/UserProvider';
import Progressbar from './Progressbar';
import './Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const user = useContext(UserContext);

  const uploadHandler = (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const acceptedType = ['image/jpeg', 'image/png'];
    if (selectedFile && acceptedType.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (jpeg or png)');
    }
  };

  return (
    <div className='upload'>
      {user ? (
        <form>
          <label>
            <input type='file' onChange={uploadHandler} />
            <span>+</span>
          </label>{' '}
          <div className='output'>
            {error && <div className='output__error'>{error}</div>}
            {file && <div className='output__success'>{file.name}</div>}
            {file && <Progressbar file={file} setFile={setFile} />}
          </div>
        </form>
      ) : (
        <div>
          <h4>You must login to upload to foodgram</h4>
        </div>
      )}
    </div>
  );
};

export default Upload;
