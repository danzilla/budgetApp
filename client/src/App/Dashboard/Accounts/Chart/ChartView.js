import { Divider, Button, Row, Col } from 'antd';
import { SettingTwoTone, PieChartTwoTone, CodeTwoTone, TagsTwoTone } from '@ant-design/icons';


const GraphView = (props) => {

    return (
        <>
            <Divider orientation="right" plain>
                <Button size="large" type="text">
                    <PieChartTwoTone style={{ fontSize: '25px' }} /></Button>

                <Button size="large" type="text">
                    <TagsTwoTone style={{ fontSize: '25px' }} /></Button>

                <Button size="large" type="text">
                    <CodeTwoTone style={{ fontSize: '25px' }} /></Button>
                
                <Button size="large" type="text">
                    <SettingTwoTone style={{ fontSize: '25px' }} /></Button>
            </Divider>

            <Row style={{height: '100vh'}} className="card-3 " >
                <Col>
                    Chart Details
                </Col>
            </Row>
        
        </>
    );
}

//Export
export default GraphView;