import { useState } from "react";
import { Input, Col, Row, Form, Button } from 'antd';
import { SmileOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const Register = (props) => {
  // React-hookz - userAddInfo
  const [userAddInfo, setuserAddInfo] = useState({});
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
      <Col className="card-3" style={{padding: '50px'}}>
        <h1 style={{ color: 'black' }}>Register</h1>
        
        {/* FName and LName form field */}
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Input 
            prefix={<SmileOutlined style={{ color: 'rgba(0,0,1,.25)' }} />} 
            placeholder="First Name"
            name="firstName"
            value={userAddInfo.firstName} 
            type="text"
            size="large"
            onChange={handleChange} />
        </Form.Item>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
          <Input 
            placeholder="Last Name"
            name="lastName"
            value={userAddInfo.lastName} 
            type="text"
            size="large"
            onChange={handleChange} />
        </Form.Item>

        
        {/* UserName and Password form field */}
        <Form.Item>
          <Input
            placeholder="Username"
            name="userName"
            value={userAddInfo.userName} 
            type="text"
            size="large"
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={handleChange} 
            required />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Password"
            name="userPassword"
            value={userAddInfo.userPassword}
            type="password"
            size="large"
            prefix={<LockOutlined style={{ color: 'rgba(0,0,1,.25)' }} />}
            onChange={handleChange} 
            required />
        </Form.Item>

        {/* Submit and Login Buttons */}
        <Form.Item>
          <Row type="flex" justify="center">
            <Button
              onClick={handleSubmit}
              type="primary">
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
