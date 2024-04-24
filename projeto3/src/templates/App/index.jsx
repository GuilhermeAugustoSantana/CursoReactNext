import { PostsProvider } from '../../contexts/PostProvider';
import { Posts } from '../../components/Posts';
import './App.css';
import { CounterProvider } from '../../contexts/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
