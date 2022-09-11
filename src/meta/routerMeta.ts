import { RouteProps } from "react-router-dom"

type RouteMetaType = (string | Omit<RouteProps, 'component'> | any)

export type RouterMetaTypes = { [key: string] : RouteMetaType | RouteMetaType[] } 

const routerMeta: RouterMetaTypes = {
  Home: { path: '/', hidden: true },
  Category: { path: '/category', title: '상황 선택' },
  Detail: { path: '/detail/:query', hidden: true },
}

export default routerMeta