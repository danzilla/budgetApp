import { useState } from "react";
import { connect } from "react-redux";
import { Col, Divider, Row } from 'antd';

import Navigation from "./Navigation/Navigation";
import SQLcmd from "./SQLcmd/SQLcmd";
import GraphView from "./Graph/Graph";
import GraphDashboard from "./Graph/GraphDashboard";
import TableView from "./Table/TableView";
import CategoryDashboard from "./Category/CategoryDashboard"


const Dashboard = (porps) => {

    const [displayPage, setDisplayPage] = useState({
        graphDashboard: false,
        tableDashboard: true,
        categoryDashboard: false
    })

    // View SQL CMD Window
    const [viewSQLCMD, setViewSQLCMD] = useState(false)
    const handleViewSQLCMD = () => { setViewSQLCMD(!viewSQLCMD) }
    let DisplayCMDSQL = viewSQLCMD === true ? <SQLcmd /> : null;

    // View Table
    const handleViewTable = () => { 
        setDisplayPage({
            graphDashboard: false,
            tableDashboard: true,
            categoryDashboard: false
        })
    }
    // View Category 
    const handleViewCategory = () => { 
        setDisplayPage({
            graphDashboard: false,
            tableDashboard: false,
            categoryDashboard: true
        })
    }
    // View Graph
    const handleViewGraph = () => { 
        setDisplayPage({
            graphDashboard: true,
            tableDashboard: false,
            categoryDashboard: false
        })
    }

    let DisplayContent;
    if(displayPage.graphDashboard === true){
        DisplayContent = <GraphDashboard />;
    }if(displayPage.tableDashboard === true){
        DisplayContent = <TableView />;
    }if(displayPage.categoryDashboard === true){
        DisplayContent = <CategoryDashboard />;
    }

    return (
        <>
            <Navigation displayPage={displayPage}
                handleViewSQLCMD={handleViewSQLCMD} 
                handleViewCategory={handleViewCategory}
                handleViewTable={handleViewTable}
                handleViewGraph={handleViewGraph} />
            {DisplayCMDSQL}
            <Divider />
            <Row type="flex" justify="center" style={{ height: '90vh' }} >
                <Col span={17} style={{ position: 'sticky' }}>
                    {DisplayContent}
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