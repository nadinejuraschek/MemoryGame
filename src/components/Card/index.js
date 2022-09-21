import "./Card.css";

export const Card = ({ clickCount, id, image }) => (
    <div className="card" onClick={() => clickCount(id)}>
        <div className="img-container">
            <img alt={id} src={image} />
        </div>
    </div>
);
