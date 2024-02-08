import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={({isActive}) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={({isActive}) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<ShoppingPage />}/>
            <Route path="lazy2" element={<LazyPage2 />}/>
            <Route path="lazy3" element={<LazyPage3 />}/>
            <Route path="/*" element={<Navigate to="/lazy1"/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
};
