import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import Settings from './index';

describe('<Settings />', () => {
  it('should render two button components', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find('button')).to.have.length(2);
  });

  it.skip('should hava an input field that accepts a new name', () => {
    const handleNewName = sinon.spy();
    const wrapper = shallow(<input
                            handleNewName={ handleNewName() } />);
  // expect(wrapper.props().handleClick).to.equal();
  });

  it('set button should call numOfJokes', () => {
    const getJokes = sinon.spy();
    const wrapper = mount(<button
                          className='set-button'
                          disabled='false'
                          getJokes={ getJokes('3') } />);
    wrapper.find('.set-button').simulate('click');
    expect(getJokes.calledOnce).to.equal(true);
  });

  it('reset button should call handleNewName', () => {
    const handleNewName = sinon.spy();
    const wrapper = mount(<button
                          className='reset-button'
                          disabled='false'
                          handleNewName={ handleNewName() } />);
    wrapper.find('.reset-button').simulate('click');
    expect(handleNewName.calledOnce).to.equal(true);
  });

  it('should toggle parental controls on click of .switch', () => {
    const toggleParental = sinon.spy();
    const wrapper = mount(<input
                          onClick={ toggleParental() } />);
    expect(toggleParental.calledOnce).to.equal(true);
  });
});
