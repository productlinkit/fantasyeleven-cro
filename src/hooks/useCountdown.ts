import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isExpired: boolean;
}

function diff(target: Date): Countdown {
  const totalMs = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(totalMs / 1000);

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
    totalMs,
    isExpired: totalMs === 0,
  };
}

/** Ticks once per second until the target passes, then stops. */
export function useCountdown(target: Date): Countdown {
  const [countdown, setCountdown] = useState(() => diff(target));

  useEffect(() => {
    setCountdown(diff(target));
    if (target.getTime() <= Date.now()) return;

    const id = window.setInterval(() => {
      const next = diff(target);
      setCountdown(next);
      if (next.isExpired) window.clearInterval(id);
    }, 1000);

    return () => window.clearInterval(id);
  }, [target]);

  return countdown;
}
