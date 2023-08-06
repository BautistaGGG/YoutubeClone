/*import { useState } from "react"
import { useNavigate } from "react-router-dom"*/
import { IconButton, Paper } from "@mui/material"
import { Search } from "@mui/icons-material"

function SearchBar() {

  function handleSubmitForm(e) {
    e.preventDefault()
    console.log("Buscando...")
  }  

  /*function handleInputChange(e) {
    
  }*/

  return (
    <Paper component="form" sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow:"none", mr:{ sm: 5}}} onSubmit={handleSubmitForm}>
        <input type="text" placeholder="Search" className="search-bar" /*onChange={handleInputChange} value=""*//>
        <IconButton type="submit" sx={{p: "10px", color:"red"}}> 
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar