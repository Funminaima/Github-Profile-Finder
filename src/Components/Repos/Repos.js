import RepoItem from './RepoItem';
import {connect} from 'react-redux';
import { getRepos } from '../../redux/Github/Action';
import {useEffect} from 'react';
import { useParams } from 'react-router';

const Repos = ({repos=[], getRepos})=>{
    //get username parameter from the url
    const loginParams=useParams()
    useEffect(()=>{
        getRepos(loginParams)
    },[])
    
    return <div>
        {repos.map((repo)=>{
            return <RepoItem repo={repo} key={repo.id}/>
        })}
    </div>
}
const mapStateToProps=(state)=>{
    return {
        repos: state.repos
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getRepos: (username)=>dispatch(getRepos(username))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( Repos)