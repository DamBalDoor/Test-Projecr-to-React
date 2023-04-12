import React, {useState} from "react";

const Counter = function () {
    const [likes, setLikes] = useState(0)

    function Plus() {
        setLikes(likes + 1)
    }
    
    function Minus() {
        setLikes(likes - 1)
    }
    

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={(Minus)}>Minus</button>
            <button onClick={(Plus)}>Plus</button>
        </div>
    );
};

export default Counter;