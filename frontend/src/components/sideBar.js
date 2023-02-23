import { BrowserRouter, Route, Link, NavLink,ROuter } from "react-router-dom";
// ? https://www.npmjs.com/package/react-pro-sidebar
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "../css/sidebar.css";

/**
 * * Icon Imports
 */
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function SideBar() {
  const {collapseSidebar} = useProSidebar()

  return (
    <div className="sidebar">
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          {/* Sidebar burger */}
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center"}}
          > 
          </MenuItem>

          {/* Home button */}
          <MenuItem
            className="navBtn"
            icon={<HomeOutlinedIcon/>}
            component = {<Link to="/"></Link>}
          >
            <h2>
              Home
            </h2>
          </MenuItem>

          {/* Login button */}
          <MenuItem
            className="navBtn"
            icon={<LoginOutlinedIcon/>}
            component = {<Link to="/login"></Link>}
          >
            <h2>
              Login
            </h2>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}