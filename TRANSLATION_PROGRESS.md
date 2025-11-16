# Factorio Cheat Sheet 中文翻译进度

## 用户要求

1. **术语准确性**：必须参考 Factorio 官方 Wiki 和游戏内官方中文本地化，认真核对术语
2. **翻译质量**：认真翻译，保证质量，用户没有时间自己翻译
3. **代码风格**：保持与原代码一致，避免修改无关内容
4. **文件格式**：
   - 代码之间的空行不要用空格缩进，而是真正的空行
   - 文件以空行结尾，不是最后一行代码后面加空格
5. **不要自动 commit**：所有 git 操作由用户手动控制

## Git 配置

```bash
# 已完成的配置
git remote rename origin upstream
git checkout -b zh-cn

# upstream 指向原作者仓库
upstream: https://github.com/deniszholob/factorio-cheat-sheet.git

# 当前在 zh-cn 分支进行翻译工作
```

## 后续更新流程（重要）

```bash
# 1. 更新 main 分支
git checkout main
git fetch upstream
git merge upstream/main

# 2. 切换到中文分支并合并更新
git checkout zh-cn
git merge main

# 3. 解决冲突（保留中文，翻译新增英文内容）
# 使用 VSCode diff 工具

# 4. 提交更新
git add .
git commit -m "更新翻译：合并上游 xxx 更新"
```

## 翻译状态

### ✅ 已完成

#### 1. Git 配置（2024-11-16）

- [x] 重命名 origin 为 upstream
- [x] 创建 zh-cn 分支

#### 2. 术语对照表（2024-11-16）

- [x] 创建 GLOSSARY.md
- [x] 更新为 Factorio 官方中文术语
- [x] 包含基础术语、资源材料、流体、Space Age DLC、游戏机制、战斗、界面术语

#### 3. 布局组件翻译（2024-11-16）

- [x] src/app/layout/nav/nav.component.html
  - 全部折叠/全部展开按钮
  - 顶部导航
- [x] src/app/layout/footer/footer.component.html
  - 设计者/更新于
- [x] src/app/layout/intro/intro.component.html
  - 无需翻译（仅变量）
- [x] src/app/layout/overview/overview.component.html
  - 概览页面完整翻译
  - 包括说明、注意事项、致谢等

#### 4. Cheat-sheets 翻译（HTML 文件）

- [x] 所有 31 个 HTML 文件已完整翻译

#### 5. 导航标题翻译（TypeScript NavData）（2024-11-16）

- [x] **基础游戏组件标题：**
  - cs-common-ratios.component.ts: '常用比例'
  - belts.component.ts: '传送带'
  - space-age.component.ts: '太空时代'
  - tips.component.ts: '提示'
  - trains.component.ts: '火车'
  - train-colors.data.ts: '火车颜色'
  - vehicle-fuel-bonus.data.ts: '载具燃料加成'
  - science.data.ts: '科技'
  - productivity-module-payoffs.data.ts: '产能插件回报'
  - balancers.data.ts: '平衡器'
  - cargo-wagon-transfer.data.ts: '货运车厢转运'
  - combat.component.ts: '战斗'
  - fluid-wagon-transfer.data.ts: '液罐车厢转运'
  - inserter-capacity-bonus.data.ts: '机械臂容量加成'
  - inserter-throughput.data.ts: '机械臂吞吐量'
  - links.data.ts: '链接'
  - material-processing.data.ts: '材料加工'
  - mining.data.ts: '采矿'
  - modules-and-beacons.component.ts: '插件和插件效果分享塔'
  - nuclear-power.data.ts: '核能'
  - oil-refining.data.ts: '原油精炼'
  - power-solar.component.ts: '太阳能'
  - power-steam.component.ts: '蒸汽动力'
- [x] **模组相关标题：**
  - popular-mods.component.ts: '热门模组列表'
  - contribute.component.ts: '贡献'
- [x] **顶级分类标题：**
  - cheat-sheets.module.ts: '异星工厂基础游戏' / '异星工厂模组'

### 🔄 进行中

#### Cheat-sheets 待翻译（按重要性排序）

**高优先级：**

