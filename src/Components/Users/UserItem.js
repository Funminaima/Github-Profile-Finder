import { Link } from 'react-router-dom';
const UserItem = ({user})=>{
   return <div className="card text-center">
       <img src={user.avatar_url} alt={user.login} style={{width: "60px"}} className="round-img"/>
       <h3>{user.login}</h3>
       <div>
           {/* login represent the username on the api */}
            <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">More</Link>

       </div>
   </div> 
}

export default UserItem;