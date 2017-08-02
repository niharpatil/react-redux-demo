import React from 'react'

import {connect} from 'react-redux'

class TodosList2 extends React.Component {
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
        todoItems: state.todos2
    }
}


export default connect(mapStateToProps, null)(TodosList2)