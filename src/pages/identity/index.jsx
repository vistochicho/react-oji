import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

//import axios
import axios from 'axios';

function IndexIdentity() {

    //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('https://6a06-116-206-28-17.ngrok.io/api/identity');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Button as={Link} to="/identity/create" variant="success" className="mb-3">TAMBAH POST</Button>
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>TITLE</th>
                                        <th>CONTENT</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { posts.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.name }</td>
                                            <td>{ post.hobby }</td>
                                            <td>{ post.about }</td>
                                            <td>{ post.commpany }</td>
                                            <td>{ post.job }</td>
                                            <td>{ post.country }</td>
                                            <td>{ post.address }</td>
                                            <td>{ post.phone }</td>
                                            <td>{ post.email }</td>
                                            <td>{ post.instagram }</td>
                                            <td>{ post.linkedin }</td>
                                            <td>{ post.github }</td>
                                            <td className="text-center"></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default IndexIdentity;