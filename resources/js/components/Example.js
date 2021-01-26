import React from 'react';
import {Link} from 'react-router-dom'


function Example({user,url}) {
    //console.log(user)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-center title"><h1>Menú principal</h1></div>
                        

                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    {
                                        user &&
                                        user.role===1 && 
                                        <Link to={`${url}/orders_list`}>
                                            <img className="image" src="img/todas.png" alt="Ver todas las órdenes"/>
                                        </Link>
                                    }
                                    {
                                        user && user.role===1 && <br/>
                                    }
                                    {
                                        user && user.role===1 && 
                                        <span className="title">VER ORDENES</span>
                                    }
                                </div>
                                <div className="col-lg-4">
                                    
                                    <Link to={`${url}/user/orders`}>
                                        <img className="image" src="img/usuario.png" alt="ver mis órdenes"/>
                                    </Link>
                                    <br/>
                                    <span className="title">VER MIS ORDENES</span>
                                </div>
                                <div className="col-lg-4">
                                    
                                    <Link to={`${url}/buy`}>
                                        <img className="image" src="img/compra.png" alt="Comprar"/>
                                    </Link>
                                    <br/>
                                    <span className="title pl-4">COMPRAR</span>
                                </div>
                            </div>
                            <ul className="text-center">
                                
                                
                                    
                                
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
