import React from "react";

const Card = (props) => {
        return (
        <div >
            <div className="card">
                <img className="card-img-top" src={props.cardImage} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <button className="btn btn-primary">Click Here!</button>
                </div>	
            </div>
        </div>
        )
}
    export default Card;
