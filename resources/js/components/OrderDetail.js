import React, {useState, useEffect} from 'react';
import RedirectionAuth from '../Authentication'
import moment from 'moment'

moment.locale('es');

const OrderDetail = (props) => {
    const id = parseInt(props.match.params.id)
    const [order,setOrder] = useState()
    const [color,setColor] = useState('gray')
    //const [status,setStatus] = useState({})
    var status = {status: '', date:''}
    var authGenerator = new RedirectionAuth(login,tranKey)
    var auth = authGenerator.generate().asObject();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let apiPay = "https://test.placetopay.com/redirection/api/session/"
    let parameters = {
        method:'POST',
        headers:{'Content-Type': 'application/json','Accept': 'application/json','X-CSRF-TOKEN':token}, 
        body: JSON.stringify({id})
    }

    const clickBtnBuy = ()=> {
        window.location = order.url
    }
   
    useEffect(()=>{
        fetch(urlBase+'/order',parameters)
            .then(res => res.json())
            .then((detail) =>{
                console.log(detail)
                setOrder(detail)
                let parameters = {
                    method:'POST',
                    headers:{'Content-Type': 'application/json'}, 
                    body:JSON.stringify({auth})
                }
                fetch(proxyurl+apiPay+'/'+detail.request_id,parameters)
                    .then(res => res.json())
                    .then((data)=>{
                        console.log(data.status.status)
                        if(data.status.status === 'APPROVED'){
                            status = {status: 'PAYED', date: data.status.date}
                           setColor('green')
                        }
                        else if(data.status.status === 'PENDING'){
                            status ={status: 'CREATED', date: data.status.date}
                           setColor('gray')
                        }
                        else if(data.status.status === 'REJECTED'){
                            status = {status: 'REJECTED', date: data.status.date}
                           setColor('red')
                        }
                        else{
                            status = {status: 'DESCONOCIDO', date: data.status.date}
                        }
                        let fields = {id:detail.id,status:status.status,url:detail.url, request_id:detail.request_id}
                        let parameters = {
                            method:'POST',
                            headers:{'Content-Type': 'application/json','Accept': 'application/json','X-CSRF-TOKEN':token}, 
                            body: JSON.stringify(fields)
                        }
                        fetch(urlBase+'/update_order',parameters)
                            .then(res => res.json())
                            .then((order) =>{
                                setOrder(order)
                            })
                    })
            })
            .catch(()=> console.log('Information could not be obtained from the source site'))
    },[]) 
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="text-center title">
                        <h1>Orden de Compra No. { order && order.request_id }</h1>
                    </div>
                    <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Fecha:</b>
                                {
                                   order && moment(order.created_at).format('LLL')
                                }
                            </div>
                    </div>
                    <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Nombre:</b>
                                {
                                   order && order.user && order.user.name
                                }
                            </div>
                    </div>
                    <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Email:</b>
                                {
                                    order && order.user.email
                                }
                            </div>
                    </div>
                        <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Teléfono:</b>
                                {
                                    order && order.user.phone
                                }
                            </div>
                        </div>
                        <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Estado:</b>
                                <span style={{color} }>
                                {
                                    order && order.status
                                }
                                </span>
                            </div>
                        </div>
                    {
                        order && order.status==='CREATED' ?
                        <div className="row d-flex align-content-center justify-content-center">
                            <button className="btn btn-success btn-lg" onClick={clickBtnBuy}>Reintentar</button>
                        </div>
                        : ''
                        
                    }
                    {
                        order && order.status==='REJECTED' ?
                        <div className="row d-flex align-content-center justify-content-center">
                        <a href={urlBase+'/home/buy'} className="btn btn-success btn-lg">Comprar</a>
                        </div>
                        : ''
                    }
                        
                </div>
            </div>
        </div>
    )
}

export default OrderDetail