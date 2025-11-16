# Factorio Cheat Sheet 中文翻译更新日志

## 2024-11-16 - 首次中文翻译完成

### 概述

完成了 Factorio Cheat Sheet 的首次完整中文翻译，涵盖所有主要功能模块。

### 翻译统计

- **总文件数：** 30+ 个文件
- **HTML 文件：** 27 个组件文件
- **配置文件：** 3 个（GLOSSARY.md, TRANSLATION_PROGRESS.md, UPDATE_LOG.md）
- **翻译行数：** 约 2000+ 行

### 翻译范围

#### 1. 布局组件（3 个）

- ✅ `nav.component.html` - 导航栏
- ✅ `footer.component.html` - 页脚
- ✅ `overview.component.html` - 概览页面

#### 2. 主要 Cheat-Sheets（24 个）

**基础系统：**

- ✅ `tips/tips.component.html` - 技巧和快捷键
- ✅ `links/links.component.html` - 资源链接
- ✅ `cs-common-ratios/cs-common-ratios.component.html` - 常用比例

**生产和资源：**

- ✅ `belts/belts.component.html` - 传送带
- ✅ `balancers/balancers.component.html` - 平衡器
- ✅ `mining/mining.component.html` - 采矿
- ✅ `material-processing/material-processing.component.html` - 材料加工
- ✅ `science/science.component.html` - 科技包

**电力系统：**

- ✅ `power-steam/power-steam.component.html` - 蒸汽发电
- ✅ `power-solar/power-solar.component.html` - 太阳能发电
- ✅ `power-solar/calculator-solar/calculator-solar.component.html` - 太阳能计算器
- ✅ `nuclear-power/nuclear-power.component.html` - 核电
- ✅ `nuclear-power/sre-diagram/sre-diagram.component.html` - 核电图表
- ✅ `nuclear-power/sre-matrix/sre-matrix.component.html` - 核电矩阵

**炼油和化工：**

- ✅ `oil-refining/oil-refining.component.html` - 炼油

**火车系统：**

- ✅ `trains/trains.component.html` - 火车
- ✅ `train-colors/train-colors.component.html` - 火车颜色
- ✅ `cargo-wagon-transfer/cargo-wagon-transfer.component.html` - 货运车厢装卸
- ✅ `fluid-wagon-transfer/fluid-wagon-transfer.component.html` - 液罐车厢装卸

**机械臂和物流：**

- ✅ `inserter-throughput/inserter-throughput.component.html` - 机械臂吞吐量
- ✅ `inserter-capacity-bonus/inserter-capacity-bonus.component.html` - 机械臂容量加成

**插件和优化：**

- ✅ `modules-and-beacons/modules-and-beacons.component.html` - 插件和插件效果分享塔
- ✅ `productivity-module-payoffs/productivity-module-payoffs.component.html` - 产能插件回报

**其他：**

- ✅ `vehicle-fuel-bonus/vehicle-fuel-bonus.component.html` - 载具燃料加成
- ✅ `combat/combat.component.html` - 战斗
- ✅ `space-age/space-age.component.html` - 太空时代

#### 3. 支持文件

- ✅ `GLOSSARY.md` - 游戏术语中英文对照表（基于官方中文本地化）
- ✅ `TRANSLATION_PROGRESS.md` - 翻译进度追踪
- ✅ `UPDATE_LOG.md` - 本更新日志

### 翻译原则

1. **术语统一性**

   - 所有游戏术语使用 Factorio 官方中文本地化译名
   - 参考 GLOSSARY.md 确保全文一致性

2. **技术准确性**

   - 游戏内物品名称使用官方译名（如"蓄电池"而非"蓄电器"）
   - 公式和数值计算保持原样
   - 单位和符号保持不变

3. **代码完整性**

   - 保持 HTML 结构不变
   - 保留所有 Angular 指令和绑定
   - 保持链接和代码完整性
   - 不修改变量名和类名

4. **格式规范**
   - 代码块之间使用真正的空行（无缩进）
   - 文件以空行结尾
   - 保持原有缩进风格

### 质量保证

#### 测试结果

- ✅ 构建测试通过（`npm run build`）
- ✅ 无 HTML 结构破坏
- ✅ 无 TypeScript 编译错误
- ✅ Angular 模板正常

#### 已知限制

- 部分数据表格的动态内容未翻译（由 TypeScript 数据文件控制）
- 某些计算公式保留英文以保持技术准确性

### Git 配置

```bash
# 远程仓库配置
upstream: https://github.com/deniszholob/factorio-cheat-sheet.git

# 分支结构
main: 与 upstream 同步的英文版本
zh-cn: 中文翻译分支（当前工作分支）
```

### 后续维护计划

#### 更新流程

1. 定期从 upstream 拉取更新
2. 使用 git diff 识别变化
3. 翻译新增或修改的内容
4. 解决合并冲突（保留中文，翻译新内容）

#### 翻译维护

- 新增游戏内容时更新 GLOSSARY.md
- 发现术语不一致时统一修正
- 收集社区反馈优化翻译质量

### 贡献者

- 首次翻译：AI Assistant（Claude Sonnet 4.5）
- 审核：zhuzhichao
- 日期：2024-11-16

### 相关文档

- [GLOSSARY.md](./GLOSSARY.md) - 术语对照表
- [TRANSLATION_PROGRESS.md](./TRANSLATION_PROGRESS.md) - 详细进度追踪
- [factorio.plan.md](./factorio.plan.md) - 翻译实施方案

---

## 后续更新

_后续更新日志将记录在此处_
