import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { Option } from "common/types";

import { host, ignoreList } from "common/const";

export function useEnhance() {
    const [selectedPath, setSelectedPath] = useState<string>("")
    const [pathList, setPathList] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${host}/rails/info/routes?path=/`)
            .then(({ data: { fuzzy } }) => {
                setPathList(extractPath(fuzzy));
            })
    }, []);

    const onSelect = useCallback((value: string) => setSelectedPath(value), []);

    const options: Option[] = useMemo(() =>
            pathList.map((path) => ({ value: path, label: path })),
        [pathList])

    return { selectedPath, onSelect, options }
}

function extractPath(data: string[]): string[] {
    return [...new Set(data)].reduce((acc: string[], value: string) => {
        const path = value.replace("(.:format)", "");
        return ignoreList.includes(path) ? acc : [...acc, path];
    }, [])
}
