import { defineStore } from "pinia";
import axios from "axios";
import type { CountriesTypes } from "@/types/Countries";
import { Theme } from "@/types/Theme";
import { useTheme } from "@/hooks/useTheme";

export const useCountryStore = defineStore({
  id: "country",
  state: () => ({
    countries: {} as CountriesTypes,
    country: {} as CountriesTypes,
    pathBase: "https://restcountries.com/v3.1",
    orderDesc: 0,
    theme: Theme.Light,
    isDarkTheme: false,
  }),
  getters: {
    getCountries: (state) =>
      state.countries.data?.sort((a, b) => {
        if (a.name.common > b.name.common) return 1;
        if (a.name.common < b.name.common) return -1;
        return 0;
      }),
    getCountry: (state) => state.country,
    getTheme: (state) => state.theme,
  },
  actions: {
    async fetchCountries() {
      try {
        const data = await axios.get(`${this.pathBase}/all`);
        this.countries = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCountry(country: string) {
      try {
        const data = await axios.get(`${this.pathBase}/name/${country}`);
        this.country = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchRegion(region: string) {
      try {
        const data = await axios.get(`${this.pathBase}/region/${region}`);
        this.countries = data;
      } catch (error) {
        console.log(error);
      }
    },
    changeTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      if (this.isDarkTheme) this.theme = useTheme(true);
      else this.theme = useTheme(false);
    },
    checkThemeOnLoad() {
      if (
        localStorage.theme === Theme.Dark ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        this.theme = useTheme(true);
        this.isDarkTheme = true;
      } else {
        this.theme = useTheme(false);
        this.isDarkTheme = false;
      }
    },
  },
});
