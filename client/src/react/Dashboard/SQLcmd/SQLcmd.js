import { connect } from "react-redux";
import { Divider, Row } from 'antd';
import { Input, Button} from 'antd';
const { TextArea } = Input;

const SQLcmd = (porps) => {

    return (
        <>
            <Row className="card-1" align="middle" type="flex" justify="center"  style={{ padding: '10px' }}>
                <TextArea rows={5} placeholder="SELECT * FROM ..." maxLength={6} />
                <Button style={{ margin: '10px' }} type="primary">Submit Query</Button>
                <Divider orientation="left"><p>SQL Response</p></Divider>
                <p> XX asda dadadad asd asd asdasdawda das </p>
            </Row>
        </>

    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(SQLcmd);