import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    setLoading(true);
    setError(null); // Restablecer el error antes de la nueva solicitud

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error)) // Manejo del error
      .finally(() => setLoading(false)); // Se ejecuta al final, independientemente de si hay un error o no
  }, [url]); // Asegúrate de que la dependencia es 'url'

  return { data, loading, error };
}