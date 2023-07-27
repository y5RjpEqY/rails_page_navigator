import React from "react";

import { useEnhance } from "./enhance";

import { Select as AntSelect } from "antd";

export function Select() {
    const {  options, onSearch, onSelect } = useEnhance();
    return (
        <div>
            <AntSelect
              showSearch
              onSelect={onSelect}
              style={{ width: "100%"}}
              optionFilterProp="children"
              onSearch={onSearch}
              filterOption={false}
              autoFocus={true}
              options={options}
            />
        </div>
    )
}
