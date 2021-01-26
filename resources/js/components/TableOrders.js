import React from 'react'
import moment from 'moment'

moment.locale('es');

const TableOrders = ({orders}) =>{
    const getColor = (status) =>{
        switch(status){
            case 'CREATED': return {color:'gray'}
            break
            case 'REJECTED': return {color:'red'}
            break
            case 'PAYED': return {color:'green'}
            break
            
        }
    }
    return (
        <div className="row d-flex align-content-center justify-content-center">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>No. de Orden</th>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{
                                    <a href={urlBase+'/home/detail/'+order.id}>{order.request_id}</a>
                                    
                                    }
                                </td>
                                <td>{moment(order.created_at).format('LLL')}</td>
                                <td>{order.user.name}</td>
                                <td style={getColor(order.status)}>{order.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableOrders