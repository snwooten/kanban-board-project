import React from 'react'
import './taskCard.css'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const TaskCard = props => {
	const { title, id } = props
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	  } = useSortable({id: id});
	  
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
