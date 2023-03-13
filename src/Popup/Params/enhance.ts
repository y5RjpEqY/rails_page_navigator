import { useCallback, useEffect, useMemo, useState } from "react";
import { host } from "common/const";

type Props = {
    path: string
}

export function useEnhance(props: Props) {
    const { path } = props;

    const [paramsValue, setParamsValue] = useState<{ [key: string]: string }>({});

    const params  = path.split("/").filter(e => /^:.*id$/.test(e))

    const updateParamsValue = useCallback(
        (key: string, value: string) => setParamsValue((prevState) => ({ ...prevState, [key]: value})),
        []);

    const url = useMemo(() =>
        Object.entries(paramsValue).reduce((acc, [param, value]) => acc.replace(param, value || param),`${host}${path}`),
    [path, paramsValue])

    const isValidUrl = useMemo(() => !Object.values(paramsValue).includes(""), [paramsValue])

    useEffect(
        () => setParamsValue(Object.fromEntries(params.map(v => [v, ""]))),
        [path]
    )

    return { params, updateParamsValue, url, isValidUrl }
}
