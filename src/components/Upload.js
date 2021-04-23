import React, {useState} from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const uploadHandler = (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const acceptedType = ['image/jpeg', 'image/png'];
    if (selectedFile && acceptedType.includes(selectedFile.type)) {
      setFile(selectedFile);
    }
  };

  return (
    <div className='upload'>
      <form>
        <input type='file' className='upload__input' onChange={uploadHandler} />
      </form>
    </div>
  );
};

export default Upload;
