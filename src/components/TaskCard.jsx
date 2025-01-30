import React from 'react'
import './taskCard.css'

const TaskCard = ({ title }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	  } = useSortable({id: props.id});
	  
	  const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	  }

	return (
		<>
			<div className='cardContainer' > {title} </div>
		</>
	)
}

export default TaskCard
