import { useEffect, Fragment } from 'react';//useEffect fires when component mount
import { useParams , Link} from 'react-router-dom';
import { getAUser } from '../../redux/Github/Action';
import {connect} from 'react-redux'
import Spinner from '../Layout/Spinner';
import Repos from '../Repos/Repos';

const SingleUser= ({getAUser, aUser})=>{
    const loginParam= useParams();//get parameter from url
    
    useEffect(()=>{
        console.log(aUser)
        getAUser(loginParam);//get user needs a username parameter which can be gotten in the url
        // getRepo(loginParam);

        //eslint-disable-next-line
    },[]);

    //further destructure of aUser so you dont have to do name
    const {
        name,
        avatar_url,
        location,
        html_url,
        company,
        followers,
        following,
        public_gists,
        public_repos,
        blog,
        login,
        hireable,
        bio

    }=aUser|| {};

    //if loading is true, bring in fragment
    if(aUser.loading){return <Spinner/>}
    
    return <Fragment>
        <Link to="/" className="btn btn-dark">Back to search</Link>
        Hireable: {hireable ===true ? (<i className="fa fa-check text-success"></i>):(<i className="fa fa-times text-danger"></i>)}

        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} alt={name}
                className="rounded-img" style={{width: '150px'}}
                />
                <h1>{name}</h1>
                <p>{location}</p>
            </div>

            <div>
                {bio && <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: {login}</strong>
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: {company}</strong>
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: {blog}</strong>
                                </Fragment>}
                        </li>
                    </ul>
            </div>

        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers:{followers}</div>
            <div className="badge badge-danger">Following:{following}</div>
            <div className="badge badge-success">Public Repos:{public_repos}</div>
            <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
        <Repos/>
    </Fragment>
}

const mapStateToProps=(state)=>{
    return {
        aUser: state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getAUser: (username)=>dispatch(getAUser(username))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleUser);