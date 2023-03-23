import React from "react";
import { useEnhance } from "./enhance";

import { Input, Card, Space } from "antd"
import { Container } from "./styles";

export function Params() {
    const { params, updateParamsValue  } = useEnhance();

    return (
        <Container>
            <Space direction="vertical" size="middle">
                {params.map(param => (
                    <Card key={param} title={param} style={cardStyle}>
                        <Input
                            onChange={e => updateParamsValue(param, e.target.value)}
                        />
                    </Card>
                ))}
            </Space>
        </Container>
    )
}

const cardStyle = {
    width: "100%",
    margin: "16px 0 0"
}
