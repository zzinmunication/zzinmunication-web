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
import range from "utils/range";
import shuffle from "utils/shuffle";

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
      <FlexCenter style={{ flexFlow: 'column' }}>
        <div style={{ fontSize: 30 }}>
          추천멘트: <b>{selectData[shuffles[randomKey]]}</b>
        </div>
        <Button size={"large"} icon={<RedoOutlined />} style={{ marginTop: 10, width: 120 }} onClick={next} block>
          새로고침
        </Button>
      </FlexCenter>
    </DefaultLayout>
  );
};

export default Detail;
