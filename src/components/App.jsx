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


import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js'

function App() {

  const [cards, setCards] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({}); // default value
 
  const [rentIsOpen, setRentIsOpen] = React.useState(false);

  const setOpenRent = () => {
    setRentIsOpen(true);
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
      />
    )}
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
