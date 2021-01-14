import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  //   state = {};

  render() {
    return createPortal(
      <div className={s.backdrop}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
