import { useEffect, useRef, useState } from 'react';

interface FetchData {
  data: [];
  loading: boolean;
  error: string;
}

const useFetch = (url: string) => {
  const isMounted = useRef(true);

  const [state, setState] = useState<FetchData>({
    data: [],
    loading: true,
    error: '',
  });

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  useEffect(() => {
    setState({
      data: [],
      loading: true,
      error: '',
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: '',
          data,
        });
      })
      .catch(() => {
        setState({
          loading: false,
          error: 'No se pudo cargar la información',
          data: [],
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
