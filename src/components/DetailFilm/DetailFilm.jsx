import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import PosterDetailFilm from '../PosterDetailFilm/PosterDetailFilm'
import imgFilm from '../../assets/img/NgoiDenKiQuai.jpg'
import './DetailFilm.scss'
export default class DetailFilm extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Menu />
                <PosterDetailFilm />
                <Container className="pt-5">
                    <Row className="flexDirection: 'column',">
                        <Col sm={3}>
                            <img src={imgFilm} className="w-100" ></img>
                            <Button color="secondary" className="w-100 mt-3 rounded-0">Đặt vé</Button>
                        </Col>
                        <Col>
                            <h3 className="text-dark font-weight-bold pb-3">NGÔI ĐỀN KÌ QUÁI</h3>
                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                <h5 className="pr-3 pl-0">Xem xếp hạng:</h5>
                                <i class="fas fa-star text-warning pt-1"></i>
                                <i class="fas fa-star text-warning pt-1"></i>
                                <i class="fas fa-star text-warning pt-1"></i>
                                <i class="fas fa-star text-warning pt-1"></i>
                                <i class="fas fa-star-half-alt text-warning pt-1"></i>
                            </Col>
                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                <h5 className="pr-3 pl-0">Ngày phát hành:</h5>
                                <h6 className="pt-1">{new Date().toLocaleDateString()}</h6>
                            </Col>
                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                <h5 className="pr-3 pl-0">Thể loại:</h5>
                                <h6 className="pt-1">Thriller/Criminal/Horror Thailand</h6>
                            </Col>
                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                <h5 className="pr-3 pl-0">Thời lượng:</h5>
                                <h6 className="pt-1">115 phút</h6>
                            </Col>
                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                <h5 className="pr-3 pl-0">Loại:</h5>
                                <h6 className="pt-1">  2D | Normal | Normal sound | Phụ đề</h6>
                            </Col>
                        </Col>
                    </Row>
                </Container>
                <Container className="pt-5">
                    <Row>
                        <Col>
                            <h3 className="text-dark font-weight-bold ">Tóm tắt</h3>
                            <p>Với tên gọi “Ngôi Đền Kỳ Quái”, Pee Nak là câu chuyện của một hội bạn thân khi tìm đến nơi được xem là đền thờ của truyền thuyết nàng Nak. Những tưởng sẽ “cầu được ước thấy” khi khám phá ngôi đền hoang sơ bí hiểm này thế nhưng hàng loạt tình huống “dở khóc dở cười” lại xảy đến với họ.</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col className="d-flex flexDirection: 'row',">
                            <h3 className="text-dark font-weight-bold ">Xếp hạng và đánh giá phim</h3>
                            <p className="ml-auto">0/220 Ký tự</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Card className="w-100 h-100 px-0 py-0 comment-film">
                            <Col sm={2} className="pl-5 pr-0 pt-3">
                                <h5 className="text-dark">Xếp hạng</h5>
                                <div>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                </div>
                            </Col>
                            <Col sm={9} className="px-0  bg-secondary">
                                <textarea placeholder="Nhập nội dung bình luận" className="backgound w-100 h-100 px-0 py-0 border border-white"></textarea>
                            </Col>
                            <Col sm={1} className="px-0">
                                <Button color="warning" className="w-100 h-100 px-0 py-0 font-weight-bold rounded-0">Bình luận</Button>
                            </Col>
                        </Card>
                    </Row>
                </Container>
                <Container>
                    <hr className="border mt-3 "></hr>
                </Container>
                <Container className="pt-3">
                    <Row>
                        <div className="w-100 px-0 py-0 flexDirection: 'column',comment">
                            <Col className="pr-0  d-flex flexDirection: 'row',">
                                <div class="badge badge-dark text-wrap rounded-0 h-25">
                                    Khách
                                </div>
                                <div className="pl-2">
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star-half-alt text-warning pt-1"></i>
                                </div>
                            </Col>
                            <Col className="pt-3">
                                <p>Phim hay. Ý nghĩa. Đoạn cuối đã khóc
                                </p>
                            </Col>
                            <Col className="d-flex flexDirection: 'row',">
                                <p>{new Date().toLocaleTimeString()}</p>
                                <i class="fas fa-heart text-danger pl-3 pt-1"></i>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <hr className="border"></hr>
                </Container>
                <Container className="pt-3 pl-4">
                    <Row >
                        <div className="border w-100 backgound ">
                            <Col className="pt-3 ">
                                <div className="d-flex flexDirection: 'row', pb-2">
                                    <i class="fas fa-exclamation-triangle pt-1 pr-2"></i>
                                    <h5 className="text-dark font-weight-bold ">Lưu ý</h5>
                                </div>
                                <p>Mỗi tài khoản chỉ có thể đánh giá một lần cho mỗi lượt truy cập. Đánh giá khi đã thực hiện thì không thể chỉnh sửa.</p>
                                <p>Tài khoản của bạn phải là thành viên và đã mua vé xem phim mới có thể tham gia đánh giá phim.</p>
                                <p>Bạn có thể kiểm tra lại phần đánh giá của mình trong My Kubo.</p>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}