# Trump Financial Transaction Analysis Dashboard
# Trump 财务交易分析仪表板

Interactive data analysis dashboard based on **OGE Form 278-T** (U.S. Office of Government Ethics Financial Transaction Disclosure). Analyzes Donald J. Trump's securities transactions from January to March 2026.

基于 **OGE Form 278-T**（美国政府伦理办公室财务交易申报表）的交互式数据分析仪表板。对 Donald J. Trump 2026年1月至3月期间的证券交易进行可视化分析。

**[Live Demo](https://jinsong-y.github.io/trump-trade-analysis/)** | 支持中英文切换

---

## Data Source / 数据来源

| | |
|---|---|
| **Form** | OGE Form 278-T (Updated February 2024) |
| **Filer / 申报人** | Donald J Trump |
| **Filed / 提交日期** | May 8, 2026 |
| **Period / 交易期间** | January – March 2026 |
| **Pages / 页数** | 113 pages of transactions |

---

## Overview / 概览

| Metric / 指标 | Value / 数值 |
|---|---|
| Total Transactions / 总交易笔数 | 3,642 |
| Sales / 出售 | 2,574 (70.7%) |
| Purchases / 购买 | 1,068 (29.3%) |
| Companies / 涉及公司 | 800+ |
| Est. Total Value / 预估总额 | ~$1.8 Billion |
| Largest Single / 最大单笔 | $5M–$25M (Meta/Amazon/Microsoft) |
| Method / 交易方式 | 95%+ UNSOLICITED |

---

## Key Findings / 核心发现

1. **Massive Sell-Off / 大规模清仓式出售** — Sales of ~$1.77B vs purchases of ~$35M. Net withdrawal of ~$1.73B from equity markets.
2. **Tech Concentration / 科技巨头集中减持** — Meta, Amazon, and Microsoft each had $5M–$25M mega-sales. Combined >$300M.
3. **Index-Style Portfolio / 指数化分散持仓** — 800+ companies across all sectors, resembling an S&P 500 index fund, not personal stock picks.
4. **Compliance Liquidation / 就职合规处置** — Pre/post-inauguration systematic liquidation consistent with federal conflict-of-interest requirements.

---

## Features / 功能

- **KPI Overview** — Key metrics at a glance
- **Sell vs Buy Comparison** — Side-by-side transaction breakdowns
- **Sale Detailed Analysis** — Amount distribution, sector charts, TOP 20 by value, execution method
- **Purchase Detailed Analysis** — Amount distribution, sector charts, TOP 20 by frequency, execution method
- **Two-Way Trades** — Companies that were both bought and sold
- **Timeline** — Weekly trade volume trends
- **High-Frequency Stocks** — Most frequently traded companies
- **Mega Cap Analysis** — Super large-cap stock transactions
- **Compliance & Rules** — OGE filing rules and conflict of interest assessment
- **Bilingual** — Chinese / English toggle

---

## Tech Stack / 技术栈

- **Pure Frontend** — HTML + CSS + JavaScript (no build tools)
- **Charts** — [Chart.js](https://www.chartjs.org/) 4.4.7
- **i18n** — Custom lightweight bilingual system (ZH/EN)
- **Responsive** — Mobile-first adaptive layout

---

## Usage / 使用方法

```bash
# Open directly in browser
open index.html

# Or use local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Project Structure / 项目结构

```
trump-trade-analysis/
├── index.html          # Main dashboard (with i18n toggle)
├── README.md
├── assets/
│   └── i18n.js         # Chinese/English translation data
└── data/
    ├── *.pdf           # Original OGE Form 278-T filings
```

## Responsive Design / 响应式设计

- **Desktop** (>1100px): Multi-column layout
- **Tablet** (768–1100px): Two-column layout
- **Mobile** (<768px): Single-column, scrollable tables

---

## Disclaimer / 免责声明

This project is for data analysis and visualization purposes only. All data comes from public government ethics filings. Amounts are estimated using OGE range midpoints and may differ from actual values.

本项目仅用于数据分析和可视化目的。所有数据来源于公开的政府伦理申报文件。交易金额基于 OGE 申报金额区间的中位数估算，实际金额可能有差异。

## License

MIT
