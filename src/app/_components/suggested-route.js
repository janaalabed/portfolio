"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo } from "react";


function distance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0),
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function closestRoute(path, routes) {
  let best = null;
  let bestScore = Infinity;

  for (const route of routes) {
    const score = distance(path, route);
    if (score < bestScore && score <= Math.max(2, route.length * 0.4)) {
      bestScore = score;
      best = route;
    }
  }
  return best;
}

export function SuggestedRoute({ knownRoutes }) {
  const pathname = usePathname();
  const suggestion = useMemo(
    () => closestRoute(pathname, knownRoutes),
    [pathname, knownRoutes],
  );

 
  useEffect(() => {
    fetch("/api/log-404", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    }).catch(() => {
    
    });
  }, [pathname]);

  if (!suggestion) return null;

  return (
    <p className="text-slate-300 mb-2">
      Did you mean{" "}
      <Link href={suggestion} className="text-cyan-400 hover:underline">
        {suggestion}
      </Link>
      ?
    </p>
  );
}
