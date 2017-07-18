import React, { Component } from 'react';
const Modal = require('boron/FadeModal');

export class MessageModal extends Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderMessageForm = this.renderMessageForm.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

    this.state = {
      isCompleted: false,
    };
  }

  showModal(event) {
    event.preventDefault();
    this.setState({
      isCompleted: false,
    });
    this.refs.modal.show();
  }

  hideModal(event) {
    event.preventDefault();
    this.refs.modal.hide();
  }

  onSubmitHandler(event) {
    event.preventDefault();

    /* message sending
     * 1. send reques to back-end
     * 2. sending email
     * both things above have been done, go to next screen.
     */
    this.setState({
      isCompleted: true,
    });
  }

  renderMessageForm() {
    return (
      <div>
        <div className="form-group">
          <a
            href=""
            onClick={this.hideModal}
            className="messageModal-close"
          >
            <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
          </a>

          <div>
            <img src="img/ruki.png" alt=""/>
          </div>
          <h2 className="messageModal-header">- GET IN TOUCH -</h2>
          <input type="text" className="form-control messageModal-input" placeholder="* NAME" />
          <input type="text" className="form-control messageModal-input" placeholder="* E-MAIL" />
          <textarea className="form-control messageModal-input" rows="3" placeholder="* MESSAGE"></textarea>
        </div>
        <button
          className="btn btn-default messageModal-submit"
          onClick={this.onSubmitHandler}
        >
          SEND
        </button>
      </div>
    );
  }

  renderComplete() {
    return (
      <div>
        <a
          href=""
          onClick={this.hideModal}
          className="messageModal-close"
        >
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </a>
        <div className="messageModal-empty-gap"></div>

        <h2 className="messageModal-header">- THANK YOU! -</h2>

        <div className="messageModal-text">
          <p>YOUR MESSAGE HAS BEEN SENT.</p>
          <p>WE'LL GET BACK TO YOU AS SOON AS POSSIBLE.</p>
        </div>

        <button
          className="btn btn-default messageModal-finish"
          onClick={this.hideModal}
        >
          CLOSE
        </button>
        <div className="messageModal-empty-gap"></div>
        <div className="messageModal-empty-gap"></div>
      </div>
    );
  }

  render() {
    // style of background sheet
    const backdropStyle = {
      backgroundColor: 'black',
    };

    const modalStyle = {
      // prevent boron default width
      width: '',
    };
    const { isCompleted } = this.state;

    return (
      <div>
        <a
          href=""
          onClick={this.showModal}
          className="messageModal-open"
        >
          <img src="img/talk_2.png" alt=""/>
        </a>

        <Modal
          ref="modal"
          keyboard={this.callback}
          backdropStyle={backdropStyle}
          modalStyle={modalStyle}
          className={'col-lg-4 col-md-5 col-sm-6 col-xs-12'}
        >
          <div className="container messageModal-text-field col-lg-12 col-md-12 col-sm-12 col-xs-12">
            { isCompleted ? this.renderComplete() : this.renderMessageForm()}
          </div>
        </Modal>
      </div>
    );
  }
}

export default MessageModal;
