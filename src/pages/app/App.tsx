import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {RouteNames} from '../../types/routes';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import RequireAuth from '../../components/Auth/RequireAuth';
import '../../styles/App.scss';
import LikedPage from '../LikedPage';
import WelcomePage from '../WelcomePage';
import AllCharactersPage from '../AllCharactersPage';
import SingleCharacterPage from '../SingleCharacterPage';
import LocationsPage from '../LocationsPage/index';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={RouteNames.LOGIN} element={<LoginPage/>}/>
      <Route path={RouteNames.REGISTRATION} element={<RegisterPage/>}/>
      <Route path={RouteNames.HOME_PAGE} element={<RequireAuth><HomePage/></RequireAuth>}>
        <Route index element={<WelcomePage/>}/>
        <Route path={RouteNames.ALL_CHARACTERS} element={<AllCharactersPage/>}/>
        <Route path={RouteNames.ALL_LOCATIONS} element={<LocationsPage/>}/>
        <Route path={RouteNames.CHARACTER} element={<SingleCharacterPage/>}/>
        <Route path={RouteNames.LIKED} element={<LikedPage/>}/>
        <Route path='*' element={<RequireAuth><HomePage/></RequireAuth>}/>
      </Route>

    </Routes>
  );
}

export default App;
