function Card({ cards, setCloseSubjectRent, setOpenRent }) {

    const handleClickButton = () => {
        setCloseSubjectRent();
        setOpenRent();
      };

    return (
        <article className="card">
                <figure className="card__figure">
                    <img className="card__image" alt={ cards.name } src={ cards.link }/>
                    <figcaption className="card__figcaption">{cards.name}</figcaption>
                </figure>
                <p className="card__price">от&ensp;<span className="card__price-number">2000 ₽</span>/день</p>
                <button 
                type="button"
                onClick={handleClickButton}
                className="card__book">
                    Забронировать   
                </button>
            </article> 
    );
}

export default Card;
