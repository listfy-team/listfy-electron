import React, { MouseEvent } from 'react';
import { remote } from 'electron';

const ButtonComponent = () => {
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Do something
        /*var { PythonShell } = remote.require("python-shell")
        
        var path = require("path")
        var opcoes = {
            scriptPath: path.join(__dirname, '../../python_engine/'),
            args: ['Gabriel']
        }
        
        var hello = new PythonShell('hello.py', opcoes);
        let swal: any;
        hello.on('message', function (message: string) {
            swal(message);
        })*/
        console.log('Click')
    };

    return <button onClick={handleMouseEvent}>Click me!</button>;
};
export default ButtonComponent;

