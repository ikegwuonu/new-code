import React from "react";
import AppLoader from "./AppLoader";
import ReactQuery from "./ReactQuery";
import { Toaster } from "sonner";
import ReduxProvider from "./ReduxProvider";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ReduxProvider>
      {" "}
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
    </ReduxProvider>
  );
}
