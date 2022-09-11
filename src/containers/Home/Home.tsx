import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "components/DefaultLayout";
import {
  Button,
  Card,
  Col,
  Row
} from "antd";
import { Category } from "interface/Category";
import { ArrowRightOutlined } from "@ant-design/icons";
import whenDate from "images/when_date.png"
import whenEat from "images/when_eat.png"
import whenBored from "images/when_bored.png"
import whenApologize from "images/when_apologize.png"
import whenNeedExcuse from "images/when_need_excuse.png"
import whenInvitationOnTheStreet from "images/when_invitation_on_the_street.png"
import {
  getPastelColor
} from "pastel-color";
import { useNavigate } from "react-router";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const favoriteCategory: Category[] = [
  {
    value: "밥\n먹을 때",
    key: "when_eat",
    image: whenEat
  },
  {
    value: "심심할 때",
    key: "when_bored",
    image: whenBored
  },
  {
    value: "사과할 때",
    key: "when_apologize",
    image: whenApologize
  },
  {
    value: "변명이\n필요할 때",
    key: "when_need_excuse",
    image: whenNeedExcuse
  },
  {
    value: "소개팅\n할 때",
    key: "when_dating",
    image: whenDate
  },
  {
    value: "길거리에서\n권유를\n받았을 때",
    key: "when_invitation_on_the_street",
    image: whenInvitationOnTheStreet
  }
]

const Home: FunctionComponent<ICardViewProps> = (props) => {
  const navigate = useNavigate()
  return (
    <DefaultLayout>
      <Row gutter={[16, 16]}>
        {favoriteCategory.map(({ key, value,  image }) => {
          const pathValue = value.replaceAll('\n', ' ')
          return <Col xs={24} sm={12} md={12} lg={8} xl={8} key={key}>
            <Card title={
              <div style={{ position: 'relative' }}>
                {image && <img src={image} style={{
                  position: 'absolute',
                  bottom: -25,
                  left: 16,
                  height: 100,
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
              hoverable={true}
              onClick={() => {
                navigate(`/detail/${pathValue}`)
              }}
              style={{ textAlign: 'right', backgroundColor: getPastelColor(pathValue).hex }}>
              <ArrowRightOutlined style={{ marginRight: '0px' }} />
            </Card>
          </Col>
        })}
      </Row>
      <Button size={"large"} style={{
        marginTop: 16,
        width: '100%',
        height: 'auto',
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
      }} onClick={() => navigate('/category')} block>
        더 보러 가기 <ArrowRightOutlined />
      </Button>
    </DefaultLayout>
  );
};

export default Home;
