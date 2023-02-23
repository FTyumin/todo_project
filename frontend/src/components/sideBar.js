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
            icon={<HomeOutlinedIcon/>}
            style={{ textAlign: "center" }}
          >
            <Link to="/" 
            className="link"
            style={{textDecoration:"none"}}
            >
              <h2>
                Home
              </h2>
            </Link>
          </MenuItem>

          {/* Login button */}
          <MenuItem
            icon={<LoginOutlinedIcon/>}
            style={{ textAlign: "center" }}
          >
            <Link to="/login" 
            className="link"
            style={{textDecoration:"none"}}
            >
              <h2>
                Login
              </h2>
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}