import React, { Component } from "react";
import { Form, Icon, Input, Button, message } from "antd";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const { getFieldDecorator } = props.form;
  const { container, form } = styles;

  const handleSubmit = e => {
    e.preventDefault();

    const { form, mutate } = props;

    form.validateFields((err, { email, password }) => {
      if (!err) {
        mutate({ variables: { email, password } })
          .then(
            ({
              data: {
                signUp: { token }
              }
            }) => {
              localStorage.setItem("token", token);
              history.push("/");
            }
          )
          .catch(error => {
            console.log(error);
            message.error(error.message, 3);
          });
      }
    });
  };

  return (
    <div style={container}>
      <Form style={form} onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  form: {
    border: "3px solid #DADADA",
    minWidth: 400,
    padding: 20
  }
};

const mutation = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      token
    }
  }
`;

export default Form.create({ name: "login_form" })(graphql(mutation)(Login));
