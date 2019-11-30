import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap';
const items = [
    {
 async getDataImage(){
    await axios.get(`http://localhost:3001/api/image/store/${this.props.e.id}`).then($res => {
            const { data } = $res
            this.setState({ image: data })
            console.log('Image ',this.state.image)
		})
		{ <div className=""> 
                                <Link to={'/example'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src={this.state.image.image_url} />
                                        </div>
                                        <CardBody>
                                            <CardTitle >{e.store_name}</CardTitle>
                                            <CardTitle > ({e.brand_name})</CardTitle>
                                            <CardTitle >ราคา {e.price} บาท</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>  }
}
