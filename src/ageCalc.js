import React, { Component } from 'react';
import partybg from './assets/party-popper.jpg';

class AgeCalc extends Component {
	timeSince(date){

		let today = new Date().getTime();
		let other = new Date(date).getTime();
		let difference = Math.abs(today - other);

		let days = Math.floor(difference / (1000*3600*24));
		let years = Math.floor(days/365);
		days -= years*365;
		let months = Math.floor(days/31);
		days -= months*31;

		if(years || months || days > 0)
			return `${years} years, ${months} months, ${days} days`
		else
			return `${0} years, ${0} months, ${0} days`
	}

	render(){
		return(
			<div> 
				<h3>Entered Date is {this.props.date}</h3>
				<h4>Your details are {this.timeSince(this.props.date)}!</h4>
				<img src={partybg} alt = "partybg" className = "partybg"/>
			</div>
		)
	}
}

export default AgeCalc;