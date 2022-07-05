import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';

import {FirebaseAppProvider} from 'reactfire';

import {Provider} from 'react-redux';

import {ThemeProvider} from '@mui/material';

import App from './pages/app/App';

import firebaseApp from './firebase/firebaseApp';
import {store} from './store';
import {UIContextProvider} from './UI/UIContext';


import customTheme from './UI/CustomTheme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={firebaseApp}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={customTheme}>
            <UIContextProvider>
              <App/>
            </UIContextProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
);
