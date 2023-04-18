import React from 'react';
import dateFormat from 'dateformat';

const DishComments = (props) => {
    return (
        props.comments.map(coment => {
            return (
                <div key={coment.id}>
                    <h5>{coment.author}</h5>
                    <p>{coment.comment}</p>
                    <p>{coment.rating}</p>
                    <p>{dateFormat(coment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            );
        })
    );
};

export default DishComments;