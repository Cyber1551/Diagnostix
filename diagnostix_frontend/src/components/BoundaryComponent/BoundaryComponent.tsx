import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import "./BoundaryComponent.scss";

const BoundaryComponent = () => {
  return (
    <Result
      status="error"
      title="You don't have permission to view this page."
      subTitle="Try logging in or creating an account."
      extra={[
        <Button type="primary" key="login" href="login">
          Login
        </Button>,
        <Button key="register" href="register">Register</Button>,
      ]}
    />
  );
};
export default BoundaryComponent;
