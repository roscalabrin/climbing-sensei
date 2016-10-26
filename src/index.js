import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App.js.jsx'
import BuilderContainer from './components/containers/BuilderContainer.js.jsx'
import DashboardContainer from './components/containers/DashboardContainer.js.jsx'
import NewDay from './components/UI/NewDay.js.jsx'
import SavedDays from './components/UI/SavedDays.js.jsx'
import Routine from './components/UI/Routine.js.jsx'
import GoalsAndDetails from './components/UI/GoalsAndDetails.js.jsx'
import Steps from './components/UI/Steps.js.jsx'
import IntensityAndBeta from './components/UI/IntensityAndBeta.js.jsx'
import './css/index.css'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <Route path="/my-account" component={ DashboardContainer }>
        <Route path="/saved-days/new" component={ NewDay } />
        <Route path="/saved-days/index" component={ SavedDays } />
      </Route>

      <Route path="/builder" component={ BuilderContainer }>

        <Route path="/workouts/:workoutName" component={ Routine }>
          <Route path="/workouts/:workoutName/goals-and-details" component={ GoalsAndDetails } />
          <Route path="/workouts/:workoutName/steps" component={ Steps } />
          <Route path="/workouts/:workoutName/intensity-and-beta" component={ IntensityAndBeta } />
        </Route>

      </Route>

    </Route>
  </Router>,
  document.getElementById('root')
);
