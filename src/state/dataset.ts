import { atom } from "recoil";

const dataSetState = atom<Map<string, string[]>>({
  key: 'dataSetState',
  default: new Map<string, string[]>()
});

export default dataSetState