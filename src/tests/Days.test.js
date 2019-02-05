import React from 'react';
import Days from '../Days';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const propDays = ['', 'M', 'T', 'W', 'Th', 'F', 'S', 'Sn'];
  const tree = renderer.create(<Days propDays={propDays}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
