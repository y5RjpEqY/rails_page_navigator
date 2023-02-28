import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { Option, Path, PathList } from "common/types";

import { host } from "../common/const";

export function useEnhance() {
    const [selectedPath, setSelectedPath] = useState<Path>()
    const [pathList, setPathList] = useState<PathList>({});

    useEffect(() => {
        axios.get(`${host}/rails/info/routes?path=/`)
            .then(({ data: { fuzzy } }) => {
                setPathList(extractPath(fuzzy));
            })
    }, []);

    const onSelect = useCallback((value: string) => setSelectedPath(pathList[value]), [pathList]);

    const filterOption = useCallback((input: string, option: Option | undefined) => {
        return (option?.label ?? '').includes(input)
    }, []);

    const filterSort = useCallback((optionA: Option, optionB: Option) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
        [])


    const options: Option[] = useMemo(() =>
            Object.entries(pathList).map(([key, path]) => ({ value: key, label: path.path })),
        [pathList])

    return { selectedPath, onSelect, options, filterOption, filterSort }
}

function extractPath(data: string[]): PathList {
    return [...new Set(data)].reduce((acc, value, idx) => {
        const path = value.replace("(.:format)", "")
        const params = path.split("/").filter(e => /^:.*id$/.test(e))
        return { [idx.toString()]: { path, params }, ...acc }
    }, {})
}
