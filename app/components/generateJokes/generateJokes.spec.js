import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import GenerateJokes from './index';

describe('<GenerateJokes />', () => {
  it('should display a div with a class of generate-jokes', () => {
    const wrapper = shallow(<GenerateJokes />);
    expect(wrapper.find('.generate-jokes')).to.have.length(1);
  });

  it('Link should have a to prop directed to /jokes', () => {
    const wrapper = shallow(<GenerateJokes />);
    const Link = wrapper.find('Link');
    expect(Link.props().to).to.equal('/jokes');
  });

  it('Get Jokes button should be initially disabled', () => {
    const wrapper = shallow(<GenerateJokes />);
    const getJokesBtn = wrapper.find('.get-jokes-btn');
    expect(getJokesBtn.props().disabled).to.equal(true);
  });

  it('Get Jokes button should be enabled when there are jokes', () => {
    const wrapper = shallow(<GenerateJokes
                              numOfJokes='2'/>);
    const getJokesBtn = wrapper.find('.get-jokes-btn');
    expect(getJokesBtn.props().disabled).to.equal(false);
  });

  it('Get Jokes button should call getJokes on click', () => {
    const getJokes = sinon.spy();
    const wrapper = mount(<button
                          className='get-jokes-btn'
                          disabled='false'
                          getJokes={ getJokes('3') } />);
    wrapper.find('.get-jokes-btn').simulate('click');
    expect(getJokes.calledOnce).to.equal(true);
  });

  it('should have an input for number of jokes', () => {
    const wrapper = shallow(<GenerateJokes />);
    expect(wrapper.find('.numOfJokes')).to.have.length(1);
  });
});
