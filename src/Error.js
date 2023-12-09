import { useRouteError } from "react-router-dom";

const Error = () => {
    const errors = useRouteError();
    return (
        <div>
        <h1>Oops</h1>
        <h1>Something went wrong</h1>
        <h1>{errors.status} : {errors.statusText}</h1>
        
        </div>
    )
} 
export default Error;