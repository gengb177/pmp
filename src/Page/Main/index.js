import React, { Component } from 'react';
import { Layout, Menu,Icon } from 'antd';
import './index.css';
import {
  HashRouter as Router,
  Route,Link,Switch
} from 'react-router-dom';
import MyZone from '../MyZone';
import MyZoneTask from '../MyZone/MyZoneTask';
import Demand from '../Demand';
import Test from '../Test';
import Task from '../Task';
import VersionPlan from '../VersionPlan';
import Product from '../Product';
import Project from '../Project';
import Feedback from '../Feedback';
import BasicData from '../BasicData';


const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends Component {

  state = {
    current: 'Main',
  }


  componentDidMount() {
     console.log(this.props)
     this.Aauthority(this.props);
  }

  componentWillUpdate(nextProps) {
      console.log(nextProps)
      this.Aauthority(nextProps);
  }

  Aauthority = (props) => {

 
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({current: e.key, });
    this.props.history.push("/"+e.key);

  }

  TitleClick= (e) => {
    console.log('click ', e);

    this.setState({ current: e.key,});
    this.props.history.push("/"+e.key);
  }


  render() {
    return (
       <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.state.current]}
            selectedKeys={[this.state.current]}
            style={{ lineHeight: '64px' }}
            onClick={this.handleClick}
 
          >
            <SubMenu   onTitleClick={this.TitleClick}  key="Main"   title={<span><Icon type="appstore" />我的地盘</span>} >
              <Menu.Item key="Main">首页</Menu.Item>
              <Menu.Item key="Main/MyZoneTask">任务</Menu.Item>
              <Menu.Item key="Main/MyZoneBug">BUG</Menu.Item>
              <Menu.Item key="Main/MyZoneDemand">需求</Menu.Item>
            </SubMenu>

             <SubMenu  onTitleClick={this.TitleClick}   key="Main/Demand"  title={<span>需求</span>} >
              <Menu.Item key="Main/Demand" >首页</Menu.Item>
            </SubMenu>

            <SubMenu    onTitleClick={this.TitleClick}    key="Main/Test"  title={<span>测试</span>}   >
              <Menu.Item key="Main/Test" >首页</Menu.Item>
            </SubMenu>

            <SubMenu    onTitleClick={this.TitleClick}   key="Main/Task" title={<span>任务</span>}    >
              <Menu.Item  key="Main/Task">首页</Menu.Item>
            </SubMenu>

            <SubMenu   onTitleClick={this.TitleClick}    key="Main/VersionPlan" title={<span>版本计划</span>}   >
              <Menu.Item  key="Main/VersionPlan">首页</Menu.Item>
            </SubMenu>  

            <SubMenu    onTitleClick={this.TitleClick}  key="Main/Product"  title={<span>产品</span>}   >
              <Menu.Item key="Main/Product">首页</Menu.Item>
            </SubMenu>    

             <SubMenu   onTitleClick={this.TitleClick}   key="Main/Project" title={<span>项目</span>}    >
              <Menu.Item key="Main/Project">首页</Menu.Item>
            </SubMenu>     

             <SubMenu   onTitleClick={this.TitleClick}   key="Main/Feedback"   title={<span>用户反馈</span>}  >
              <Menu.Item key="Main/Feedback" >首页</Menu.Item>
            </SubMenu>      

             <SubMenu   onTitleClick={this.TitleClick}   key="Main/BasicData"  title={<span>基础数据</span>}  >
              <Menu.Item key="Main/BasicData">首页</Menu.Item>
            </SubMenu>        

          </Menu>
      </Header>
         <Router>
          <Switch> 
            <Route exact path="/Main" component={MyZone} />
            <Route exact path="/Main/MyZoneTask" component={MyZoneTask} />         
            <Route path="/Main/Demand" component={Demand} />
            <Route path="/Main/Test" component={Test} />
            <Route path="/Main/Task" component={Task} />
            <Route path="/Main/VersionPlan" component={VersionPlan} />
            <Route path="/Main/Product" component={Product} />
            <Route path="/Main/Project" component={Project} />
            <Route path="/Main/Feedback" component={Feedback} />
            <Route path="/Main/BasicData" component={BasicData} />
          </Switch> 
        </Router>
    </Layout>
    );
  }
}

export default Main;
