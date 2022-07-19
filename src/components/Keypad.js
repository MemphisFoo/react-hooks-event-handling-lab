// Code Keypad Component Here
import React from "react";

function Keypad() {
    function handleKeypad(event) {
        event.preventDefault(event);
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" name="password" onChange={handleKeypad} placeholder="Enter password" />
            <button>Login</button>
        </div>
    )
}
export default Keypad;