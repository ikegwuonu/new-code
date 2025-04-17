"use client";
import Loader from "@/components/ui/Loader";
import React, { useEffect, useState } from "react";

export default function AppLoader({ children }: React.PropsWithChildren) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? children : <Loader />;
}
