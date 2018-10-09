import React, { Component } from 'react';
import { Breadcrumb,Layout} from 'antd';
import Api from '../../Base/api';
import Fetch from'../../Base/base';
import Common  from'../../Base/common';

const { Content } = Layout;

class MyZone extends Component {
  state = {
    loading: false,
  }


 

  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24}}>Content</div>
    </Content>
    );
  }
}

export default MyZone;
