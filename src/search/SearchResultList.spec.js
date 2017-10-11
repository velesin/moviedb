import React from 'react';
import { shallow } from 'enzyme';

import { SearchResultList } from './SearchResultList';

const MOVIES = [ { id: 1 }, { id: 2 }, { id: 3 } ];
let list;

beforeEach(() => {
    list = shallow(<SearchResultList movies={ MOVIES } />);
});

it('renders correctly a list with movies', () => {
    expect(list.getElement()).toMatchSnapshot();
});

it('assigns correct keys to items in the list', () => {
    const keys = list.find('SearchResultListItem').map(item => item.key());
    expect(keys).toEqual([ '1', '2','3' ]);
});