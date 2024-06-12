import React from 'react';
//import debounce from 'lodash.debounce'; // применить метод отсечения вызовов (debouncing) для улучшения производительности
import { NavLink } from 'react-router-dom';
import ButtonPopupSubmit from '../ButtonPopupSubmit/ButtonPopupSubmit';
import InputPopup from '../InputPopup/InputPopup';
import InputData from '../InputData/InputData';
import Calendar from '../Calendar/Calendar';

const MobileNavigation = React.memo(({ onClickCalendarPickUp, onClickCalendarDropOff, cards, title, subtitle, onClickInputDataLeft, onClickInputDataRight, placeHolderTextTel, placeHolderTextName, textButtonLeft, textButtonRight, showCalendar }) => {

  return (
    <div className="mobile-navigation">
      <ul className="mobile-navigation__nav-list">
        <h2 className="mobile-navigation__title">{ title }</h2>
        <figure className="mobile-navigation__figure">
          <img className="mobile-navigation__image" alt={ cards.name } src={ cards.link }/>
          <figcaption className="mobile-navigation__subtitle">{ subtitle }</figcaption>
        </figure>
        <form className="mobile-navigation__form">
          <div className="mobile-navigation__data">
            <InputData
              InputDataText={ textButtonLeft }
              onClick={ onClickInputDataLeft }
            />
            <InputData
              InputDataText={ textButtonRight }
              onClick={ onClickInputDataRight }
            />
          </div>
          <InputPopup
            placeholderText={ placeHolderTextName }
            typeInput="text"
          />
          <InputPopup
            placeholderText={ placeHolderTextTel }
            typeInput="tel"
          />
          <p className="mobile-navigation__input-text">Total: <label className="mobile-navigation__input-text_summary">20 EUR</label></p>
          <p className="mobile-navigation__text-oferta">Нажимая кнопку "Оформить" Вы соглашаетесь с обработкой <NavLink className="mobile-navigation__text-oferta_link">персональных данных</NavLink> и <NavLink className="mobile-navigation__text-oferta_link">договором оферты</NavLink></p>
          <ButtonPopupSubmit
          />
        </form>
      </ul>
      {showCalendar ?
        <Calendar
          onClickCalendarPickUp={ onClickCalendarPickUp }
          onClickCalendarDropOff={ onClickCalendarDropOff }
        />  : <></>
      }
    </div>
  )
})

export default MobileNavigation;
