type API_MAPPING = {
  '/api/hello': {
    request: {
      name: string;
    },
    response: {
      msg: string;
    }
  },
  '/api/ping': {
    request: unknown;
    response: {
      pong: string;
    }
  }
}

function request<K extends keyof API_MAPPING>(
  url: K,
  params: API_MAPPING[K]['request']
): Promise<API_MAPPING[K]['response']> {
  return {
    test: 'just mock some data, you should replace with axios'
  } as unknown as Promise<API_MAPPING[K]['response']>;
}

// test
async function run() {
  const body = await request('/api/hello', { name: 'Keanuo' });
  const body2 = await request('/api/ping', {});
  console.log(body.msg);
}

export default request;
