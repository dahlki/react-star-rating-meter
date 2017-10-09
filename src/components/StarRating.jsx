import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Meter from './Meter';
import StarContainer from './StarContainer';


export default class StarRating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ratingMemo: 0,
			rating: 0,
			hover: 0,
		}
		this.handleHover = this.handleHover.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
		this.handleStarClick = this.handleStarClick.bind(this);
		this.meterColor = this.meterColor.bind(this);
		this.starColor = this.starColor.bind(this);
	}

	componentDidMount() {
		const {initialRating} = this.props
		const rating = typeof initialRating === "number" && initialRating >= 0 ? initialRating : 0;
		this.setState({rating, ratingMemo: rating});
		this.props.getRating(rating, this.props.label)
	}

	handleHover(rating, e) {
		if (this.props.readOnly) return;
		this.setState({hover: rating, rating: 0});
		this.props.onHover && this.props.onHover(rating, this.props.label, e);
	}

	handleLeave(e) {
		this.setState({rating: this.state.ratingMemo});
		this.setState({hover:0});
	}

	handleStarClick(rating, e) {
		if (this.props.readOnly) return;
		this.setState({rating, ratingMemo: rating});
		this.props.getRating && this.props.getRating(rating, this.props.label, e);
	}

	validateSvg(svgObj) {
		if (!svgObj) return;
		if (Object.keys(svgObj).length < 2) return;
		else if (!svgObj.hasOwnProperty('path') || !svgObj.hasOwnProperty('viewBox')) return;
		else return svgObj;
	}

	getBorderRadius(side, amt) {
		if (!amt) amt = "5rem";
		let borderRadius = "";
		switch (side) {
			case "left" :
				borderRadius = `${amt} 0 0 ${amt}`;
				break;
			case "right" :
				borderRadius = `0 ${amt} ${amt} 0`;
				break;
			case "both" :
				borderRadius = 100;
				break;
			default:
				borderRadius = "";
		}
		return borderRadius;
	}

	meterColor(n, color) {
		const { rating, hover } = this.state;
		const { showMeter, numOfStars } = this.props;
		let showColor = {background: "", borderRadius: ""};

		if (!showMeter || n < 0) return;
		
		if ((n < rating || n < hover) || (n === numOfStars && (hover === numOfStars || rating === numOfStars))) showColor.background = color;
		else if (n === rating || n === hover) showColor.background = `linear-gradient(90deg, ${color} 50%, transparent 0)`;

		if (n === 1) showColor.borderRadius = this.getBorderRadius("left");
		if (n === numOfStars) showColor.borderRadius = this.getBorderRadius("right");
		if (n === 1 && n === numOfStars) showColor.borderRadius = this.getBorderRadius("both");
		return showColor;
	}

	starColor(n, selectColor) {
		const { rating, hover } = this.state;
		if (n <= rating || n <= hover) return selectColor;
	}

	render() {
		const { readOnly, numOfStars, height, length, showMeter } = this.props;
		const { meterEmptyColor, meterSelectColor, meterBorderColor, meterBorderSize, meterBorderStyle } = this.props;
		const { highlightColor, highlightWidth } = this.props;
		const { starEmptyColor, starSelectColor, starSize } = this.props;	
		const svg = this.validateSvg(this.props.svg);

		let starComponents = [];

		for (let i = 0; i < this.props.numOfStars; i++) {
			const selectedStar = this.state.rating === i + 1;
			starComponents.push(
				<StarContainer
					hover={this.handleHover}
					leave={this.handleLeave}
					click={this.handleStarClick}
					selected={selectedStar}
					readOnly={readOnly}
					numOfStars={numOfStars}
					height={height}
					length={length}
					showMeter={showMeter}
					getMeterColor={this.meterColor}
					meterSelectColor={meterSelectColor}
					highlightColor={highlightColor}
					highlightWidth={highlightWidth}
					getStarColor={this.starColor}
					svgFill={starEmptyColor}
					selectSvgFill={starSelectColor}
					starSize={starSize}
					svg={svg}
					num={i+1}
					key={`star${i+1}`}
				/>
			);
		}

		return (
			<Meter 
				showMeter={showMeter} 
				height={height}
				length={length} 
				color={meterEmptyColor}
				borderColor={meterBorderColor}
				borderSize={meterBorderSize}
				borderStyle={meterBorderStyle}
			>
				{starComponents}
			</Meter>
		)
	}
};

StarRating.propTypes = {
	readOnly: PropTypes.bool,
	numOfStars: PropTypes.number,
	initialRating: PropTypes.number,
	height: PropTypes.number,
	length: PropTypes.number,
	showMeter: PropTypes.bool,
	label: PropTypes.string,

	svg: PropTypes.shape({
		path: PropTypes.string,
		viewBox: PropTypes.string
	}),

	meterEmptyColor: PropTypes.string,
	meterSelectColor: PropTypes.string,
	meterBorderColor: PropTypes.string,
	meterBorderSize: PropTypes.number,
	meterBorderStyle: PropTypes.string,

	highlightColor: PropTypes.string,
	highlightWidth: PropTypes.number,

	starEmptyColor: PropTypes.string,
	starSelectColor: PropTypes.string,
	starSize: PropTypes.number,

	getRating: PropTypes.func,
	onHover: PropTypes.func

};

StarRating.defaultProps = {
	readOnly: false,
	numOfStars: 5,
	initialRating: 0,
	height: 30,
	length: 250,
	showMeter: true,
	label: "StarRating"
};
