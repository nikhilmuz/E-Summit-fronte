import React, {Component} from 'react'
import {connect} from 'react-redux'

class MainEvents extends Component{
    render (){
        if(!this.props.mainevents){
            return (<div></div>)
        }
        return(
            <div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        mainevents: state.highlighted_events
    }
}

export default connect(mapStateToProps)(MainEvents)