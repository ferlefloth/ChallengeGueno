import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function IngresoForm({setDatos, setCuit}){

    
////////////////////  < ABRIR Y CERRAR EL MODAL  >///////////////////////
    const  [mostrarModal, setMostrarModal] = useState(false)

    function handleShow(){

        setMostrarModal(true)
    }
  
    function handleHide(){

        setMostrarModal(false)
    }

///////////////////   </ ABRIR Y CERRAR EL MODAL >/////////////////////
    
    let url = 'http://localhost:3000/'    
    const [id, setId] = useState('')

    
    function handleUserId(e){
        setId(e.target.value)
    }
    
    
    function handleEnviarDatos(){


        try{
            fetch(url + "getcuit/" + id)
            .then(response => response.json())
            .then((data)=>{
                
                if(data.success){
                    let cuit = data.data.cuit
                    setCuit(cuit)
                    //PREGUNTA POR LOS DATOS
                    
                    // try{
                    //     fetch(url + "getinformacion/" + cuit )
                    //     .then(response=>response.json())
                    //     .then(data =>{
    
                    //     setDatos(data.data)
                    //     });
                    // }
                    // catch(e){
                    //     alert ('Error al realizar petición')
                    // }
                 }else if(data.success = false){
                     setDatos(data.message)
                 }
             },[])
                } 
                catch (e) {
                    alert('Error al realizar la petición');
                 }
    }

        
    return(

        <>
        <div className="modal-form" >
            <Button variant="danger" size="lg" onClick={handleShow}>
                Ingreso ID
            </Button>
        </div>

        <Modal show={mostrarModal} onHide ={handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Inisiar Sesión</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form.Group>
                            <Form.Label>ID del usuario</Form.Label>
                            <Form.Control type="text"
                                            value={id}
                                            onChange={handleUserId}
                                />

                    </Form.Group>
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant= "secondary"
                                onClick={ handleHide}>
                            Cancelar
                        </Button>

                        <Button variant="primary"
                                onClick={handleEnviarDatos}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>

        </>
    )
}
export default IngresoForm;