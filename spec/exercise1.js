import {Counter}      from '../exercises/1.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';


render(
    <Counter/>,
    document.getElementById('app')
)

describe( 'Exericise 1',  ()=>{
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

    it('counter should only update when clicked an odd number of times', () => {
        component.find("button").simulate("click")
        expect(component.text()).toContain("1")
        component.find("button").simulate("click")
        expect(component.text()).toContain("1")
        component.find("button").simulate("click")
        expect(component.text()).toContain("3")
    })
})
