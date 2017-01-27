import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import Header from './index';

describe('<Header />', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should have a SettingsBtn', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('SettingsBtn')).to.have.length(1);
  });
});
