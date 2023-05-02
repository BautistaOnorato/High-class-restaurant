import { useEffect } from "react"
import AllMenu from "../container/Menu/AllMenu"

const Menu = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }, [])

  return (
    <div>
      <AllMenu />
    </div>
  )
}

export default Menu