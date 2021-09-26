import React, { useState } from 'react';
const Sidebar = ({ addTodo, handleSearch }) => {
    const [text, setText] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
    };
    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }
    const { todo, category } = text;

    console.log({ text })


    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="title"
                        placeholder="Note Title"
                        name="todo"
                        onChange={(e) => handleChange(e)}

                    />
                    <input type="button">Add</input>
                </form>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map(({ id, title, body, lastModified }, i) => (
                    <div
                        className={`app-sidebar-note ${id === activeNote && "active"}`}
                        onClick={() => setActiveNote(id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>

                        <p>{body && body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))
                }
            </div >
        </div >
    )
};
export default Sidebar;