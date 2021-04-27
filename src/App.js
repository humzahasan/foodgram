import './App.css';
import Title from './components/Title';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import {useState} from 'react';
import ActionButtons from './components/ActionButtons';
import UserProvider from './providers/UserProvider';
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <UserProvider>
      <div className='App'>
        <Title />
        <ActionButtons />
        <Upload />
        <ImageGrid setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
    </UserProvider>
  );
}

export default App;
