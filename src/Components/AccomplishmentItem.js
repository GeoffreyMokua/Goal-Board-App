import React from 'react';


function AccomplishmentItem() {
    const { id, name, completed } = accomplishment;

    const handleDelete = () => {
        let type = "accomplishments";
        onDeleteClick(id, type)
    }

    return (
        <div className="card">
            <button onClick={handleDelete} className="delete-button">x</button>
            <p>{name}</p>
            <p><b className="label">Completed: {completed}</b></p>
         
        </div>

    );

};
export default AccomplishmentItem;