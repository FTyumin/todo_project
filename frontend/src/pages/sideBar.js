import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import "../index.css";
import { BrowserRouter, Route, Link, NavLink,ROuter } from "react-router-dom";


export default function SideBar() {
    const {collapseSidebar} = useProSidebar()

    return (
        <div className="sidebar">
            <Sidebar style={{ height: "100vh" }}>
        
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center"}}
          >
            {" "}
            
          </MenuItem>
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