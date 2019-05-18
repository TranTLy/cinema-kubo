import React, { Component } from 'react';

import './CardItemDetail.scss'
class CardItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { movie } = this.props;
        return (
            <div className="card-item-detail-wrap">
                <div className="img">
                    <img src={movie.img} alt="" />
                    <span className="rate">{movie.rate} <i class="fas fa-star"></i></span>
                </div>
                <div className="movie-infor">
                    <div className="title"><a href="#">{movie.name}</a> </div>
                    <div className="duration"><i class="far fa-clock"></i> {movie.duration}</div>
                    <div className="description">{movie.description.substring(0, 50)} ...</div>
                    <div className="release-date"><span className="lable">Ngày khởi chiếu: </span>{movie.releaseDate}</div>
                    <div className="director"><span className="lable">Đạo diễn: </span>   <a href="#">{movie.director}</a></div>
                    <div className="actors"><span className="lable">Diễn viên: </span>{movie.actors.substring(0, 50)}...</div>
                    <div className="language"><span className="lable">Ngôn ngữ: </span>{movie.language}</div>
                    <div className="price"><span className="lable">Giá: </span>{movie.price}</div>
                </div>
            </div>
        );
    }
}

export default CardItemDetail;