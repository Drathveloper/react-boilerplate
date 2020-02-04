import React from 'react';
import { Link } from 'react-router-dom';

export class Dashboard extends React.Component {

    render(){
        return (
            <div>
                <p>Bienvenido al dashboard</p>
                <Link to="/">Ir al home</Link>
            </div>
        );
    }
}
