import { MenuItem } from "../../components"
import { data } from '../../constants'
import './AllMenu.css'

const AllMenu = () => {
  return (
    <div className="app__allMenu section__padding app__bg">
      {
        data.menu.map((category, i) => (
          <div className="app__allMenu-category" key={i}>
            <h2 className="headtext__cormorant">{category.name}</h2>
            <div className="app__allMenu-container_items">
              {
                category.data.map((item, i) => (
                  <MenuItem key={i} title={item.title} price={item.price} ingredients={item.tags.join(' | ')} />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AllMenu