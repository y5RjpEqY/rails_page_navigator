import { useCallback, useContext, useMemo } from "react";
import { StateContext } from "../StateProvider";
import { actionTypes } from "common/actionTypes";

import { Option } from "common/types";

export function useEnhance() {
    const { state: { paths }, dispatch } = useContext(StateContext);

    const options: Option[] = useMemo(() =>
            paths.map((path) => ({ value: path, label: path })),
        [paths]);

    const onSelect = useCallback((value: string) => dispatch({ type: actionTypes.SET_SELECTED_PATH, payload: value }), [])

    const filterOption = useCallback((input: string, option: Option | undefined) => {
        return (option?.label ?? '').includes(input)
    }, []);

    const filterSort = useCallback((optionA: Option, optionB: Option) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
        []);

    return { options, onSelect, filterOption, filterSort }
}
