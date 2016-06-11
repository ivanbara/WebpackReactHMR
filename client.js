import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import mainrouter from './routes/router';

import styles from './css/main.css'

const app = document.getElementById('app');

render(<Router routes={mainrouter} history={browserHistory}/>, app);

