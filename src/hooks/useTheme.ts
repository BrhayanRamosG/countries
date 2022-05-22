import { Theme } from "@/types/Theme";

export const useTheme = (option: boolean) => {
  if (option) {
    document.documentElement.classList.add(Theme.Dark);
    return (localStorage.theme = Theme.Dark);
  } else {
    document.documentElement.classList.remove(Theme.Dark);
    return (localStorage.theme = Theme.Light);
  }
};
