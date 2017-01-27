import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon'

import RandomJokeDisplay from './index';

describe('<RandomJokeDisplay />', () => {
  it('should have a div', () => {
    const wrapper = shallow(<RandomJokeDisplay />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('Link should have a joke prop', () => {
    const wrapper = shallow(<RandomJokeDisplay />);
    const Link = wrapper.find('div');
    expect(Link.props().joke).to.equal(undefined);
  });
});
