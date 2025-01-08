import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

import { authCredentials } from "@/providers";
import logo from "@/assets/images/logo.png";
export const LoginPage = () => {
  return (
    <AuthPage
      type="login"
      forgotPasswordLink={false}
      title={
        <ThemedTitleV2
          collapsed={false}
          text="Aidan's Corporation"
          icon={
            <img
              src={logo}
              alt="Aidan's Corporation"
              style={{ width: 24, height: 24, marginBottom: 16 }}
            />
          }
          wrapperStyles={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        />
      }
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
