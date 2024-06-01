import React from 'react';
import Modal from '../Modal/Modal';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Rent({
  isOpen,
  onClose,
  onClick,
  title,
  subtitle,
  placeHolderTextTel,
  placeHolderTextName,
  textButtonLeft,
  textButtonRight,
  showCalendar,
  cards,
}) {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Header/>
      <Modal.Body>
        <MobileNavigation
          cards={cards}
          title={title}
          subtitle={subtitle}
          onClick={onClick}
          showCalendar={showCalendar}
          placeHolderTextTel={placeHolderTextTel}
          placeHolderTextName={placeHolderTextName}
          textButtonLeft={textButtonLeft}
          textButtonRight={textButtonRight}/>
      </Modal.Body>
    </Modal>
  )
}

export default Rent;
