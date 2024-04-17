import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavigation = React.memo((props) => {

  const MOBILE_NAVIGATION_LINKS = [
    {
      id: 1,
      title: 'Главная',
      link: '/',
      classname: 'mobile-navigation__link',
      onClick: () => {
        props.onModalClose();
      },
      exact: true,
    },
    {
      id: 2,
      title: 'Фильмы',
      link: '/movies',
      classname: 'mobile-navigation__link',
      onClick: () => {
        props.onModalClose();
      },
      exact: false,
    },
    {
      id: 3,
      title: 'Сохранённые фильмы',
      link: '/saved-movies',
      classname: 'mobile-navigation__link',
      onClick: () => {
        props.onModalClose();
      },
      exact: false,
    },
  ];

  const mobileNavigationMarkup = MOBILE_NAVIGATION_LINKS.map((item) => (
    <li
      key={item.id}
      className="mobile-navigation__nav-list-item"
    >
      <NavLink
        className='mobile-navigation__link'
        to={item.link}
        onClick={item.onClick}
        exact={item.exact}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <nav className="mobile-navigation">
      <ul className="mobile-navigation__nav-list">
        <h2 className="mobile-navigation__title">Аренда</h2>
        <h3 className="mobile-navigation__subtitle">Байдарка Одиссей 480 (комплект)</h3>
        <form className="mobile-navigation__form">
          <div className="mobile-navigation__count">
            <p className="mobile-navigation__count-text">Количество</p>
            <button type="button" className="mobile-navigation__count-button mobile-navigation__count-button_left"></button>
            <input type="number" step="1" min="1" max="10" id="num_count" className="mobile-navigation__count-input"></input>
            <button type="button" className="mobile-navigation__count-button mobile-navigation__count-button_right"></button>
          </div>
          
          <div className="mobile-navigation__data">
            <div className="mobile-navigation__data-input">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mobile-navigation__data-input_icon"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3V4H4C2.89543 4 2 4.89543 2 6V6.5H18V6C18 4.89543 17.1046 4 16 4H14.5V3C14.5 2.72386 14.2761 2.5 14 2.5C13.7239 2.5 13.5 2.72386 13.5 3V4H6.5V3C6.5 2.72386 6.27614 2.5 6 2.5C5.72386 2.5 5.5 2.72386 5.5 3ZM18 7.5H2V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V7.5Z" fill="#070C27" fill-opacity="0.4"/>
              </svg>
              <p class="mobile-navigation__data-input_text">Начало*</p>
              </div>
            <div className="mobile-navigation__data-input">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mobile-navigation__data-input_icon"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3V4H4C2.89543 4 2 4.89543 2 6V6.5H18V6C18 4.89543 17.1046 4 16 4H14.5V3C14.5 2.72386 14.2761 2.5 14 2.5C13.7239 2.5 13.5 2.72386 13.5 3V4H6.5V3C6.5 2.72386 6.27614 2.5 6 2.5C5.72386 2.5 5.5 2.72386 5.5 3ZM18 7.5H2V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V7.5Z" fill="#070C27" fill-opacity="0.4"/>
              </svg>
              <p className="mobile-navigation__data-input_text">Конец*</p>
            </div>
          </div>

          <input type="tel" placeholder='+7(_ _ _) _ _-_ _*' className="mobile-navigation__input-registration"></input>
          <input type="text" placeholder='Имя*' className="mobile-navigation__input-registration"></input>
          <p className="mobile-navigation__input-text">Получение*</p>
          <div className="mobile-navigation__data-input_type">
            <button type="button" className="mobile-navigation__data-input_type_button">Самовывоз</button>
            <button type="button" className="mobile-navigation__data-input_type_button">Доставка</button>
          </div>
  
          <p className="mobile-navigation__input-text">Сумма аренды: <label className="mobile-navigation__input-text_summary">2000 ₽</label></p>

          
          <p className="mobile-navigation__text-oferta">Нажимая кнопку "Оформить" Вы соглашаетесь<br/>с обработкой <NavLink className="mobile-navigation__text-oferta_link">персональных данных</NavLink> и <NavLink className="mobile-navigation__text-oferta_link">договором оферты</NavLink></p>
          <button type="button" className="mobile-navigation__submit-button">Оформить</button>
        </form>
        



      </ul>
    </nav>
  )
})

export default MobileNavigation;
