import { selectorFamily } from "recoil";
import dataSetState from "./dataset";

const dataSelectorState = selectorFamily({
  key: 'dataSelectorState',
  get: (query: string | undefined) => ({ get }) => {
    const dataSet: Map<string, string[]> = get(dataSetState);
    return query !== undefined ? (dataSet?.get(query) || []) : []
  },
});

export default dataSelectorState