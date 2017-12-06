import React from 'react';
import {shallow} from 'enzyme';
import Root from './root.jsx';
import App from './app.jsx';

jest.mock('react-dom');

const mockStore = {
  subscribe: function(){},
  dispatch: function(){},
  getState: function(){}
};

describe('<Root />', () => {
  it('should contain <App />', () => {
    const wrapper = shallow(<Root store={mockStore} history ={{}} />);

    expect(wrapper.find(App).length).toEqual(1);
  });
});