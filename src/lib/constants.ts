import providersData from "./providers.json";
import modelsData from "./models.json";

export const VALID_PROVIDERS = providersData.providers.map((p) => p.slug);
export const VALID_MODELS = modelsData.models.map((m) => m.slug);