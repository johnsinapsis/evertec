import React, {useContext,useState} from 'react';
import MyContext from '../providers/context'

const Buyer = () =>{
    var {form,updateBuyer} = useContext(MyContext);
    //console.log(form)
    //const [form,setForm] = useState(buyRequest)
    //console.log(buyRequest.buyer.documentType)
    const [username, setUsername] = useState(form.buyer.name);
    const [surname, setSurname] = useState(form.buyer.surname);
    const [document, setDocument] = useState(form.buyer.document);
    const [documentType, setDocumentType] = useState(form.buyer.documentType);
    const [email, setEmail] = useState(form.buyer.email);
    
    const handleDocument = (e) =>{
        setDocument(e.target.value)
        updateBuyer('document',e.target.value)
    }
    const handleDocumentType = (e) =>{
        setDocumentType(e.target.value)
        updateBuyer('documentType',e.target.value)
    }
    const handleName = (e) =>{
        setUsername(e.target.value)
        updateBuyer('name',e.target.value)
    }
    const handleSurname = (e) =>{
        setSurname(e.target.value)
        updateBuyer('surname',e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
        updateBuyer('email',e.target.value)
    }
    return(
        <div className="col-md-12">
            <fieldset>
                <legend>Datos del Comprador</legend>
                <div className="row text-center">
                    <div className="col-md-3">
                        <label>Tipo de documento</label>
                        <select name="type" id="type" className="form-control" defaultValue={documentType} onChange={handleDocumentType}>
                            <option value={'CC'}>CC</option>
                            <option value={'CE'}>CE</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label>Número de documento</label>
                        <input type="text" className="form-control" value={document} onChange={handleDocument}/>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-md-6">
                        <label>Nombres</label>
                        <input type="text" className="form-control" value={username} onChange={handleName}/>
                    </div>
                    <div className="col-md-6">
                        <label>Apellidos</label>
                        <input type="text" className="form-control" value={surname} onChange={handleSurname}/>
                    </div>

                </div>
                <div className="row mb-4 mt-1">
                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="text" className="form-control" value={email} onChange={handleEmail}/>
                    </div>
                </div>
                
            </fieldset>
        </div>
    )
}

export default Buyer;