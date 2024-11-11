import CounterBasic from './CounterBasic';
import MovingDot from './MovingDot';
import Counter from './Counter';
import InputContainer from './InputContainer';
import Like from './Like';

export default function App() {
  return (
    <div>
      <CounterBasic></CounterBasic>
      <hr />
      <Counter></Counter>
      <hr />
      <InputContainer></InputContainer>
      <hr />
      <Like></Like>
    </div>
  );
}
