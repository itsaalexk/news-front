import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function useDebouncedSearchQuery(delay = 2000) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState(params.get("q") || "");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!searchQuery.trim()) {
        params.delete("q");
      } else {
        params.set("q", searchQuery);
      }
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }, delay);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, delay]);

  return { searchQuery, setSearchQuery };
}
