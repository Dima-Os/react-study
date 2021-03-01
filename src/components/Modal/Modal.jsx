import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ togleModal, children }) {
  const closeModal = e => {
    if (e.code === 'Escape') {
      togleModal();
    }
  };
  const onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      togleModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  });
  return createPortal(
    <div className={s.backdrop} onClick={onBackDropClick}>
      <div className={s.content}>
        {children}
        <button type="button" onClick={togleModal}>
          Close
        </button>
      </div>
    </div>,
    modalRoot,
  );
}
