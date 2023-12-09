import Advice from "./Advice"
import Body from "./Body";

const Homepage = () => {
    return (
        <div className="container">
        <div className="advicecontainer">
             <Advice /> 
        </div>
        <div className="bodycontainer">
            <Body />
        </div>
        </div>
        
        )
};

export default Homepage;