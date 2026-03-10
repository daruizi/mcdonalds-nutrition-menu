import { useState, useMemo } from 'react'
import './App.css'
import { menuItems, categories, MenuItem } from './data'

function App() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredItems = useMemo(() => {
    return activeTab === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="container">
      <header className="header">
        <span className="brand-logo">🍟</span>
        <h1>麦当劳实时营养生活</h1>
        <p>中国地区实时在售数据 | React + TypeScript 驱动</p>
      </header>

      <nav className="filters">
        {categories.map(cat => (
          <button 
            key={cat.id} 
            className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </nav>

      <main className="menu-grid">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </main>

      <section className="data-section">
        <h2>📊 实时成分明细表</h2>
        <div className="scroll-wrapper">
          <table>
            <thead>
              <tr>
                <th>餐品名称</th>
                <th>实时价格</th>
                <th>热量 (kcal)</th>
                <th>蛋白质 (g)</th>
                <th>脂肪 (g)</th>
                <th>碳水 (g)</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td className="row-name">
                    {item.name} {item.isNew && <span className="row-new-tag">● 新</span>}
                  </td>
                  <td className="row-price">¥{item.price.toFixed(1)}</td>
                  <td>{item.nutrition.kcal}</td>
                  <td>{item.nutrition.protein}</td>
                  <td>{item.nutrition.fat}</td>
                  <td>{item.nutrition.carbs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="app-footer">
        <p>© 2026 McDonald's China Real-time Guide | React Version</p>
        <p>数据源自官方 MCP Server，仅供参考</p>
      </footer>
    </div>
  )
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      <div className="card-visual">
        {item.emoji}
        {item.isNew && <span className="new-badge">New</span>}
        <span className="calorie-tag">{item.nutrition.kcal} kcal</span>
      </div>
      <div className="card-body">
        <div className="card-header">
          <h3 className="product-name">{item.name}</h3>
          <span className="product-price">¥{item.price.toFixed(1)}</span>
        </div>
        <div className="nutrition-info">
          <NutritionBox label="蛋白质" value={item.nutrition.protein} unit="g" />
          <NutritionBox label="脂肪" value={item.nutrition.fat} unit="g" />
          <NutritionBox label="碳水" value={item.nutrition.carbs} unit="g" />
        </div>
      </div>
    </article>
  )
}

function NutritionBox({ label, value, unit }: { label: string, value: number, unit: string }) {
  return (
    <div className="nutri-box">
      <span className="nutri-value">{value}{unit}</span>
      <span className="nutri-label">{label}</span>
    </div>
  )
}

export default App
