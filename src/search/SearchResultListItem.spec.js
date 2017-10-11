import React from 'react';
import { shallow } from 'enzyme';

import { SearchResultListItem } from './SearchResultListItem';

const MOVIE = {
    title: 'TITLE',
    release_date: '2010-03-12',
    vote_average: 5.4
};

it('renders correctly formatted movie list item', () => {
    const item = shallow(<SearchResultListItem movie={ MOVIE } />);
    expect(item.getElement()).toMatchSnapshot();
});
