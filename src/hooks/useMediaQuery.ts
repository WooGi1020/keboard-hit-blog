"use client";

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 초기 상태 설정
    setMatches(mediaQueryList.matches);

    // 미디어 쿼리의 변경 이벤트 리스너 추가
    mediaQueryList.addEventListener("change", handleChange);

    // 컴포넌트 언마운트 시 리스너 정리
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
