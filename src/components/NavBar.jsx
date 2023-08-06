import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "../components/SearchBar"

function NavBar() {
  return (
    <Stack component="header" direction="row" alignItems="center" p={2} sx={{background:"black", position:"sticky", top:0, justifyContent:"space-between"}}>
        <Link to="/" style={{display: "flex", alignItems:"center"}}>    
            <img src={logo} alt="Site logo" height={45}/>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default NavBar