import { RouteProps } from "react-router-dom"

type RouteMetaType = (string | Omit<RouteProps, 'component'>)

export type RouterMetaTypes = { [key: string] : RouteMetaType | RouteMetaType[] } 

const routerMeta: RouterMetaTypes = {
  Home: { path: '/' },
  Category: ['/category'],
}

export default routerMeta