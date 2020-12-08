import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MovieInfo } from './components/MovieInfo';
import { MoviesList } from './components/MoviesList';
import Playlist from './components/Playlist';
import TooBar from './components/TooBar';

const App = () => (
  <>
    <BrowserRouter>
      <TooBar />
      <Switch>
        <Route exact path="/movies" render={(props) => <MoviesList {...props} />} />
        <Route exact path="/movies/:id" render={(props) => <MovieInfo {...props} />} />
        <Route exact path="/playlist" render={(props) => <Playlist {...props} />} />
        <Route exact path="/" render={() => <Redirect to="/movies" />} />
        <Route render={() => <> 404 </>} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
