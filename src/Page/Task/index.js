import React, { Component } from 'react';
import {Menu,Table} from 'antd';
import './index.css';

const SubMenu = Menu.SubMenu;
const ErpList = {
  total:3,
  rows:[
    {index:1,name:'采购业务'},
    {index:2,name:'销售业务'},
    {index:1,name:'财务管理'}
  ]
};
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class Task extends Component {
  state = {
    current: 'Task',
  }

  erpList = ErpList

  render(){
    return (
      <div>
        <div className="TaskCSS">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[this.state.current]}
            selectedKeys={[this.state.current]}
            style={{ lineHeight: '64px' }}
          >
            <SubMenu title="流通ERP">
              <Menu.Item>01采购业务</Menu.Item>
              <Menu.Item>02销售业务</Menu.Item>
              <Menu.Item>03财务管理</Menu.Item>
              <Menu.Item>05仓储业务</Menu.Item>
              <Menu.Item>06高值耗材</Menu.Item>
              <Menu.Item>07质量管理</Menu.Item>
              <Menu.Item>08业务管理</Menu.Item>
            </SubMenu>
            <SubMenu title="ErpList">{this.erpList.rows.map(function(k){
              return <Menu.Item>{k.name}</Menu.Item>
            })}</SubMenu>
            <SubMenu title="财务共享项目">
              <Menu.Item>有几个啊</Menu.Item>
              <Menu.Item>不知道哟</Menu.Item>
            </SubMenu>
            <SubMenu title={<span>全部任务</span>} key="Main/Demand"></SubMenu>
            <SubMenu title="指派给我"></SubMenu>
            <SubMenu title="未开始"></SubMenu>
            <SubMenu title="进行中"></SubMenu>
            <SubMenu title="已完成"></SubMenu>
            <SubMenu title="我完成"></SubMenu>
            <SubMenu title="已关闭"></SubMenu>
            <SubMenu title="未关闭"></SubMenu>
            <SubMenu title="已取消"></SubMenu>
          </Menu>
          
        </div>
        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    );
  }
}
export default Task;
