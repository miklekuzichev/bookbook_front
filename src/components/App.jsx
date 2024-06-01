//import logo from './../logo.svg';
import './../App.css';
import React from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Main from './Main';
import Card from './Card';
import Rent from './Rent/Rent';
import RentSubject from './RentSubject/RentSubject';
import { config } from '../utils/utils.js';
import { initialCards } from '../utils/cards.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js'

function App() {

  const [cards, setCards] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({}); // default value
  const [rentIsOpen, setRentIsOpen] = React.useState(false);
  const [rentSubjectIsOpen, setRentSubjectIsOpen] = React.useState(false);
  const [showCalendar, setShowCalendar] = React.useState(false);

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
        onClick={toggleCalendar}
        showCalendar={showCalendar}
        title={config.title}
        cards={initialCards}
        subtitle={config.subtitle}
        placeHolderTextTel={config.placeHolderTextTel}
        placeHolderTextName={config.placeHolderTextName}
        textButtonLeft={config.textButtonLeft}
        textButtonRight={config.textButtonRight}
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
