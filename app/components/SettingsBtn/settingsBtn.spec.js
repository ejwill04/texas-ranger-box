import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon'

import SettingsBtn from './index';

describe('<SettingsBtn/>', () => {
  it('should have a Link', () => {
    const wrapper = shallow(<SettingsBtn/>);
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('Link should have a to prop to /settings', () => {
    const wrapper = shallow(<SettingsBtn/>);
    const Link = wrapper.find('Link');
    expect(Link.props().to).to.equal('/settings');
  });

  it.skip('Link should have a to prop to /jokes if on /settings', () => {
    assert.equal(window.location.pathname, './settings');
    const wrapper = shallow(<SettingsBtn/>);
    const Link = wrapper.find('Link');
    expect(Link.props().to).to.equal('/jokes');
  });
});
