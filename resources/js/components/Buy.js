import React, {useState, useEffect} from 'react';
import RedirectionAuth from '../Authentication'
const Buy = () =>{
    //const [sessionBuy,setSessionBuy] = useState()
    //const [sessionBuy,setSessionBuy] = useState()
    /* useEffect(()=>{
        
    }) */
    var authGenerator = new RedirectionAuth(login,tranKey)
    //var auth = authGenerator.generate().asObject();
    var auth = {
        login: login,
        tranKey: "9FTXH4wQFd0IocF+K91D+GYBmsc=",
        seed: "2021-01-22T20:51:49-05:00=",
        nonce: "WTJZNFl6azBPV05qWldOaU0yWTFaamN3TlRNME5qTXhaVFkxT1RJeE16Yz0="
    }
    //var auth = {}
    //var auth = authGenerator.generate();
    /* var nonce = Math.random().toString(36).substring(7)
    var seed = (new Date()).toISOString() */
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const clickBtnBuy = () =>{
        console.log(auth)
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
        let expiration="2021-01-23T18:12:20-05:00"
        let returnUrl = urlBase+'/home/detail'
        let userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36"
        let ipAddress="127.0.0.1"
        let buyRequest = {auth,locale:"en_US",buyer,payment,expiration,returnUrl,userAgent,ipAddress}
        //setSessionBuy(buyRequest);
        console.log(buyRequest);
        let apiPay = "https://test.placetopay.com/redirection/api/session/"
        let parameters = {
            method:'POST',
            headers:{'Content-Type': 'application/json'}, 
            body:JSON.stringify(buyRequest)
        }
        fetch(proxyurl+apiPay,parameters)
            .then(res => res.json())
            .then((data)=>{
                console.log(data)
            })
            .catch((error) => console.log(error))
        
    }
    return (
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
                    <div className="row justify-content-center">
                        <button className="btn btn-success btn-lg" onClick={clickBtnBuy}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy;