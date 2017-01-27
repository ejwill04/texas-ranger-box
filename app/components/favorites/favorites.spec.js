import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import DisplayFavorites from './index';
import GenerateJokes from '../generateJokes';

describe('<DisplayFavorites />', () => {
  const fakeData = [{ id: 'b', jokes: 'c' }];
  it.skip('should have a div for holding jokes', () => {
    const wrapper = mount(<DisplayFavorites
      favorites={fakeData} />);
    expect(wrapper.find('render-jokes-wrapper')).to.have.length(1);
  });

  it.skip('Link should have a to prop directed to /favorites', () => {
    const wrapper = shallow(<DisplayFavorites />);
    const Link = wrapper.find('Link');
    expect(Link.props().to).to.equal('/favorites');
  });
});
