import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {

    render(){
        return (
            <div>
                <p>Bienvenido a home</p>
                <Link to='/dashboard'>Ir al dashboard</Link>
            </div>
        );
    }
}