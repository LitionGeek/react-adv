import { lazy, LazyExoticComponent } from "react";
import { LazyPages,LazyPages2,LazyPages3 } from "../lazyload/pages";

type JSXComponent = ()=>JSX.Element

interface Route{
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent ;
    name:string;
}

const Lazy1 = lazy(()=> import(/*webpackChunkName:"LazyPages1"*/'../lazyload/pages/LazyPages'));
const Lazy2 = lazy(()=> import(/*webpackChunkName:"LazyPages2"*/'../lazyload/pages/LazyPages2'));
const Lazy3 = lazy(()=> import(/*webpackChunkName:"LazyPages3"*/'../lazyload/pages/LazyPages3'));

export const routes:Route[] = [
    {
        to:'/lazy1',
        path:'lazy1',
        Component:Lazy1,
        name:'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component:Lazy2,
        name:'Lazy-2'
    },    
    {
        to:'/lazy3',
        path:'lazy3',
        Component:Lazy3,
        name:'Lazy-3'
    }
]

export default routes;