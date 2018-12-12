## Draggable

可以在 [DragTarget](#dragtarget) 中拖动的组件。

当一个可拖动组件发生拖动时，它会显示一个在屏幕上跟踪用户手指的 feedback 组件。如果用在 [DragTarget](#dragtarget) 组件上抬起手指，则该 [DragTarget](#dragtarget) 可以选择接收 Draggable 组件携带的数据。

在多点触控设备上，可以同时发生多次拖动，因为可能会有多个指针同时与设备接触。要限制同时拖动的数量，可以使用 maxSimultaneousDrags 属性。默认设置是允许无限数量的同时拖动。

当发生拖动时显示 child 中的组件。如果 childWhenDragging 非 null， 则显示 childWhenDragging 中的组件。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| affinity | 控制此组件如何与其他手势竞争以启动拖动 |
| axis | 如果指定，则限制拖动的轴向 | 
| child | 子组件 | 
| childWhenDragging | 拖动时显示的组件 | 
| data | 携带的数据 | 
| dragAnchor | 拖动时如何锚定此组件的位置 | 
| feedback | 拖动时指针下显示的组件 | 
| feedbackOffset | 可用于设置命中测试目标点，以便找到拖动目标。在 feedback 与 child 的相对位置改变时特别有用 | 
| ignoringFeedbackSemantics | 在构建语义树时是否忽略 feedback 组件的语义 | 
| maxSimultaneousDrags | 支持多少个同时拖动 | 
| onDragCompleted | 组件被释放且被 [DragTarget](#dragtarget) 接收时的回调函数 | 
| onDragStart | 拖动开始时的回调函数 | 

## LongPressDraggable

长按使其子组件可以拖动。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| hapticFeedbackOnStart | 是否在拖动开始时触发触觉反馈 |
| affinity | 控制此组件如何与其他手势竞争以启动拖动 |
| axis | 如果指定，则限制拖动的轴向 | 
| child | 子组件 | 
| childWhenDragging | 拖动时显示的组件 | 
| data | 携带的数据 | 
| dragAnchor | 拖动时如何锚定此组件的位置 | 
| feedback | 拖动时指针下显示的组件 | 
| feedbackOffset | 可用于设置命中测试目标点，以便找到拖动目标。在 feedback 与 child 的相对位置改变时特别有用 | 
| ignoringFeedbackSemantics | 在构建语义树时是否忽略 feedback 组件的语义 | 
| maxSimultaneousDrags | 支持多少个同时拖动 | 
| onDragCompleted | 组件被释放且被 [DragTarget](#dragtarget) 接收时的回调函数 | 
| onDragEnd | 组件被释放时的回调函数 | 
| onDraggableCanceled | 组件被释放但未被 [DragTarget](#dragtarget) 接收时的回调函数 | 
| onDragStarted | 拖动开始时的回调函数 | 

## GestureDetector 

用于检测手势的组件。

会根据其非 null 的回调函数检测手势。

如果有子组件，则适应子组件的大小。否则，适应父组件的大小。

默认情况下，带有不可见子组件的 GestureDetector 会忽略触摸；可以通过 behavior 控制。

GestureDetector 也会监听辅助功能事件（accessibility events），并将它们映射到回调函数。要忽略辅助功能事件，可以将 excludeFromSemantics 设为 true。

有关其他信息，请参阅 [flutter.io/gestures/](http://flutter.io/gestures/)。

Material design 应用通常会对触摸作出具有墨水飞溅效果的反应。类 [InkWell]() 实现了这种效果，并且可以用来代替 GestureDetector 处理点击。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| behavior | 在命中测试期间，此手势检测器应如何表现 |
| child | 子组件 | 
| excludeFromSemantics | 是否从语义树中排除这些手势。例如，长按显示 tooltip 被排除了，因为在语义树中 tooltip 自身已经包含了，因此如果手势中再去显示则会造成信息重复 | 
| onDoubleTap | 用户快速双击屏幕上相同位置两次时的回调函数 |
| onHorizontalDragCancel | 之前触发 onHorizontalDragDown 的指针未完成时的回调函数 |
| onHorizontalDragDown | 指针已接触屏幕，可能开始水平移动的回调函数 |
| onHorizontalDragEnd | 先前与屏幕接触并且水平移动的指针不再与屏幕接触，并且当它停止接触屏幕时以特定速度移动的回调函数 |
| onHorizontalDragStart | 指针已接触屏幕并开始水平移动时的回调函数 |
| onHorizontalDragUpdate | 与屏幕接触并水平移动的指针在水平方向上移动时的回调函数 |
| onLongPress | 指针长时间保持与屏幕相同位置接触时的回调函数 |
| onLongPressUp | 触发长按的指针已停止接触屏幕时的回调函数 |
| onPanCancel | 先前触发 onPanDown 的指针未完成时的回调函数 |
| onPanDown | 指针已接触屏幕并可能开始移动时的回调函数 |
| onPanEnd | 先前与屏幕接触并移动的指针不再与屏幕接触，并且当它停止接触屏幕时以特定速度移动的回调函数 |
| onPanStart | 指针已经接触屏幕并开始移动时的回调函数 |
| onPanUpdate | 与屏幕接触并移动的指针再次移动时的回调函数 |
| onScaleEnd | 指针不再与屏幕接触时的回调函数 |
| onScaleStart | 与屏幕接触的指针已建立焦点，且初始比例为 1.0 时的回调函数 |
| onScaleUpdate | 与屏幕接触的指针指示了新的焦点和/或缩放时的回调函数 |
| onTap | 点击时的回调函数 |
| onTapCancel | 先前触发 onTapDown 的指针不会导致点击时的回调函数 |
| onTapDown | 可能导致点击的指针已在特定位置与屏幕接触时的回调函数 |
| onTapUp | 将触发敲击的指针已停止在特定位置与屏幕接触时的回调函数 |
| onVerticalDragCancel | 先前触发 onVerticalDragDown 的指针未完成时的回调函数 |
| onVerticalDragDown | 指针已接触屏幕，可能会开始垂直移动时的回调函数 |
| onVerticalDragEnd | 之前与屏幕接触并垂直移动的指针不再与屏幕接触，并且在停止接触屏幕时以特定速度移动的回调函数 |
| onVerticalDragStart | 指针已接触屏幕并已开始垂直移动时的回调函数 |
| onVerticalDragUpdate | 与屏幕接触并垂直移动的指针在垂直方向上移动时的回调函数 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## DragTarget

释放 [Draggable](#draggable) 时可以接收其数据。

当拖动 Draggable 到 DragTarget 上时，将询问 DragTarget 是否接收 Draggable 所携带的数据。如果用户确实将 Draggable 放在 DragTarget 上（并且 DragTarget 已指明它将接收 Draggable 的数据），则要求 DragTarget 接收 Draggable 的数据。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| builder | 用于构建此组件的内容 |
| onAccept | 当在此组件上放置可接收的数据时的回调函数 |
| onLeave | 当在此组件上拖动的给定数据离开时的回调函数 |
| onWillAccept | 确定是否接收拖入此组件上的组件的给定数据 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## Dismissible

在指定方向上拖动时可以移除的组件。

在 DismissDirection 中拖动或滑动此组件将使其 child 滑出视图。跟随滑动动画，如果 resizeDuration 不为 null，则此组件将其高度（与移除方向垂直时为宽度，）以动画的形式从 resizeDuration 减至 0。

background 可以实现“遗留”效果。如果指定了 background，则它会堆叠在 Dismissible 的 child 之后，并在 child 移动时显露出来。

此组件在其大小折叠为 0（如果 resizeDuration 非 null）之后或在滑动动画之后立即（如果 resizeDuration 为 null）调用 onDismissed 回调函数。如果 Dismissible 是一个列表项，它必须有一个键以区别于其他项，并且它的 onDismissed 回调函数必须从列表中删除该项。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| background | 放在 child 后面的组件。如果还指定了secondaryBackground，则只有在向下或向右拖动 child 时才会显示此组件。 |
| child | 子组件 |
| crossAxisEndOffset | 定义在卡片被移除后主轴上的结束偏移量 |
| direction | 可以移除组件的方向 |
| dismissThresholds | 移除组件所需的偏移阈值 |
| movementDuration | 定义移除卡片（或如果不移除返回原始位置）的持续时间 |
| onDismissed | 完成大小调整后，在组件被移除时的回调函数 |
| onResize | 组件大小改变（被移除之前）时的回调函数 |
| resizeDuration | onDismissed 调用之前持续的总时间 |
| secondaryBackground | 堆叠在 child 后面，当 child 被向上或向左拖动时会显露出来。只有在指定了 background 时才可以指定它 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## IgnorePointer

在命中测试期间不可见的组件。

如果 ignoring 为 true，则此组件（及其子树）对于命中测试是不可见的。它仍然会在布局过程中消耗空间并像往常一样绘制 child。它只是不能成为定位事件的目标，因为它从 RenderBox.hitTest 返回 false。

当 ignoringSemantics 为 true 时，子树对于语义层是不可见的（因此，例如可访问性工具）。如果 ignoringSemantics 为 null，则它使用 ignoring 的值。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| ignoring | 命中检测期间是否忽略此组件 |
| ignoringSemantics | 编译语义树时是否忽略此组件的语义 |
| child | 子组件 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createRenderObject | 使用此 RenderObjectWidget 描述的配置创建此 RenderObjectWidget 表示的 RenderObject 的实例 |
| debugFillProperties | 添加与节点关联的额外属性 |
| updateRenderObject | 将此 RenderObjectWidget 描述的配置复制到给定的 RenderObject，该类型与此对象的 createRenderObject 返回的类型相同 |

## AbsorbPointer

在命中测试期间吸收指针的组件。

当 absorbing 为 true 时，此组件通过终止命中测试来阻止其子树接收指针事件。它仍然会在布局过程中消耗空间并像往常一样绘制 child。它只是阻止其子节点成为定位事件的目标，因为它从 RenderBox.hitTest 返回 true。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| absorbing | 命中检测期间是否吸收指针 |
| ignoringSemantics | 编译语义树时是否忽略此组件的语义 |
| child | 子组件 |

## Scrollable 

可以滚动的组件。

Scrollable 实现可滚动组件的交互模型，包括手势识别，但没有关于如何构造实际显示子组件的视口的信息。

很难直接构造 Scrollable。请考虑使用 [ListView]() 或 [GridView]()，它们结合了滚动，视口和布局模型。要组合布局模型（或使用自定义布局模式），请考虑使用  [CustomScrollView]()。

静态 Scrollable.of 和 Scrollable.ensureVisible 函数通常用于与 [ListView]() 或 [GridView]() 中的 Scrollable 组件进行交互。

要使用 Scrollable 进一步自定义滚动行为：

1. 你可以提供 viewportBuilder 来自定义子模型。例如，[SingleChildScrollView]() 使用显示单个 box 子视图的视口，而 [CustomScrollView]() 使用 [Viewport]() 或 [ShrinkWrappingViewport]()，两者都显示 slivers 列表。
  
2. 你可以提供自定义 [ScrollController]()，以创建自定义 [ScrollPosition]() 子类。例如，[PageView]() 使用 [PageController]()，它创建一个面向页面的滚动位置子类，以在 Scrollable 调整大小时保持同一页面可见。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| axis | 滚动视图的滚动轴向 |
| axisDirection | 组件的滚动方向 |
| controller | 可用于控制滚动此组件位置的对象 |
| excludeFromSemantics | 此 Scrollable 引入的滚动操作是否在语义树中显露 |
| physics | 组件应如何响应用户输入 |
| viewportBuilder | 构建可通过其显示可滚动内容的视口 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |
| debugFillProperties | 添加与节点关联的额外属性 |