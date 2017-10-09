import React, { Component } from 'react';
import Rating from '../src';


export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			starDefault: 0,
			noMeter: 0,
			svgStar: 0,
			svgRoundSqure: 0,
			svgBunny: 0,
			svgCamera: 0,
			svgGithub: 0,
			svgTriangle: 0,
			svgDiamond: 0,
			svgHeart: 0,
			svgFlower: 0,
			svgFlowerOne: 0,
			svgMoon: 0,
			svgCloud: 0,
			noSvg: 0
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleHover = this.handleHover.bind(this);
	}

	handleClick(rating, label, event) {
		this.setState({[label]:rating});
	}

	handleHover(rating, label, event) {
		console.log(`HOVER rating: ${rating}, label: ${label}`);
	}
	
	render() {
		let svgHeart = {
			path: "M11.608,21.997c-22.647-12.354-6.268-27.713,0-17.369C17.877-5.716,34.257,9.643,11.608,21.997z",
			viewBox: "0 0 23.217 21.217"
		}
		let svgDiamond = {
			path: "M246.038,83.955l-39.424-70.664c-1.325-2.374-3.831-3.846-6.55-3.846H46.93c-2.719,0-5.225,1.471-6.55,3.846L0.951,83.955 c-1.497,2.683-1.206,6.008,0.734,8.391l116.002,142.432c0.037,0.046,0.08,0.085,0.118,0.13c0.12,0.141,0.244,0.278,0.375,0.41 c0.015,0.015,0.028,0.033,0.043,0.048c0.034,0.033,0.069,0.064,0.104,0.096c0.012,0.012,0.025,0.021,0.037,0.033 c0.133,0.125,0.27,0.245,0.412,0.361c0.065,0.053,0.131,0.106,0.198,0.157c0.145,0.11,0.295,0.213,0.448,0.313 c0.072,0.047,0.143,0.094,0.216,0.139c0.129,0.077,0.263,0.148,0.397,0.219c0.055,0.028,0.108,0.059,0.164,0.086 c0.051,0.025,0.101,0.05,0.152,0.074c0.149,0.069,0.303,0.128,0.459,0.188c0.097,0.038,0.192,0.079,0.291,0.113 c0.019,0.006,0.035,0.015,0.054,0.021c0.007,0.002,0.014,0.003,0.021,0.005c0.066,0.022,0.137,0.034,0.205,0.054 c0.253,0.075,0.51,0.136,0.77,0.184c0.108,0.02,0.215,0.04,0.324,0.055c0.309,0.043,0.622,0.07,0.938,0.074 c0.029,0,0.058,0.007,0.088,0.007h0.001h0.001c0.03,0,0.059-0.007,0.088-0.007c0.317-0.004,0.63-0.031,0.939-0.074 c0.108-0.015,0.214-0.035,0.321-0.054c0.263-0.048,0.522-0.11,0.776-0.186c0.065-0.019,0.133-0.031,0.198-0.052 c0.008-0.003,0.016-0.003,0.023-0.006c0.02-0.006,0.036-0.015,0.055-0.022c0.098-0.033,0.191-0.074,0.287-0.11 c0.156-0.06,0.312-0.12,0.462-0.189c0.052-0.024,0.104-0.05,0.155-0.075c0.053-0.026,0.104-0.056,0.155-0.082 c0.136-0.071,0.271-0.143,0.401-0.221c0.074-0.045,0.146-0.093,0.22-0.141c0.152-0.099,0.302-0.202,0.444-0.311 c0.068-0.051,0.134-0.104,0.199-0.158c0.144-0.116,0.281-0.237,0.414-0.362c0.013-0.013,0.027-0.023,0.04-0.035 c0.03-0.029,0.062-0.056,0.092-0.086c0.017-0.017,0.032-0.036,0.049-0.053c0.134-0.135,0.261-0.276,0.383-0.42 c0.036-0.042,0.076-0.079,0.111-0.122L245.304,92.346C247.244,89.963,247.535,86.638,246.038,83.955z M138.3,24.446l21.242,55.664 H87.457l21.249-55.664H138.3z M160.065,95.11l-36.563,110.967L86.935,95.11H160.065z M71.142,95.11l32.524,98.699L23.282,95.11 H71.142z M175.858,95.11h47.851l-80.37,98.696L175.858,95.11z M226.715,80.11h-51.118l-21.242-55.664h41.306L226.715,80.11z M51.333,24.446h41.317L71.402,80.11H20.274L51.333,24.446z",
			viewBox: "0 -20 250 270"
		}
		let svgTriangle = {
			path: "M183.138438763306,172 16.8615612366939,172 100,28",
			viewBox: "0 0 200 200"
		}
		let svgGithub1 = {
			path: "M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027 c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5 c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25 c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66 c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5 c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8 s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25 c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25 s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5 v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094 c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675 c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41 s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353 C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z",
			viewBox: "0 0 512 512"
		}
		let svgGithub = {
			path: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z",
			viewBox: "0 0 438.549 438.549"
		}
		let svgFlower = {
			path: "m 6.5943115,251.58765 c 0,-39.68714 32.1726205,-71.85953 71.8593865,-71.85953 1.925706,0 3.833481,0.0759 5.720823,0.22435 -24.239793,-11.54715 -40.992852,-36.27274 -40.992852,-64.91105 0,-39.686728 32.172885,-71.859529 71.859611,-71.859529 28.63831,0 53.3639,16.752975 64.91105,40.993185 -0.14845,-1.887759 -0.22434,-3.795534 -0.22434,-5.72124 0,-39.686724 32.17238,-71.8595245 71.85952,-71.8595245 39.68672,0 71.85911,32.1728005 71.85911,71.8595245 0,15.149193 -4.6875,29.203344 -12.69181,40.791354 11.58801,-8.00431 25.64216,-12.69181 40.79135,-12.69181 39.68673,0 71.85953,32.17239 71.85953,71.85911 0,39.68714 -32.1728,71.85952 -71.85953,71.85952 -1.9257,0 -3.83348,-0.0759 -5.72124,-0.22434 24.24021,11.54715 40.99319,36.27274 40.99319,64.91105 0,39.68673 -32.1728,71.85961 -71.85953,71.85961 -28.63831,0 -53.3639,-16.75306 -64.91105,-40.99285 0.14845,1.88734 0.22435,3.79512 0.22435,5.72082 0,39.68677 -32.17239,71.85939 -71.85953,71.85939 -39.68672,0 -71.85911,-32.17262 -71.85911,-71.85939 0,-15.14919 4.68792,-29.20334 12.69181,-40.79135 -11.58801,8.00389 -25.64216,12.69181 -40.791353,12.69181 -39.686765,0 -71.8593855,-32.17239 -71.8593855,-71.85911 z M 167.87893,215.00007 c 0,26.02414 21.09686,47.121 47.121,47.121 26.02414,0 47.121,-21.09686 47.121,-47.121 0,-26.02414 -21.09686,-47.121 -47.121,-47.121 -26.02414,0 -47.121,21.09686 -47.121,47.121 z",
			viewBox: "0 0 420 420"
		}
		let svgMoon = {
			path: "M428.756,300.104c-0.664-3.81-2.334-7.047-4.996-9.713c-5.9-5.903-12.752-7.142-20.554-3.716   c-20.937,9.708-42.641,14.558-65.097,14.558c-28.171,0-54.152-6.94-77.943-20.838c-23.791-13.894-42.631-32.736-56.525-56.53   c-13.899-23.793-20.844-49.773-20.844-77.945c0-21.888,4.333-42.683,12.991-62.384c8.66-19.7,21.176-36.973,37.543-51.82   c6.283-5.898,7.713-12.752,4.287-20.557c-3.236-7.801-9.041-11.511-17.415-11.132c-29.121,1.141-56.72,7.664-82.797,19.556   C111.33,31.478,88.917,47.13,70.168,66.548c-18.747,19.414-33.595,42.399-44.54,68.95c-10.942,26.553-16.416,54.39-16.416,83.511   c0,29.694,5.806,58.054,17.416,85.082c11.613,27.028,27.218,50.344,46.824,69.949c19.604,19.599,42.92,35.207,69.951,46.822   c27.028,11.607,55.384,17.415,85.075,17.415c42.64,0,81.987-11.563,118.054-34.69c36.069-23.124,63.05-54.006,80.944-92.645   C429,307.519,429.427,303.906,428.756,300.104z M306.565,384.168c-24.646,11.711-50.676,17.562-78.087,17.562   c-24.743,0-48.39-4.853-70.947-14.558c-22.554-9.705-41.971-22.695-58.246-38.972c-16.271-16.272-29.259-35.686-38.97-58.241   c-9.707-22.556-14.561-46.203-14.561-70.948c0-40.922,12.135-77.466,36.403-109.636c24.266-32.165,55.531-53.959,93.788-65.379   c-19.795,31.405-29.694,65.379-29.694,101.926c0,34.644,8.564,66.715,25.697,96.223c17.128,29.499,40.446,52.811,69.95,69.948   c29.499,17.129,61.565,25.694,96.211,25.694c10.656,0,21.129-0.855,31.408-2.57C352.199,356.155,331.21,372.472,306.565,384.168z",
			viewBox: "0 0 418.277 438.277"
		}
		let svgCloud = {
			path: "M320,96c53.031,0,96,42.969,96,96c0,12.625-2.594,24.625-7.031,35.688C449.813,238.75,480,275.688,480,320  c0,53.031-42.969,96-96,96H112c-44.188,0-80-35.813-80-80s35.813-80,80-80c2.453,0,4.75,0.5,7.141,0.719  c-4.5-10-7.141-21.031-7.141-32.719c0-44.188,35.813-80,80-80c14.438,0,27.797,4.125,39.484,10.813  C246.016,120.25,280.156,96,320,96 M320,64c-40.938,0-78.531,19.344-102.344,51.063C209.266,113.031,200.703,112,192,112  c-61.75,0-112,50.25-112,112c0,1.563,0.031,3.094,0.094,4.625C33.828,242.375,0,285.313,0,336c0,61.75,50.25,112,112,112h272  c70.594,0,128-57.406,128-128c0-46.656-25.656-88.813-65.156-111.125C447.625,203.313,448,197.656,448,192  C448,121.438,390.594,64,320,64L320,64z",
			viewBox: "0 0 512 512"
		}
		let svgCamera = {
			path: "M448,176H320v-32h128V176z M512,144v256c0,35.344-28.656,64-64,64H64c-35.344,0-64-28.656-64-64V144  c0-35.344,28.656-64,64-64c0-17.688,14.328-32,32-32h64c17.672,0,32,14.313,32,32h256C483.344,80,512,108.656,512,144z M352,336  c0-53-42.969-96-96-96s-96,43-96,96s42.969,96,96,96S352,389,352,336z M480,144c0-17.656-14.344-32-32-32H64  c-17.656,0-32,14.344-32,32v64h448V144z M256,272c-35.281,0-64,28.688-64,64s28.719,64,64,64s64-28.688,64-64S291.281,272,256,272z",
			viewBox: "0 0 500 512"
		}
		let svgBunny = {
			path: "M214.462,170.278c-5.834-6.243-12.557-10.381-21.402-9.525  c-4.274,0.414-5.92-1.364-7.434-5.272c-9.424-24.331-25.745-42.778-48.589-55.417c-12.815-7.092-26.087-13.005-40.649-15.542  c-0.646-0.112-1.254-0.436-1.878-0.665c-0.919-0.337-2.159-0.564-1.81-1.886c0.395-1.489,1.559-0.513,2.45-0.519  c8.975-0.061,17.873,1.862,26.855,1.209c15.191-1.106,30.415-2.056,45.363-5.214c4.349-0.919,8.354-2.802,9.688-7.621  c1.259-4.549-1.384-7.657-4.475-10.379c-9.34-8.228-19.726-14.597-31.883-17.835c-1.533-0.408-4.054-0.444-4.287-1.947  c-0.322-2.084,2.464-2.184,3.828-3.168c4.444-3.207,9.179-6.012,13.627-9.212c4.29-3.086,7.021-7.279,6.159-12.767  c-0.668-4.259-6.519-8.053-12.265-8.826c-5.195-0.699-31.707-4.513-48.403-0.504S64.912,18.213,54.774,35.145  c-1.593,2.66-4.066,2.871-6.32,3.261C15.58,42.696,2.83,68.196,4.58,84.446s12.703,28.8,25.706,33.454  c1.995,0.714,1.745,4.061,1.745,4.061l-0.604,7.734c0,0-0.162,8.229-5.643,12.489c-15.741,12.234-14.75,34.001,1.191,44.927  c7.415,5.082,17.224,4.434,23.487-2.128c3.028-3.173,4.78-3.367,7.824-0.021c4.684,5.149,9.375,10.386,15.111,14.465  c2.24,1.593,1.589,3.162,0.449,5.103c-7.125,12.127-1.915,25.772,11.591,30.003c4.518,1.416,25.893,3.537,36.143,3.412  c10.25-0.125,23.601-2.696,29.88-4.696c6.055-1.928,9.466-5.806,10.757-11.872c1.043-4.9,8.558-9.02,12.932-6.699  c12.284,6.517,23.348,3.911,33.914-3.87c4.575-3.37,9.143-10.237,10.268-19.112S217.55,173.583,214.462,170.278z",
			viewBox: "0 0 224 241.333"
		}
		let svgRoundSqure= {
			path: "M142.201,107.099c0,19.387-15.717,35.102-35.102,35.102h-70.2c-19.386,0-35.101-15.715-35.101-35.102V36.9 C1.799,17.515,17.514,1.8,36.899,1.8h70.2c19.385,0,35.102,15.715,35.102,35.101V107.099z",
			viewBox: "0 0 150 144"
		}
		const titleStyle = {
			marginLeft: "10px",
			marginBottom: "10px",
			fontSize: "1.2em",
			fontFamily: "Helvetica, sans-serif",
			display: "table-caption"
		}
		const ratingStyle = {
			position: "relative",
			paddingBottom: "50px",
			display: "table",
			margin: "auto 0",
			
		}
		const textStyle = {
			marginLeft: "10px",
			marginTop: "8px"
		}

		const ratings = 
		[ 
			<div style={ratingStyle} key={"starDefault"}>
				<div style={titleStyle}>with default props</div>
				<Rating
					label={"starDefault"}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.starDefault}</div>
			</div>,
			<div style={ratingStyle} key={"noMeter"}>
				<div style={titleStyle}>just stars</div>
				<Rating
					label={"noMeter"}
					showMeter={false}
					starSelectColor={'#f9e613'}
					starSize={35}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.noMeter}</div>
			</div>,
			<div style={ratingStyle} key={"svgRoundSqure"}>
				<div style={titleStyle}>just 'stars' with custom svg, custom spacing</div>
				<Rating
					label={"svgRoundSqure"}
					showMeter={false}
					height={25}
					length={400}
					svg={svgRoundSqure}
					meterBorderSize={10}
					starEmptyColor={"#2F544A"}
					starSelectColor={"#F5AF9A"}
					highlightWidth={25}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgRoundSqure}</div>
			</div>,
			<div style={ratingStyle} key={"noSvg"}>
				<div style={titleStyle}>no svg</div>
				<Rating
					label={"noSvg"}
					numOfStars={10}
					height={25}
					length={400}
					svg={{path:null, viewBox:null}}
					meterBorderSize={5}
					meterEmptyColor={"#0F0C54"}
					meterSelectColor={"#E53FE5"}
					meterBorderColor={"#004D00"}
					meterBorderStyle={"outset"}
					highlightColor={"#F4270B"}
					highlightWidth={25}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.noSvg}</div>
			</div>,
			<div style={ratingStyle} key={"svgStar"}>
				<div style={titleStyle}>double border, oblong highlight</div>
				<Rating
					label={"svgStar"}
					height={40}
					length={300}
					meterEmptyColor={"rgb(245,236,247)"}
					meterSelectColor={"#F8F8FE"}
					meterBorderColor={"purple"}
					meterBorderSize={8}
					meterBorderStyle={"double"}
					highlightColor={"#CECEE5"}
					highlightWidth={60}
					starEmptyColor={"#d9bfbf"}
					starSelectColor={"green"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgStar}</div>
			</div>,
			<div style={ratingStyle} key={"svgBunny"}>
				<div style={titleStyle}>custom svg</div>
				<Rating
					label={"svgBunny"}
					height={40}
					length={250}
					svg={svgBunny}
					meterEmptyColor={"rgb(245,236,247)"}
					meterSelectColor={"#c1bb70"}
					meterBorderColor={"#a19b45"}
					meterBorderSize={3}
					meterBorderStyle={"solid"}
					highlightColor={"#7076c2"}
					highlightWidth={40}
					starEmptyColor={"#d9bfbf"}
					starSelectColor={"white"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgBunny}</div>
			</div>,
			<div style={ratingStyle} key={"svgCamera"}>
				<div style={titleStyle}>custom border size</div>
				<Rating
					label={"svgCamera"}
					height={40}
					length={240}
					svg={svgCamera}
					meterEmptyColor={"rgb(250, 250, 243)"}
					meterSelectColor={"#852A0A"}
					meterBorderColor={"#0A6585"}
					meterBorderSize={10}
					meterBorderStyle={"solid"}
					highlightColor={"#330019"}
					highlightWidth={60}
					starEmptyColor={"#B1B1B1"}
					starSelectColor={"#FF0080"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgCamera}</div>
			</div>,
			<div style={ratingStyle} key={"svgGithub"}>
				<div style={titleStyle}>set initial rating, oblong highlight</div>
				<Rating
					label={"svgGithub"}
					height={50}
					length={280}
					initialRating={3}
					svg={svgGithub}
					meterEmptyColor={"white"}
					meterSelectColor={"#EAD1B1"}
					meterBorderColor={"#E7EAB1"}
					meterBorderSize={10}
					meterBorderStyle={"double"}
					highlightColor={"#E5A29D"}
					highlightWidth={40}
					starEmptyColor={"#d9bfbf"}
					starSelectColor={"#332123"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgGithub}</div>
			</div>,
			<div style={ratingStyle} key={"svgTriangle"}>
				<div style={titleStyle}>no highlight</div>
				<Rating
					label={"svgTriangle"}
					height={40}
					length={300}
					svg={svgTriangle}
					meterEmptyColor={"#E1F5F7"}
					meterSelectColor={"blue"}
					meterBorderColor={"orange"}
					meterBorderSize={5}
					meterBorderStyle={"solid"}
					highlightColor={"transparent"}
					highlightWidth={60}
					starEmptyColor={"white"}
					starSelectColor={"#89DAE0"}
					starSize={30}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgTriangle}</div>
			</div>,
			<div style={ratingStyle} key={"svgDiamond"}>
				<div style={titleStyle}>custom scale</div>
				<Rating
					label={"svgDiamond"}
					height={70}
					length={520}
					svg={svgDiamond}
					meterEmptyColor={"#fff1ee"}
					meterSelectColor={"#d56961"}
					meterBorderColor={"black"}
					meterBorderSize={12}
					meterBorderStyle={"double"}
					highlightColor={"#F0DDC6"}
					highlightWidth={70}
					starEmptyColor={"#b2b2b2"}
					starSelectColor={"#ffa291"}
					starSize={35}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgDiamond}</div>
			</div>,
			<div style={ratingStyle} key={"svgHeart"}>
				<div style={titleStyle}>no border, no meter color change, no highlight</div>
				<Rating
					label={"svgHeart"}
					height={40}
					length={500}
					svg={svgHeart}
					meterEmptyColor={"#003400"}
					meterSelectColor={"transparent"}
					meterBorderColor={"purple"}
					meterBorderSize={0}
					meterBorderStyle={"double"}
					highlightColor={"transparent"}
					highlightWidth={60}
					starEmptyColor={"#bba871"}
					starSelectColor={"green"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgHeart}</div>
			</div>,
			<div style={ratingStyle} key={"svgFlower"}>
				<div style={titleStyle}>custom number of 'stars'</div>
				<Rating
					label={"svgFlower"}
					numOfStars={20}
					height={40}
					length={800}
					svg={svgFlower}
					meterEmptyColor={"grey"}
					meterSelectColor={"#F8F8FE"}
					meterBorderColor={"#596a01"}
					meterBorderSize={8}
					meterBorderStyle={"double"}
					highlightColor={"#6699A4"}
					highlightWidth={40}
					starEmptyColor={"#A6A6A6"}
					starSelectColor={"#015668"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgFlower}</div>
			</div>,
			<div style={ratingStyle} key={"svgFlowerOne"}>
				<div style={titleStyle}>1 'star'</div>
				<Rating
					label={"svgFlowerOne"}
					numOfStars={1}
					height={50}
					length={50}
					svg={svgFlower}
					meterEmptyColor={"#FBFDFE"}
					meterBorderColor={"#092A58"}
					meterBorderSize={12}
					meterBorderStyle={"solid"}
					highlightColor={"#FEBBC0"}
					highlightWidth={50}
					starEmptyColor={"#DCF1F9"}
					starSelectColor={"#EF6852"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgFlowerOne}</div>
			</div>,
			<div style={ratingStyle} key={"svgMoon"}>
				<div style={titleStyle}>read only</div>
				<Rating
					readOnly={true}
					initialRating={4}
					height={40}
					length={280}
					label={"svgMoon"}
					svg={svgMoon}
					meterEmptyColor={"#f6ece6"}
					meterSelectColor={"#FFC180"}
					meterBorderColor={"#093419"}
					meterBorderSize={6}
					meterBorderStyle={"solid"}
					highlightColor={"#9A455C"}
					highlightWidth={40}
					starSelectColor={"#FFE6CC"}
					starSize={25}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgMoon}</div>
			</div>,
			<div style={ratingStyle} key={"svgCloud"}>
				<div style={titleStyle}>no meter color change, css 'ridge' border</div>
				<Rating
					label={"svgCloud"}
					numOfStars={8}
					height={65}
					length={520}
					svg={svgCloud}
					meterBorderSize={8}
					meterSelectColor={"transparent"}
					meterBorderColor={"#d4d4f7"}
					meterBorderStyle={"ridge"}
					starEmptyColor={"#DEC3A4"}
					starSelectColor={"black"}
					highlightColor={"#C5FF8C"}
					highlightWidth={65}
					starSize={45}
					getRating={this.handleClick}
					onHover={this.handleHover}
				/>
				<div style={textStyle}>rating: {this.state.svgCloud}</div>
			</div>,
		]

		return (
			<div style={{width:"100%", height:"auto"}}>
				<div style={{position: "absolute", top: "50%", left: "10%", transform: "translate(-5%, -50%)", marginTop: "5%", height: "100%"}} >
					<div style={{color:"red", fontFamily: "Helvetica, sans-serif", fontSize:"1.5em", fontWeight:"bolder", letterSpacing:"2px", margin:"0 0 40px 10px", textDecoration: "underline"}}>some examples:</div>
					{ratings}
				</div>
			</div>
		)
	}
}
