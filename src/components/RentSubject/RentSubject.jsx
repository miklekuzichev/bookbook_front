import React from 'react';
import ModalSubject from '../ModalSubject/ModalSubject';
import SubjectNav from '../SubjectNav/SubjectNav';

function Rent({
  isOpen,
  onClose,
  cards,
  setCloseSubjectRent,
  setOpenRent,
}) {

  return (
    <ModalSubject
      isOpen={isOpen}
      onClose={onClose}>
      <ModalSubject.Header/>
      <ModalSubject.Body>
      <SubjectNav
      cards={cards}
      setCloseSubjectRent={setCloseSubjectRent}
      setOpenRent={setOpenRent}
        />
      </ModalSubject.Body>
    </ModalSubject>
  )
}

export default Rent;
