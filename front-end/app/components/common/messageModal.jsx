import React, { Component } from 'react';
import { pushData } from 'utils/firebase';
import { FIREBASE_MESSAGE_ITEMS } from 'constants/config';
import { uuid } from 'utils/common';
import Modal from 'boron/FadeModal';

export class MessageModal extends Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderMessageForm = this.renderMessageForm.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onFormChange = this.onFormChange.bind(this);

    this.state = {
      isCompleted: false,
      name: '',
      email: '',
      message: '',
      errorMsg: {},
      loading: false,
    };
  }

  showModal(event) {
    event.preventDefault();
    this.setState({
      isCompleted: false,
      name: '',
      email: '',
      message: '',
      errorMsg: {},
      loading: false,
    });
    this.refs.modal.show();
  }

  hideModal(event) {
    event.preventDefault();
    this.refs.modal.hide();
  }

  onFormChange({ target }) {
    try {
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    } catch (error) {
      console.error(error);
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();

    /* message sending
     * 1. send reques to back-end
     * 2. sending email
     *
     * as long as the first thing has been done, got to next screen.
     */

    try {
      const { name, email, message } = this.state;

      if (name &&  email && message) {
        const messageItem = {
          id: uuid(),
          timestamps: new Date().toString(),
          sender: name,
          receiverEmail: email,
          content: message,
        };

        // disable the button
        this.setState({
          loading: true,
        });
        pushData(FIREBASE_MESSAGE_ITEMS, messageItem)
          .catch((error) => {
            console.error(error);
          })
          .then(() => {
            this.setState({
              loading: false,
              isCompleted: true,
            });
          });
      } else {
        this.setState({
          errorMsg: {
            emptyName: name === '',
            emptyEmail: email === '',
            emptyMessage: message === '',
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  renderMessageForm() {
    const { loading } = this.state;
    const { emptyName, emptyEmail, emptyMessage } = this.state.errorMsg;

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

          <div className="messageModal-ruki-img ruki-icon"></div>
          <h3 className="messageModal-header">- GET IN TOUCH -</h3>
          <input type="text" className="form-control messageModal-input" name="name" onChange={this.onFormChange}  placeholder="* NAME" />
          <div className="messageModal-input-warning-message">
            <label className="font-danger" hidden={ !emptyName} >* 此欄位必填</label>
          </div>

          <input type="email" className="form-control messageModal-input" name="email" onChange={this.onFormChange}  placeholder="* E-MAIL" />
          <div className="messageModal-input-warning-message">
            <label className="font-danger" hidden={ !emptyEmail }>* 此欄位必填</label>
          </div>

          <textarea className="form-control messageModal-input" rows="3" name="message" onChange={this.onFormChange}  placeholder="* MESSAGE"></textarea>
          <div className="messageModal-input-warning-message">
            <label className="font-danger" hidden={ !emptyMessage }>* 此欄位必填</label>
          </div>
        </div>
        <button
          disabled={loading}
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

    const contentStyle = {
      outline: 'none',
    };

    const { isCompleted } = this.state;

    return (
      <div id="messageModal">
        <a
          href=""
          onClick={this.showModal}
          className="messageModal-open"
        >
          <div className="messageModal-open-btn"></div>
        </a>

        <Modal
          ref="modal"
          keyboard={this.callback}
          backdropStyle={backdropStyle}
          modalStyle={modalStyle}
          contentStyle={contentStyle}
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
