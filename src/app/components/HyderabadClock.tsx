"use client";
import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", hour12: true,
});
export default function HyderabadClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = window.setInterval(update, 30000);
    return () => window.clearInterval(interval);
  }, []);
  return <time dateTime={now?.toISOString()}>{now ? `Hyderabad, ${formatter.format(now).toUpperCase()}` : "Hyderabad"}</time>;
}
