import React from 'react'

const priority = [
	'Low',
	'Medium',
	'High',
]

const demoData = [
	{
		title: 'Card 1',
		id: 0,
		swimLaneId: 0,
		swimLaneIndex: 0,
		priority: 1,
		userId: 1,
	},
	{
		title: 'Card 2',
		id: 1,
		swimLaneId: 0,
		swimLaneIndex: 1,
		priority: 0,
		userId: 2,
	},
	{
		title: 'Card 3',
		id: 2,
		swimLaneId: 1,
		swimLaneIndex: 0,
		priority: 2,
		userId: 1,
	},
]

const useMockData = () => {
	const fetchMockData = async () => await new Promise((resolve) => setTimeout(resolve(demoData), 200))

	return fetchMockData
}

export default useMockData
