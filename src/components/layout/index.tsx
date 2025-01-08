import React from "react";

import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";

import { GitHubBanner } from "./gh-banner";
import { Header } from "./header";

import logo from "@/assets/images/logo.png";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => {
          return (
            <ThemedTitleV2
              {...titleProps}
              text="Aidan's Corporation"
              icon={
                <img
                  src={logo}
                  alt="Aidan's Corporation"
                  style={{ width: 24, height: 24 }}
                />
              }
              wrapperStyles={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            />
          );
        }}
      >
        {children}
      </ThemedLayoutV2>
    </>
  );
};
