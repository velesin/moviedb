import React from 'react';
import { shallow } from 'enzyme';

import { PosterImage } from './PosterImage';

it('renders an image with a correct path and alt attribute', () => {
    const poster = shallow(<PosterImage path="PATH" title="TITLE" />);
    expect(poster.getElement()).toMatchSnapshot();
});
