import React, { Component, useState } from 'react';
import * as ROUTES from './constants/Routes'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Navigation from './components/Navigation/Navigation';

import { Layout } from 'antd';
import styled from 'styled-components';
import Firebase, { FirebaseContext } from './components/Firebase';

const { Header, Footer, Sider, Content } = Layout;

const SiteLayoutContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`
const firebase = new Firebase()

function App() {
  const [isLogged, setLogged] = useState(false)

  function toLogIn () {
    setLogged(true)
  }
  function toLogOut () {
    setLogged(false)
  }

  return (
    <FirebaseContext.Provider value={ firebase }>
      <Router>
        <Layout>
          <Header>
            <Navigation />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <SiteLayoutContent>
              <Route exact path={ ROUTES.LANDING }>
                <Home />
              </Route>
              
              <Route path={ ROUTES.SIGN_IN }>
                  <Signin />
              </Route>
              <Route path={ ROUTES.SIGN_UP }>
                <Signup />
              </Route>

            </SiteLayoutContent>
            

          </Content>
          <Footer>

          </Footer>
        </Layout>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
