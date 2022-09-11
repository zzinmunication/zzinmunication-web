import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "components/DefaultLayout";
import { Card, Col, Row } from "antd";
import { Category } from "interface/Category";
import { ArrowRightOutlined } from "@ant-design/icons";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}



const favoriteCategory: Category[] = [
  {
    value: "밥먹을 때",
    key: "when_eat",
    color: "#f87965"
  },
  {
    value: "심심할 떄",
    key: "when_bored",
    color: ""
  },
  {
    value: "소개팅\n할 때",
    key: "when_dating"
  },
  {
    value: "변명이\n필요할 떄",
    key: "when_need_excuse",
    color: "#ffe98c"
  },
  {
    value: "소개팅\n할 때",
    key: "when_dating",
    color: "#cdace2"
  },
  {
    value: "길거리에서\n권유를\n받았을 때",
    key: "when_invitation_on_the_street"
  }
]

const Home: FunctionComponent<ICardViewProps> = (props) => {
  return (
    <DefaultLayout>
      <Row gutter={[16, 16]}>
        {favoriteCategory.map(({ key, value,  color }) => {
          return <Col xs={24} sm={12} md={12} lg={8} xl={8} key={key}>
            <Card title={
              <div
                style={{
                  height: 87,
                  fontWeight: 'bold',
                  fontSize: 20
                }}
                dangerouslySetInnerHTML={{ __html: value.split("\n").join("<br />") }} />
              }
              bordered={false}
              style={{ textAlign: 'right', backgroundColor: color }}>
              <ArrowRightOutlined style={{ marginRight: '0px' }} />
            </Card>
          </Col>
        })}
      </Row>
    </DefaultLayout>
  );
};

export default Home;
