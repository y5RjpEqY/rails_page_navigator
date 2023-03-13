import { useCallback, useEffect, useMemo, useState } from "react";
import { Path } from "common/types";
import { host } from "../../common/const";

type Props = {
    path: Path
}

export function useEnhance(props: Props) {
    const { path: { path, params } } = props;

    const [paramsValue, setParamsValue] = useState<{ [key: string]: string }>({});

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

    return { updateParamsValue, url, isValidUrl }
}
