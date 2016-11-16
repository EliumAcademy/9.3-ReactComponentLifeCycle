import {Counter}         from '../exercises/3.js'
import React             from 'react';
import { render }        from 'react-dom'
import { mount }         from 'enzyme';
import jasmineEnzyme     from 'jasmine-enzyme';
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

    it('after 2 clicks a 3 seconds countdown should start and the compoenent should unmount', () => {
        const button = component.find("button")
        _.times(2, ()=> button.simulate("click"))
        const numberText = component.text().replace(button.text(), "")
        expect(numberText).toEqual("component will unmount in 3")
    })

    it('the countdown should go to 0', () => {
        const button = component.find("button")
        jasmine.clock().install();
        _.times(2, ()=> button.simulate("click"))
        const numberText = component.text().replace(button.text(), "")
        expect(numberText).toEqual("component will unmount in 3")
        jasmine.clock().tick(1100);
        expect(component.text()).toContain("component will unmount in 2")
        jasmine.clock().tick(1100);
        expect(component.text()).toContain("component will unmount in 1")
        jasmine.clock().tick(1100);
        expect(component.text()).toContain("component will unmount in 0")
    })

    it('when the countdown is over the component should unmount', () => {
        const button = component.find("button")
        _.times(2, ()=> button.simulate("click"))
        jasmine.clock().tick(4100);
        expect(component.node._reactInternalInstance).toBeUndefined()

    })

})