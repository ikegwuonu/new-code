import React from "react";
import AppLoader from "./AppLoader";
import ReactQuery from "./ReactQuery";
import { Toaster } from "sonner";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ReactQuery>
      <AppLoader>
        <Toaster
          theme="light"
          className="toaster group"
          richColors
          visibleToasts={1}
        />
        {children}
      </AppLoader>
      ;
    </ReactQuery>
  );
}
