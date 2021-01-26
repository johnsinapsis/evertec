import React, {useState, useEffect} from 'react';
import TableOrders from './TableOrders'

const OrdersUser = () =>{
    const [orders,setOrders] = useState([])
    let parameters = {
        method:'POST',
        headers:{'Content-Type': 'application/json','Accept': 'application/json','X-CSRF-TOKEN':token}, 
        body: JSON.stringify({user_id:user.id})
    }
    useEffect(()=>{
        fetch(urlBase+'/order_user',parameters)
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
                        <h1>Mis órdenes de compra</h1>
                    </div>
                    <TableOrders orders={orders}></TableOrders>
                    
                </div>
            </div>
        </div>
    )
}

export default OrdersUser