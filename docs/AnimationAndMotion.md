## AnimatedContainer

在一段时间内逐渐更改其值的容器。

使用提供的曲线和持续时间更改时，AnimatedContainer 将在属性的旧值和新值之间自动设置动画。为 null 的属性不会应用动画。

此类对于使用其内部 [AnimationController]() 在 [Container]() 的不同参数之间生成简单的隐式转换非常有用。对于更复杂的动画，你可能希望使用 [AnimatedWidget]() 的子类， 例如 [DecoratedBoxTransition]() 或使用你自己的 [AnimationController]()。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| alignment | 将子组件在容器内对齐 |
| child | 子组件 |
| constraints | 应用于子组件的其他约束 |
| decoration | 子组件后的装饰 |
| foregroundDecoration | 子组件前的装饰 |
| margin | 包裹 padding 与 child 的空间量 |
| padding | decoration 内部的空间量。如果有子组件，则子组件位于其中 |
| transform | 在绘制容器之前应用的转换矩阵 |
| curve | 设置此容器参数动画的曲线 |
| duration | 设置此容器参数动画的持续时间 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |
| debugFillProperties | 添加与节点关联的额外属性 |