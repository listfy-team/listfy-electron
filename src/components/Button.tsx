import React, { MouseEvent } from 'react';
import { remote } from 'electron';

const ButtonComponent = () => {
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Do something
        console.log('Click')
    };

    return <button onClick={handleMouseEvent}>Click me!</button>;
};
export default ButtonComponent;

