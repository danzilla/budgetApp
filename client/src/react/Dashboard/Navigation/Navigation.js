import { connect } from "react-redux";
import { Col, Row } from 'antd';

import { SettingTwoTone, PieChartTwoTone, CodeTwoTone, SyncOutlined } from '@ant-design/icons';
import { Select, Button, DatePicker } from 'antd';
import { Space } from 'antd';
const { RangePicker } = DatePicker;


const Navigation = (porps) => {

    return (
        <>
            <Row className="card-3" align="middle" type="flex" justify="center" style={{ padding: '10px' }}>
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
                    <Button onClick={porps.handleViewSQLCMD} size="large" type="text"><CodeTwoTone twoToneColor="hotpink" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                    <Button size="large" type="text"><SyncOutlined twoToneColor="hotpink" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                    <Button size="large" type="text"><PieChartTwoTone twoToneColor="#940B92" style={{ fontSize: '25px', marginLeft: 5, marginRight: 5 }} /></Button>
                    <Button size="large" type="text"><SettingTwoTone twoToneColor="#80B3FF" style={{ fontSize: '25px', marginRight: 5 }} /></Button>
                </Col>
            </Row>
        </>
    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Navigation);