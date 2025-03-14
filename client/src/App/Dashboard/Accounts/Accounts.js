import { Row, Col, Card , Splitter  } from 'antd';

import TableView from './Table/TableView'
import ChartView from './Chart/ChartView'

const Accounts = (props) => {

  return (
    <Row style={{margin: '10px'}}>
      <Col span={24}>
        <Splitter>
          <Splitter.Panel defaultSize="60%" min="20%" max="70%">
            <Card>
              <TableView />
            </Card>
          </Splitter.Panel>
          <Splitter.Panel>
            <Card>
              <ChartView />
            </Card>
          </Splitter.Panel>
        </Splitter>
      </Col>
    </Row>
  );
}

// Export
export default Accounts;