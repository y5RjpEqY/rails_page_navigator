import React from "react";
import { useEnhance } from "./enhance";

import { Typography } from "antd";
const { Text, Link } = Typography;

export function Url() {
  const { url, isValidUrl } = useEnhance();

  return (
    <div style={containerStyle}>
      <Text>url:</Text>
      {isValidUrl ? (
        <Link strong href={url} target="_blank">
          {url}
        </Link>
      ) : (
        <Text strong>{url}</Text>
      )}
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};
