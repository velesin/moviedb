import React from 'react';
import { shallow } from 'enzyme';

import { ProgressBar } from './ProgressBar';

it('renders `Loading` message', () => {
    const progress = shallow(<ProgressBar />);
    expect(progress.getElement()).toMatchSnapshot();
});
