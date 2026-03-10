# McDonald's Nutrition Menu 🍟

An interactive, responsive, and visual McDonald's menu that displays nutritional information, calories, and prices for various items, powered by the unofficial McDonald's MCP Server.

## 🚀 Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: Vanilla CSS (Optimized for modern browsers)
- **Data Source**: McDonald's China Real-time MCP Server

## ✨ Features
- **Real-time Product Data**: Includes latest items like Thai-flavored burgers and seasonal pies.
- **Accurate Pricing**: Product prices are synced from live store data.
- **Nutritional Insights**: Detailed breakdown of protein, fat, carbohydrates, and calories (kcal).
- **Categorization**: Smooth filtering by Burgers, Snacks, Drinks, and Desserts using React state.
- **Responsive Design**: Modern, mobile-first UI with a clean card-based layout.
- **New Badge**: Automatically highlights newly launched products.

## 🛠️ How to Run

### 1. Developer Mode (Recommended)
This mode allows you to fully utilize the React + TypeScript environment:
```bash
# Enter the project directory
cd mcd-nutrition-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 2. Quick Preview Mode
If you want to view the optimized layout without setting up the full React environment:
1. Ensure you have Python installed.
2. Run a local server in the root directory:
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080/react_demo_preview.html` in your browser.

## 👥 Contributors

- **daruizi** ([@daruizi](https://github.com/daruizi)) - Project vision and direction.
- **Gemini CLI (AI Agent)** - Responsible for React + TypeScript refactoring, real-time McDonald's MCP data integration, and UI/UX optimization.

## 📄 License
This project is for educational purposes only. Data and images are owned by McDonald's.
