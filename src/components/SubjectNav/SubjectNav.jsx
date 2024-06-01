import React from 'react';
import Card from '../Card/Card.jsx'

const SubjectNav = React.memo(({ cards, setCloseSubjectRent, setOpenRent }) => {
    
  return (
    <div className="subject-nav">
        <h2 className="subject-nav__title">Аренда велосипедов</h2>
        <div className="cards__container">
        <section className="cards" aria-label="Галерея картинок">
            
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />
        <Card
            cards={cards}
            setCloseSubjectRent={setCloseSubjectRent}
            setOpenRent={setOpenRent}
        />

        </section>
        </div>
    </div>
  )
})

export default SubjectNav;
