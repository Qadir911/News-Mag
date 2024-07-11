import { useState } from "react"
import Navbar from "./Component/Navbar"
import NewsBoard from "./Component/NewsBoard"

const App=()=>{
  const [ category , setCategory ]= useState("general");
return(
  <div>
    <Navbar setCategory={setCategory}></Navbar>
    <NewsBoard category={category}></NewsBoard>
  </div>
)
}
export default App
