import React from 'react';
import Main from '../../mobile/views/Main';

import renderer from 'react-test-renderer';

describe('Main view', () => {
  it('renders without crashing', () => {
    let rendered = renderer.create(<Main />).toJSON();
    expect(rendered).toBeTruthy();
  });
});