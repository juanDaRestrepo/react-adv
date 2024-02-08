import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}

const LazyLayout = lazy(() => import(/* WebpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))
const Lazy2 = lazy(() => import(/* WebpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* WebpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy' 
    }
]
