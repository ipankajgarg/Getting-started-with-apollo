import React from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

function CreatePost(props) {
  const { getFieldDecorator } = props.form;
  const { container, button } = styles;

  const handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const { form, mutate } = props;

    form.validateFields((err, { title, description }) => {
      if (!err) {
        mutate({ variables: { title, description, token } })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
            message.error(error.message, 3);
          });
      }
    });
  };

  return (
    <div style={container}>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("title", {
            rules: [{ required: true, message: "Please input your title!" }]
          })(<Input placeholder="What about title" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("description", {
            rules: [
              { required: true, message: "Please input your Description!" }
            ]
          })(<Input placeholder="What about description" />)}
        </Form.Item>
        <Form.Item style={button}>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mutation = gql`
  mutation CreatePost($title: String!, $description: String!, $token: String!) {
    createPost(title: $title, description: $description, token: $token) {
      id
      title
      description
    }
  }
`;

const styles = {
  container: {
    margin: "100px 30px"
  },
  button: {
    maxWidth: 150
  }
};

export default Form.create({ name: "create_post" })(
  graphql(mutation)(CreatePost)
);
