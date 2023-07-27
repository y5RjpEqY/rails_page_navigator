import { useCallback, useContext, useEffect, useState } from "react";
import { StateContext } from "../StateProvider";

import { actionTypes } from "common/actionTypes";
import { host } from "common/const";

export function useEnhance() {
  const {
    state: { selectedPath },
    dispatch,
  } = useContext(StateContext);

  const [paramsValue, setParamsValue] = useState<{ [key: string]: string }>({});

  const params = selectedPath.split("/").filter((e) => /^:.*id$/.test(e));

  const updateParamsValue = useCallback(
    (key: string, value: string) =>
      setParamsValue((prevState) => ({ ...prevState, [key]: value })),
    [],
  );

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_URL,
      payload: Object.entries(paramsValue).reduce(
        (acc, [param, value]) => acc.replace(param, value || param),
        `${host}${selectedPath}`,
      ),
    });
  }, [selectedPath, paramsValue]);

  useEffect(
    () => setParamsValue(Object.fromEntries(params.map((v) => [v, ""]))),
    [selectedPath],
  );

  return { params, updateParamsValue };
}
