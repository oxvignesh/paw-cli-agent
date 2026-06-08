# paw 🐾

A lightweight CLI coding agent built with Bun, Commander, and AI SDK.

## Setup

Install dependencies:
```bash
bun install
```

Link the CLI to run it globally:
```bash
bun link
```

## Usage

### 1. Provider Management
* **List providers:** `paw providers list`
* **Log in:** `paw login -p <openai|anthropic|gemini> -a <api_key>`
* **Set provider:** `paw setProvider -p <provider_name>`
* **Log out / unset:** `paw logout -p <provider_name>` / `paw unsetProvider`

### 2. Model Management
* **List models:** `paw models list`
* **Set model:** `paw setModel -m <model_slug>`

### 3. Run Agent
* **Execute prompt:** `paw agent -p "your prompt here"`
