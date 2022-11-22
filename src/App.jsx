import React from 'react';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainArea from './components/MainArea/MainArea';
import Footer from './components/Footer/Footer';

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

function App() {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Header />
      <MainArea />
      <Footer />
    </ModalProvider>
  );
}

export default App;
