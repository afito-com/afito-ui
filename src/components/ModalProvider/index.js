import React, { Component, useContext } from 'react';
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
  padding: 28px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  margin: 0;
`;

const Body = styled.div`
  padding: 28px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #dcdcdc;
  padding: 0 10px;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const ModalWrapper = styled(ResponsiveModal)`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  max-width: 500px;
  width: 100%;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Modal = ({ header, footer, children, ...rest }) => {
  const { visible, hideModal } = useContext(ModalContext);

  return (
    <ModalWrapper center open={visible} onClose={() => hideModal()} blockScroll={false} {...rest}>
      <Header>{header}</Header>
      <Body>{children}</Body>
      <Footer>{footer}</Footer>
    </ModalWrapper>
  );
};

export { Modal, ModalProvider, ModalContext };
