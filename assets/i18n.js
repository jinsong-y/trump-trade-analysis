const I18N = {
  zh: {
    // Header
    header_title: "Donald J. Trump 财务交易分析",
    header_sub: "OGE Form 278-T | 2026年5月8日提交 | 交易期间: 2026年1月 – 3月",

    // KPI
    kpi_total: "总交易笔数", kpi_total_sub: "113页申报",
    kpi_sell: "出售 Sale", kpi_sell_sub: "70.7%",
    kpi_buy: "购买 Purchase", kpi_buy_sub: "29.3%",
    kpi_companies: "涉及公司", kpi_companies_sub: "全行业覆盖",
    kpi_max: "最大单笔", kpi_max_sub: "$25M | META / AMZN / MSFT",
    kpi_unsolicited: "UNSOLICITED", kpi_unsolicited_sub: "非主动推荐",
    kpi_totalval: "预估总额", kpi_totalval_sub: "基于区间中位数",

    // Insights
    insights_title: "核心发现",
    ins1: "<strong>1. 大规模清仓式出售：</strong>出售 2,574 笔远超购买 1,068 笔。预估出售总额 ~$17.7 亿，购买总额仅 ~$3,500 万。本质上是一次系统性资产清算而非调仓。",
    ins2: "<strong>2. 科技巨头集中减持：</strong>Meta、Amazon、Microsoft 均出现 $5M–$25M 区间的超大额出售，三家预估合计 >$300M。NVIDIA、Broadcom、Oracle、Adobe 等也有大量减持。",
    ins3: "<strong>3. 指数化分散持仓：</strong>800+ 家公司横跨全部行业板块，持仓模式类似标普500指数基金，非个人主动选股。95%+ 交易标注 UNSOLICITED，说明由受托人独立执行。",
    ins4: "<strong>4. 就职合规处置：</strong>1月初就职前集中中小额出售，2-3月密集清理大额持仓，与联邦高级官员利益冲突回避要求一致。",

    // Hero
    hero_sell_title: "出售 SALE", hero_buy_title: "购买 PURCHASE",
    hero_est: "预估总额", hero_avg: "平均单笔", hero_range: "金额范围",
    hero_large: "大额交易(>$100K)", hero_unsol: "UNSOLICITED", hero_cos: "涉及公司",
    hero_insight: "<strong>买入/卖出比 = 1:2.4（笔数）| 1:50（金额）：</strong>出售金额是购买金额的 50 倍，属于净减持退出，不是调仓换股。",

    // Section: Structure
    struct_title: "交易结构分析",
    chart_type_title: "交易类型分布",
    chart_buysell_title: "各金额区间的出售 vs 购买笔数",

    // Section: Sell
    sell_title: "🔴 售出交易 (Sale) 详细分析",
    sell_dist_title: "售出金额分布",
    sell_sector_title: "售出 — 行业分布",
    sell_top_title: "售出 — 最大额标的 TOP 20",
    sell_method_title: "售出 — 交易方式",
    sell_chart_title: "售出 — 笔数分布",
    sell_polar_title: "售出 — 行业金额分布 ($M)",
    sell_donut_title: "售出 — 交易方式",
    sell_insight: "<strong>售出关键洞察：</strong>仅 17.4% 的笔数（$1M+ 区间）贡献了 <strong>83.6% 的出售总额</strong>。$5M–$25M 区间虽然只有 11 笔（0.4%），但金额占比高达 9.3%，全部来自 Meta、Amazon、Microsoft 三家科技巨头。",
    sell_strategy: "<strong>售出策略解读：</strong><br>• 97% 为 UNSOLICITED — 受托人/经纪人按预设规则独立执行<br>• 大额出售集中在2–3月，与季度末再平衡吻合<br>• 科技+通信占比 > 37%，反映此前科技股权重过高<br>• 小额出售（<$50K）可能是零散持仓的尾部清理",

    // Section: Buy
    buy_title: "🟢 购买交易 (Purchase) 详细分析",
    buy_dist_title: "购买金额分布",
    buy_sector_title: "购买 — 各行业分布",
    buy_top_title: "购买 — 最频繁标的 TOP 20",
    buy_method_title: "购买 — 交易方式",
    buy_chart_title: "购买 — 笔数分布",
    buy_polar_title: "购买 — 行业金额分布 ($M)",
    buy_donut_title: "购买 — 交易方式",
    buy_insight: "<strong>购买关键洞察：</strong>95.9% 的购买集中在 $50K 以下区间。没有单笔超过 $100K 的新建仓。这种均匀、小额的买入模式高度符合<strong>定期定额再投资</strong>或<strong>信托基金自动再平衡</strong>的特征，而非主动选股建仓。",
    buy_strategy: "<strong>购买策略解读：</strong><br>• 92% 为 UNSOLICITED — 非申报人主动决策<br>• 几乎全部为 $50K 以下小额 — 符合定期定额策略<br>• 买入标的与卖出标的高度重叠 — 同一公司既卖又买<br>• 可能是 ETF/指数基金的自动再平衡，或盲信信托的分散化操作<br>• 买入总额仅 $35M — 相对于 $1.77B 售出，净撤出 ~$17.3 亿",

    // Section: Dual
    dual_title: "同标的双向交易（既买又卖）",
    dual_desc: "部分公司同时出现在买入和卖出清单中，这在盲信信托/指数化管理中是典型现象——受托人可能在不同时间点分别执行买入和卖出操作。",
    dual_insight: "<strong>规律：</strong>几乎所有双向交易标的的出售笔数都远超购买笔数（平均 3:1），说明即使在买入方向上也有零散操作，但总体是净卖出。这进一步印证了系统性清算的判断。",

    // Section: Timeline
    timeline_title: "时间线分析",
    timeline_ph1: "就职前清理期", timeline_ph1_sub: "~300笔 | 中小额出售为主",
    timeline_ph2: "密集处置期", timeline_ph2_sub: "~1,350笔 | 大额出售集中出现",
    timeline_ph3: "季度末冲刺期", timeline_ph3_sub: "~1,440笔 | 3/18 单日峰值",
    chart_timeline_title: "周度交易量趋势（出售 vs 购买）",

    // Section: High frequency
    hf_title: "高频交易标的 TOP 10",
    hf_desc: "同一公司出现多次买卖交易",

    // Section: Strategy
    strat_title: "交易策略模式分析",
    strat1_title: "被动指数化管理", strat1_desc: "持仓覆盖标普500几乎所有成分股，呈现指数基金式的广泛分散特征。个人不可能主动研究并持有800+家公司。",
    strat2_title: "盲信委托 Blind Trust", strat2_desc: "95%+ 交易标注 UNSOLICITED，投资决策由受托人独立执行，申报人不知晓具体买卖操作。符合联邦利益冲突回避标准。",
    strat3_title: "合规性资产处置", strat3_desc: "就职前后大规模出售直接持股，符合联邦道德规范要求。出售金额远大于买入，属于净退出而非调仓。",

    // Section: Mega Cap
    mega_title: "Mega Cap（超级大盘股）专项",
    mega_desc: "市值超 $5000亿的公司 — 投资组合中权重最大的标的",

    // Section: Compliance
    comp_title: "OGE Form 278-T 制度与合规说明",
    comp制度: "制度要点",
    comp_r1: "<strong style=\"color:var(--text)\">申报要求：</strong>高级政府官员须在交易确认后 30 天内申报超 $1,000 的证券交易。",
    comp_r2: "<strong style=\"color:var(--text)\">披露范围：</strong>涵盖本人、配偶及受抚养子女。不含共同基金、储蓄账户、国债、退休金账户。",
    comp_r3: "<strong style=\"color:var(--text)\">金额区间：</strong>OGE 使用区间制（如 $15,001–$50,000）而非精确金额，保护隐私但增加分析难度。",
    comp_r4: "<strong style=\"color:var(--text)\">UNSOLICITED：</strong>经纪人/受托人在未经申报人指示的情况下执行交易——盲信委托的典型特征。",
    comp_冲突: "利益冲突评估",
    comp_c1: "<strong style=\"color:var(--green)\">✓ 正面：</strong>大规模出售直接持股，减少个人利益与政策决策的潜在冲突。",
    comp_c2: "<strong style=\"color:var(--green)\">✓ 正面：</strong>绝大多数交易为 UNSOLICITED，申报人未直接参与交易决策。",
    comp_c3: "<strong style=\"color:var(--yellow)\">⚠ 关注：</strong>Microsoft、Oracle 等同时是政府大型合同承包商。",
    comp_c4: "<strong style=\"color:var(--yellow)\">⚠ 关注：</strong>出售个股后是否转入 ETF 未披露——ETF 持仓的间接利益冲突仍存在。",

    // Summary
    sum_title: "总结",
    sum1_title: "交易规模", sum1_desc: "3,642 笔交易，800+ 家公司，预估总金额约 <strong>$18 亿</strong>。是有记录以来最大规模的个人证券交易申报之一。",
    sum2_title: "核心操作", sum2_desc: "净卖出约 <strong>$17.3 亿</strong>。本质上是一次系统性的<strong>资产清算</strong>——卖出金额是买入的 50 倍。",
    sum3_title: "管理方式", sum3_desc: "95%+ UNSOLICITED，持仓呈<strong>指数化、分散化</strong>特征，符合盲信委托或规则化处置策略。",
    sum4_title: "合规意义", sum4_desc: "大规模出售体现<strong>就职合规处置</strong>要求。处置后资产去向（现金/ETF/国债）在本表中未披露。",

    // Footer
    footer1: "数据来源：OGE Form 278-T | 2026年5月8日提交 | 交易区间：2026年1月—3月",
    footer2: "金额为 OGE 区间中位数估算，实际金额可能有差异",

    // Table headers
    th_amount: "金额区间", th_count: "笔数", th_pct: "占比", th_est: "预估金额", th_valpct: "金额占比",
    th_sector: "行业", th_sellcount: "售出笔数", th_rep: "代表标的",
    th_company: "公司", th_total: "总次数", th_sell: "出售", th_buy: "购买", th_net: "净方向", th_ind: "行业",
    th_maxsell: "最大出售",
    net_sell: "净卖出", net_buy: "净买入",
    td_total: "合计",
    tag_sale: "出售", tag_purchase: "购买",
  },

  en: {
    // Header
    header_title: "Donald J. Trump Financial Transaction Analysis",
    header_sub: "OGE Form 278-T | Filed May 8, 2026 | Period: Jan – Mar 2026",

    // KPI
    kpi_total: "Total Transactions", kpi_total_sub: "113-page filing",
    kpi_sell: "Sales", kpi_sell_sub: "70.7%",
    kpi_buy: "Purchases", kpi_buy_sub: "29.3%",
    kpi_companies: "Companies", kpi_companies_sub: "All sectors covered",
    kpi_max: "Largest Single", kpi_max_sub: "$25M | META / AMZN / MSFT",
    kpi_unsolicited: "UNSOLICITED", kpi_unsolicited_sub: "Not solicited",
    kpi_totalval: "Est. Total", kpi_totalval_sub: "Midpoint estimate",

    // Insights
    insights_title: "Key Findings",
    ins1: "<strong>1. Massive Sell-Off:</strong> 2,574 sales far exceed 1,068 purchases. Estimated sell total ~$1.77B vs buy total ~$35M. This is a systematic liquidation, not a portfolio rebalance.",
    ins2: "<strong>2. Tech Giant Concentration:</strong> Meta, Amazon, and Microsoft each had $5M–$25M mega-sales, totaling >$300M combined. NVIDIA, Broadcom, Oracle, and Adobe also saw heavy divestment.",
    ins3: "<strong>3. Index-Style Diversification:</strong> 800+ companies across all sectors, resembling an S&P 500 index fund rather than personal stock picking. 95%+ marked UNSOLICITED — executed by trustees independently.",
    ins4: "<strong>4. Inauguration Compliance:</strong> Pre-inauguration small/medium sales in early Jan, followed by intensive large-position clearing in Feb–Mar, consistent with federal conflict-of-interest requirements.",

    // Hero
    hero_sell_title: "SALES", hero_buy_title: "PURCHASES",
    hero_est: "Est. Total", hero_avg: "Avg per Trade", hero_range: "Range",
    hero_large: "Large Trades (>$100K)", hero_unsol: "UNSOLICITED", hero_cos: "Companies",
    hero_insight: "<strong>Buy/Sell Ratio = 1:2.4 (count) | 1:50 (value):</strong> Sell value is 50x buy value — a net exit from positions, not a rotation.",

    // Section: Structure
    struct_title: "Transaction Structure",
    chart_type_title: "Transaction Type Distribution",
    chart_buysell_title: "Buy vs Sell by Amount Range",

    // Section: Sell
    sell_title: "🔴 Sales Detailed Analysis",
    sell_dist_title: "Sale Amount Distribution",
    sell_sector_title: "Sales by Sector",
    sell_top_title: "Sales — Top 20 by Amount",
    sell_method_title: "Sales — Execution Method",
    sell_chart_title: "Sales — Count by Range",
    sell_polar_title: "Sales — Value by Sector ($M)",
    sell_donut_title: "Sales — Execution Method",
    sell_insight: "<strong>Sale Insight:</strong> Only 17.4% of trades ($1M+ range) account for <strong>83.6% of total sale value</strong>. The $5M–$25M bracket has just 11 trades (0.4%) but 9.3% of value — all from Meta, Amazon, and Microsoft.",
    sell_strategy: "<strong>Sale Strategy:</strong><br>• 97% UNSOLICITED — executed by trustees per preset rules<br>• Large sales concentrated in Feb–Mar, matching quarter-end rebalancing<br>• Tech + Communications > 37% — reducing overweight positions<br>• Sub-$50K sales likely tail-end cleanup of scattered holdings",

    // Section: Buy
    buy_title: "🟢 Purchases Detailed Analysis",
    buy_dist_title: "Purchase Amount Distribution",
    buy_sector_title: "Purchases by Sector",
    buy_top_title: "Purchases — Most Frequent (Top 20)",
    buy_method_title: "Purchases — Execution Method",
    buy_chart_title: "Purchases — Count by Range",
    buy_polar_title: "Purchases — Value by Sector ($M)",
    buy_donut_title: "Purchases — Execution Method",
    buy_insight: "<strong>Purchase Insight:</strong> 95.9% of purchases are under $50K. No single purchase exceeds $100K. This uniform, small-buy pattern strongly suggests <strong>dollar-cost averaging</strong> or <strong>trust fund auto-rebalancing</strong>, not active stock picking.",
    buy_strategy: "<strong>Purchase Strategy:</strong><br>• 92% UNSOLICITED — not directed by the filer<br>• Almost all sub-$50K — consistent with systematic DCA<br>• Heavy overlap with sell list — same companies bought and sold<br>• Likely ETF/index fund auto-rebalancing or blind trust diversification<br>• Total buys only $35M vs $1.77B sold — net withdrawal ~$1.73B",

    // Section: Dual
    dual_title: "Two-Way Trades (Both Bought & Sold)",
    dual_desc: "Some companies appear on both the buy and sell lists — typical in blind trust/index management where trustees may execute buys and sells at different times.",
    dual_insight: "<strong>Pattern:</strong> Almost all two-way trade companies have far more sells than buys (avg 3:1 ratio). Even with some buying activity, the net direction is clearly sell-side — confirming systematic liquidation.",

    // Section: Timeline
    timeline_title: "Timeline Analysis",
    timeline_ph1: "Pre-Inauguration", timeline_ph1_sub: "~300 trades | Small/medium sales",
    timeline_ph2: "Intensive Clearing", timeline_ph2_sub: "~1,350 trades | Large sales emerge",
    timeline_ph3: "Quarter-End Sprint", timeline_ph3_sub: "~1,440 trades | Peak on 3/18",
    chart_timeline_title: "Weekly Trade Volume (Sales vs Purchases)",

    // Section: High frequency
    hf_title: "High-Frequency Traded Stocks (Top 10)",
    hf_desc: "Companies with multiple buy + sell transactions",

    // Section: Strategy
    strat_title: "Trading Strategy Patterns",
    strat1_title: "Passive Index Management", strat1_desc: "Holdings cover nearly all S&P 500 constituents, showing fund-like broad diversification. No individual would actively research and hold 800+ companies.",
    strat2_title: "Blind Trust Management", strat2_desc: "95%+ UNSOLICITED — investment decisions made independently by trustees without filer input. Consistent with federal conflict-of-interest standards.",
    strat3_title: "Compliance Liquidation", strat3_desc: "Large-scale selling of direct holdings around inauguration, exceeding federal ethics requirements. Sell value dwarfs buys — net exit, not rotation.",

    // Section: Mega Cap
    mega_title: "Mega Cap Analysis ($500B+ Market Cap)",
    mega_desc: "Heaviest-weighted positions in the portfolio",

    // Section: Compliance
    comp_title: "OGE Form 278-T Rules & Compliance",
    comp制度: "Rules",
    comp_r1: "<strong style=\"color:var(--text)\">Filing Requirement:</strong> Senior officials must report securities transactions over $1,000 within 30 days of confirmation.",
    comp_r2: "<strong style=\"color:var(--text)\">Scope:</strong> Covers filer, spouse, and dependents. Excludes mutual funds, savings accounts, Treasuries, and retirement accounts.",
    comp_r3: "<strong style=\"color:var(--text)\">Amount Ranges:</strong> OGE uses ranges (e.g., $15,001–$50,000) instead of exact amounts for privacy, complicating analysis.",
    comp_r4: "<strong style=\"color:var(--text)\">UNSOLICITED:</strong> Broker/trustee executed without filer instruction — hallmark of blind trust management.",
    comp_冲突: "Conflict of Interest Assessment",
    comp_c1: "<strong style=\"color:var(--green)\">✓ Positive:</strong> Large-scale sale of direct holdings reduces personal-policy conflicts.",
    comp_c2: "<strong style=\"color:var(--green)\">✓ Positive:</strong> Most trades are UNSOLICITED — filer not directly involved.",
    comp_c3: "<strong style=\"color:var(--yellow)\">⚠ Note:</strong> Microsoft, Oracle, etc. are also major government contractors.",
    comp_c4: "<strong style=\"color:var(--yellow)\">⚠ Note:</strong> Whether sold stocks were rotated into ETFs is undisclosed — indirect conflicts may persist.",

    // Summary
    sum_title: "Summary",
    sum1_title: "Scale", sum1_desc: "3,642 trades, 800+ companies, est. ~<strong>$1.8B</strong> total. Among the largest personal securities filings ever.",
    sum2_title: "Core Action", sum2_desc: "Net sell ~<strong>$1.73B</strong>. Essentially a systematic <strong>liquidation</strong> — sells are 50x buys.",
    sum3_title: "Management", sum3_desc: "95%+ UNSOLICITED, index-style diversified. Consistent with blind trust or rules-based disposal.",
    sum4_title: "Compliance", sum4_desc: "Large-scale sales reflect <strong>inauguration compliance</strong>. Post-disposition allocation (cash/ETFs/Treasuries) not disclosed.",

    // Footer
    footer1: "Source: OGE Form 278-T | Filed May 8, 2026 | Period: Jan – Mar 2026",
    footer2: "Amounts estimated from OGE midpoint ranges; actual amounts may vary",

    // Table headers
    th_amount: "Amount Range", th_count: "Count", th_pct: "Pct", th_est: "Est. Value", th_valpct: "Value %",
    th_sector: "Sector", th_sellcount: "Sales", th_rep: "Representative",
    th_company: "Company", th_total: "Total", th_sell: "Sell", th_buy: "Buy", th_net: "Net Dir.", th_ind: "Sector",
    th_maxsell: "Largest Sale",
    net_sell: "Net Sell", net_buy: "Net Buy",
    td_total: "Total",
    tag_sale: "Sale", tag_purchase: "Purchase",
  }
};

let LANG = localStorage.getItem('lang') || 'zh';

function t(key) { return I18N[LANG][key] || key; }

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[LANG][key]) el.innerHTML = I18N[LANG][key];
  });
  document.querySelectorAll('[data-i18n-text]').forEach(el => {
    const key = el.getAttribute('data-i18n-text');
    if (I18N[LANG][key]) el.textContent = I18N[LANG][key];
  });
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : 'en';
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = LANG === 'zh' ? 'EN' : '中文';
  localStorage.setItem('lang', LANG);
}

function toggleLang() {
  LANG = LANG === 'zh' ? 'en' : 'zh';
  applyLang();
  // Rebuild dynamic content
  if (typeof rebuildDynamicContent === 'function') rebuildDynamicContent();
}
