import { useEffect, useState } from 'react';
import type { DirectoryResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL as string;
const GROUP_SLUG = import.meta.env.VITE_GROUP_SLUG as string;

interface UseDirectoryResult {
  data: DirectoryResponse | null;
  loading: boolean;
  error: string | null;
}

export function useDirectory(): UseDirectoryResult {
  const [data, setData] = useState<DirectoryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_URL}/api/directorio/${GROUP_SLUG}`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json?.error?.message ?? json?.message ?? 'No se pudo cargar el directorio');
        }
        return json.data as DirectoryResponse;
      })
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
