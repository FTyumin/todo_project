import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import "./index.css";


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
            <h2>Login</h2>
            
          </MenuItem>
        </Menu>
      </Sidebar>
        </div>
    )
}