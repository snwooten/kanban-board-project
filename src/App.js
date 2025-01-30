import './App.css';
import SwimLane from './components/SwimLane';
import TaskCard from './components/TaskCard';
import useMockData from './api/useMockData';
import { useReducer, useState, useEffect } from 'react';
import { INITIAL_STATE } from './reducers/reducers.js'
import _ from 'lodash'

function reducer(state, action) {
  switch(action.type){
    case 'addCard':
      return { ...state, cards: {...state.cards, ...action.entity}}
    case 'moveCard':
      console.log('moveCard')
      break;
    default:
     return state
  }
}

function App() {
<<<<<<< Updated upstream
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
=======
  const [data, setData] = useState()
	const fetchMockdata = useMockData()
	fetchMockdata().then(res => setData(res))

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    dispatch({ type: 'addCard', entity: _.keyBy(data, 'id') })
  }, [data])

  const { cards } = state

  return (
    <div className="App">
      <header className="App-header">
		<SwimLane>
			{Object.values(cards)?.map(card => <TaskCard title={card.title}/>)}
		</SwimLane>
      </header>
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
