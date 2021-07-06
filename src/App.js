import CounterLogic from './CounterLogic';
import CounterUIOne from './CounterUIOne';
import CounterUITwo from './CounterUITwo';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <CounterLogic
        render={(increment, handleIncrement) => (
          <CounterUIOne count={increment} handleIncrement={handleIncrement} />
        )}
      />
      <CounterLogic render={() => <CounterUITwo title={'Hello World'} />} />
    </div>
  );
}
