export interface Provider {
    name?: string;
    slug: string;
    api_key?: string;
}

export interface Model {
    name: string;
    slug: string;
    provider: string;
}

export interface UserData {
    providers: Provider[];
    selected_provider_id: string;
    selected_model_id: string;
}

export const data: UserData = {
    providers: [],
    selected_provider_id: "",
    selected_model_id: ""
}