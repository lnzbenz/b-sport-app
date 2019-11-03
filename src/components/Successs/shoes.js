import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

import Banner from '../Banner/Banner'
export default class Overview extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'fff' }}>
                <Banner />
                <Container className="p-5 con-overview mt-5 mb-5">
                    <Row className="m-3" style={{ fontFamily: 'Parisienne', fontWeight: '', fontSize: 48 }}>
                        สินค้าแนะนำ
				</Row>
                    <Row>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/example'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_mufc_h_au_jsy_-_reared_ed7387__01_new.jpg?w=400' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle >Manchester United Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/l/f/lfc_nbf_home_2019-20_elite_jsy_mt930001__01_new.jpg?w=400' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Liverpool Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2400 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_afc_19-20_h_au_jsy_-_scarle_eh5640__01_new.jpg?w=400' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Arsenal Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/p/u/puma_mcfc_home_shirt_replica_ss_with_sponsor_logo_-_team_light_blue-tillandsia_purple_75558601__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Manchester City Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2600 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_lcfc_19-20_h_-_blue-white_8210740__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Leister City Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2600 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_chelsea_home_jersey_2019-20_rush_blue-white_aj5529-495__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Chelsea Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2600 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/p/u/puma-nufc-home-shirt-replica-ss-with-sponsor---puma-white-puma-black-_75629701__00.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Newcastle United Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2600 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="300px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_thfc_m_nk_brt_stad_jsy_ss_hm_-_white-binary_blue_aj5550-101__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Spur Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_fcb_m_nk_brt_stad_jsy_ss_hm_-_deep_royal_blue_varsity_maize_aj5532-456__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Barcelona Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_real_h_jsy_-_white_dw4433__01.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Real madrid Kit 2019/2020</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/p/u/puma_bvb_home_shirt_replica_with_evonik_logo_with_opel_-cyber_yellow-puma_black_75573701__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle> Borussia Dortmund 2019/2020 Home</CardTitle>
                                            <CardTitle >2600 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_fcb_h_jsy_-_fcbtru_dw7410__01.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Bayern Munich Kit 2019/2020 </CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_juve_19-20_h_jsy_-_black-white_dw5455__01.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Juventus kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col><Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/p/s/psg_m_nk_brt_stad_jsy_ss_3r_-_white-red_at0033-102__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Paris saint germanin Kit 2019/2020 Away</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col><Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_inter_m_nk_brt_stad_jsy_ss_hm_-_blue_spark_white_aj5541-414__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Inter Milan Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </Col><Col md={3}>
                            <div className="">
                                <Link to={'/'}>
                                    <Card className="m-2 each-food">
                                        <div>
                                            <CardImg top width="250px" height="320px" src='https://s3-ap-southeast-1.amazonaws.com/pcms.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_atm_m_nk_brt_stad_jsy_ss_hm_-_sport_red_white_deep_royal_blue_aj5523-612__01_new.jpg' alt="Card image cap" />
                                        </div>
                                        <CardBody>
                                            <CardTitle>Atletico Madrid Kit 2019/2020 Home</CardTitle>
                                            <CardTitle >2800 Bath</CardTitle>
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
