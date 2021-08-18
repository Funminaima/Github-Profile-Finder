import {connect} from 'react-redux'
const Alert =({alert})=>{
    
    return (
        alert!==null && (<div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle"/>{alert.msg}
        <i className="fa fa-times" style={{float:'right', cursor: 'pointer', color:'blue'}}/>
        
    </div>)
    )
}
const mapStateToProps=(state)=>{
    return {
        alert: state.alert
    }
}
export default connect(mapStateToProps,null)(Alert);