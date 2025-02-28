import { useState } from "react";
import { Input, Col, Row, Form, Button } from 'antd';
import { SmileOutlined, LockOutlined, WalletOutlined } from '@ant-design/icons';

const Register = (props) => {
  // React-hookz - userAddInfo
  const [userAddInfo, setuserAddInfo] = useState({ userFannyPack: "", userName: "", userPassword: "" });
  // onChange - get and set state for Login form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserAddInfo({ ...userAddInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    // axios_fetch_post
    e.preventDefault();
    console.log(userAddInfo);
  }

  return (
    <Row style={{ height: '100vh' }} type="flex" justify="center" align="middle">
      <Col className="card-2" style={{padding: '20px'}}>
        <h1 style={{ color: 'black' }}>Register</h1>
        
        <Form.Item>
          <Input
            name="userFannyPack"
            value={userAddInfo.userFannyPack} type="text" placeholder="Fanny Pack / Wallet name"
            size="large"
            prefix={<WalletOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={handleChange} required />
        </Form.Item>
        <Form.Item>
          <Input
            name="userName"
            value={userAddInfo.userName} type="text" placeholder="Username"
            size="large"
            prefix={<SmileOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={handleChange} required />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Password"
            name="userPassword"
            value={userAddInfo.userPassword}
            type="password"
            size="large"
            prefix={<LockOutlined style={{ color: 'rgba(0,0,1,.25)' }} />}
            onChange={handleChange} required />
        </Form.Item>
        <Form.Item>
          <Row type="flex" justify="center">
            <Button
              onClick={handleSubmit}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Register
            </Button>
            <Button
              onClick={props.activeLogin}
              type="link">
              Login
            </Button>
          </Row>
        </Form.Item>

      </Col>
    </Row>
  );
}

export default Register;
