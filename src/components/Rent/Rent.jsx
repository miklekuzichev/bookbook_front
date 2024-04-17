import React from 'react';
import Modal from '../Modal/Modal';
import MobileAccountNavList from '../MobileAccountNavList/MobileAccountNavList';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Rent({
  isOpen,
  onClose,
}) {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Header/>
      <Modal.Body>
        <MobileNavigation
          onModalClose={onClose}/>
      </Modal.Body>
    </Modal>
  )
}

export default Rent;
