import React from "react";
import { createRoot } from "react-dom/client";

import { useEnhance } from "./enhance";

import { StateProvider } from "./StateProvider";
import { Select } from "./Select";
import { Params } from "./Params";
import { Jump } from "./Jump";

function Popup() {
    useEnhance();
    return (
        <div style={containerStyle}>
            <Select />
            <Params />
            <Jump />
        </div>
    )
}

const root = createRoot(document.getElementById("root")!);
root.render(
    <StateProvider>
        <Popup />
    </StateProvider>
)

const containerStyle = {
    width: "640px",
    height: "320px",
    padding: "16px 16px 0"
}
