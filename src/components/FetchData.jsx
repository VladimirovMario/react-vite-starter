import { useEffect, useState, useRef } from 'react';

function FetchData() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const timeOutRef = useRef(null);

  useEffect(() => {
    const fetchResources = async () => {
      setIsLoading(true);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await res.json();

        timeOutRef.current = setTimeout(() => {
          setData(json);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchResources();

    return () => clearTimeout(timeOutRef.current);
  }, []);

  let content = <></>;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (data) {
    content = (
      <div>
        <p>{data?.title}</p>
        <p>{data?.id}</p>
      </div>
    );
  } else if (error) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Fetch data</h2>
      {content}
    </section>
  );
}

export default FetchData;
