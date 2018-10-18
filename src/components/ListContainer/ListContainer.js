import React from 'react';

const ListContainer = ({ items }) => {
    return (
    <ul>
        {items.map((item, i) =>
        <li key={i}>{item}</li>
        )}
    </ul>
    )
}

export default ListContainer;
