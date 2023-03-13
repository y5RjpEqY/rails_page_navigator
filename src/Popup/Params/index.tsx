import React from "react";
import { useEnhance } from "./enhance";
import { Input, Card, Space, Typography } from "antd"

const { Text, Link } = Typography

import { Path } from "common/types";

type Props = {
    path: Path
}

export function Params(props: Props) {
    const { path: { params } } = props;
    const { updateParamsValue, url, isValidUrl } = useEnhance(props);

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
                <div>
                    url:{" "}
                    {isValidUrl ? (
                        <Link strong href={url} target="_blank">{url}</Link>
                    ) : (
                        <Text strong>{url}</Text>
                    )}
                </div>
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
