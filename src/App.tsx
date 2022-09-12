import React, { FunctionComponent, useEffect } from "react";
import "antd/dist/antd.less";
import { IntlProvider } from "react-intl";
import CommonRouter from "./CommonRouter";
import { HashRouter as Router } from "react-router-dom";

import {
  useRecoilValue, useSetRecoilState,
} from "recoil";
import langState, { messages } from "state/lang";
import dataSetState from "state/dataset";

const App: FunctionComponent<any> = () => {
  const lang = useRecoilValue(langState);
  const setDataSet = useSetRecoilState(dataSetState)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await fetch('/zzinmunication_dataset.json')
    const data: any[] = await response.json()
    const assignMap = data.reduce((prev, { title, comments }) => {
      prev.set(title, comments)
      return prev
    }, new Map<string, string[]>())
    // console.log('assignMap', assignMap)
    setDataSet(assignMap)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Router>
        <CommonRouter />
      </Router>
    </IntlProvider>
  );
};

export default App;
