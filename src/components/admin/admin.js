import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Banner from '../Banner/Banner'
import SlideShow from 'react-image-show';
import auth from '../../service/index'
import axios from 'axios'
import './admin.css'
export default class Admin extends Component {
    state = {
    store:[]
    }

componentDidMount(){
    this.getData()

}

async getData(){
    await axios.get(`http://localhost:3001/api/store/allstore`).then($res => {
            const { data } = $res
            this.setState({ store: data })
            console.log('==== ',this.state.store)
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
                        รายการสินค้า
                        </Row>
                        <Row className="cen">
              
				<Link to={'admin/create'}><Button color="success">เพิ่มรายการสินค้า</Button></Link>
                
                </Row>
                   <Row className="mt-2 mb-2">
                       {this.state.store.map(e=>{
                           return ( <Col md={3}>
                            <div className="">
                                <Link to={'/example'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_mufc_h_au_jsy_-_reared_ed7387__01_new.jpg?w=400' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle >{e.store_name}</CardTitle>
                                            <CardTitle > ({e.brand_name})</CardTitle>
                                            <CardTitle >ราคา {e.price} บาท</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>)
                       
                       })}
                       
                        
                        </Row>
                </Container>
            </div>
        )
    }
}
