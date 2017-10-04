import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';
import Star from './Icon';


export default class StarRating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ratingMemo: 0,
			rating: 0,
			hover: 0,
		}
		this.newProps = Object.assign({}, cloneDeep(props), {...this.props});

		this.handleHover = this.handleHover.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
		this.handleStarClick = this.handleStarClick.bind(this);
		this.meterColor = this.meterColor.bind(this);
		this.starColor = this.starColor.bind(this);
		console.log();
		console.log(this.newProps);
	}

	componentDidMount() {
		const rating = typeof this.props.rating === "number" ? this.props.rating : 0;
		this.setState({rating, ratingMemo: rating});
		this.props.getRating(rating);
	}
	handleHover(rating, e) {
		this.setState({hover: rating, rating: 0});
	}
	handleLeave(e) {
		this.setState({rating: this.state.ratingMemo});
		this.setState({hover:0});
	}
	handleStarClick(rating) {
		if (this.props.readOnly) return;
		this.setState({rating, ratingMemo: rating});
		this.props.getRating(rating);
	}
	meterColor(n) {
		const { rating, hover } = this.state;
		const {numOfStars, meterProps} = this.props;
		let color = {background: "", borderRadius: ""};
		// #270011 291E29 F1C714
		if (meterProps.showMeter && n > 0) {
			if ((n < rating || n < hover) || (n === numOfStars && hover === numOfStars)) color.background = meterProps.selectColor ;
			else if (n === rating || n === hover) color.background = `linear-gradient(90deg, ${meterProps.selectColor} 50%, transparent 0)`;
			if (n === 1) color.borderRadius = "14em 0 0 14em";
			if (n === numOfStars) color.borderRadius = "0 14em 14em 0";
		}
		return color;
	}
	starColor(n) {
		const { rating, hover } = this.state;
		const { starProps } = this.props
		let color = starProps.fill;
		if ((n <= rating || n <= hover) && n > 0) color = starProps.selectFill;
		return color;
	}

	render() {
		const { rating, hover } = this.state;
		const { meterBorderProps, numOfStars, meterProps, starProps, circleProps } = this.props;
		const meterBackground = ((rating === numOfStars || hover === numOfStars) && meterProps.showMeter) ? meterProps.selectColor : meterProps.color;

		const meterStyle = {
			display: "flex", 
			position:"relative",
			boxSizing: "content-box", 
			alignItems: "center", 
			justifyContent: "space-around", 
			borderRadius: "15em",
  		cursor: "pointer",
  		pointerEvents: "none",
			width: meterProps.length,
			border: meterProps.showMeter ? `${meterBorderProps.size} ${meterBorderProps.style} ${meterBorderProps.color}` : "", 
			background: meterProps.showMeter ? meterBackground : "",
		}
		const starPathStyle = {
			pointerEvents: "visible", 
			position: "absolute"
		}

		let starComponents = [];

		for (let i = 0; i < this.props.numOfStars; i++) {
			const selectedStar = this.state.rating === i + 1;
			starComponents.push(
				<Star
					hover={this.handleHover}
					leave={this.handleLeave}
					click={this.handleStarClick}
					selected={selectedStar}
					pathStyle={starPathStyle}
					starSize={starProps.size}
					getStarColor={this.starColor}
					num={i+1}
					circle={circleProps}
					space={"50px"}
					getMeterColor={this.meterColor}
					key={`star${i+1}`}
					path={this.props.path}
					fill={this.props.fill}
					viewBox={this.props.viewBox}
					readOnly={this.props.readOnly}
					showMeter={this.props.showMeter}
				/>
			)
		}

		return (
			<div style={meterStyle}>
				{starComponents}
			</div>
		)
	}
}

StarRating.propTypes = {
	readOnly: PropTypes.bool,
	numOfStars: PropTypes.number,
	rating: PropTypes.number,
	meterBorderProps: PropTypes.shape({
		color: PropTypes.string.useDefault,
		size: PropTypes.string,
		style: PropTypes.string
	})
}

StarRating.defaultProps = {
	readOnly: false,
	numOfStars: 5,
	rating: 0,
	meterProps: {
		showMeter: true,
		color: "#F3F3F3",
		selectColor: "#291E29",
		length: "500px"
	},
	meterBorderProps: {
		color: "#B1B1B1",
		size: "3px",
		style: "solid"
	},
	circleProps: {
		color: "pink",
		size: "50px",
	},
	starProps: {
		fill: "#B1B1B1",
		selectFill: "#D60429",
		size: "30px"
	},
	
	space: "150px",

	path: "M11 0l3.399 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053l7.6-1.112z",
	viewBox: "0 0 22 22",
	
	// path: "M14.709.742c-.42 0-.801.092-1.111.204-1.486.536-2.79 2.054-3.322 3.868-.239.816-.434 2.21-.498 3.605 1.184-.09 2.318-.32 3.234-.693-.25-.767-.853-1.44-1.72-1.852a.372.372 0 1 1 .32-.672c1.027.488 1.753 1.283 2.08 2.2 1.71-.939 3.456-2.76 3.559-4.351.048-.738-.286-1.353-.991-1.828a2.727 2.727 0 0 0-1.551-.48m-10.01 7.12c.945.334 2.092.528 3.275.582a24.678 24.678 0 0 0-.31-3.772C7.341 2.756 5.687 1.43 4.191.966 2.976.588 1.89.736 1.288 1.359.704 1.963.695 2.776.79 3.352c.267 1.604 1.611 3.401 3.129 4.18l.089.044c.314-1.019 1.059-1.852 2.155-2.357a.372.372 0 0 1 .312.677c-.928.427-1.539 1.114-1.778 1.967m-.112.749a3.62 3.62 0 0 0 .03.568c.227 1.776 1.198 3.32 1.962 3.646.235.1.429.084.611-.05.481-.355.734-1.82.778-3.583-1.207-.053-2.383-.247-3.38-.581m5.169.558c-.016 1.516.145 2.909.598 3.407.387.426.637.362.72.34.753-.192 1.572-2.046 1.992-3.778.054-.221.078-.444.074-.663-.983.376-2.162.607-3.384.694m1.202 4.507c-.324 0-.73-.132-1.155-.6-.607-.667-.81-2.228-.799-3.873-.098.002-.195.004-.293.004-.037 1.846-.308 3.598-1.08 4.167-.394.29-.871.338-1.345.136-1.107-.474-2.165-2.334-2.41-4.236a4.238 4.238 0 0 1-.017-.947 6.193 6.193 0 0 1-.279-.134C1.873 7.318.358 5.289.057 3.474-.121 2.407.12 1.497.752.842c.802-.83 2.17-1.05 3.66-.587 1.59.493 3.586 1.913 3.985 4.295.14.835.299 2.354.317 3.91.103 0 .207-.002.31-.004.068-1.531.297-3.03.538-3.852C10.168 2.54 11.618.87 13.345.245c1.175-.423 2.358-.295 3.331.36.927.625 1.383 1.488 1.318 2.494-.128 1.978-2.206 4.062-4.129 5.053.043.38.02.772-.075 1.163-.223.92-1.065 3.95-2.532 4.324-.089.023-.19.038-.3.038",
	// viewBox: "0 0 18 13",
	// _selectFill: "#D60429"
}

