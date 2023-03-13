import { useContext, useMemo } from "react";
import { StateContext } from "../StateProvider";

export function useEnhance() {
    const { state: { url } } = useContext(StateContext);

    const isValidUrl = useMemo(() => !/\/:.*id/.test(url),
    [url])

    return { url, isValidUrl }
}
