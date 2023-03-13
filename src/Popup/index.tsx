import React from "react";
import { createRoot } from "react-dom/client";

import { useEnhance } from "./enhance";

import { Select } from "./Select";
import { Params } from "./Params";

function Popup() {
    const { selectedPath, onSelect, options } = useEnhance();
    return (
        <div style={containerStyle}>
            <Select
              onSelect={onSelect}
              options={options}
            />
            {selectedPath && (
                <Params path={selectedPath} />
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
