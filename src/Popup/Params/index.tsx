import React from "react";
import { useEnhance } from "./enhance";

import { Input, Space, Form } from "antd";
import { Container } from "./styles";

export function Params() {
  const { params, updateParamsValue } = useEnhance();

  return (
    <Container>
      <Space direction="vertical" size="middle">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 300 }}
        >
          {params.map((param) => (
            <Form.Item key={param} label={param} style={cardStyle}>
              <Input
                onChange={(e) => {
                  console.log(e);
                  updateParamsValue(param, e.target.value);
                }}
              />
            </Form.Item>
          ))}
        </Form>
      </Space>
    </Container>
  );
}

const cardStyle = {
  width: "100%",
  margin: "16px 0 0",
};
