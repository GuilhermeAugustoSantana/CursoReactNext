import { Component, useEffect, useState } from 'react';
import './styles.css';

const s = {
  style: {
    fontSize: '60px',
  },
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  comaponentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) return <h1>Erro</h1>;
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que chato');
    }
  });

  return (
    <div>
      <button {...s} onClick={() => setCounter((s) => s + 1)}>
        Click to increase {counter}
      </button>
    </div>
  );
};

export const HomeErrorBoundaries = () => {
  return (
    <div>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>
  );
};
