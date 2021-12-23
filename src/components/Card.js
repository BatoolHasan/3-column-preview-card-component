const Card = ({backgroundColor, imgSrc, title, body})=>{

return (
    <div className="card" style={{backgroundColor:backgroundColor}}>
        <div className="card__img">
            <img src={imgSrc} alt="car icon"/>
        </div>
        <h1 className="card__heading">{title}</h1>
        <p className="card__body">{body}</p>
        <a  className="card__action" href="/" style={{color:backgroundColor}}>Learn More</a>
    </div>
);
}
export default Card;