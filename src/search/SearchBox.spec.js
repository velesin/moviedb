import React from 'react';
import { shallow } from 'enzyme';

import { SearchBox } from './SearchBox';

const querySubmitSpy = jest.fn();
let searchBox;

beforeEach(() => {
    searchBox = shallow(<SearchBox onQuerySubmit={ querySubmitSpy } />);
});

it('renders search box correctly', () => {
    expect(searchBox.getElement()).toMatchSnapshot();
});

it('when user submits a query, prevents default form action and passes query up', () => {
    const QUERY = 'QUERY';
    const submitEvent = { preventDefault: jest.fn() };

    searchBox.find('input').filterWhere(node => node.prop('type') === 'text').simulate('change', { target: { value: QUERY } });
    searchBox.find('form').simulate('submit', submitEvent);

    expect(submitEvent.preventDefault.mock.calls.length).toEqual(1);
    expect(querySubmitSpy.mock.calls[0][0]).toEqual(QUERY);
});
