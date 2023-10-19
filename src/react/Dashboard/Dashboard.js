import { connect } from "react-redux";
import { Col, Divider, Row } from 'antd';

import { SearchOutlined, HeartTwoTone, SettingTwoTone, PieChartTwoTone, UploadOutlined, CodeTwoTone, EditOutlined, SyncOutlined } from '@ant-design/icons';
import { Input, Select, Button, DatePicker } from 'antd';

import { Rose } from '@ant-design/plots';

import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const { RangePicker } = DatePicker;

const Dashboard = (porps) => {

    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.9,
        legend: {
            position: 'right',
        },
    };

    const data2 = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    const newSelect = <Button style={{ width: '100%' }} type="text">Add new</Button>

    return (

        <>

            <Row className="card-3" align="middle" type="flex" justify="center" style={{ height: '10vh' }}>
                
                <Col align="left" span={6} style={{ padding: '5px' }}>
                    FannyPack
                </Col>
                <Col align="left" span={12} style={{ padding: '5px' }}>
                    <Space.Compact style={{ width: '100%' }}>
                        <Select
                            size="large"
                            defaultValue="ken"
                            style={{ width: '40%' }}>
                            <Select.Option value={'lucy'} key={"title"}>1</Select.Option>
                            <Select.Option value={'ken'} key={"Ken"}>2</Select.Option>
                            <Select.Option value={'Dio'} key={"Dio"}>3</Select.Option>
                            <Select.Option key={"title"}>Add New Account</Select.Option>
                        </Select>

                        <RangePicker style={{ width: '40%', color: 'red' }} />

                    </Space.Compact>
                </Col>
                <Col align="right" span={6}>
                    <Button size="large" type="text"><CodeTwoTone twoToneColor="hotpink" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                    <Button size="large" type="text"><SyncOutlined twoToneColor="hotpink" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                    <Button size="large" type="text"><PieChartTwoTone twoToneColor="#940B92" style={{ fontSize: '25px', marginLeft: 5, marginRight: 5 }} /></Button>
                    <Button size="large" type="text"><SettingTwoTone twoToneColor="#80B3FF" style={{ fontSize: '25px', marginRight: 5 }} /></Button>
                </Col>
            </Row>

            <Divider />

            <Row type="flex"  style={{ height: '10vh' }}>

                <Col align="left" span={24}>
                    <Button size="large" type="primary">
                        <UploadOutlined twoToneColor="hotpink" style={{ fontSize: '16px', marginLeft: 5 }} />
                        Add transaction to "Account"
                    </Button>
                </Col>
                <Col align="left" span={17} style={{position: 'sticky'}}>
                    <Table style={{marginRight: '15px', marginBottom: '50px'}} className="card-3 " dataSource={data2}>
                        <Column title="First Name" dataIndex="firstName" key="firstName" />
                        <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={(tags) => (
                                <>
                                    {tags.map((tag) => (
                                        <Tag color="blue" key={tag}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </>
                            )}
                        />
                        <Column
                            title="Action"
                            key="action"
                            render={(_, record) => (
                                <Space size="middle">
                                    <a><EditOutlined /></a>
                                </Space>
                            )}
                        />
                    </Table>
                </Col>
                <Col span={6}>
                    <Rose className="card-3 " style={{ position: 'sticky' }} {...config} />
                    <Rose className="card-3 " style={{ position: 'sticky' }} {...config} />
                </Col>

            </Row>
        </>

    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Dashboard);