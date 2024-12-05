import { useParams } from "react-router-dom"

 
function Users() {
 
  const {itemTitle} = useParams()
   
  return (
    <div>{itemTitle}</div>
  )
}

export default Users