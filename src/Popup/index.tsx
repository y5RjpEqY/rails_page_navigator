import React from "react";
import { createRoot } from "react-dom/client";

import { useEnhance } from "./enhance";

import { Select } from "antd";
import { Jump } from "./Jump";

function Popup() {
    const { selectedPath, onSelect, options, filterOption, filterSort } = useEnhance();
    return (
        <div style={containerStyle}>
            <Select
              showSearch
              onSelect={onSelect}
              style={{ width: "100%"}}
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={options}
            />
            {selectedPath && (
                <Jump path={selectedPath} />
            )}
        </div>
    )
}

const root = createRoot(document.getElementById("root")!);
root.render(<Popup />)

const containerStyle = {
    width: "640px",
    height: "320px",
    padding: "16px 16px 0"
}
