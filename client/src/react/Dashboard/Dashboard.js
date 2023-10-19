import { useState } from "react";
import { connect } from "react-redux";
import { Col, Divider, Row, Button } from 'antd';

import Navigation from "./Navigation/Navigation";
import SQLcmd from "./SQLcmd/SQLcmd";
import GraphView from "./Graph/Graph";
import TableView from "./Table/TableView";

import { UploadOutlined } from '@ant-design/icons';


const Dashboard = (porps) => {

    // View SQL CMD Window
    const [viewSQLCMD, setViewSQLCMD] = useState(false)
    const handleViewSQLCMD = () => {
        setViewSQLCMD(!viewSQLCMD)
    }
    let DisplayCMDSQL;
    if(viewSQLCMD === true){
        DisplayCMDSQL = <SQLcmd />
    } else {
        DisplayCMDSQL = null
    }



    return (
        <>
            <Navigation handleViewSQLCMD={handleViewSQLCMD} />
            {DisplayCMDSQL}
            <Divider />
            <Row type="flex" justify="center">
                <Col span={24}>
                    <Button size="large" type="primary"> <UploadOutlined style={{ fontSize: '16px', marginLeft: 5 }} />Add transaction to "Account"</Button>
                </Col>
                <Col span={17} style={{ position: 'sticky' }}>
                    <TableView />
                </Col>
                <Col span={7}>
                    <GraphView />
                </Col>
            </Row>
        </>
    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Dashboard);