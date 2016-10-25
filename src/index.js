import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App.js.jsx'
import BuilderContainer from './components/containers/BuilderContainer.js.jsx'
import DashboardContainer from './components/containers/DashboardContainer.js.jsx'
import NewDay from './components/UI/NewDay.js.jsx'
import SavedDays from './components/UI/SavedDays.js.jsx'
import './css/index.css'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <Route path="/my-account" component={ DashboardContainer }>
        <Route path="/saved-days/new" component={ NewDay } />
        <Route path="/saved-days/index" component={ SavedDays } />
      </Route>
      <Route path="/builder" component={ BuilderContainer } />
    </Route>
  </Router>,
  document.getElementById('root')
);
