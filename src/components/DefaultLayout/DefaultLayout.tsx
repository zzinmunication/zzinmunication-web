import React, { FunctionComponent } from "react";
import { Layout, Menu } from "antd";
import { useIntl } from "react-intl";
import { routerMeta } from 'meta';

import { Link, useLocation } from "react-router-dom";
import { assignRouteArrayProps } from "utils";
import { useNavigate } from 'react-router';
import appLogo from 'images/app_logo.png';

const { Header, Content } = Layout;

interface IDefaultLayoutProps {}

const defaultStyle = {
  height: "100%",
};

const menuStyle = {
  width: 'auto'
}

const defaultMenus = Object.keys(routerMeta).reduce((prev: any[], componentKey: string) => {
  const propsArr: any = assignRouteArrayProps(routerMeta[componentKey])
  const { path, ...rest } = assignRouteArrayProps(routerMeta[componentKey])
  
  const getPath = (path: string) => (path.match(/\//gi) || []).length

  const pathWIthSlashLengthArr: any | any[] = Array.isArray(propsArr) ? propsArr.map(({ path, ...rest }) => ({ path, length: getPath(path), ...rest })) : ({ path, length: getPath(path), ...rest })

  if (Array.isArray(pathWIthSlashLengthArr)) {
    const assignPathData = pathWIthSlashLengthArr.reduce((prevArr, {
      path,
      length,
      title,
      hidden = false
    }) => {
      if (length === 1 && !hidden) {
        return [...prevArr, { componentKey, path, title }]
      } else {
        return prevArr
      }
    }, [])
    return [...prev, ...assignPathData]
  } else {
    const {
      path,
      title,
      hidden = false,
      length
    } = pathWIthSlashLengthArr
    if (length === 1 && !hidden) {
      return [...prev, { componentKey, path, title }]
    } else {
      return prev
    }
  }
}, [])

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = (props) => {
  const { children } = props;
  const { formatMessage: fm } = useIntl();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout style={defaultStyle}>
      <Header className="header" style={{ backgroundColor: 'white', display: 'flex' }}>
        {
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <div className="logo" style={{
            width: 210,
            cursor: 'pointer',
            fontSize: 30
          }} onClick={() => { navigate('/') }}>
            <img src={appLogo} style={{
              height: 30,
              marginRight: 16
            }} alt={fm({ id: "title" })} />
            {fm({ id: "title" })}
          </div>
        }
        <Menu theme="light" mode="horizontal" style={menuStyle} activeKey={location.pathname} selectable={false}>
          {defaultMenus.map(({ path, title }) => <Menu.Item key={path}>
            <Link to={path}>{title || path}</Link>
          </Menu.Item>)}
        </Menu>
      </Header>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            overflow: 'auto'
          }}
        >
          <div style={{ maxWidth: 1200, margin: 'auto' }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
