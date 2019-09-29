import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Banner from '../Banner/Banner'
import SlideShow from 'react-image-show';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
export default class Example extends Component {
    state = {
        urlArray: [
            img1, img2, img3, img4

        ]
    }
    render() {
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Container>
                    <Row className="my-5">
                        <Col md={6}>
                            <SlideShow
                                images={this.state.urlArray}
                                width="500px"
                                imagesWidth="400px"
                                imagesHeight="450px"
                                imagesHeightMobile="56vw"
                                thumbnailsWidth="500px"
                                thumbnailsHeight="12vw"
                                indicators thumbnails fixedImagesHeight
                            />
                        </Col>
                        <Col md={6} className="d-flex">
                            <div className="my-5">
                                <h1>HEADER</h1>
                                <Form>
                                    <FormGroup tag="fieldset">
                                        <legend>Size</legend>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}S
                                               </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}M
                                                </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}L
                                                </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}XL
                                                </Label>
                                        </FormGroup>

                                    </FormGroup>
                                </Form>
                                <Link to={'/order'}><Button color="success">Sent Order</Button></Link>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
