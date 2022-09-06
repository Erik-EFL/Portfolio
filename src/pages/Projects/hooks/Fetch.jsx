import React, { useEffect, useState } from 'react';

export default function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/erik-efl/repos')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return data;
}
