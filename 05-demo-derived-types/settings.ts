const INITIAL_SETTINGS = {
  Volume: 50,
  Brightness: 75,
  Username: "Max",
};

type Settings = typeof INITIAL_SETTINGS;

type Validator<T> = T extends string
  ? (val: string) => boolean
  : T extends number
    ? { min: number; max: number }
    : never;

class SettingsJar {
  private settings: Settings = { ...INITIAL_SETTINGS };

  private validators: {
    [K in keyof Settings]: Validator<Settings[K]>;
  } = {
    Volume: { min: 0, max: 100 },
    Brightness: { min: 0, max: 100 },
    Username: (val: string) => val.trim().length > 0,
  };

  getSetting<K extends keyof Settings>(key: K): Settings[K] {
    return this.settings[key];
  }

  setSetting<K extends keyof Settings>(key: K, value: Settings[K]): boolean {
    const validator = this.validators[key];

    if (typeof value === "number") {
      if (
        typeof validator !== "object" ||
        value < validator.min ||
        value > validator.max
      ) {
        console.log(`Invalid value for ${key}`);
        return false;
      }
    } else if (typeof value === "string") {
      if (typeof validator !== "function" || !validator(value)) {
        console.log(`Invalid value for ${key}`);
        return false;
      }
    }

    this.settings[key] = value;
    return true;
  }

  listSettings(): void {
    console.log(this.settings);
  }
}

const appSettings = new SettingsJar();

console.log(appSettings.getSetting("Volume"));
console.log(appSettings.getSetting("Username"));

appSettings.setSetting("Volume", 80);
appSettings.setSetting("Brightness", 90);
appSettings.setSetting("Username", "Jordan");

appSettings.setSetting("Volume", 150);
appSettings.setSetting("Username", "");

appSettings.listSettings();
