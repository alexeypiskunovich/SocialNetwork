import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Login from './components/Login/login.jsx';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer.js';
import Preloader from './components/common/preloader/Preloader.js';
import withRouter from './WithRouter.js';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="fon">
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/Dialogs" element={
                <React.Suspense fallback={<Preloader/>}>
                  <DialogsContainer />
                </React.Suspense>
              } />
              <Route path="/Profile/:userId?" element={
                <React.Suspense fallback={<Preloader/>}>
                  <ProfileContainer />
                </React.Suspense>
              } />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp },

  )
)(App);
