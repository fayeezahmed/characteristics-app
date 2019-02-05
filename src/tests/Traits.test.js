import React from 'react';
import Traits from '../Traits';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const propTraits = ['Patience', 'Cheerfulness', 'Other'];
  const tree = renderer.create(<Traits allTraits={propTraits}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
