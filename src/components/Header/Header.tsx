import React from 'react';
import s from'./Header.module.css'
import { NavLink } from 'react-router-dom';
import { Avatar, Col, Menu, Row, Layout, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from '../../Redux/auth-selectors.ts';
import { logout } from '../../Redux/auth-reducer.ts';

 export type MapPropsType={
 
}

const items1 = [{
  label: <NavLink to="/developers">Developer</NavLink>
}];


export const AppHeader:React.FC< MapPropsType>= (props) => {
 const isAuth=useSelector(selectIsAuth)
 const login=useSelector(selectCurrentUserLogin)
 
const dispatch=useDispatch()
const logoutCallback=()=>{
  dispatch(logout())
}

  const { Header} = Layout;
    return ( <Header style={{ display: 'flex', alignItems: 'center' }}>
      
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Col span={18}>
          <Menu
            theme="dark" 
            mode="horizontal" 
            defaultSelectedKeys={['2']}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}>
          </Menu>
        </Col>
        {isAuth
          ?<><Col span={1}>
            <Avatar alt={login || ''} style={{backgroundColor:'#87d068'}} icon={<UserOutlined/>}/>
            </Col>
            <Col span={5}>
            <Button onClick={logoutCallback}>Log out</Button>
            </Col>
            </>
            :<Col span={6}>
              <Button>
                <NavLink to={'/login'}>Login</NavLink>
              </Button>
              </Col>}
        {/* <Col style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }} span={6}>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          {isAuth 
             ? <div ><span className={s.UserName}>{login}-</span><Button onClick={logoutCallback}>Log out</Button></div>
             :<NavLink to={'/login'}>Login</NavLink>}
        
        </Col> */}
      </Row>
    </Header>


        //  <header className={s.header}>
        //   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRNExqI9MjjvvTmiEKTeCXQUFQ77R1Y3vDA&s'/>
        //   <div className={s.loginBlock}>
        //     {props.isAuth 
        //     ? <div ><span className={s.UserName}>{props.login}-</span><button onClick={props.logout}>Log out</button></div>
        //     :<NavLink to={'/login'}>Login</NavLink>}
        //   </div>
        //  </header>
    );
}  

