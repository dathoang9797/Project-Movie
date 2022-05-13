import React from 'react';
import { Modal as ModalAnt } from 'antd';

function ModalHoc(WrappedComponent) {
  return class extends React.Component {
    state = {
      isModalVisible: false,
      contentModal: '',
      propsModal: {},
      propsContentModal: {},
    };

    showModal = () => {
      this.setState({ isModalVisible: true });
    };

    handleOk = () => {
      this.setState({ isModalVisible: false });
    };

    handleCancel = () => {
      this.setState({ isModalVisible: false });
    };

    handleContentModal = (contentModal) => {
      this.setState({ contentModal });
    };

    handlePropsContentModal = (propsContentModal) => {
      this.setState({ propsContentModal });
    };

    handlePropsModal = (propsModal) => {
      this.setState({ propsModal });
    };

    render() {
      const propsWrap = this.props;
      const propsModal = this.state.propsModal;
      const propsContentModal = this.state.propsContentModal;
      const ContentModal = this.state.contentModal;
      return (
        <>
          <WrappedComponent
            showModal={this.showModal}
            handlePropsModal={this.handlePropsModal}
            handleContentModal={this.handleContentModal}
            handlePropsContentModal={this.handlePropsContentModal}
            {...propsWrap}
          />
          <ModalAnt
            visible={this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose
            {...propsModal}
          >
            <ContentModal handleOk={this.handleOk} {...propsContentModal} />
          </ModalAnt>
        </>
      );
    }
  };
}

export default ModalHoc;
