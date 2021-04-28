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
  const [user, setUser] = useState(null);
  const [createdAt,setCreatedAt] = useState(null);
  return (
    <UserProvider>
      <div className='App'>
        <Title />
        <ActionButtons />
        <Upload />
        <ImageGrid setSelectedImage={setSelectedImage} setUser={setUser} setCreatedAt={setCreatedAt}/>
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            user={user}
            createdAt={createdAt}
          />
        )}
      </div>
    </UserProvider>
  );
}

export default App;
