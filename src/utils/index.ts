import fs from "fs"
import path from "path";
import type { Model, Provider, UserData } from "../types";
import modelsData from "../lib/models.json";
import providersData from "../lib/providers.json";
const STORE_DIR = path.join(import.meta.dir, "../store");
const FILE_PATH = path.join(STORE_DIR, "user.json");

const DEFAULT_USER_DATA: Readonly<UserData> = {
    providers: [],
    selected_provider_id: "",
    selected_model_id: "",
};

export function getModels(): Model[] {
    return modelsData.models;
}

export function getProviders(): Provider[] {
    return providersData.providers;
}

export function getUserData(): UserData {
    try {
        if (!fs.existsSync(STORE_DIR)) {
            fs.mkdirSync(STORE_DIR, { recursive: true });
        }
        if (!fs.existsSync(FILE_PATH)) {
            fs.writeFileSync(FILE_PATH, JSON.stringify(DEFAULT_USER_DATA, null, 2), "utf-8");
            return { ...DEFAULT_USER_DATA };
        }
        const data = fs.readFileSync(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return { ...DEFAULT_USER_DATA };
    }
}

export async function writeFileData(data: any) {
    try {
        if (!fs.existsSync(STORE_DIR)) {
            fs.mkdirSync(STORE_DIR, { recursive: true });
        }
        await fs.promises.writeFile(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    } catch (err) {
        console.error("Failed to write user data:", err);
    }
}