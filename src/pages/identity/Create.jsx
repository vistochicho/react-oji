import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook history dari react router dom
import { useNavigate } from "react-router-dom";

function CreateIdentity() {

    //state
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [hobby, setHobby] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const navigate = useNavigate();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.post('https://6fd9-116-206-12-50.ngrok.io/api/identity', {
            photo: photo,
            name: name,
            hobby: hobby
        })
        .then(() => {

            //redirect
            navigate('/identity');

        })
        .catch((error) => {

            //assign validation on state
            setValidation(error.response.data);
        })
        
    };

    return (
        
        // <Container className="mt-3">
        //     <Row>
        //         <Col md="{12}">
        //             <Card className="border-0 rounded shadow-sm">
        //                 <Card.Body>
                        
        //                     {
        //                         validation.errors &&
        //                             <Alert variant="danger">
        //                                 <ul class="mt-0 mb-0">
        //                                     { validation.errors.map((error, index) => (
        //                                         <li key={index}>{ `${error.param} : ${error.msg}` }</li>
        //                                     )) }
        //                                 </ul>
        //                             </Alert>
        //                     }
                            
        //                     <Form onSubmit={ storePost }>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>TITLE</Form.Label>
        //                             <Form.Control type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Masukkan Gambar" />
        //                         </Form.Group>
                                
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>NAMA</Form.Label>
        //                             <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama" />
        //                         </Form.Group>

        //                         <Form.Group className="mb-3" controlId="formBasicHOBBY">
        //                             <Form.Label>HOBBY</Form.Label>
        //                             <Form.Control as="textarea" rows={3} value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Masukkan HOBBY" />
        //                         </Form.Group>

        //                         <Form.Group className="mb-3" controlId="formBasicABOUT">
        //                             <Form.Label>ABOUT</Form.Label>
        //                             <Form.Control as="textarea" rows={3} value={ABOUT} onChange={(e) => setABOUT(e.target.value)} placeholder="Masukkan ABOUT" />
        //                         </Form.Group>

        //                         <Button variant="primary" type="submit">
        //                             SIMPAN
        //                         </Button>
        //                     </Form>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>

    <div className="container mt-3">
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="name">Nama Lengkap</label>
                            <input type="text" className="form-control" id="name"/>
                        {/* <textarea className="form-control"></textarea> */}
                        </div>
                        <div className="form-group col-md-2">
                            <label for="hobby">Hobby</label>
                            <input type="text" className="form-control" id="hobby"/>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="company">Company</label>
                            <input type="text" className="form-control" id="company"/>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="job">Pekerjaan</label>
                            <input type="text" className="form-control" id="job"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="about">Tentang</label>
                            <textarea height="30px" className="form-control"></textarea>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="address">Alamat</label>
                            <textarea height="30px" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="country">Asal Negara</label>
                        <input type="text" className="form-control" id="country"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="phone">Nomor Telepon</label>
                        <input type="number" className="form-control" id="phone" placeholder="+62"/>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="instagram">Instagram</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="githup">GitHub</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="linkedin">Linkedin</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="input-group col-mb-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Simpan</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default CreateIdentity;