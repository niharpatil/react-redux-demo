import React from 'react'

import {connect} from 'react-redux'

class AddItemBar extends React.Component {
    render(){
        return(
            <div>
                <input type="text" ref="addItemField"/>
                <button onClick={()=>{this.props.addItem1(this.refs.addItemField.value)}}>Add Item 1</button>
                <button onClick={()=>{this.props.addItem2(this.refs.addItemField.value)}}>Add Item 2</button>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem1: (newTodoItem) => {dispatch({type: 'ADD_ITEM_1', item: newTodoItem})},
        addItem2: (newTodoItem) => {dispatch({type: 'ADD_ITEM_2', item: newTodoItem})}
    }
}

export default connect(null, mapDispatchToProps)(AddItemBar)