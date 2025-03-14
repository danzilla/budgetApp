import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const UploadTransaction = (props) => {

    return (
        <Button
            
            size='large'
            color="primary" 
            variant="outlined"
            icon={<UploadOutlined />}
            >
            Upload transaction to Account
        </Button>
    );
}

//Export
export default UploadTransaction;