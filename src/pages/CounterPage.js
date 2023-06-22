import { useReducer } from "react";
import Button from "../components/button";
import Panel from "../components/Panel"

const INCREAMENT_COUNT = "increament";
const SET_VALUE_TO_ADD = "set-value-to-add"
const DECREAMENT_COUNT = "decreament"
const ADD_VALUE_TO_COUNT = "add-value-to-count"


function CounterPage({ initialCount }) {

    const reducer = (state, action) => {
        switch (action.type) {
            case INCREAMENT_COUNT:
                return {
                    ...state,
                    count: state.count + 1,
                };
            case DECREAMENT_COUNT:
                return {
                    ...state,
                    count: state.count - 1,
                };
            case SET_VALUE_TO_ADD:
                return {
                    ...state,
                    valueToAdd: action.payload ,
                };
            case ADD_VALUE_TO_COUNT:
                return {
                    ...state,
                    count: state.count + state.valueToAdd,
                    valueToAdd: 0
                }
            default:
                return state;
        }

    };

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });
    console.log(state);

    

    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0);
    

    const increament = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREAMENT_COUNT
        });
    };

    const decreament = () => {
        // setCount(count - 1);
        dispatch({
            type: DECREAMENT_COUNT
        });

    }

    const handleChange = (e) => {
        //assign 0 if parseint returns NaN.
        const value = parseInt(e.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
        // setCount(count+valueToAdd);
        // setValueToAdd(0);


    }

    return <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increament}> Increament</Button>
            <Button onClick={decreament}> Decreament</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input
                value={state.valueToAdd || ""}
                onChange={handleChange}
                type="number"
                className="p-1 m-3 border bg-gray-50 border-gray-300"
            />
            <Button>Add it!</Button>
        </form>

    </Panel >

}
export default CounterPage;