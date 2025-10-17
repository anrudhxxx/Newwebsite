import { Component, ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    // TODO: send to error tracking service
    console.error('ErrorBoundary caught', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container max-w-2xl mx-auto p-6 text-center">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="text-gray-600 mt-2">Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
