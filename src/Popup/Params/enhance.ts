import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { StateContext } from "../StateProvider";

import { host } from "common/const";

export function useEnhance() {
    const { state: { selectedPath } } = useContext(StateContext);

    const [paramsValue, setParamsValue] = useState<{ [key: string]: string }>({});

    const params  = selectedPath.split("/").filter(e => /^:.*id$/.test(e))

    const updateParamsValue = useCallback(
        (key: string, value: string) => setParamsValue((prevState) => ({ ...prevState, [key]: value})),
        []);

    const url = useMemo(() =>
        Object.entries(paramsValue).reduce((acc, [param, value]) => acc.replace(param, value || param),`${host}${selectedPath}`),
    [selectedPath, paramsValue])

    const isValidUrl = useMemo(() => !Object.values(paramsValue).includes(""), [paramsValue])

    useEffect(
        () => setParamsValue(Object.fromEntries(params.map(v => [v, ""]))),
        [selectedPath]
    )

    return { params, updateParamsValue, url, isValidUrl }
}
