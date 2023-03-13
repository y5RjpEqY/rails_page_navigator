import { useCallback } from "react";
import { Option } from "common/types";

export function useEnhance() {
    const filterOption = useCallback((input: string, option: Option | undefined) => {
        return (option?.label ?? '').includes(input)
    }, []);

    const filterSort = useCallback((optionA: Option, optionB: Option) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
        [])


    return {  filterOption, filterSort }
}
