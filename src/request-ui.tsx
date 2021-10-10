import React from 'react';
import useAsync from './useAsync';
import request from './request';

// interface Request {
//   foo: string;
//   bar: number;
// }

// interface Response {
//   data: {
//     list: string[];
//     total: number;
//   },
//   code: 200 | 400;
//   message: string;
// }

// interface RequestMap {
//   '/api/data/list': Request;
// }

// interface ResponseMap {
//   '/api/data/list': Response;
// }

// type Url = keyof RequestMap;

// const request = async <K extends Url>(url: Url, request: RequestMap[K]): Promise<ResponseMap[K]> => {
//   const mockRes: Response = {
//     data: {
//       list: ['a', 'b', 'c'],
//       total: 100,
//     },
    
//     code: 200,
//     message: '',
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(mockRes), 5000);
//   });
// }

// // mock some service function
// const getUserList = async (req: Request) => {
//   return request('/api/data/list', req);
// };

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
