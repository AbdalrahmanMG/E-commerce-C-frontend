import { Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    //navbar
    <div>
        <Outlet/>
    </div>
  )
}

export default RootLayout