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

const Modal = ({ children }) => {
  const { visible, hideModal } = useContext(ModalContext);

  return (
    <ResponsiveModal open={visible} onClose={() => hideModal()} center blockScroll={false}>
      {children}
    </ResponsiveModal>
  );
};

export { Modal, ModalProvider, ModalContext };
