import React from 'react';
import { Link } from 'react-router-dom';

function Main({cards, setOpenRent, setOpenSubject}) {

    //const data = Array.from( cards.data === undefined ? {}: cards.data.results);
    //console.log('cards.data ', cards.data === undefined ? true: false);
    //console.log('data ', data.length === 0 ? {} : data[0]);

    return (
        <>
            <section className="cards" aria-label="Галерея картинок">
                {cards.map((item) => {
                        const date1 = new Date(item.end_at);
                        const date2 = new Date(item.start_at);
                        const time1 = date1.getTime();
                        const time2 = date2.getTime();
                        const delta = Math.abs(time1 - time2); // Берем абсолютное значение, чтобы избежать отрицательных результатов
                        const deltaInMinutes = delta / (1000 * 60);

                        return (
                            <Link className="card" to={`/card/${item.id}`} key={item.id} >
                                <div className="card__start">Время начала:  {item.start_at}</div>
                                <div className="card__delta">Временной интервал:  {deltaInMinutes} минут</div>
                                <div className="card__end">Время окончания:  {item.end_at}</div>
                            </Link>
                        );
                })}
            </section>
            <form class="submit__form">
                    <button 
                        type="button"
                        class="main__button"
                        onClick={setOpenRent}
                    >
                        Добавить слот
                    </button>
                    <button 
                        type="button"
                        class="main__button"
                        onClick={setOpenSubject}
                    >
                        Добавить субьект записи
                    </button>
            </form>
        </>
    );
}

export default Main;
