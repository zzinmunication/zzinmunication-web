import { atom } from "recoil";

export interface DataType {
  [key: string]: string[]
}

const dataSetState = atom<DataType>({
  key: 'dataSetState',
  default: {}
});

export default dataSetState