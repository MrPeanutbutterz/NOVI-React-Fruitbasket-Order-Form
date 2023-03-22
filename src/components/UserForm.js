import React from "react";
import "../App.css"

export default function UserForm({label, type, name, placeholder, value, change}) {
    return <>
        <label htmlFor={label}></label>
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={change}
            className="text-input"
        />
    </>
}