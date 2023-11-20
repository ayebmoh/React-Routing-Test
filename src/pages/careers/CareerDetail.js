import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails(){
    const { id } = useParams();
    const career = useLoaderData();
    return (
        <div className="career-details">
            <h2 className="title">Career Details: <br/></h2>
            <h2>{ career.title }</h2>
            <p>Starting salary: { career.salary }</p>
            <p>Location: { career.location }</p>
            <div className="details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consectetur incidunt ipsa distinctio temporibus velit voluptas illum, deleniti accusantium magnam debitis tempore provident, maxime commodi aspernatur perferendis modi nemo aut.</div>
        </div>
    )
}

export const CareerDetailsLoader = async({ params }) => {
    const { id } = params
    
    const res = await fetch(' http://localhost:4000/careers/' + id)
     if(!res.ok){
        throw Error('Could not find that career')
     }
    return res.json()
}