// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import { expect } from 'chai';
// import sinon from 'sinon'
//
// import DisplayJokes from './index';
//
// describe('<DisplayJokes/>', () => {
//
//   it.skip('should have a class of render-jokes', () => {
//     const wrapper = shallow(<DisplayJokes/>);
//     expect(wrapper.find('div').hasClass('render-jokes')).to.equal(true);
//   });
//
//   it.skip('should have a button to select as a favorite', () => {
//     const wrapper = shallow(<DisplayJokes/>);
//     expect(wrapper.find('Button').length).to.equal(1);
//   });
//
//   it('accepts props', () => {
//     const jokesObj = [];
//     const wrapper = mount(<DisplayJokes props='jokesObj'/>)
//     expect(wrapper.props().props).to.equal('some props')
//   });
//
//   it.skip('has a class of favoite if the props.fave is true', () => {
//     const wrapper = mount(<DisplayJokes fave={true}/>)
//     expect(wrapper.find('Button').hasClass('favorite')).to.equal(true)
//   })
//
// });
