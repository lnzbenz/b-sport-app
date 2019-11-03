import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Banner from '../Banner/Banner'
import SlideShow from 'react-image-show';
import auth from '../../service/index'
import axios from 'axios'
export default class Admin extends Component {
    state = {
        store_name: '',
        brand_name: '',
        price: 0
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({ message: '' })
        console.log({ [name]: value })
    }


    addStore=()=> {
        const data = {
            store_name: this.state.store_name,
            brand_name: this.state.brand_name,
            price: this.state.price

        }

        axios.post(`http://localhost:3001/api/store/create`, data).then($res => {
            const { data } = $res


        })
    }

    render() {

        let user = auth.getToken()
        let userDecoded = auth.decodeToken(user)
        console.log(userDecoded);

        if (userDecoded.role != "admin") {
            this.props.history.push('/overview')
        }
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Container>
                    <Row className="m-3" style={{ fontFamily: 'Parisienne', fontWeight: '', fontSize: 48 }}>
                        เพิ่มสินค้า
				</Row>
                    <Row>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center'
                            }}
                        >

                            <Form onSubmit={this.addStore}>
                                <div className="ipp">
                                    <div className="textInput">StoreName</div>
                                    <input
                                        style={{ fontSize: '8px !important' }}
                                        name="store_name"
                                        className="inputform"
                                        type="text"
                                        placeholder="store_name"
                                        onChange={this.handleInputChange}
                                        value={this.state.store_name}
                                        // invalid={String(this.state.invalidemail)}
                                        required
                                    />
                                </div>
                                <div className="ipp">
                                    <div className="textInput">BrandName</div>
                                    <input
                                        style={{ fontSize: '8px !important' }}
                                        name="brand_name"
                                        className="inputform"
                                        type="text"
                                        placeholder="brand_name"
                                        onChange={this.handleInputChange}
                                        value={this.state.brand_name}
                                        // invalid={String(this.state.invalidemail)}
                                        required
                                    />
                                </div>
                                <div className="ipp">
                                    <div className="textInput">Price</div>
                                    <input
                                        style={{ fontSize: '8px !important' }}
                                        name="price"
                                        className="inputform"
                                        type="number"
                                        placeholder="price"
                                        onChange={this.handleInputChange}
                                        value={this.state.price}
                                        // invalid={String(this.state.invalidemail)}
                                        required
                                    />
                                </div>

                                <div className="err">{this.state.message}</div>
                                <Button className="mr-2" color="info">Confirm</Button> 
                                <Link to={'/admin'}><Button color="success">OK </Button></Link>
                            </Form>
                            
                        </div></Row>
                </Container>
            </div>
        )
    }
}
