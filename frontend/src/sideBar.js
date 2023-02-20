import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";


function SideBar() {
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
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
        </Menu>
      </Sidebar>
        </div>
    )
}