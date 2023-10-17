import React from 'react';
import { Button, Form, Input } from 'antd';
import { useMutation } from 'react-query';
import { UserServices } from '../../services/user.services';
import { AuthUtils } from '../../utils/AuthUtils';

function Login() {

  const { mutateAsync: loginRequest, isLoading: loginRequestLoader } = useMutation(UserServices.login);

  const onFinish = async (values) => {
    await loginRequest(values, {
      onSuccess: (data) => {
        const token = data?.data?.results.token;
        AuthUtils.saveToken(token);
        window.location.reload(true);
      }
    })
  };
  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder='Type Your Email' type='email' />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder='Type Your Password' />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loginRequestLoader}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Login;