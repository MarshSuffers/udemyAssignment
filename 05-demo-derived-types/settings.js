"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INITIAL_SETTINGS = {
    Volume: 50,
    Brightness: 75,
    Username: "Max",
};
class SettingsJar {
    constructor() {
        this.settings = Object.assign({}, INITIAL_SETTINGS);
        this.validators = {
            Volume: { min: 0, max: 100 },
            Brightness: { min: 0, max: 100 },
            Username: (val) => val.trim().length > 0,
        };
    }
    getSetting(key) {
        return this.settings[key];
    }
    setSetting(key, value) {
        const validator = this.validators[key];
        if (typeof value === "number") {
            if (typeof validator !== "object" ||
                value < validator.min ||
                value > validator.max) {
                console.log(`Invalid value for ${key}`);
                return false;
            }
        }
        else if (typeof value === "string") {
            if (typeof validator !== "function" || !validator(value)) {
                console.log(`Invalid value for ${key}`);
                return false;
            }
        }
        this.settings[key] = value;
        return true;
    }
    listSettings() {
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
//# sourceMappingURL=settings.js.map