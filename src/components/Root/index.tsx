import React from 'react';

import { Provider } from 'react-redux';

import { store } from '../../store';

import App from '../App';

import '@cec.front/ui-kit/dist/cec-ui-kit.css';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root;