import { connect } from "react-redux";
import { Row } from 'antd';

const GraphDashboard = (porps) => {

    return (
        <>
            <Row className="card-1" align="middle" type="flex" justify="center"  style={{ padding: '10px' }}>
                <p> Graphs </p>
            </Row>
        </>

    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(GraphDashboard);