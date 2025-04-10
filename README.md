# PathPatch Analyzer

**PathPatch Analyzer** is a developer tool for Path of Exile players who want to understand how patch changes impact their characters and builds over time.

This tool securely connects to a player’s Path of Exile account via OAuth and visualizes character data alongside historical patch notes. It is intended as an educational and analytical companion — not a game automation or enhancement utility.

---

## 🔍 Features

- 🔐 OAuth2 login with your PoE account
- 🧙 View and analyze your characters' class, level, and league data
- 📊 Compare changes in patch notes with your characters’ setup
- 📁 (Planned) Analyze stash tabs and item data for build comparisons

---

## 🚧 Disclaimer

This is a **read-only**, **non-commercial**, and **open-source** tool. It does **not** interact with the game or perform any automated actions.

It only uses the officially documented and approved public OAuth API available from:  
🔗 https://www.pathofexile.com/developer/docs

---

## 🔧 Tech Stack

- Node.js + Express.js
- Native `fetch` API (no Axios)
- ES Modules
- Dotenv for environment config
- Vanilla HTML for frontend prototype

---

## 📦 Setup

1. Clone the repo:

```bash
git clone https://github.com/JCouce/poe-visualizer.git
cd poe-visualizer
```

2. Create a .env file:

Create a configuration file for your local environment using the structure required by your setup.

To use this project, you must register your application following Grinding Gear Games' OAuth Application Policy and obtain the required credentials. These are necessary for authenticating requests to the Path of Exile API.

3. Install dependencies:
```bash
npm install
```

4. Start the server
```bash
node index.js
```