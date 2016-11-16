import {Counter} from '../exercises/4.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import _ from "lodash"

render(
    <Counter/>,
    document.getElementById('app')
)


describe( 'Exericise 3',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
        jasmine.clock().install();
    })

    beforeEach(()=>{
        component = mount(<Counter/>)
    })

    it('there should be a button', () => {
        expect(component.find("button").length).toEqual(1)
    })

    it('the counter should start from 0', () => {
        expect(component.text()).toContain("0")
    })

})