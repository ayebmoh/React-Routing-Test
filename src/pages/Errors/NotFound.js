import { Link } from "react-router-dom";

export default function NotFound(){
    return(
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis corrupti quidem 
           eaque veniam harum suscipit nesciunt ad ea similique dolorem voluptas,
           quas maiores aliquam quibusdam debitis sit numquam! Magnam, neque.</p>
        <p>Go to <Link to="/">Homepage...</Link>.</p>
        
    </div>
    )
}