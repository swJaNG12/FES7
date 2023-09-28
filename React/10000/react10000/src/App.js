import Header from './component/header/Header';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import Modal from './component/modal/Modal';
import './App.css';
import { useState } from 'react';

function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="App">
      <Header />
      <Main setModalShow={setModalShow} />
      <Footer />
      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}

export default App;
