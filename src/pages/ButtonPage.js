import { GoFlame, GoBell, GoBook, GoBriefcase, GoCircuitBoard } from "react-icons/go";
import Button from "../components/Buttons";

function ButtonPage() {
    return (
        <div className="App">
            <div>
                <Button primary onClick={() => { console.log('click!') }} className="mb-5">
                    <GoFlame />
                    primary
                </Button>

                <Button secondary>
                    <GoBell />
                    secondary
                </Button>

                <Button success rounded>
                    <GoBook />
                    success
                </Button>

                <Button warning rounded outline>
                    <GoBriefcase />
                    warning
                </Button>

                <Button danger outline>
                    <GoCircuitBoard />
                    danger
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
