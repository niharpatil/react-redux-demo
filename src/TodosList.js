import React from 'react'

import {connect} from 'react-redux'

class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.todoItems.map((todoItem) => {
                        return <li>{todoItem}</li>
                    })
                }
            </ul>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todoItems: state.todos1
    }
}


export default connect(mapStateToProps, null)(TodosList)