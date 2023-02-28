import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function Popup() {
    return (
        <div>Options</div>
    )
}


const root = createRoot(document.getElementById("root")!);
root.render(<Popup />)