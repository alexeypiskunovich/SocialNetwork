import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.tsx';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer.ts';
import Preloader from './components/common/preloader/Preloader.tsx';
import withRouter from './WithRouter.js';
import HeaderContainer from './components/Header/HeaderContainer.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store, { AppStateType } from './Redux/redux-store.ts';
import { UsersPage } from './components/Users/UsersContainer.tsx';
import { Login } from './components/Login/login.tsx'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Breadcrumb, Col, Layout, Menu, Row, theme } from 'antd';
import { NavLink } from 'react-router-dom';
import { AppHeader } from './components/Header/Header.tsx';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.tsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.tsx'));
const ChatPage=React.lazy(()=>import('./pages/Chat/ChatPage.tsx'))


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void

}
const { Content, Footer, Sider } = Layout;



const menuItems = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'MyProfile',
    children: [
      { key: '1', label: <NavLink to="/Profile">Profile</NavLink> },
      { key: '2', label: <NavLink to="/Dialogs">Messages</NavLink> },
      { key: '3', label: <NavLink to="/developers">Users</NavLink> },
    ],
  },
  {
    key: 'sub2',
    icon: <LaptopOutlined />,
    label: 'Developers',
    children: [
      { key: '4', label: <NavLink to="/chat">Chat</NavLink> },
    ],
  },
];



const App: React.FC<MapPropsType & DispatchPropsType> = (props) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
     <AppHeader/>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menuItems}
            >
            </Menu>
            
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Routes>
              <Route path="/Dialogs" element={
                <React.Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </React.Suspense>
              } />
              <Route path="/Profile/:userId?" element={
                <React.Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </React.Suspense>
              } />
              <Route path="/" element={
                <Navigate to={"/Profile"}></Navigate>
              } />
              <Route path="/developers" element={<UsersPage pageTitle={'Путь'} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/chat" element={
                <React.Suspense fallback={<Preloader />}>
                  <ChatPage />
                </React.Suspense>
              } />
              <Route path="*" element={<div>404 Not found</div>} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      </Footer>
    </Layout>




    /*<div className="fon">
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
            <Route  path="/" element={
              <Navigate to={"/Profile"}></Navigate>
            } />
            <Route path="/users" element={<UsersPage pageTitle={'Путь'}/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<div>404 Not found</div>} />
          </Routes>
        </div>
      </div>
    </div>*/
  );
}





































const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp },
  ))(App);

const SNJSApp: React.FC = () => {
  return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}
export default SNJSApp;
