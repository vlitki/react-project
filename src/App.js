
import './App.css';
import { Counter } from "./components/Counter";
import { GetDate } from "./components/GetDate"

function App(props) {
  return (
    <div> This is a counter
    <div>
      <Counter initialValue={0} increment={props.increment || -10} />
      </div>
    <div>
      Today is
    </div>
      <div>
        <GetDate separator='.'/>
      </div>
    </div>
  );
}

export default App;
