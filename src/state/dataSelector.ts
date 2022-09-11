import { selectorFamily } from "recoil";
import dataSetState from "./dataset";

const dataSelectorState = selectorFamily({
  key: 'dataSelectorState',
  get: (query: string | undefined) => ({ get }) => {
    const dataSet = get(dataSetState);
    return query !== undefined ? (dataSet?.[query] || []) : []
  },
});

export default dataSelectorState