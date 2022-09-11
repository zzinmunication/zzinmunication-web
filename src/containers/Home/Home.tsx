import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "components/DefaultLayout";
import { Card, Col, Row } from "antd";
import { Category } from "interface/Category";
import { ArrowRightOutlined } from "@ant-design/icons";
import whenDate from "images/when_date.png"
import whenEat from "images/when_eat.png"
import whenNeedExcuse from "images/when_need_excuse.png"
import {
  getPastelColor
} from "pastel-color";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}



const favoriteCategory: Category[] = [
  {
    value: "밥먹을 때",
    key: "when_eat",
    color: "#f87965",
    image: whenEat
  },
  {
    value: "심심할 떄",
    key: "when_bored"
  },
  {
    value: "소개팅\n할 때",
    key: "when_dating",
    image: whenDate
  },
  {
    value: "변명이\n필요할 떄",
    key: "when_need_excuse",
    color: "#ffe98c",
    image: whenNeedExcuse
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
        {favoriteCategory.map(({ key, value,  image }) => {
          return <Col xs={24} sm={12} md={12} lg={8} xl={8} key={key}>
            <Card title={
              <div style={{ position: 'relative' }}>
                {image && <img src={image} style={{
                  position: 'absolute',
                  top: 5,
                  left: 5,
                  height: 90,
                  zIndex: 0
                }} alt={value} />}
                <div
                  style={{
                    position: 'relative',
                    height: 87,
                    fontWeight: 'bold',
                    fontSize: 20,
                    zIndex: 1
                  }}
                  dangerouslySetInnerHTML={{ __html: value.split("\n").join("<br />") }} />
              </div>}
              bordered={false}
              style={{ textAlign: 'right', backgroundColor: getPastelColor(key).hex }}>
              <ArrowRightOutlined style={{ marginRight: '0px' }} />
            </Card>
          </Col>
        })}
      </Row>
    </DefaultLayout>
  );
};

export default Home;
