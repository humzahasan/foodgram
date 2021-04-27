import './App.css';
import Title from './components/Title';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import {useState} from 'react';
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className='App'>
      <Title />
      <Upload />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
