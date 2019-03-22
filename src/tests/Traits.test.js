import React from 'react';
import Traits from '../Traits';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const propTraits = ['Patience', 'Cheerfulness', 'Other'];
    const tree = renderer.create(<Traits allTraits={propTraits}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

