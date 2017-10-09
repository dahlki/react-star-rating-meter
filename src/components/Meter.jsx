import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Meter = ({children, showMeter, height, length, ...props}) => {

	const meterStyle = {
		display: "-webkit-box",
	  display: "-moz-box",
	  display: "-ms-flexbox",
	  display:" -webkit-flex",
	  display: "flex",
	  paddingLeft: "1px",
		height: `${height*.998}px`,
		position:"relative",
		boxSizing: "content-box", 
		alignItems: "center", 
		justifyContent: "center", 
		borderRadius: `${length/10}rem`,
  	cursor: "pointer",
  	pointerEvents: "none",
		width: `${length}`,
		border: showMeter ? `${props.borderSize}px ${props.borderStyle} ${props.borderColor}` : "", 
		background: showMeter ? props.color : "",
		fontSize: "0",
	};

	return (
		<div className="meter" style={meterStyle}>
			{children}
		</div>
	)
};

Meter.defaultProps = {
	// color: "F3f3f3",d4d4f7
	color: "#F0E7E7",
	borderColor: "#785A65",
	borderSize: 3,
	borderStyle: "solid"
};

export default Meter;
