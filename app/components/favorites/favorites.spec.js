import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import DisplayFavorites from './index';

describe('<DisplayFavorites/>', () => {
  it.skip('renders as a <div>', () => {
    const wrapper = shallow(<Button />);
    assert.equal(wrapper.type(), 'button');
  });

  it.skip('should call handleClick on onClick', () => {
    const handleClick = sinon.spy();
    const wrapper = mount(<Button className='new-jokes-btn' handleClick={ handleClick } />);
    expect(handleClick.calledOnce).to.equal(false);
    wrapper.find('.new-jokes-btn').simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
  });
});
