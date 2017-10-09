import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Highlight = ({children, num, ...props}) => {

	const { color, hover, selected, showMeter, containerWidth } = props;
	let { width } = props;
	width = width <= containerWidth ? width : containerWidth;

	const circleStyle = {
		boxSizing: "content-box",
		backgroundColor: (hover || selected) && showMeter ? `${color}` : "transparent",
		display: "inline-block",
		height: "100%",
		width: `${width}px`,
		position: "relative",
		borderRadius: 100,
		zIndex: 1
	};

	return (
		<div className="star-circle" style={circleStyle}>
			{children}
		</div>
	)
};

Highlight.defaultProps = {
	color: "#FFD6DD",
	width: 30
};

export default Highlight;
