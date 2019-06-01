import React from 'react';
import { Card } from 'reactstrap';
import './CardItem.scss'
import { Link } from 'react-router-dom'
export default class CardItem extends React.Component {
    render() {
        return (
            this.props.listItem.map(item => <Link to="DetailFilm">
                <Card className="bordered"><img src={item.img} alt="" width='228px' height='332px' />
                </Card>
            </Link>)
        )
    }

}