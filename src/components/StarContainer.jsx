import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from './Highlight';
import Svg from './Svg'


export default class StarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		}
		this.onHover = this.onHover.bind(this);
		this.onLeave = this.onLeave.bind(this);
	}

	onHover(num, e) {
		if (this.props.readOnly) return;
		this.setState({hover:true});
		this.props.hover(num, e);
	}

	onLeave(e) {
		if (this.props.readOnly) return;
		this.setState({hover:false});
		this.props.leave(e);
	}

	getContainerSize(meterLength, starNum) {
		return Math.ceil(meterLength / starNum);
	}

	validateSize(userSize, maxSize) {
		const newSize = userSize <= maxSize ? userSize : maxSize;
		return newSize;
	}

	render() {
		const { svg, num, selected, showMeter, readOnly, numOfStars, length, highlightColor, svgFill } = this.props;

		const fill = this.props.getStarColor(num, this.props.selectSvgFill) || svgFill;
		const meterColor = this.props.getMeterColor(num, this.props.meterSelectColor);

		let { highlightWidth, starSize } = this.props;
		let containerWidth = this.getContainerSize(length, numOfStars);

		if (highlightWidth) highlightWidth = this.validateSize(highlightWidth, containerWidth);
		if (starSize) starSize = this.validateSize(starSize, containerWidth);

		const containerStyle = { 
			marginLeft: "-1px",
			// marginTop: ".1%",
			marginBottom: "0px",
			boxSizing: "content-box",
			border: "1px",
			width: `${containerWidth}px`, 
			textAlign: "center",
			height: "100%",
			cursor: readOnly ? "auto" : "pointer",
			pointerEvents: "auto",
			...meterColor
		};

		return (
			<span className="star-container" style={containerStyle} onMouseOver={(e) => this.onHover(num, e)} onMouseLeave={this.onLeave} onClick={(e) => this.props.click(num, e)}>
				<Highlight num={num} color={highlightColor} width={highlightWidth} hover={this.state.hover} selected={selected} showMeter={showMeter} containerWidth={containerWidth}>
					<Svg svgFill={fill} svgSize={starSize} svg={svg}/>
				</Highlight>
			</span>
		)
	}
};

StarContainer.defaultProps = {
	selectSvgFill: "#D60429",
	meterSelectColor: "#311E24"
};
