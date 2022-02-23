import { lazy, LazyExoticComponent } from "react";
import { LazyPages,LazyPages2,LazyPages3 } from "../lazyload/pages";
import { NoLazy } from '../lazyload/pages/NoLazy';


type JSXComponent = ()=>JSX.Element

interface Route{
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent ;
    name:string;
}

const LazyLayout = lazy(()=> import(/*webpackChunkName:"LazyPages1"*/'../lazyload/layout/LazyLayout'));
const Lazy2 = lazy(()=> import(/*webpackChunkName:"LazyPages2"*/'../lazyload/pages/LazyPages2'));
const Lazy3 = lazy(()=> import(/*webpackChunkName:"LazyPages3"*/'../lazyload/pages/LazyPages3'));

export const routes:Route[] = [
    {
        to:'/lazyload',
        path:'/lazyload/*',
        Component:LazyLayout,
        name:'LazyLayout'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component:NoLazy,
        name:'no-lazy'
    }
]

export default routes;