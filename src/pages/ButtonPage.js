import Button from "../components/button";
import {GoBell,GoDatabase} from "react-icons/go"
function ButtonPage() {
    
    return <div>
        <div>
            <Button secondary outline >Click me!</Button>
        </div>
        <div>
            <Button warning rounded>Abuiiii!</Button>
        </div>
        <div>
            <Button danger rounded outline>
                <GoBell />
                Subscribe!
            </Button>
        </div>
        <div> 
            <Button primary outline>
                <GoDatabase />
                Register!
            </Button>
        </div>
        <div>
            <Button rounded outline>Hanuman!</Button>
        </div>
        <div>
            <Button primary rounded>Hooray!</Button>
        </div>

    </div>
};
export default ButtonPage;
