import { Col, Row, Button } from 'antd';
import { SettingTwoTone, PieChartTwoTone, CodeTwoTone, TagsTwoTone } from '@ant-design/icons';


const Navigation = (props) => {

  return (
    <Row className="card-4" align="middle" style={{ padding: '10px' }}>
      <Col align="left" span={6}>
        <h2>FannyPack</h2>
      </Col>
      <Col span={6} offset={12}>
        <Button size="large" type="text">
            <PieChartTwoTone style={{ fontSize: '25px', marginLeft: 5 }} /></Button>

        <Button size="large" type="text">
            <TagsTwoTone style={{ fontSize: '25px', marginLeft: 5, marginRight: 5 }} /></Button>

        <Button size="large" type="text">
            <CodeTwoTone style={{ fontSize: '25px', marginLeft: 5 }} /></Button>
        
        <Button size="large" type="text">
            <SettingTwoTone style={{ fontSize: '25px', marginRight: 5 }} /></Button>
      </Col>
    </Row>
  );
}

// Export
export default Navigation;