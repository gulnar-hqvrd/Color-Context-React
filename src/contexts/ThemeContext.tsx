import React, { createContext, useState, ReactNode } from "react";

export type ConfigType = {
  theme: {
    colorLink: string;
    colorLinkHover: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    fontSize: string;
  };
  setTheme?: (themeUpdate: Partial<ConfigType["theme"]>) => void | any;
};

const defaultConfig: ConfigType = {
  theme: {
    colorLink: "#007bff",
    colorLinkHover: "#0056b3",
    primaryColor: "#007bff",
    secondaryColor: "#6c757d",
    backgroundColor: "#fff",
    fontSize: "16px",
  },
};

export const ConfigContext = createContext<ConfigType>({
  theme: defaultConfig.theme,
  setTheme: () => {},
});

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultConfig.theme);

  const updateTheme = (themeUpdate: Partial<ConfigType["theme"]>) => {
    setTheme((currentTheme) => ({ ...currentTheme, ...themeUpdate }));
  };

  return (
    <ConfigContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ConfigContext.Provider>
  );
};