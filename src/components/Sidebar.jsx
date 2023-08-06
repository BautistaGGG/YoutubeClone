import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

function Sidebar() {

  const selectedCategory = "New"

  return (
    <Stack component="nav" sx={{overflowY: "auto", height:{sx:"auto", md: "95%"}, flexDirection:{md:"column"}}}>
      {categories.map(cate => (
        <button key={cate.name} className="category-btn" style={{background: cate.name === selectedCategory && "#FC1503", color: "white"}}>
          <span style={{color: cate.name === selectedCategory ? "white" : "red", marginRight: "15px"}}>
            {cate.icon}
          </span>
          <span>{cate.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar