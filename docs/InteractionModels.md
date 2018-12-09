## Draggable

可以在[DragTarget](#DragTarget)中拖动的组件。

当一个可拖动组件发生拖动时，它会显示一个在屏幕上跟踪用户手指的 [feedback]() 组件。如果用在 [DragTarget]() 组件上抬起手指，则该 [DragTarget]() 可以选择接收 Draggable 组件携带的数据。

在多点触控设备上，可以同时发生多次拖动，因为可能会有多个指针同时与设备接触。要限制同时拖动的数量，可以使用 maxSimultaneousDrags 属性。默认设置是允许无限数量的同时拖动。

当发生拖动时显示 child 中的组件。如果 childWhenDragging 非 null， 则显示 childWhenDragging 中的组件。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| affinity | 控制此组件如何与其他手势竞争以启动拖动 |
| axis | 如果指定，则限制拖动的轴向 | 
| child | 包含的子组件 | 

## DragTarget