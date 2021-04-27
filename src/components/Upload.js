import React, {useState} from 'react';
import Progressbar from './Progressbar';
import './Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

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
    </div>
  );
};

export default Upload;
