"use client";

import { useEffect, useState } from "react";

const roles = [
  "Front-end Developer",
  "Back-end Developer",
  "Cloud Computing",
];

export default function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="role-rotator" aria-live="polite">
      <span className="role-prefix">SPECIALISING IN</span>
      <strong key={roles[index]}>{roles[index]}</strong>
      <div className="role-progress" aria-hidden="true"><i /></div>
    </div>
  );
}
