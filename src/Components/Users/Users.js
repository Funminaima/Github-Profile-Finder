import UserItem from './UserItem';
import {useEffect} from 'react';
import Spinner from '../Layout/Spinner';
import {connect} from 'react-redux';
import {getAllUsers} from '../../redux/Github/Action';


const Users= ({userLogs=[], getAllUsers}) =>{

    useEffect(()=>{
        
        // eslint-disable-next-line 
        getAllUsers()
        
    },[])
    if(userLogs.loading){
      return  <Spinner/>
    }else{
        return <div style={userStyle}>
        {userLogs.map((user)=>{
           return  <UserItem user={user} key={user.id}/> //<h1 key={user.id}>{user.login}</h1>
        })}
    </div>
    }
    
}

const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

const mapStateToProps=(state)=>{
   return{
    userLogs: state.users
   } 
}
const mapDispatchToProps=(dispatch)=>{
    return{
     getAllUsers: ()=>dispatch(getAllUsers())
    } 
 }


export default connect(mapStateToProps,mapDispatchToProps)(Users);