# claw 🐾

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
* **List providers:** `claw providers list`
* **Log in:** `claw login -p <openai|anthropic|gemini> -a <api_key>`
* **Set provider:** `claw setProvider -p <provider_name>`
* **Log out / unset:** `claw logout -p <provider_name>` / `claw unsetProvider`

### 2. Model Management
* **List models:** `claw models list`
* **Set model:** `claw setModel -m <model_slug>`

### 3. Run Agent
* **Execute prompt:** `claw agent -p "your prompt here"`
