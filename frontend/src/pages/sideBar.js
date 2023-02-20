import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import "../index.css";
import { BrowserRouter, Route, Link } from "react-router-dom";


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
            <h2>Menu</h2>
          </MenuItem>
          <MenuItem
            icon={<LoginOutlinedIcon/>}
            style={{ textAlign: "center" }}
          >
            
            <a href="/login">
              <h2>Login</h2>
            </a>
            
          </MenuItem>
          
        </Menu>
        
      </Sidebar>

        </div>
    )
}