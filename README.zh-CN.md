<p align="center">
  <h1 align="center">Trump 财务交易分析仪表板</h1>
  <p align="center">基于 OGE Form 278-T 公开申报文件，对 Donald J. Trump 的证券交易进行交互式数据可视化分析。</p>
</p>

<p align="center">
  <a href="https://jinsong-y.github.io/trump-trade-analysis/"><img src="https://img.shields.io/badge/%E5%9C%A8%E7%BA%BF%E9%A2%84%E8%A7%88-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="在线预览"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Chart.js-4.4.7-FF6384?style=flat-square&logo=chartdotjs&logoColor=white" alt="Chart.js">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/Language-EN%20%7C%20ZH-blue?style=flat-square" alt="双语">
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/-English_Version-blue?style=flat-square" alt="English Version"></a>
</p>

---

## 数据来源

| | |
|---|---|
| **表格** | OGE Form 278-T（2024年2月更新） |
| **申报人** | Donald J. Trump |
| **提交日期** | 2026年5月8日 |
| **交易期间** | 2026年1月 - 3月 |
| **页数** | 113 页交易记录 |

---

## 概览

<table>
  <tr>
    <td align="center"><img src="https://img.shields.io/badge/%E4%BA%A4%E6%98%93%E7%AC%94%E6%95%B0-3,642-blue?style=for-the-badge" alt="3,642 笔交易"><br><sub>总交易笔数</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%E5%87%BA%E5%94%AE-2,574_(70.7%25)-red?style=for-the-badge" alt="2,574 笔出售"><br><sub>出售</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%E8%B4%AD%E4%B9%B0-1,068_(29.3%25)-green?style=for-the-badge" alt="1,068 笔购买"><br><sub>购买</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.shields.io/badge/%E6%B6%89%E5%8F%8A%E5%85%AC%E5%8F%B8-800+-orange?style=for-the-badge" alt="800+ 家公司"><br><sub>涉及公司</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%E9%A2%84%E4%BC%B0%E6%80%BB%E9%A2%9D-~%241.8B-purple?style=for-the-badge" alt="~$1.8B"><br><sub>预估总额</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%E9%9D%9E%E5%AF%B9%E6%89%8B%E5%8D%95-95%25+-yellow?style=for-the-badge" alt="95%+ 非对手单"><br><sub>交易方式</sub></td>
  </tr>
</table>

**最大单笔交易：** $5M-$25M（Meta / Amazon / Microsoft）

---

## 核心发现

1. **大规模清仓式出售** — 出售约 $1.77B vs 购买约 $35M，净撤出股市约 $1.73B。
2. **科技巨头集中减持** — Meta、Amazon、Microsoft 各有 $5M-$25M 的巨额出售，合计超 $300M。
3. **指数化分散持仓** — 800+ 家公司横跨所有行业，类似 S&P 500 指数基金，而非个人选股。
4. **就职合规处置** — 就职前后系统性清仓，符合联邦利益冲突回避要求。

---

## 功能

| 模块 | 说明 |
|---|---|
| KPI 概览 | 关键指标一览 |
| 出售 vs 购买对比 | 交易明细并排对比 |
| 出售详细分析 | 金额分布、行业图表、TOP 20（按金额）、执行方式 |
| 购买详细分析 | 金额分布、行业图表、TOP 20（按频次）、执行方式 |
| 双向交易 | 同时被买入和卖出的公司 |
| 时间线 | 每周交易量趋势 |
| 高频交易股票 | 交易最频繁的公司 |
| 超大盘股分析 | 超大市值股票交易详情 |
| 合规与规则 | OGE 申报规则及利益冲突评估 |
| 双语支持 | 中文 / 英文切换 |

---

## 技术栈

| 层级 | 技术 |
|---|---|
| 前端 | HTML + CSS + JavaScript（无构建工具） |
| 图表 | [Chart.js](https://www.chartjs.org/) 4.4.7 + [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/) 2.2.0 |
| 国际化 | 自研轻量双语系统（中/英） |
| 布局 | 响应式、移动端优先自适应设计 |

---

## 使用方法

```bash
# 直接在浏览器中打开
open index.html

# 或使用本地服务器
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 项目结构

```
trump-trade-analysis/
├── index.html          # 主仪表板（含中英文切换）
├── README.md           # 英文文档
├── README.zh-CN.md     # 中文文档
├── assets/
│   └── i18n.js         # 中英文翻译数据
└── data/
    └── *.pdf           # OGE Form 278-T 原始申报文件
```

## 响应式设计

| 视口 | 布局 |
|---|---|
| **桌面端** (>1100px) | 多列布局 |
| **平板端** (768-1100px) | 双列布局 |
| **移动端** (<768px) | 单列布局，表格可横向滚动 |

---

## 免责声明

本项目仅用于数据分析和可视化目的。所有数据来源于公开的政府伦理申报文件。交易金额基于 OGE 申报金额区间的中位数估算，实际金额可能有差异。

## 许可证

[MIT](https://opensource.org/licenses/MIT)
