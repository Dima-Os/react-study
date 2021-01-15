import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  //   state = {};
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
    console.log('Were mounted!');
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }
  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.togleModal();
    }
  };
  onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.togleModal();
    }
  };
  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.onBackDropClick}>
        <div className={s.content}>
          {this.props.children}
          <button type="button" onClick={this.props.togleModal}>
            Close
          </button>
        </div>
      </div>,
      modalRoot,
    );
  }
}
