import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPages, LazyPages2 } from '../pages';
import LazyPages3 from '../pages/LazyPages3';

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        <ul>
            <li>
                <NavLink to="lazy1">Lazy1</NavLink>
            </li>
            <li>
                <NavLink to="lazy2">Lazy2</NavLink>
            </li>
            <li>
                <NavLink to="lazy3">Lazy3</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path="lazy1" element={<LazyPages/>}/>
            <Route path="lazy2" element={<LazyPages2/>}/>
            <Route path="lazy3" element={<LazyPages3/>}/>

            <Route path="*" element={<Navigate replace to="lazy1"/>}/>
        </Routes>
    </div>
  )
}


export default LazyLayout;