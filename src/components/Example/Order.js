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
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleText">ชื่อ/ที่อยู่ผู้รับ</Label>
                                        <Input type="textarea" name="text" id="exampleText" style={{ maxWidth: '500px' }} />
                                    </FormGroup>
                                    <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}ชำระปลายทาง 
                                                </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}ชำระผ่านการโอน
                                                </Label>
                                        </FormGroup>
                                        <br></br><Link to={'/successs'}><Button color="success">ยืนยันการสั่งซื้อ</Button></Link>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
