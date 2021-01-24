import React, {useState, useEffect} from 'react';
import RedirectionAuth from '../Authentication'
import MyContext from '../providers/context'
import Buyer from './Buyer'
import moment from 'moment'
const Buy = () =>{
   
    var authGenerator = new RedirectionAuth(login,tranKey)
    var auth = authGenerator.generate().asObject();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    let buyer = {
        document:"1040030020",
        documentType:"CC",
        name:"John",
        surname:"Doe",
        email:"johndoe@example.com",
        address:{
            street:"742 Evergreen Terrace",
            city:"Springfield",
            country:"US"
        }
    }
    let payment = {
        reference:"123456",
        description:"Testing Payment",
        amount:{
            currency:"COP",
            total:200000
        },
        allowPartial:false
    }
    let expiration=moment().add(5, 'days').format()
    let returnUrl = urlBase+'/home/detail'
    let userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36"
    let ipAddress="127.0.0.1"
    var buyRequest = {auth,locale:"en_US",buyer,payment,expiration,returnUrl,userAgent,ipAddress}
    const [form,setForm] = useState(buyRequest)
    const [status,setStatus] = useState(1)
    const updateBuyer = (property,value) => {
        buyRequest.buyer[property] = value
        setForm(buyRequest)
    }
    //console.log(buyRequest);
    let apiPay = "https://test.placetopay.com/redirection/api/session/"

    const validateFieldLength = (...fields) =>{
        let band = true
        for (var i=0; i<fields.length;i++) {
            if(buyRequest.buyer[fields[i]].length===0){
              band = false
              i = fields.length
            }
    
        }
        return band;
    }

    const clickBtnBuy = () =>{
        
        setStatus(0)

        if(validateFieldLength('document','name','surname','email')){
            var pepe = {user_id:user.id}
            let parameters = {
                method:'POST',
                headers:{'Content-Type': 'application/json','Accept': 'application/json','X-CSRF-TOKEN':token}, 
                body: JSON.stringify(pepe)
            }
          
            
            fetch(urlBase+'/create_order',parameters)
                .then(res => res.json())
                .then((order) =>{
                    console.log(order)
                    //update a la url que se va a enviar
                    buyRequest.returnUrl = urlBase+'/home/detail/'+order.id
                    //console.log(buyRequest)
                    //enviar la info a la pasarela con la url que corresponda a la orden
                    let parameters = {
                        method:'POST',
                        headers:{'Content-Type': 'application/json'}, 
                        body:JSON.stringify(buyRequest)
                    }
                    fetch(proxyurl+apiPay,parameters)
                        .then(res => res.json())
                        .then((data)=>{
                            console.log(data)
                            if(data.status.status=="OK"){
                                let {requestId,processUrl} = data
                                //update al campo url que se reciba de la pasarela de pago y referencia
                                let parameters = {
                                    method:'POST',
                                    headers:{'Content-Type': 'application/json','Accept': 'application/json','X-CSRF-TOKEN':token}, 
                                    body: JSON.stringify({id:order.id,status:'CREATED',url:processUrl, request_id:requestId})
                                }
                                fetch(urlBase+'/update_order',parameters)
                                .then(res => res.json())
                                .then((order) =>{
                                    console.log(order.id)
                                    //redireccionar a la url que corresponda
                                    window.location = processUrl
                                })

                            }
                            else{
                                console.log("La pasarela no proceso correctamente")
                            }
                            //verificar la url que retorna haciendo la consulta respectiva a la pasarela
                        })
                        .catch((error) => console.log(error))
                })
                .catch((error) => console.log(error))

        }
        else{
            alert("Todos los campos son obligatorios")
        }
       
        
    }
    return (
        <MyContext.Provider value={{form, updateBuyer}}> 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="text-center title">
                            <h1>Comprar Producto</h1>
                        </div>
                        <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Nombre:</b>
                                {
                                    user.name
                                }
                            </div>
                        </div>
                        <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Email:</b>
                                {
                                    user.email
                                }
                            </div>
                        </div>
                        <div className="row d-flex align-content-center justify-content-center">
                            <div className="detail">
                                <b className="pr-3">Teléfono:</b>
                                {
                                    user.phone
                                }
                            </div>
                        </div>
                        <div className="row">
                        {
                            status === 1 &&
                            <Buyer></Buyer>
                        }
                        </div>
                        <div className="row justify-content-center mt-2">
                        {
                            status === 1 ?
                            
                            <button className="btn btn-success btn-lg" onClick={clickBtnBuy}>Comprar</button>
                            
                            : <h3>Procesando Compra...</h3>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    )
}

export default Buy;