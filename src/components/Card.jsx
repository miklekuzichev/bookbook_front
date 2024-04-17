import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Card({cards}) {
    const { id } = useParams();
    //const data = Array.from( cards.data === undefined ? {}: cards.data.results);
    // Найдем карточку по идентификатору
    const card = cards.find(card => card.id === parseInt(id));
 
    const date1 = new Date(card.end_at);
    const date2 = new Date(card.start_at);
    const time1 = date1.getTime();
    const time2 = date2.getTime();
    const delta = Math.abs(time1 - time2); // Берем абсолютное значение, чтобы избежать отрицательных результатов
    const deltaInMinutes = delta / (1000 * 60);

    return (
        <>
        <section className="cards" aria-label="Галерея картинок">
            <div className="card-template" id="card-template">
                <div className="card" id="cardId">
                    <div className="card__start">Время начала:  {card.start_at}</div>
                    <div className="card__delta">Временной интервал:  {deltaInMinutes} минут</div>
                    <div className="card__end">Время окончания:  {card.end_at}</div>
                </div>
            </div>
        </section>
        <Link to='/'>Вернуться на главную</Link>
        </>
  
    );
}

export default Card;
