import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){
    const [user,setuser] = useState('Med')
    
    if(!user){
        return <Navigate to='/' replace={true} />
    }
    return(
        <div className="home">
            <h2>About Us</h2>
            <p>
                Hello and Welcome to my website! This is my second time using 
                React and in this course i am going to learn more about React Router and this Website is
                a test to help me learn everything about Routers thank you for visiting and giving your review!! 
            </p>
            <p>
                Hello and Welcome to my website! This is my second time using 
                React and in this course i am going to learn more about React Router and this Website is
                a test to help me learn everything about Routers thank you for visiting and giving your review!! 
            </p>
            <p>
                Hello and Welcome to my website! This is my second time using 
                React and in this course i am going to learn more about React Router and this Website is
                a test to help me learn everything about Routers thank you for visiting and giving your review!! 
            </p>
            <button onClick={() => setuser(null)}>Logout</button>
            </div>
    )
}