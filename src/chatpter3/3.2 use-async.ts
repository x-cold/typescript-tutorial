import { useState, useRef, useEffect, useMemo } from 'react';

export interface Settings<R> {
  lazy?: boolean;
  onError?: (e?: Error) => void;
  onSuccess?: (data: R) => void;
}

type CallService<P, R> = (params: P) => Promise<R>;

const defaults: Settings<any> = { lazy: false };

export type AsyncResult<P, R> = {
  data: R;
  loading: boolean;
  error?: Error;
  run: (params?: P) => Promise<R | undefined>;
}

// A use-async simple
export default function useAsync<P = any, R = any>(callService: CallService<P, R>, params: P, config?: Settings<R>) {
  const settings = {
    ...defaults,
    ...config,
  };

  const {
    lazy,
    onError = () => { },
    onSuccess = () => { },
  } = settings;

  const ref = useRef({
    first: true,
    // TODO: support cancel request via axios
    cancelToken: null,
  });

  const [data, setData] = useState<R>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(!lazy);
  const outerTrigger: string = useMemo(() => {
    try {
      return JSON.stringify({ params });
    } catch (error) {
      return outerTrigger || '';
    }
  }, [params, config]);

  const run = async (p?: P): Promise<R | undefined> => {
    ref.current.first = false;
    let data;
    try {
      setLoading(true);
      data = await callService({
        ...params,
        ...(p || {}),
      });
      setLoading(false);
      setData(data);
      onSuccess(data);
      return data;
    } catch (e: any) {
      setLoading(false);
      setError(e);
      onError(e);
    }
    return data;
  };

  useEffect(() => {
    if (ref.current.first && lazy) {
      ref.current.first = false;
      return;
    }
    run();
    return () => {
      // TODO: cancel task
    };
  }, [ outerTrigger ]);

  return {
    data,
    loading,
    error,
    run: (newParams: P) => {
      run(newParams);
    },
  } as AsyncResult<P, R>;
}
