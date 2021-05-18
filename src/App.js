import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));


// import style from './App.module.css';


class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
          <Router>
          <Container>
            <AppBar />

          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView} />
              <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
              <PrivateRoute path="/contacts" redirectTo="/login" component={PhonebookView} />
            </Switch>
          </Suspense>
            
        </Container>
        </Router>
      );
  }
}


const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}


export default connect(null, mapDispatchToProps)(App);
