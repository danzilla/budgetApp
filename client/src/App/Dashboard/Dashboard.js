import { Col, Row } from 'antd';

export default function Dashboard() {

  const title = 'Dashboard Page'

  return (
    <Row style={{ height: '100vh' }} type="flex" justify="center" align="middle">
        <Col className="card-3" style={{padding: '20px'}}>
            <h1 style={{ color: 'black' }}>{title}</h1>
            <a href="/">Home</a>
        </Col>
    </Row>
  );
}

