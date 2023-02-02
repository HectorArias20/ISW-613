import './SingleCard.css';

function SingleCard({props , card , Choice , disab, fli}) {
    const Click = () => {
        if (!disab) {
          Choice(card);
        }
      };

    return (
        <div className='card'>
           <div className={fli ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />
        <img
          className="back" src="/img/cover.png" onClick={Click}alt="cover"
        />
      </div>
        </div>
    )

}

export default SingleCard