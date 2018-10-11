import React, { Component } from 'react';
import { Layout,Breadcrumb, Form, Input, Upload, Icon, Select, Row, Col, Checkbox, Button, AutoComplete } from "antd";
import './CreateTask.css';

const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const {TextArea} = Input;
const AutoCompleteOption = AutoComplete.Option;

class CreateTask extends Component {
    constructor(){
        super();
        this.state={
            confirmDirty: false,
            autoCompleteResult: [],
            ProductList : {total:3, rows:[
                {id:1, name:'流通ERP'},
                {id:2, name:'生产ERP'},
                {id:3, name:'主数据'}
            ]},
            ModuleList:{totle:3, rows:[
                {id:1, name:'采购业务'},
                {id:2, name:'销售业务'},
                {id:3, name:'财务管理'}
            ]},
            ProjectList:{totle:2, rows:[
                {id:1, name:'财务共享'},
                {id:2, name:'流通ERP日常需求'}
            ]},
            AssignmentTypeList:{totle:3, rows:[
                {id:1, name:'开发'},
                {id:2, name:'测试'},
                {id:3, name:'其他'}
            ]},
            AssignmentLevelList:{totle:4, rows:[
                {id:1, name:'业务价值高，实现简单'},
                {id:2, name:'业务价值高，需求复杂'},
                {id:3, name:'业务价值低，实现简单'},
                {id:4, name:'业务价值低，需求复杂'}
            ]},
        }
    }
    getDataList(name){
        switch(name){
            case 'ProductList':
                return this.state.ProductList;
            case 'ModuleList':
                return this.state.ModuleList;
            case 'ProjectList':
                return this.state.ProjectList;
            case 'AssignmentTypeList':
                return this.state.AssignmentTypeList;
            case 'AssignmentLevelList':
                return this.state.AssignmentLevelList;
        }
    }
    //加载时
    componentDidMount(){
        //this.setState(Option,)
    }
    //卸载时
    componentWillUnmount(){

    }
    //提交
    handleSubmit(){

    }

    //下拉框模版(name: getDataList函数中的别名)
    SelectTemplate(name){
        return(
            <Select>
            {
                //if(typeof(this.getDataList(name)) == ar)
                this.getDataList(name).rows.map(item => 
                    <Option value={item.id}>{item.name}</Option>
                )
            }
            </Select>
        )
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        
        return(
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item> */}
                        <Breadcrumb.Item>创建任务</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col span={4} className='labCss'>所属产品：</Col>
                        <Col span={8} className='conCss'>{this.SelectTemplate('ProductList')}</Col>
                        <Col span={4} className='labCss'>所属模块：</Col>
                        <Col span={8} className='conCss'>{this.SelectTemplate('ModuleList')}</Col>
                    </Row>
                    <Row>
                        <Col span={4} className='labCss'>所属项目：</Col>
                        <Col span={8} className='conCss'>{this.SelectTemplate('ProjectList')}</Col>
                        <Col span={4} className='labCss'>任务类型：</Col>
                        <Col span={8} className='conCss'>{this.SelectTemplate('AssignmentTypeList')}</Col>
                    </Row>
                    <Row>
                        <Col span={4} className='labCss'>需求指派给：</Col>
                        <Col span={8} className='conCss'>
                            <Search placeholder="请输入" onSearch={value => console.log(value)} enterButton />
                        </Col>
                        <Col span={4} className='labCss'>耗时预估：</Col>
                        <Col span={8} className='conCss'>
                            <Input placeholder="请输入"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className='labCss'>关联需求：</Col>
                        <Col span={20} className='conCss'>
                            <Search placeholder="请输入" onSearch={value => console.log(value)} enterButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className='labCss'>任务名称：</Col>
                        <Col span={10} className='conCss'>
                            <Search placeholder="请输入" onSearch={value => console.log(value)} enterButton="同需求" />
                        </Col>
                        <Col span={4} className='labCss'>任务等级：</Col>
                        <Col span={6} className='conCss'>{this.SelectTemplate('AssignmentLevelList')}</Col>
                    </Row>
                    <Row>
                        <Col span={4} className='labCss'>任务描述：</Col>
                        <Col span={20} className='conCss'>
                            <TextArea autosize={{ minRows: 6, maxRows: 6}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className='labCss'>附件：</Col>
                        <Col span={12} className='conCss'>
                        <Upload>
                            <Button>
                            <Icon type="upload" /> 上传附件
                            </Button>
                        </Upload>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center'}}>
                    <Button type="primary">保存</Button>
                    <Button style={{margin:"0px 50px"}}>取消</Button>
                </Footer>
            </Layout>
        );
    }
}
const WrappedCreateTask = Form.create()(CreateTask);
export default WrappedCreateTask;
