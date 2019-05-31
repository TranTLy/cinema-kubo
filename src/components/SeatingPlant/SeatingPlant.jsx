import React, { Component } from 'react';
import './SeatingPlant.scss';
import MAX_SEAT from '../../utility';


export class SeatingPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumSeatChose: 0,
            arrayPositionSeat: []
        }
    }

    getSeatPlant = (stateSeat) => {
        const AVAILABLE = "0";
        const UNAVAILABLE = "1";
        var results = [];
        for (let i = 0; i < stateSeat.length; i++) {
            if (stateSeat[i] == AVAILABLE) {
                results.push(
                    <div className='seat-wrap seat-wrap--available' onClick={() => { this.chooseSeat(i) }}>
                        <span className='seat'>
                            {i + 1}
                        </span>
                    </div>
                );
            }
            else {
                results.push(
                    <div className='seat-wrap seat-wrap--unavailable'>
                        <span className='seat'>
                            {i + 1}
                        </span>
                    </div>);
            }
        }
        return results;
    }

    chooseSeat = (position) => {
        const seats = document.getElementsByClassName("seat-wrap");
        const seat = seats[position];
        var newArr = this.state.arrayPositionSeat;
        if (seat.classList.contains("seat-choosen")) {
            console.log("not chose");
            seat.classList.remove("seat-choosen");
            this.setState({ sumSeatChose: this.state.sumSeatChose - 1 });

            newArr = newArr.filter((item) => item != position);
            this.setState({ arrayPositionSeat: newArr });

        }
        else if (this.state.sumSeatChose < this.props.maxSeat) {
            console.log(" chose");

            seat.classList.add("seat-choosen");

            newArr = [...this.state.arrayPositionSeat, position];
            this.setState({ sumSeatChose: this.state.sumSeatChose + 1 });
            this.setState({ arrayPositionSeat: newArr });
            console.log("arr after push", newArr);
        }
        console.log("arr position: ", this.state.arrayPositionSeat);
        //this.props.setNumberSeatChose(this.state.arrayPositionSeat);
    }



    render() {
        const { stateSeat, maxSeat } = this.props;

        return (
            <div className="seating-plant-wrap">
                <div className="seating-plant__sum-seat-chose">Bạn đã chọn {this.state.sumSeatChose} vé/ {maxSeat} vé</div>
                <div className="seating-plant">
                    {
                        this.getSeatPlant(stateSeat)
                    }
                </div>
            </div>
        );
    }
}
