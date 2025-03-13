import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Space, Select, Table, Tag, Popover, Button, Divider } from 'antd';


const { Column } = Table;

const TableView = (props) => {

    const data2 = [
        {
            key: '1',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['bling'],
        },
        {
            key: '3',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer', 'bling'],
        },
        {
            key: '5',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['bling'],
        },
        {
            key: '6',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '7',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer', 'bling'],
        },
        {
            key: '8',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['bling'],
        },
        {
            key: '9',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher', 'bling'],
        },
        {
            key: '11',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '12',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['bling'],
        },
        {
            key: '13',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '14',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer', 'bling'],
        },
        {
            key: '15',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['bling'],
        },
        {
            key: '16',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '17',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '18',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['bling'],
        },
        {
            key: '19',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher', 'bling'],
        },
    ];

    return (
        <>  
            <Divider orientation="right" plain>
                <Button
                    type="primary"
                    icon={<UploadOutlined />}
                    >
                    Upload transaction to Account
                </Button>
            </Divider>

            <Table className="card-3 " dataSource={data2}>
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags) => (
                        <>
                            {tags.map((tag) => {
                                let color = 'green';
                                if (tag === 'bling') {
                                    color = 'volcano';
                                } else if (tag === 'nice') {
                                    color = 'pink'
                                } else if (tag === 'cool') {
                                    color = 'red'
                                }
                                return (
                                    <Popover key={tag} content={(
                                        <div>
                                            <Button type="text">Delete this {tag}</Button>
                                        </div>
                                    )} title="Edit category" trigger="click">
                                        <Tag color={color}>
                                            {tag}
                                        </Tag>
                                    </Popover>
                                );
                            })}
                            <Popover content={(
                                <Space.Compact style={{ width: '100%' }}>
                                    <Select defaultValue="ken" style={{ width: '100%' }}>
                                        <Select.Option value={'lucy'} key={"1"}>1</Select.Option>
                                        <Select.Option value={'ken'} key={"Ken"}>2</Select.Option>
                                        <Select.Option value={'Dio'} key={"Dio"}>3</Select.Option>
                                    </Select>
                                    <Button type="primary">Add</Button>
                                </Space.Compact>
                            )} title="Add category" trigger="click">
                                <Button type="text"><PlusOutlined /></Button>
                            </Popover>
                        </>
                    )}
                />
            </Table>

        </>

    );
}

//Export
export default TableView;