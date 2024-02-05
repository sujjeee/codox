// Source : https://github.com/sadmann7/skateshop/blob/main/src/hooks/use-mounted.ts

import * as React from "react";

export function useMounted() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted;
}
