import { RedoOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DefaultLayout from "components/DefaultLayout";
import FlexCenter from "components/FlexCenter";
import React, {
  FunctionComponent, useState, useMemo, useCallback
} from "react";
import { useParams } from "react-router";
import { useRecoilValue } from 'recoil';
import dataSelectorState from 'state/dataSelector';
import { range, shuffle } from "utils";
import {
  getPastelColor
} from "pastel-color";

interface IDetailProps {
}

const Detail: FunctionComponent<IDetailProps> = (props) => {
  const { query } = useParams();
  const selectData = useRecoilValue(dataSelectorState(query))
  const shuffles = useMemo<any[]>(() => shuffle(range(0, selectData.length - 1)), [selectData])
  const [randomKey, setRandomKey] = useState(0)

  const next = useCallback(
    () => {
      if (randomKey + 1 === selectData.length) {
        setRandomKey(0)
      } else {
        setRandomKey(randomKey + 1)
      }
    },
    [randomKey, selectData.length],
  )
  
  return (
    <DefaultLayout>
      <FlexCenter style={{ flexFlow: 'column', height: '100%' }}>
        <div style={{ fontSize: 30 }}>
          <div style={{ textAlign: 'center' }}>
            {`<${query} 추천멘트>`}
          </div>
          <FlexCenter style={{
            border: `3px dashed ${getPastelColor(query).hex}`,
            marginTop: 5,
            minHeight: '150px',
            borderRadius: 10,
            padding: 16
          }}>
            <b style={{ wordBreak: 'keep-all' }}>{selectData[shuffles[randomKey]]}</b>
          </FlexCenter>
        </div>
        <Button size={"large"} icon={<RedoOutlined />} style={{ marginTop: 16, width: 120 }} onClick={next} block>
          새로고침
        </Button>
      </FlexCenter>
    </DefaultLayout>
  );
};

export default Detail;
