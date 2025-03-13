import { Row, Col, Select, Card , Splitter, Divider  } from 'antd';

import TableView from './Table/TableView'
import GraphView from './Graph/GraphView'

const Accounts = (props) => {

  const SelectAction = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Row style={{margin: '10px'}}>

      <Col span={24}>
        <Divider orientation="left" plain>
          <h4>Account: 
            <Select
              defaultValue="lucy"
              style={{ width: 200, textAlign: 'left', marginLeft: '20px'  }}
              size="large"
              onChange={SelectAction}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled'},
              ]}
            />
          </h4>
          </Divider>
      </Col>

      <Splitter>
        <Splitter.Panel defaultSize="60%" min="20%" max="70%">
          <Card>
            <TableView />
          </Card>
        </Splitter.Panel>
        <Splitter.Panel>
          <Card>
            <GraphView />
          </Card>
        </Splitter.Panel>
      </Splitter>
    </Row>
  );
}

// Export
export default Accounts;