import { useState } from "react";
import { Input, Col, Row, Form, Button } from 'antd';
import { SmileOutlined, LockOutlined } from '@ant-design/icons';

const Login = (props) => {

    // React-hookz - loginInfo
    const [loginInfo, setLoginInfo] = useState({ userName: "", userPassword: "" });
    // onChange - get and set state for Login form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        // axios_fetch_post
        e.preventDefault();
        console.log(loginInfo);
    }

    return (
        <Row style={{ height: '100vh' }} type="flex" justify="center" align="middle">
            <Col className="card-3" style={{padding: '20px'}}>
                <h1 style={{ color: 'black' }}>Sign-in</h1>

                <Form.Item>
                    <Input
                        name="userName"
                        value={loginInfo.userName} type="text" placeholder="Username"
                        size="large"
                        prefix={<SmileOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={handleChange} required />
                </Form.Item>
                <Form.Item>
                    <Input.Password
                        placeholder="Password"
                        name="userPassword"
                        value={loginInfo.userPassword}
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
                            Log in
                        </Button>
                        <Button
                            onClick={props.activeRegister}
                            type="link">
                            Register
                        </Button>
                    </Row>
                </Form.Item>
                
            </Col>
        </Row>
    );
}

export default Login;
