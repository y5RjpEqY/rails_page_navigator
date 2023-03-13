import React from "react";
import { useEnhance } from "./enhance";

import { Typography } from "antd"
const { Text, Link } = Typography

export function Jump() {
    const { url, isValidUrl } = useEnhance();

    return (
        <div style={containerStyle}>
            url:{" "}
            {isValidUrl ? (
                <Link strong href={url} target="_blank">{url}</Link>
            ) : (
                <Text strong>{url}</Text>
            )}
        </div>
    )
}

const containerStyle = {
    display: "flex",
    justifyContent: "center"
}