import React from "react";

import { useEnhance } from "./enhance";

import { Select as AntSelect } from "antd";

export function Select() {
    const {  options, filterOption, filterSort, onSelect } = useEnhance();
    return (
        <div>
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
