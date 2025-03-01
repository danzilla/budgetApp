import { Row, Splitter } from 'antd';

import TableView from './Table/TableView'

const Accounts = (props) => {

  return (
    <Row style={{margin: '25px'}}>


      <Splitter style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Splitter.Panel defaultSize="60%" min="20%" max="70%">
          <TableView />
        </Splitter.Panel>
        <Splitter.Panel>
          asd
        </Splitter.Panel>
      </Splitter>
    </Row>
  );
}

// Export
export default Accounts;