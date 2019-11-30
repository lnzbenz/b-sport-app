import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Banner from '../Banner/Banner'
import SlideShow from 'react-image-show';
import auth from '../../service/index'
import axios from 'axios'
import './Overview.css'
export default class Admin extends Component {
    state = {
    store:[],
    image:[]
    }

componentDidMount(){
    this.getData()
    this.getDataImage()

}
async getData(){
    await axios.get(`http://localhost:3001/api/store/allstore`).then($res => {
            const { data } = $res
            this.setState({ store: data })
            console.log('==== ',this.state.store)
			})
		
}


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
                <Banner/>
                    <Row className="m-3" style={{ fontFamily: 'Parisienne', fontWeight: '', fontSize: 48 }}>
                        รายการสินค้า
                        </Row>
                        <Row className="cen">
              
                
                </Row>
                   <Row className="mt-2 mb-2">
                       {this.state.store.map(e=>{
                           return ( <Col md={3}>
                            
                        </Col>)
                       
                       })}
                       
                        
                        </Row>
                </Container>
            </div>
        )
    }
}
