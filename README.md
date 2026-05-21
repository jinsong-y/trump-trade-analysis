<p align="center">
  <h1 align="center">Trump Financial Transaction Analysis Dashboard</h1>
  <p align="center">Interactive data visualization of Donald J. Trump's securities transactions based on OGE Form 278-T public filings.</p>
</p>

<p align="center">
  <a href="https://jinsong-y.github.io/trump-trade-analysis/"><img src="https://img.shields.io/badge/Live_Demo-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Chart.js-4.4.7-FF6384?style=flat-square&logo=chartdotjs&logoColor=white" alt="Chart.js">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/Language-EN%20%7C%20ZH-blue?style=flat-square" alt="Bilingual">
</p>

<p align="center">
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/-%E4%B8%AD%E6%96%87%E7%89%88%E6%9C%AC-red?style=flat-square" alt="中文版本"></a>
</p>

---

## Data Source

| | |
|---|---|
| **Form** | OGE Form 278-T (Updated February 2024) |
| **Filer** | Donald J. Trump |
| **Filed** | May 8, 2026 |
| **Period** | January - March 2026 |
| **Pages** | 113 pages of transactions |

---

## Overview

<table>
  <tr>
    <td align="center"><img src="https://img.shields.io/badge/Transactions-3,642-blue?style=for-the-badge" alt="3,642 Transactions"><br><sub>Total Transactions</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/Sales-2,574_(70.7%25)-red?style=for-the-badge" alt="2,574 Sales"><br><sub>Sales</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/Purchases-1,068_(29.3%25)-green?style=for-the-badge" alt="1,068 Purchases"><br><sub>Purchases</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.shields.io/badge/Companies-800+-orange?style=for-the-badge" alt="800+ Companies"><br><sub>Companies Involved</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/Value-~%241.8B-purple?style=for-the-badge" alt="~$1.8B"><br><sub>Est. Total Value</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/Unsolicited-95%25+-yellow?style=for-the-badge" alt="95%+ Unsolicited"><br><sub>Execution Method</sub></td>
  </tr>
</table>

**Largest Single Transaction:** $5M-$25M (Meta / Amazon / Microsoft)

---

## Key Findings

1. **Massive Sell-Off** — Sales of ~$1.77B vs purchases of ~$35M. Net withdrawal of ~$1.73B from equity markets.
2. **Tech Concentration** — Meta, Amazon, and Microsoft each had $5M-$25M mega-sales. Combined >$300M.
3. **Index-Style Portfolio** — 800+ companies across all sectors, resembling an S&P 500 index fund, not personal stock picks.
4. **Compliance Liquidation** — Pre/post-inauguration systematic liquidation consistent with federal conflict-of-interest requirements.

---

## Features

| Section | Description |
|---|---|
| KPI Overview | Key metrics at a glance |
| Sell vs Buy Comparison | Side-by-side transaction breakdowns |
| Sale Detailed Analysis | Amount distribution, sector charts, TOP 20 by value, execution method |
| Purchase Detailed Analysis | Amount distribution, sector charts, TOP 20 by frequency, execution method |
| Two-Way Trades | Companies that were both bought and sold |
| Timeline | Weekly trade volume trends |
| High-Frequency Stocks | Most frequently traded companies |
| Mega Cap Analysis | Super large-cap stock transactions |
| Compliance & Rules | OGE filing rules and conflict of interest assessment |
| Bilingual | Chinese / English toggle |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML + CSS + JavaScript (no build tools) |
| Charts | [Chart.js](https://www.chartjs.org/) 4.4.7 + [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/) 2.2.0 |
| i18n | Custom lightweight bilingual system (ZH/EN) |
| Layout | Responsive, mobile-first adaptive design |

---

## Usage

```bash
# Open directly in browser
open index.html

# Or use local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Project Structure

```
trump-trade-analysis/
├── index.html          # Main dashboard (with i18n toggle)
├── README.md           # English documentation
├── README.zh-CN.md     # Chinese documentation
├── assets/
│   └── i18n.js         # Chinese/English translation data
└── data/
    └── *.pdf           # Original OGE Form 278-T filings
```

## Responsive Design

| Viewport | Layout |
|---|---|
| **Desktop** (>1100px) | Multi-column layout |
| **Tablet** (768-1100px) | Two-column layout |
| **Mobile** (<768px) | Single-column, scrollable tables |

---

## Disclaimer

This project is for data analysis and visualization purposes only. All data comes from public government ethics filings. Amounts are estimated using OGE range midpoints and may differ from actual values.

## License

[MIT](https://opensource.org/licenses/MIT)
