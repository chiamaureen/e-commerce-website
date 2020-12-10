import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuUI() {
  return (
    <ul className="navbar-nav flex-column mt-4">
      <li className="nav-item p-3 mb-2 sidebar-link">
        <NavLink
          exact
          activeClassName="active"
          className="nav-link"
          to="/mainpage"
        >
          <i className="fas fa-home text-white ml-2 mr-4"></i>
          <span className="hidden-sm-down text-white">首頁</span>
        </NavLink>
      </li>

      <li className="nav-item p-3 mb-2 sidebar-link">
        <NavLink activeClassName="active" className="nav-link" to="/Class">
          <i className="fas fa-chalkboard-teacher mr-3 text-white"></i>
          <span className="hidden-sm-down text-white">課程</span>
        </NavLink>
      </li>
      <li className="nav-item p-3 mb-2 sidebar-link">
        <NavLink activeClassName="active" className="nav-link" to="/Order">
          <i className="fas fa-store mr-3 text-white"></i>
          <span className="hidden-sm-down text-white">訂單</span>
        </NavLink>
      </li>

      <li className="nav-item p-3 mb-2 sidebar-link">
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/ProductData"
        >
          <i className="fas fa-tags mr-3 text-white"></i>
          <span className="hidden-sm-down text-white">商品管理</span>
        </NavLink>
      </li>

      <li className="nav-item text-white p-3 mb-2 sidebar-link">
        <NavLink activeClassName="active" className="nav-link" to="/ProductAdd">
          <i class="fas fa-store-alt text-white mr-3"></i>
          <span className="hidden-sm-down text-white">商品上架</span>
        </NavLink>
      </li>

      <li className="nav-item p-3 mb-2 sidebar-link">
        <NavLink activeClassName="active" className="nav-link" to="/ClassData">
          <i className="fas fa-tags mr-3 text-white"></i>
          <span className="hidden-sm-down text-white">課程管理</span>
        </NavLink>
      </li>

      <li className="nav-item p-3 mb-2 sidebar-link">
        <NavLink activeClassName="active" className="nav-link" to="/ClassAdd">
          <i className="fas fa-tags mr-3 text-white"></i>
          <span className="hidden-sm-down text-white">課程上架</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default MenuUI
