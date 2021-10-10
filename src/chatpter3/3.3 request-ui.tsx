import React from 'react';
import request from './3.1 request';
import useAsync from './3.2 use-async';

const App: React.FC = () => {
  const { data, loading, error } = useAsync(() => request('/api/hello', {
    name: 'string',
  }), {});

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>error</div>
  }

  const message = data?.msg;

  return <div>
    {message}
  </div>
}

export default App;
