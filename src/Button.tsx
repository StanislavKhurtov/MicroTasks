import React from 'react';

type ButtonType = {
    name: string,
    callback: () => void
}


export const Button = (props: ButtonType) => {
    const onClickFunction = () => {
        props.callback();
    }

    return (
        <button onClick={onClickFunction}>{props.name}</button>
    );
}
