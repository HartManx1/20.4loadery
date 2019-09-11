import React from 'react';

const Title = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Ilość zadań: {props.dataList}</p>
        </div>
    );
}

export default Title;