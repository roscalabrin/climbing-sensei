import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import App from './components/App.js.jsx'
import BuilderContainer from './components/containers/BuilderContainer.js.jsx'
import DashboardContainer from './components/containers/DashboardContainer.js.jsx'
import NewDay from './components/UI/NewDay.js.jsx'
import SavedDays from './components/UI/SavedDays.js.jsx'
import Exercise from './components/UI/Exercise.js.jsx'
import GoalsAndDetails from './components/UI/GoalsAndDetails.js.jsx'
import Steps from './components/UI/Steps.js.jsx'
import IntensityAndBeta from './components/UI/IntensityAndBeta.js.jsx'
import Tags from './components/UI/Tags.js.jsx'
import Exercises from './components/UI/Exercises.js.jsx'
import mainReducer from './reducers/mainReducer'
import './css/index.css'

const middleware = routerMiddleware(browserHistory)
const reducers = combineReducers({ mainReducer, routing: routerReducer })
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <Route path="/my-account" component={ DashboardContainer }>
          <Route path="/saved-days/new" component={ NewDay } />
          <Route path="/saved-days/index" component={ SavedDays } />
        </Route>

        <Route path="/builder" component={ BuilderContainer }>

          <Route path="/exercises/:exerciseName" component={ Exercise }>
            <Route path="/exercises/:exerciseName/goals-and-details" component={ GoalsAndDetails } />
            <Route path="/exercises/:exerciseName/steps" component={ Steps } />
            <Route path="/exercises/:exerciseName/intensity-and-beta" component={ IntensityAndBeta } />
          </Route>

          <Route path="/tags/:tagName" component={ Exercises } />
        </Route>

      </Route>
    </Router>
  </Provider>,
    document.getElementById('root')
);
