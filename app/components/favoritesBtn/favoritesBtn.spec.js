import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import FavoritesBtn from './index';

describe('<FavoritesBtn />', () => {
  it('should have a link', () => {
    const wrapper = shallow(<FavoritesBtn />);
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('Link should have a to prop directed to /favorites', () => {
    const wrapper = shallow(<FavoritesBtn />);
    const Link = wrapper.find('Link');
    expect(Link.props().to).to.equal('/favorites');
  });
});
