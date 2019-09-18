import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
export default class Overview extends Component {
    render() {
        return (
            <div style={{ backgroundColor:'#fff'}}>
                <Header />
                <Banner />
                <Container className="p-5">
                    <Row className="m-3" style={{ fontFamily: 'Parisienne', fontWeight: '', fontSize: 48 }}>
                        Room Service
				</Row>
                    <Row>
                        <Col md={3}>
                            <div className="">
                                <Link to={'starter'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="100%" height="200px" src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle style={{ fontSize: 20 }}>Starsdfsfsfdsfsdfsdfsdfsdfssdfters</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="">
                                <Link to={'starter'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="90%" src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Starters</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'starter'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="90%" src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Starters</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'starter'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="90%" src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Starters</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>

                        

                    </Row>
                    {/* {this.state.toggle && <ModalBuy onClose={() => this.toggle(false)} food={this.state.food} />} */}
                </Container>
            </div>
        )
    }
}
