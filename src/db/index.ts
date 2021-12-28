import { Config } from "../types";

type Settings =
  | "shortcuts"
  | "iconSize"
  | "iconRedius"
  | "mainColor"
  | "subColor"
  | "fontColor"
  | "fontSize"
  | "defaultDirectory"
  | "keepPreviousFolder";

export class ConfigDB {
  private config: Config;

  constructor() {
    let config = localStorage.getItem("config");

    if (!config || config === "null") {
      const init: Config = {
        shortcuts: [
          {
            title: "vim.org",
            url: "https://vim.org",
            key: "f",
          },
        ],
        iconSize: "small",
        iconRedius: 0.2,
        mainColor: "#ffffff",
        subColor: "#673ab8",
        fontColor: "#222222",
        fontSize: "2rem",
        defaultDirectory: "/その他のブックマーク",
        keepPreviousFolder: false,
      };
      localStorage.setItem("config", JSON.stringify(init));
    }

    config = localStorage.getItem("config") as string;
    this.config = JSON.parse(config);
  }

  getItem(settings: Settings) {
    return this.config[settings];
  }

  getConfAsString() {
    return JSON.stringify(this.config, null, 2);
  }

  setFromString(stringConf: string) {
    this.config = JSON.parse(stringConf);
  }
}
