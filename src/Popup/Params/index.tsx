import React from "react";
import { useEnhance } from "./enhance";

import { Input, Card, Space } from "antd"

export function Params() {
    const { params, updateParamsValue  } = useEnhance();

    return (
        <div style={containerStyle}>
            <Space direction="vertical" size="middle">
                {params.map(param => (
                    <Card key={param} title={param} style={cardStyle}>
                        <Input
                            onChange={e => updateParamsValue(param, e.target.value)}
                        />
                    </Card>
                ))}
            </Space>
        </div>
    )
}

const containerStyle = {
    display: "flex",
    justifyContent: "center"
}

const cardStyle = {
    width: "100%",
    margin: "16px 0 0"
}
