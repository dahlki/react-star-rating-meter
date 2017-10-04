import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Icon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
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
		if (this.props.readOnly) return
		this.setState({hover:false});
		this.props.leave(e);
	}

	render() {
		const { path, starSize, viewBox, pathStyle, num, space, selected } = this.props;
		const fill = this.props.getStarColor(num) || this.props.fill;
		const { size: circleSize, color: circleColor } = this.props.circle;
		const circleStyle = {
			boxSizing: "content-box",
			backgroundColor: (this.state.hover || selected) && this.props.showMeter ? `${circleColor}` : "transparent",
			border: (this.state.hover || selected) && this.props.showMeter ? `1px solid ${circleColor}` : "1px solid transparent",
			top: "-1px",
			display: "inline-block",
			height: circleSize,
			width: circleSize,
			position: "relative",
			borderRadius: 100,
			pointerEvents: "auto",
			cursor: this.props.readOnly ? "auto" : "pointer"
		};

		const meterColor = this.props.getMeterColor(num)
		const starContainerStyle = {
			display: "block", 
			width: space, 
			textAlign: "center",
			height: circleSize,
			...meterColor
		};
		const svgDivStyle = {
			display: "flex",
			position:"absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			zIndex:2
		};


		return (
			<div className="star-section" style={starContainerStyle} onMouseOver={(e) => this.onHover(num, e)} onMouseLeave={this.onLeave} onClick={() => this.props.click(num)}>
					<div className="star-circle" style={circleStyle} >
						<div className="svg-div" style={svgDivStyle}>
							<svg width={starSize} height={starSize} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
								<path d={path} fill={fill} fillRule="evenodd" style={pathStyle}/>
							</svg>
						</div>
					</div>
			</div>
		)
	}
}

Icon.PropTypes = {

}

