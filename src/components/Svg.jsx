import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Svg = ({svg, svgFill, svgSize, ...props} ) => {
	const size = `${svgSize}px`

	const svgDivStyle = {
		display: "flex",
		position:"absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		zIndex:2
	};

	const pathStyle = {
		pointerEvents: "visible", 
		position: "absolute"
	};

	return (
		<div className="svg-div" style={svgDivStyle}>
			<svg width={size} height={size} viewBox={svg.viewBox} xmlns="http://www.w3.org/2000/svg">
				<path d={svg.path} fill={svgFill} fillRule="evenodd" style={pathStyle}/>
			</svg>
		</div>
	)
};

Svg.defaultProps = {
	svg : {
		path: "M11 0l3.399 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053l7.6-1.112z",
		viewBox: "0 0 22 22",
	},
	svgSize: 18,
	svgFill: "#af9ea3"
	// svgFill: "#B1B1B1"
};

export default Svg;
