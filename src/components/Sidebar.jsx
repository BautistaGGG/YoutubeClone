/* eslint-disable react/prop-types */
import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

function Sidebar({categoriaSeleccionada,setCategoriaSeleccionada}) {

  return (
    <Stack component="nav" sx={{overflowY: "auto", height:{sx:"auto", md: "95%"}, flexDirection:{md:"column"}}}>
      {categories.map(cate => (
        <button 
          key={cate.name} 
          className="category-btn" 
          style={{background: cate.name === categoriaSeleccionada && "#FC1503", color: "white"}} 
          onClick={() => setCategoriaSeleccionada(cate.name)}
        >
          <span style={{color: cate.name === categoriaSeleccionada ? "white" : "red", marginRight: "15px"}}>
            {cate.icon}
          </span>
          <span style={{opacity: cate.name === categoriaSeleccionada ? "1" : "0.8"}}>{cate.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar