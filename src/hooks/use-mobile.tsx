"use client";

import { useEffect, useState } from "react";

/**
 * 모바일 화면 감지 훅
 * @returns 768px 미만이면 true, 이상이면 false
 */
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");

    // 초기값 설정
    setIsMobile(mql.matches);

    // 변경 감지
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
}