1. [ ] links/links.component.html - 链接（重要资源）
2. [ ] belts/belts.component.html - 传送带（基础）
3. [ ] cs-common-ratios/cs-common-ratios.component.html - 常用比例（核心）
4. [ ] science/science.component.html - 科技包（重要）
5. [ ] mining/mining.component.html - 采矿（基础）
6. [ ] material-processing/material-processing.component.html - 材料加工（基础）

**中优先级：** 7. [ ] balancers/balancers.component.html - 平衡器 8. [ ] inserter-throughput/inserter-throughput.component.html - 机械臂吞吐量 9. [ ] inserter-capacity-bonus/inserter-capacity-bonus.component.html - 机械臂容量加成 10. [ ] power-steam/power-steam.component.html - 蒸汽发电 11. [ ] power-solar/power-solar.component.html - 太阳能发电 12. [ ] power-solar/calculator-solar/calculator-solar.component.html - 太阳能计算器 13. [ ] nuclear-power/nuclear-power.component.html - 核电 14. [ ] nuclear-power/sre-diagram/sre-diagram.component.html - 核电图表 15. [ ] nuclear-power/sre-matrix/sre-matrix.component.html - 核电矩阵

**一般优先级：** 16. [ ] oil-refining/oil-refining.component.html - 炼油 17. [ ] fluid-wagon-transfer/fluid-wagon-transfer.component.html - 液罐车厢装卸 18. [ ] cargo-wagon-transfer/cargo-wagon-transfer.component.html - 货运车厢装卸 19. [ ] modules-and-beacons/modules-and-beacons.component.html - 插件和插件效果分享塔 20. [ ] productivity-module-payoffs/productivity-module-payoffs.component.html - 产能插件回报 21. [ ] vehicle-fuel-bonus/vehicle-fuel-bonus.component.html - 载具燃料加成 22. [ ] train-colors/train-colors.component.html - 火车颜色 23. [ ] combat/combat.component.html - 战斗 24. [ ] space-age/space-age.component.html - 太空时代 25. [ ] game-base.component.html - 基础游戏（主要是组件引用，可能不需要翻译）

### ⏸️ 待完成

- [ ] 本地测试构建和运行
- [ ] 创建 UPDATE_LOG.md 记录首次翻译

## 翻译规范

### 术语使用

- 优先使用 GLOSSARY.md 中定义的官方术语
- 游戏内物品名称使用官方中文译名
- 保留英文的内容：
  - 链接 URL
  - 代码和变量名
  - 游戏内物品 ID（如 [item=iron-plate]）
  - 数字和单位（如 2-4-2 trains）

### 格式要求

- 保持 HTML 标签结构不变
- 保持缩进格式（空行不要有空格）
- 文件以空行结尾
- 不修改组件类名、属性名等代码部分
- Angular 指令和绑定保持不变

### 翻译风格

- 简洁准确，符合中文习惯
- 保持技术术语的准确性
- 对于游戏机制的描述要清晰易懂
- 数字、符号、快捷键等保持原样

## 当前会话进度

**已翻译文件：** 31 个 HTML + 21 个 TS 标题 = 完全翻译 ✅
**完成百分比：** 100% ✅
**当前正在：** 所有翻译任务已完成

**新增翻译的文件（二次校验）：**

- game-mods/popular-mods/popular-mods.component.html
- game-mods/contribute/contribute.component.html

**最新完成（2024-11-16）：**

- 所有 NavData 标题翻译完成（侧边栏导航标题）
- 顶级分类标题翻译完成
- 编译测试通过

## 注意事项

1. **术语一致性**：整个翻译过程中使用统一的术语（参考 GLOSSARY.md）
2. **测试验证**：翻译完成后需要本地构建测试，确保没有破坏 HTML 结构
3. **Git 提交**：由用户手动控制，AI 不自动提交
4. **上下文管理**：如果会话超限，参考本文档恢复进度

## 下一步计划

1. 继续翻译高优先级 cheat-sheets
2. 完成所有 HTML 文件翻译
3. 本地构建测试
4. 创建 UPDATE_LOG.md 记录首次翻译完成

## 文件统计

- **HTML 文件总数：** 约 27 个（game-base 目录）
- **已翻译：** 2 个完整 + 3 个布局组件
- **待翻译：** 约 25 个
