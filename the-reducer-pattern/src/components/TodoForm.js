import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    // Method to handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    // Method to onChange
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form handleSubmit={handleSubmit}>
            <input type='text' value={value} onChange={onChange} />
        </form>
    )
}

export default TodoForm
