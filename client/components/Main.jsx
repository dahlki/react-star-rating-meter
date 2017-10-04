import React, { Component } from 'react';
import Rating from './StarRating';

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			rating: null
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(rating, event) {
		this.setState({rating:rating});
	}

	render() {
		const options = {
			showMeter: false,
			rating: 3,
			stars: 3
		}

		return (
			<div style={ {position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"} } >
				<Rating getRating={this.handleClick} showMeter={true} rating={2} numOfStars={10} meterBorderProps={{size:"5px", style:"solid"}} />
			</div>
		)
	}
}
