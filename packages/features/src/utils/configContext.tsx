"use client";

import {
  createContext as createContextOG,
  ReactNode,
  useContext,
  useRef,
} from "react";

export function createClientSideConfig<TContext extends unknown | null>() {
  const ctx = createContextOG<TContext | undefined>(undefined);

  function useConfig<TCtx = TContext>() {
    // eslint-disable-next-line
    const reactContext = useContext<TCtx>(ctx as unknown as any);
    if (reactContext === undefined) {
      throw new Error(`useContext must be inside a Provider with a value`);
    }
    return reactContext;
  }

  const ConfigProvider = ({
    children,
    config,
  }: {
    children: ReactNode;
    config: TContext;
  }) => {
    const storeRef = useRef<TContext>(config);
    return <ctx.Provider value={storeRef.current}>{children}</ctx.Provider>;
  };

  return [ConfigProvider, useConfig] as const;
}
