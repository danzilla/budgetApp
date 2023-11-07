import { connect } from "react-redux";
import { Col, Row } from 'antd';

import { SettingTwoTone, PieChartTwoTone, CodeTwoTone, TagsTwoTone, DatabaseTwoTone } from '@ant-design/icons';
import { Select, Button, DatePicker } from 'antd';
import { Space } from 'antd';
const { RangePicker } = DatePicker;


const onChangeDateRange = (value, date) => {
    console.log(JSON.stringify(date));
}

const onChangeAccount = (value, data) => {
    console.log(JSON.stringify(data));
}

const Navigation = (props) => {

    return (
        <>
            <Row className="card-3" align="middle" type="flex" justify="center" style={{ padding: '10px' }}>
                <Col align="left" span={6} style={{ padding: '5px' }}>
                    FannyPack
                </Col>
                <Col align="left" span={12} style={{ padding: '5px' }}>
                    <Space.Compact style={{ width: '100%' }}>
                        <Select
                            onChange={onChangeAccount}
                            defaultValue="ken"
                            size="large"
                            style={{ width: '40%' }}>
                            <Select.Option value={'lucy'} key={"1"}>1</Select.Option>
                            <Select.Option value={'ken'} key={"Ken"}>2</Select.Option>
                            <Select.Option value={'Dio'} key={"Dio"}>3</Select.Option>
                            <Select.Option key={"title"}>Add New Account</Select.Option>
                        </Select>
                        <RangePicker
                            placeholder={["2023-10-02", "2023-10-17"]}
                            onChange={onChangeDateRange}
                            style={{ width: '40%', color: 'red' }} />
                    </Space.Compact>
                </Col>
                <Col align="right" span={6}>

                    {props.displayPage.graphDashboard === true ?
                        <Button onClick={props.handleViewTable} size="large" type="text">
                            <DatabaseTwoTone twoToneColor="hotpink" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                        :
                        <Button onClick={props.handleViewGraph} size="large" type="text">
                            <PieChartTwoTone twoToneColor="hotpink" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                    }

                    <Button onClick={props.handleViewCategory} size="large" type="text">
                        <TagsTwoTone twoToneColor="green" style={{ fontSize: '25px', marginLeft: 5, marginRight: 5 }} /></Button>

                    <Button onClick={props.handleViewSQLCMD} size="large" type="text">
                        <CodeTwoTone twoToneColor="blue" style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
                    
                    <Button size="large" type="text"><SettingTwoTone twoToneColor="#80B3FF" style={{ fontSize: '25px', marginRight: 5 }} /></Button>

                </Col>
            </Row>
        </>
    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Navigation);