import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import HeadLine from '../../components/HeadLine/HeadLine'
import { Container } from 'reactstrap';

import './About.scss'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchs: [
                {
                    name: "Kubo Vạn Hanh",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                },
                {
                    name: "Kubo Bến Thành",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                },
                {
                    name: "Kubo Thủ Đức",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                }, {
                    name: "Kubo Hoàng Văn Thụ",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                },
                {
                    name: "Kubo Nguyễn Văn Cừ",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <head>

                </head>
                <Header />
                <Menu />
                <Container>
                    <div className="about-us-wrap">
                        <div className="general-infor">
                            <HeadLine title="Thông tin" />
                            <div className="content">
                                Kubo là chuỗi rạp chiếu phim nổi tiếng.
                    Được thành lập từ năm 2000. Chuỗi rạp chiếu phim Kubo đã trở thành nơi đến quen thuộc của nhiều người yêu thích phim.<br />
                                Kubo luôn cập nhập những bộ phim mới một cách nhanh nhất. <br />
                                Ở Kubo, bạn có thể lựa chọn nhiều bộ phim hấp dẫn, đa dạng, thuộc nhiều thể loại, lứa tuổi.
                    </div>
                        </div>
                        <div className="branch-infor">
                            <HeadLine title="Chi nhánh" />
                            <div className="content">
                                <ul className="branchs">
                                    {this.state.branchs.map((item, index) => {
                                        return (
                                            <li> <a href="#" className="name">{item.name}</a>
                                                <br />
                                                {item.address}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                </Container>
                <Footer />
            </div>
        );
    }
}

export default About;