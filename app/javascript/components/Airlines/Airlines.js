import React, { useState, useEffect } from 'react'
import Airline from '../Airline/Airline'

const Airlines = () => {
	const [airlines, setAirlines] = useState()
	
useEffect(() => { 
	fetch('http://localhost:3000/api/v1/airlines')
	.then(data => data.json())
	.then(data => setAirlines(data))
}, [])

	return (
		<div className="cardContainer">
			{ airlines?.data?.map((airline, index) => 
				<Airline key={index} airline={airline.attributes} />
			) }
		</div>
	)
}

export default Airlines
