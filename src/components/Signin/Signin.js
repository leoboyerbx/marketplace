import React, { Components } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { withAuth } from '../Authentication';
import { withRouter } from 'react-router-dom';

const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 4,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 4,
    },
  };

function Signin(props) {
  
    const onFinish = values => {
      props.auth.signIn(values.username, values.password).then(user => {
        if (user) props.history.push('/')
      })
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Sign In</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
  };

export default withAuth(withRouter(Signin))