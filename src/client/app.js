import { observable, computed } from 'mobx';
import { Router, browserHistory } from 'react-router';
import { observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import routes from '../routes.js';
import { $TodoStore } from './store/todoStore.js';



render(
    <Router routes={ routes } history={ browserHistory } ></Router>,
    document.getElementById('hzpapp')
)
