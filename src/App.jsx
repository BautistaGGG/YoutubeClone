import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Box } from "@mui/material"

import {
   NavBar,
   Feed,
   SearchFeed,
   VideoDetail,
   ChannelDetail
} from "./components/index"

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:"black"}}>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/search/:id" element={<SearchFeed/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/video/:id" element={<VideoDetail/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
