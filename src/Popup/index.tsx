import React from "react";
import { createRoot } from "react-dom/client";
import { useEnhance } from "./enhance";

import { StateProvider } from "./StateProvider";
import { Select } from "./Select";
import { Params } from "./Params";
import { Jump } from "./Jump";
import { Container } from "./styles"

function Popup() {
    useEnhance();
    return (
        <Container>
            <Select />
            <Params />
            <Jump />
        </Container>
    )
}

const root = createRoot(document.getElementById("root")!);
root.render(
    <StateProvider>
        <Popup />
    </StateProvider>
)
