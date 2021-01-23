import React from 'react';
import {Link} from 'react-router-dom'

function Example({user,url}) {
    //console.log(user)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-center title">Menú principal</div>

                        <div className="card-body">
                            <ul className="text-center">
                                {
                                    user &&
                                    user.role===1 &&
                                    <li>Ver Todas las órdenes</li>
                                }
                                <li>Ver Mis órdenes</li>
                                <li>
                                    <Link to={`${url}/buy`}>
                                        Comprar
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

/* if (document.getElementById('example')) {
    console.log("prueba")
    ReactDOM.render(<Example />, document.getElementById('example'));
} */
