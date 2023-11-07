import { useState } from "react";
import { connect } from "react-redux";
import { UploadOutlined } from '@ant-design/icons';
import { Modal, Table, Button, Divider } from 'antd';
import CSVReader from 'react-csv-reader';

const { Column } = Table;

const AddTransactions = (props) => {

    // Modal action
    const [modalOpen, setModalOpen] = useState(false);
    const modalClearClose = () => {
        window.location.reload();
    }

    // CSV Options
    const papaparseOptions = {
        header: false,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header =>
            header
                .toLowerCase()
                .replace(/\W/g, '_')
    }

    // Table data transformation
    const [csvData, setCsvData] = useState({
        data: [],
        fileInfo: []
    });
    let tableData = [];
    let DisplayData;
    if (!csvData.data[0]) {
        tableData = "table is not full"
    } else {
        csvData.data.map((data, index) => {
            tableData.push({
                l1: data[0],
                l2: data[1],
                l3: data[2],
                l4: data[3],
                l5: data[4]
            })
        })
        DisplayData = <Table style={{ marginRight: '15px', marginBottom: '50px' }} className="card-3 " dataSource={tableData}>
            <Column title="Date" dataIndex="l1" key="l1" />
            <Column title="Description" dataIndex="l2" key="l2" />
            <Column title="Withdraw" dataIndex="l3" key="l3" />
            <Column title="Deposite" dataIndex="l4" key="l4" />
            <Column title="Balance" dataIndex="l5" key="l5" />
        </Table>
    }

    return (
        <>
            <Button onClick={() => setModalOpen(true)} size="large" type="primary">
                <UploadOutlined style={{ fontSize: '16px', marginLeft: 5 }} />Add transaction to "Account"</Button>
            <Modal
                width={720}
                size='large'
                title="Add transaction to Account"
                centered
                open={modalOpen}
                onOk={() => modalClearClose()}
                onCancel={() => modalClearClose()}
            >
                <CSVReader
                    cssClass="csv-reader-input"
                    label="Upload your transcation in CSV  "
                    parserOptions={papaparseOptions}
                    inputId="csvUploader"
                    inputName="csvUploader"
                    inputStyle={{ color: 'red' }}
                    onFileLoaded={(data, fileInfo) => setCsvData({
                        data: data,
                        fileInfo: fileInfo
                    })}
                />
                <Divider />
                {DisplayData}
            </Modal>
        </>
    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(AddTransactions);