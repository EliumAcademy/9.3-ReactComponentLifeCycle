import {Game} from '../exercises/5.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

require('!style!css!sass!../public/app.scss')

render(
    <Game/>,
    document.getElementById('app')
)