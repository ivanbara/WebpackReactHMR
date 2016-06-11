import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainPage from '../components/MainPage';
import ReactApp from '../components/ReactApp';


module.exports = (
		<Route path='/' component={MainPage}>
			<IndexRoute component={ReactApp}/>
		</Route>
);
