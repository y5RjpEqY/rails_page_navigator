import React from "react";

import { useEnhance } from "./enhance";

import { Select as AntSelect } from "antd";

import { Option } from "common/types";

type Props = {
    onSelect: (value: string) => void,
    options: Option[]
}

export function Select(props: Props) {
    const { onSelect, options, } = props;
    const {  filterOption, filterSort } = useEnhance();
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
