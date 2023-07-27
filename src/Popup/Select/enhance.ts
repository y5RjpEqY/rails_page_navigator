import { useCallback, useContext, useMemo, useState } from "react";
import Fuse from "fuse.js";
import { StateContext } from "../StateProvider";
import { actionTypes } from "common/actionTypes";

export function useEnhance() {
    const { state: { paths }, dispatch } = useContext(StateContext);

    const [filteredPaths, setFilteredPaths ] = useState<string[]>(paths)

    const onSelect = useCallback((value: string) => dispatch({ type: actionTypes.SET_SELECTED_PATH, payload: value }), [])

    const fuse = useMemo(() => {
        return new Fuse(paths, { threshold: 0.5, shouldSort: true, useExtendedSearch: true })
    }, [paths]);

    const onSearch = (input: string) => {
        setFilteredPaths(fuse.search(input).map(v => v.item))
    }

    const options =
        filteredPaths.map((path) => ({ value: path, label: path }))

    return { options, onSelect, onSearch }
}
