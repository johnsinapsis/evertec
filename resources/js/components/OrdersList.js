import React, {useState, useEffect} from 'react';
import TableOrders from './TableOrders'


const OrdersList = () =>{
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch(urlBase+'/orders')
        .then(res => res.json())
        .then((data)=>{
            //console.log(data)
            setOrders(data)
        })
    },[])

    

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="text-center title">
                        <h1>Lista de órdenes</h1>
                    </div>
                    <TableOrders orders={orders}></TableOrders>
                    
                </div>
            </div>
        </div>
    )
}

export default OrdersList