import React from 'react';
import { Card } from 'reactstrap';
import './CardItem.scss'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { getOneFilm } from "../../../actions/action"
import { GET_ONE_FILM } from '../../../config/ActionType';
class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickDetail = this.handleClickDetail.bind(this);
        this.handleClickBookTicket = this.handleClickBookTicket.bind(this);
        this.state = {
        }
    }
    handleClickDetail(id) {
        window.location.href = "/detailfilm?id=" + id;
    }
    handleClickBookTicket(id) {
        window.location.href = "/book-ticket?id=" + id;
    }
    render() {
        return (
            this.props.listItem.map(item =>
                <Card className="bordered">
                    <button className="btn-card__detail" onClick={() => this.handleClickDetail(item._id)}> Chi tiết</button>
                    <button className="btn-card__bookticket" onClick={() => this.handleClickBookTicket(item._id)}> Đặt vé</button>
                    <img src={item.img} alt="" width='228px' height='332px' />
                </Card>
            )
        )
    }
}

function mapDispatchToProps(dispatch) {
    console.log("dispatch");
    return {
        getFilm: (id) => dispatch({ type: GET_ONE_FILM, id })
    }
}

// const mapDispatchToProps = dispatch => {
//     getFilm: (id) => dispatch(getOneFilm(id))
// }
export default connect(null, mapDispatchToProps)(CardItem)