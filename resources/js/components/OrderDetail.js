import React, {useState, useEffect} from 'react';

const OrderDetail = (props) => {
    console.log(props)
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="text-center title">
                        <h1>Orden Procesada</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail