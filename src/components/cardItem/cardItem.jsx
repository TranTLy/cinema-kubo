import React from 'react';
import { Card } from 'reactstrap';
import './CardItem.scss'
export default class CardItem extends React.Component{
    render(){
        return (
            this.props.listItem.map(item => <Card><img src={item.img} alt=""/></Card>)
        )
    }
    
}