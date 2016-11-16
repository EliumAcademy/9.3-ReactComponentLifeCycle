import {Counter} from '../exercises/2.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import _ from "lodash"

render(
    <Counter/>,
    document.getElementById('app')
)

describe( 'Exericise 2',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
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

    it('counter should reset to 0 if clicked 10 times', () => {
        const button = component.find("button")
        _.times(10, ()=> button.simulate("click"))
        const numberText = component.text().replace(button.text(), "")
        expect(numberText).toEqual("0")
    })
})