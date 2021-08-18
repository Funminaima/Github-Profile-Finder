import { useState } from 'react';
import {connect} from 'react-redux';
import {searchUsers} from '../../redux/Github/Action';
import { setAlert } from '../../redux/Github/Action';
import { clearUsers } from '../../redux/Github/Action';

const SearchForm= ({searchUsers, setAlert, clearUsers}) =>{
    //useState to get form value
const [text, setText]=useState('');

//onsubmit function
const onSubmitForm= (e)=>{
    e.preventDefault();
    
    
    // console.log(text)
    //VALIDATE the form
    if(text === ''){
        // alert('Filed is required');
        setAlert('Field is required');
       
    }else{
    //pass props up to the searchform component in app.js
    searchUsers(text);
    setText('');
    }
    

}





    return <div>
        <form className="form" onSubmit={onSubmitForm}>
            <input type="text" placeholder="Search User" value={text}
             onChange={(e)=>setText(e.target.value)}/>
             <input type="submit" value="Submit" className="btn btn-dark btn-block"/>
        </form>
        <button type="button" className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button>
    </div>
}
// const mapStateToProps=(state)=>{
//     return{
//         per_user: state.user
//     }
// }


const mapDispatchToProps=(dispatch)=>{
    return {
        searchUsers: (text)=>dispatch(searchUsers(text)),
        setAlert: (msg, type)=>dispatch(setAlert(msg,type)),
        clearUsers: ()=>dispatch(clearUsers())
        
    }
}

export default connect(null,mapDispatchToProps)(SearchForm)