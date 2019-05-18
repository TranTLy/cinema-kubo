import React from 'react';
import { Card } from 'reactstrap';
import './CardItem.scss'
import { Link } from 'react-router-dom'
export default class CardItem extends React.Component {
    render() {
        return (
            this.props.listItem.map(item => <Link to="DetailFilm"> <Card><img src={item.img} alt="" /></Card></Link>)
        )
    }

}