import CounterBasic from './CounterBasic';
import MovingDot from './MovingDot';
import Counter from './Counter';
import InputContainer from './InputContainer';
import Like from './Like';
import Additional from './Additional';

export default function App() {
  return (
    <div>
      <Additional></Additional>
      <hr />
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
