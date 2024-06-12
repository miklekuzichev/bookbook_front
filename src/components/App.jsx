import './../App.css';
import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Main from './Main';
import Card from './Card';
import Rent from './Rent/Rent';
import RentSubject from './RentSubject/RentSubject';
import { config, nameMonth } from '../utils/utils.js';
import { initialCards } from '../utils/cards.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js'

function App() {

  const [cards, setCards] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({}); // default value
  const [rentIsOpen, setRentIsOpen] = React.useState(false);
  const [rentSubjectIsOpen, setRentSubjectIsOpen] = React.useState(false);
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [selectFromToDate, setSelectFromToDate] = React.useState(false);
  const [textButtonLeftInner, setTextButtonLeft] = React.useState(config.textButtonLeft);
  const [textButtonRightInner, setTextButtonRight] = React.useState(config.textButtonRight);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const setOpenRent = () => {
    setRentIsOpen(true);
  };

  const setOpenSubject = () => {
    setRentSubjectIsOpen(true);
  };

  const setCloseSubjectRent = () => {
    setRentSubjectIsOpen(false);
  };

  const setCloseRent = () => {
    setRentIsOpen(false);
  };

  const handleClickPickUp = () => {
    toggleCalendar();
    setSelectFromToDate(false);
  };

  const handleClickDropOff = () => {
    toggleCalendar();
    setSelectFromToDate(true);
  };

  const handleClicSelectDate = (day) => {
    const ariaLabelValue = day.target.closest('.calendar__month-date_number').getAttribute('aria-label').split(' ');

    if(selectFromToDate) {
      const isCurrentMonth = nameMonth[textButtonLeftInner.split(' ')[1]] <= nameMonth[ariaLabelValue[2]];
      // Изменять это поле можно, только когда выбрана дата начала аренды и число справа этого же месяца или позднее. Выбрать справа дату ранее, чем слева нельзя
      //
      if(((textButtonRightInner !== ariaLabelValue) && (isCurrentMonth) && (parseInt(textButtonLeftInner.split(' ')[0]) <= parseInt(ariaLabelValue[1])))
        | ((parseInt(textButtonLeftInner.split(' ')[0]) > parseInt(ariaLabelValue[1])) && (parseInt(nameMonth[ariaLabelValue[2]]) > parseInt(nameMonth[textButtonLeftInner.split(' ')[1]])))
      ) {
        setTextButtonRight(ariaLabelValue[1] + ' ' + ariaLabelValue[2]);
      }
      setSelectFromToDate(false);
    } else {
      if((textButtonLeftInner !== ariaLabelValue) && (ariaLabelValue[1] !== '')) {
        setTextButtonLeft(ariaLabelValue[1] + ' ' + ariaLabelValue[2]);
        //
        // Сбрасываем число справа, если новое число слева больше
        //
        if((parseInt(ariaLabelValue[1]) > parseInt(textButtonRightInner.split(' ')[0])) && (parseInt(nameMonth[ariaLabelValue[2]]) >= parseInt(nameMonth[textButtonRightInner.split(' ')[1]]))) {
          setTextButtonRight(config.textButtonRight);
        }
      }
      setSelectFromToDate(true);
    }
    toggleCalendar();
  };

  React.useEffect(() => {
    //
    // Загрузка с сервера
    //
    api.getMoviesData()
      .then((cards) => {
          setCards(cards);
      })
      .catch(console.error);
   }, []);

    const data = Array.from( cards.data === undefined ? {}: cards.data.results);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    <Routes>
      <Route
        exact
        path='/'
        element={
          <Main
            cards={data}
            setOpenRent={setOpenRent}
            setOpenSubject={setOpenSubject}
          />
        }
      />
    <Route
      path='/card/:id'
      element={<Card cards={data} />}
    />
    </Routes>
    {rentIsOpen && (
      <Rent
        isOpen={rentIsOpen}
        onClose={setCloseRent}
        onClickInputDataLeft={handleClickPickUp}
        onClickInputDataRight={handleClickDropOff}
        onClickCalendarPickUp={handleClicSelectDate}
        onClickCalendarDropOff={handleClicSelectDate}
        showCalendar={showCalendar}
        title={config.title}
        cards={initialCards}
        subtitle={config.subtitle}
        placeHolderTextTel={config.placeHolderTextTel}
        placeHolderTextName={config.placeHolderTextName}
        textButtonLeft={textButtonLeftInner}
        textButtonRight={textButtonRightInner}
      />
    )}
    {rentSubjectIsOpen && (
      <RentSubject
        isOpen={rentSubjectIsOpen}
        onClose={setCloseSubjectRent}
        cards={initialCards}
        setCloseSubjectRent={setCloseSubjectRent}
        setOpenRent={setOpenRent}
      />
    )}
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
