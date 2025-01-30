import React from 'react'
import useMockData from '../api/useMockData'
import './swimLane.css'

const SwimLane = ({ children }) => {
	return (
		<>
			<div className='swimLaneContainer'>{children}</div>
		</>
	)
}

export default SwimLane
