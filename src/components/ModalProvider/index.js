import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import ResponsiveModal from 'react-responsive-modal';

const ModalContext = React.createContext({
  visible: false
});

class ModalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modalContent: undefined
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.setModalContent = this.setModalContent.bind(this);
  }

  showModal() {
    this.setState({ visible: true });
  }

  hideModal() {
    this.setState({ visible: false });
  }

  setModalContent(modalContent) {
    this.setState({
      modalContent: modalContent
    });
  }

  render() {
    const { children } = this.props;

    return (
      <ModalContext.Provider
        value={{
          ...this.state,
          setModalContent: this.setModalContent,
          showModal: this.showModal,
          hideModal: this.hideModal
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
}

const Header = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: white;
  margin: 0;
`;

const Body = styled.div`
  padding: 42px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  background: white;
`;

const ModalWrapper = styled.span`
  & .Modal__container {
    @media screen and (max-width: 500px) {
      max-width: 100%;
      width: 100%;
    }
  }
`;

const Modal = ({ header, footer, children, ...rest }) => {
  const { visible, hideModal } = useContext(ModalContext);

  return (
    <ResponsiveModal
      center
      open={visible}
      onClose={() => hideModal()}
      blockScroll={false}
      styles={{
        overlay: {
          backdropFilter: 'blur(5px)',
          opacity: 'rgba(0, 0, 0, 0.6)'
        },
        modal: {
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          padding: '0px',
          maxWidth: '500px',
          width: '100%'
        }
      }}
      {...rest}
    >
      <Header>{header}</Header>
      <Body>{children}</Body>
      <Footer>{footer}</Footer>
    </ResponsiveModal>
  );
};

export { Modal, ModalProvider, ModalContext };
