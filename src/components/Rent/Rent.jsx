import React from 'react';
import Modal from '../Modal/Modal';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Rent({
  isOpen,
  onClose,
  onClickInputDataLeft,
  onClickInputDataRight,
  title,
  subtitle,
  placeHolderTextTel,
  placeHolderTextName,
  textButtonLeft,
  textButtonRight,
  showCalendar,
  cards,
  onClickCalendarPickUp,
  onClickCalendarDropOff,
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
          //onClick={onClick}
          onClickInputDataLeft={onClickInputDataLeft}
          onClickInputDataRight={onClickInputDataRight}
          onClickCalendarPickUp={onClickCalendarPickUp}
          onClickCalendarDropOff={onClickCalendarDropOff}
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
