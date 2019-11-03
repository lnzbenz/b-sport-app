import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Order extends Component {
    state = {

    }
    render() {
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Container>
                    <Row className="my-5 mx-5">
                        <Col md={12}>
                            <div className="p-5">
                                
                                <center><h1>ขอบคุณที่ใช้บริการ</h1></center>
                                <center><h2>"รอรับสินค้าจากผู้จัดส่งหน้าบ้านคุณ"</h2></center>
                                
                                <br></br><br></br><br></br>
                             <center><Link to={'/Overview'}><Button color="danger">กลับไปหน้าหลัก</Button></Link></center>
                              
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
