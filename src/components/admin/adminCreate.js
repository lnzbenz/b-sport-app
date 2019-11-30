import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Banner from '../Banner/Banner'
import auth from '../../service/index'
import axios, { post } from 'axios'
export default class Admin extends Component {
    constructor(props) {
		super(props)

    this.state = {
        store_name: '',
        brand_name: '',
        price: 0,
        file: null,
        image_url: '',
        store_id:0

    }

		this.fileUpload = this.fileUpload.bind(this)
		this.addStore = this.addStore.bind(this)
		this.upload = this.upload.bind(this)

    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({ message: '' })
        console.log({ [name]: value })
    }


    async addStore(e) {
        e.preventDefault()
        const data = {
            store_name: this.state.store_name,
            brand_name: this.state.brand_name,
            price: this.state.price

        }

        await axios.post(`http://localhost:3001/api/store/create`, data).then($res => {
            const { data } = $res
            console.log("DATA : " ,data);
            this.setState({store_id:data.id})
        })

        await this.upload()
    }

    async upload() {
        await this.fileUpload(this.state.file).then(response => {
            console.log('res . data : ', response.data)
            const dataPic = {
                id: this.state.IdToimage_url,
                image_url: response.data.file.path,
                image_storeID: this.state.store_id
            }
            // const { data } = response.data
            axios.post(`http://localhost:3001/api/image/SavePathImage`, dataPic).then($res => {
                const { data } = $res
                console.log('what is the path : ', data)

                // const { data } = $res
                // this.setState({ message: data.message })
            })

        })
    }

    fileUpload(file) {
        const url = 'http://localhost:3001/api/image/UploadImage'
        const formData = new FormData()
        // formData.append('file', file)
        formData.append('imageData', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }



    onChangePicture = e => {
        this.setState({ file: e.target.files[0] })
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
                                    <div className="textInput">productName</div>
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
                                <div>
                                    <FormGroup>

                                        <Input type="file" name="file_picture" id="exampleFile" onChange={this.onChangePicture} />

                                        <FormText color="muted">upload
                                </FormText>
                                    </FormGroup>
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
