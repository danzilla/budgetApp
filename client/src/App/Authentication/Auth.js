import { Col, Row } from 'antd';

export default function Auth() {

  const title = 'Authentication Page'

  return (
    <Row style={{ height: '100vh' }} type="flex" justify="center" align="middle">
        <Col className="card-3" style={{padding: '20px'}}>
            <h1 style={{ color: 'black' }}>{title}</h1>
            <a href="/Dashboard">Dashboard</a>
        </Col>
    </Row>
  );
}

