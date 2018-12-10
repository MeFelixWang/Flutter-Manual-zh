## Draggable

可以在[DragTarget](#DragTarget)中拖动的组件。

当一个可拖动组件发生拖动时，它会显示一个在屏幕上跟踪用户手指的 feedback 组件。如果用在 [DragTarget]() 组件上抬起手指，则该 [DragTarget]() 可以选择接收 Draggable 组件携带的数据。

在多点触控设备上，可以同时发生多次拖动，因为可能会有多个指针同时与设备接触。要限制同时拖动的数量，可以使用 maxSimultaneousDrags 属性。默认设置是允许无限数量的同时拖动。

当发生拖动时显示 child 中的组件。如果 childWhenDragging 非 null， 则显示 childWhenDragging 中的组件。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| affinity | 控制此组件如何与其他手势竞争以启动拖动 |
| axis | 如果指定，则限制拖动的轴向 | 
| child | 包含的子组件 | 
| childWhenDragging | 拖动时显示的组件 | 
| data | 携带的数据 | 
| dragAnchor | 拖动时如何锚定此组件的位置 | 
| feedback | 拖动时指针下显示的组件 | 
| feedbackOffset | 可用于设置命中测试目标点，以便找到拖动目标。在 feedback 与 child 的相对位置改变时特别有用 | 
| ignoringFeedbackSemantics | 在构建语义树时是否忽略 feedback 组件的语义 | 
| maxSimultaneousDrags | 支持多少个同时拖动 | 
| onDragCompleted | 组件被释放且被 [DragTarget]() 接收时的回调函数 | 
| onDragStart | 拖动开始时的回调函数 | 

## LongPressDraggable

长按使其子组件可以拖动。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| hapticFeedbackOnStart | 是否在拖动开始时触发触觉反馈 |
| affinity | 控制此组件如何与其他手势竞争以启动拖动 |
| axis | 如果指定，则限制拖动的轴向 | 
| child | 包含的子组件 | 
| childWhenDragging | 拖动时显示的组件 | 
| data | 携带的数据 | 
| dragAnchor | 拖动时如何锚定此组件的位置 | 
| feedback | 拖动时指针下显示的组件 | 
| feedbackOffset | 可用于设置命中测试目标点，以便找到拖动目标。在 feedback 与 child 的相对位置改变时特别有用 | 
| ignoringFeedbackSemantics | 在构建语义树时是否忽略 feedback 组件的语义 | 
| maxSimultaneousDrags | 支持多少个同时拖动 | 
| onDragCompleted | 组件被释放且被 [DragTarget]() 接收时的回调函数 | 
| onDragEnd | 组件被释放时的回调函数 | 
| onDraggableCanceled | 组件被释放但未被 [DragTarget]() 接收时的回调函数 | 
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
| child | 包含的子组件 | 
| excludeFromSemantics | 是否从语义树中排除这些手势。例如，长按显示 tooltip 被排除了，因为在语义树中 tooltip 自身已经包含了，因此如果手势中再去显示则会造成信息重复 | 
| onDoubleTap | 用户快速双击屏幕上相同位置两次时的回调函数 |
| onHorizontalDragCancel | 之前触发  [onHorizontalDragDown]() 的指针未完成时的回调函数 |
| onHorizontalDragDown | 指针已接触屏幕，可能开始水平移动的回调函数 |

## DragTarget

