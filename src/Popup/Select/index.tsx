import React from "react";

import { useEnhance } from "./enhance";

import { Select as AntSelect } from "antd";

export function Select() {
    const {  options, filterOption, filterSort, onSelect } = useEnhance();
    return (
        <div style={containerStyle}>
            <AntSelect
              showSearch
              onSelect={onSelect}
              style={{ width: "100%"}}
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={options}
            />
        </div>
    )
}

const containerStyle = {
    width: "640px",
    height: "320px",
    padding: "16px 16px 0"
}
