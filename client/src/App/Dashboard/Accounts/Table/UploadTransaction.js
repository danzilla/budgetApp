import { UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Table, Divider,  } from 'antd';

import React, { useState } from 'react';

import { useCSVReader } from 'react-papaparse';
const { Column } = Table;

const UploadTransaction = (props) => {
    // CSV Reader - papaparse
    const { CSVReader } = useCSVReader();
    // Store Table Data
    const [tableData, setTableData] = useState([])
    // Modal Contorl
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
      setTableData([])
    };

    return (
        <>
            <Button
                onClick={showModal}
                size='large'
                color="primary" 
                variant="outlined"
                icon={<UploadOutlined />}>
                Upload transaction
            </Button>
            <Modal
                title={'Account: ' + 123}
                style={{margin: '25px'}}
                centered width={'69%'} 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}>
                    <CSVReader
                        onUploadAccepted={(results) => {
                            let collectJsonData = []
                            for (let i = 0; i < results.data.length; i++){
                                let cleanCsvTOJson = {}
                                cleanCsvTOJson = {
                                    'key': i+1,
                                    'Date': results.data[i][0],
                                    'Desc': results.data[i][1],
                                    'Data_1': results.data[i][2],
                                    'Data_2': results.data[i][3],
                                    'Data_3': results.data[i][4],
                                    'Tags': []
                                }
                                collectJsonData.push(cleanCsvTOJson)
                            }
                            setTableData(collectJsonData)
                        }}>
                        {({
                            getRootProps,
                            acceptedFile, // Get File name - Not being used?
                        }) => (
                            <Divider orientation="right" plain>
                                <Button
                                    {...getRootProps()}
                                    size='large'
                                    color="primary" 
                                    variant="outlined"
                                    icon={<UploadOutlined />}>
                                    Upload transaction
                                </Button>
                            </Divider>
                        )}
                    </CSVReader>
                    <Table className="card-3 " dataSource={tableData}>
                        <Column title="Key" dataIndex="key" key="key" />
                        <Column title="Date" dataIndex="Date" key="Date" />
                        <Column title="Desc" dataIndex="Desc" key="Desc" />
                        <Column title="Data_1" dataIndex="Data_1" key="Data_1" />
                        <Column title="Data_2" dataIndex="Data_2" key="Data_2" />
                        <Column title="Data_3" dataIndex="Data_3" key="Data_3" />
                    </Table>
            </Modal>
        </>
    );
}

//Export
export default UploadTransaction;