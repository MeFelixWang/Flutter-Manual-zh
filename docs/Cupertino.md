## CupertinoActionSheet

![CupertinoActionSheet](https://flutter.io/images/widget-catalog/cupertino-action-sheet.png)

iOS 风格的操作表。

操作表是一种特定的警报样式，它向用户显示一组与当前上下文相关的两个或多个选项。操作表可以包含标题，附加消息和操作列表。标题显示在消息上方，操作显示在此内容下方。

此操作表将其标题和消息设置为与标准 iOS 操作表标题和消息文本样式相匹配。

要显示看起来像标准 iOS 操作表按钮的操作按钮，可以为此操作表的 [actions]() 传入 [CupertinoActionSheetAction]()。

要包括 iOS 的风格取消按钮并与其他按钮分开，可以为此操作表的 [cancelButton]() 传入 [CupertinoActionSheetAction]()。

操作表通常作为子组件传递给 [showCupertinoModalPopup]()，它通过从屏幕底部向上滑动来显示操作表。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| actions | 显示供用户选择的一组操作 |
| actionScrollController | 滚动控制器，可用于控制操作表中 actions 的滚动 |
| cancelButton | 可选的取消按钮，与其他操作分开分组 |
| message | 可选的描述性消息，提供有关警报原因的更多详细信息 |
| messageScrollController | 滚动控制器，可用于控制操作表中 message 的滚动 |
| title | 操作表的可选标题。当 message 非 null 时，标题的字体为粗体 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoActivityIndicator

![CupertinoActivityIndicator](https://flutter.io/images/widget-catalog/cupertino-activity-indicator.png)

iOS 风格的活动指示器。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| animating | 活动指示器是否正在运行其动画 |
| radius | 旋转组件的半径 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## CupertinoAlertDialog

![CupertinoAlertDialog](https://flutter.io/images/widget-catalog/cupertino-alert-dialog.png)

iOS 风格的警报对话框。

警报对话框会通知用户需要确认的情况。警报对话框具有可选标题，可选内容和可选的操作列表。标题显示在内容上方，操作显示在内容下方。

此对话框将其标题和内容（通常是消息）设置为与标准 iOS 标题和消息对话框文本样式相匹配。这些默认的样式可以通过显式定义标题或内容中 [Text]() 的 [TextStyle]() 进行覆盖。

要显示看起来像标准 iOS 对话框按钮的操作按钮，可以为此操作表的 [actions]() 传入 [CupertinoActionSheetAction]()。

通常作为子组件传递给 [showDialog]()，它用于显示对话框。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| actions | 显示供用户选择的一组操作 |
| actionScrollController | 滚动控制器，可用于控制操作表中 actions 的滚动 |
| content | 对话框的（可选）内容以较浅的字体显示在对话框的中央 |
| scrollController | 滚动控制器，可用于控制对话框中 content 的滚动 |
| title | 对话框的（可选）标题，在对话框顶部以大字体显示 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoButton

![CupertinoButton](https://flutter.io/images/widget-catalog/cupertino-button.png)

iOS 风格的按钮。

接收在触摸时淡入淡出的一段文本或一个图标。可选择有背景。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| borderRadius | 有背景颜色时按钮角的半径 |
| child | 子组件 |
| color | 按钮的背景颜色 |
| disabledColor | 禁用按钮时按钮背景的颜色 |
| enabled | 启用或禁用按钮。默认情况下禁用按钮。要启用按钮，将其 onPressed 属性设为非 null 值 |
| minSize | 按钮的最小尺寸 |
| onPressed | 点击或以其他方式激活按钮时的回调函数 |
| padding | 在按钮边界内围绕子组件的空间量 |
| pressedOpacity | 按下按钮时淡化的不透明度。未按下按钮时，该按钮的不透明度为 1.0 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |
| debugFillProperties | 添加与节点关联的额外属性 |

## CupertinoDatePicker

![CupertinoDatePicker](https://flutter.io/images/widget-catalog/cupertino-date-picker.png)

iOS 风格的日期选择器组件。

[CupertinoDatePickerMode]() 中列出了几种日期选择器模式。

该类将其子组件显示为连续列。其子组件的规则以国际化为基础。

日期模式中的选择器示例：

- US-English: July | 13 | 2012
- Vietnamese: 13 | Tháng 7 | 2012

### 属性

| 属性 | 功能 |
| ------ | ------ |
| initialDateTime | 选择器的初始日期和（或）时间。默认为当前日期和时间，不得为 null。当前必须符合 [minimumDate]()，[maximumDate]()，[minimumYear]() 和 [maximumYear]() 中设置的间隔 |
| maximumDate | 在 CupertinoDatePickerMode.dateAndTime 模式下，选择器可以滚动到的最大日期 。如果没有限制，则为 null |
| maximumYear | 在 CupertinoDatePickerMode.date 模式下，选择器可以滚动到的最大年份 。如果没有限制，则为 null |
| minimumDate | 在 CupertinoDatePickerMode.dateAndTime 模式下，选择器可以滚动到的最小日期 。如果没有限制，则为 null |
| minimumYear | 在 CupertinoDatePickerMode.date 模式下，选择器可以滚动到的最小年份 。默认为 1，不得为 null |
| minuteInterval | 如果它在当前模式下显示，则为分钟微调器的粒度。必须是 60 的整数因子 |
| mode | 日期选择器的模式，为 [CupertinoDatePickerMode]() 之一。默认为 CupertinoDatePickerMode.dateAndTime。不能为 null 且初始构建后值不能更改。 |
| onDateTimeChanged | 当所选日期和（或）时间发生变化时的回调函数。不能为 null |
| use24hFormat | 是否使用24小时格式。默认为 false |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## CupertinoDialog

![CupertinoDialog](https://flutter.io/images/widget-catalog/cupertino-dialog.png)

iOS 风格的对话框。

此对话框组件对对话框的内容没有任何意见。不要直接使用这个组件，而应考虑使用 [CupertinoAlertDialog]()，它实现了一种特定的对话框。

使用 [CupertinoTabScaffold]() 时与 Navigator.of(..., rootNavigator: true) 一起使用， 以确保对话框出现在选项卡上方。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| child | 子组件 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoDialogAction

![CupertinoDialogAction](https://flutter.io/images/widget-catalog/cupertino-dialog-action.png)

通常用于 [CupertinoAlertDialog]() 的按钮。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| child | 子组件 |
| enabled | 启用或禁用按钮。默认情况下禁用按钮。要启用按钮，将其 onPressed 属性设为非 null 值 |
| isDefaultAction | 如果按钮是对话框中的默认选项，则设置为 true |
| isDestructiveAction | 此动作是否会销毁一个对象 |
| onPressed | 点击或以其他方式激活按钮时的回调函数 |
| textStyle | 应用于此按钮中的任何文本的 TextStyle |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoFullscreenDialogTransition

![CupertinoFullscreenDialogTransition](https://flutter.io/images/widget-catalog/cupertino-fullscreen-dialog-transition.png)

用于唤起全屏对话框的 iOS 风格的过渡动画。

例如，通过从底部引入下一个屏幕来创建新日历事件时使用。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| child | 子组件 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoPageScaffold

![CupertinoPageScaffold](https://flutter.io/images/widget-catalog/cupertino-page-scaffold.png)

实现了单个 iOS 应用程序页面的布局。

脚手架在顶部布置导航栏，在导航栏之间或之后布置内容。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| backgroundColor | 作为整个脚手架基础的组件的颜色 |
| child | 子组件 |
| navigationBar | 通常是 [CupertinoNavigationBar]()，绘制在屏幕的顶部 |
| resizeToAvoidBottomInset | 子组件是否应该自己调整大小以避免窗口的底部插入 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoPageTransition

![CupertinoPageTransition](https://flutter.io/images/widget-catalog/cupertino-page-transition.png)

提供 iOS 样式的页面过渡动画。

页面从右侧滑入，然后反向退出。当另一页进入以覆盖它时，它也以视差运动向左移动。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| child | 子组件 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoPicker

![CupertinoPicker](https://flutter.io/images/widget-catalog/cupertino-picker.png)

iOS 风格的选择器。

在转轮上显示其子组件以供选择，并在当前所选项目更改时调用回调函数。

可以与 [showModalBottomSheet]() 一起使用，以在屏幕底部以模态方式显示选择器。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| backgroundColor | 子组件背后的背景颜色 |
| childDelegate | 一个懒实例化子组件的委托 |
| diameterRadio | 此拾取器高度与模拟圆柱直径之间的相对比率 |
| itemExtent | 所有子组件的统一高度 |
| magnification | 如果使用的话，则表示放大镜的放大比率 |
| offAxisFraction | 转轮偏离水平偏心多少，宽度的一小部分。此属性创建了从侧面观察垂直轮的视觉效果，其中边缘处的消失点向一侧弯曲而不是正面观察车轮 |
| onSelectedItemChanged | 当前居中的项目更改时的回调函数（可选） |
| scrollController | 一个 [FixedExtentScrollController]() 读取和控制当前项目 |
| useMagnifier | 是否将放大镜用于转轮中心的项目 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## CupertinoPopupSurface

![CupertinoPopupSurface]()

圆角矩形表面，看起来像 iOS 弹出表面，例如警报对话框和操作表。

CupertinoPopupSurface 可以配置是否在它模糊区的上面涂上白色。典型用法应在模糊之上涂上白色。但是，可以禁用白色涂料，以便为更复杂的布局渲染分隔线间隙，例如 [CupertinoAlertDialog]()。此外，可以禁止涂上白色来渲染没有任何颜色的模糊圆角矩形（类似于 iOS 的音量控制弹出窗口）。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| child | 子组件 |
| isSurfacePainted | 是否在这个表面的模糊背景上涂上半透明的白色。对于包含没有任何分隔符的内容的典型弹出窗口 isSurfacePainted 应为 true。需要分隔符的弹出窗口应将 isSurfacePainted 设置为 false，然后绘制自己的表面区域 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |

## CupertinoSegmentedControl

![CupertinoSegmentedControl](https://flutter.io/images/widget-catalog/cupertino-segmented-control.png)

iOS 风格的分段控件。

在水平列表中显示 children 提供的组件。用于在多个互斥选项之间进行选择。当选中分段控件中的一个选项时，将不再选中分段控件中的其他选项。

分段控件的 children 中的值可以为任何组件。类型 T 是用于标识每个组件并确定选中了哪个组件的键的类型。根据Map 类的要求，键必须是一致的类型，并且必须具有可比性。键的排序将决定分段控件中组件的顺序。

当分段控件的状态发生更改时，此组件将调用 onValueChanged 回调函数。在 onValueChanged 回调函数中返回与新选中的组件关联的 key。通常，使用分段控件的组件将监听 onValueChanged 回调函数并使用新的 groupValue 重建分段控件以更新当前选中的选项。

children 将按 Map 中键的顺序显示。分段控件的高度由 children
中最高的组件的高度确定。除非子项的组合宽度大于可用的水平空间，否则分段控件中每个子项的宽度将等于最宽子项的宽度。在这种情况下，可用的水平空间会除以 children 的数量，以确定每个组件的宽度。children 中 每个组件的选择区域将扩展至充满计算的空间，因此每个组件看起来都具有相同的尺寸。

可以选择使用自定义颜色创建分段控件。unselectedColor，selectedColor，borderColor 和 pressedColor 参数可用于将分段控件 CupertinoColors.activeBlue 和 CupertinoColors.white 改为自定义配置。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| borderColor | 每个组件周围边框的颜色 |
| children | 分段控件中的标识键和相应的组件 |
| groupValue | 当前选中的组件的标识符 |
| onValueChanged | 点击新选项时的回调函数 |
| pressedColor | 用于填充用户通过长按或拖动临时与之交互的组件的背景颜色 |
| selectedColor | 用于填充选中项的背景颜色以及未选中项的文本颜色 |
| unselectedColor | 用于填充未选中项的背景颜色，以及选中组件的文本颜色 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## CupertinoSlider

![CupertinoSlider](https://flutter.io/images/widget-catalog/cupertino-slider.png)

iOS 风格的滑块。

用于从一系列值中进行选择。

滑块可用于从连续或离散值集中进行选择。默认值是使用从 min 到 max 的连续值范围。要使用离散值，请将 divisions 设为非 null 值，这表示离散间隔的数量。例如，如果 min 为 0.0， max 为 50.0， divisions 为 5，则滑块可选离散值为 0.0,10.0,20.0,30.0,40.0 和 50.0。

滑块本身不保持任何状态。相反，当滑块状态发生变化时，组件会调用 onChanged 回调函数。大多数使用滑块的组件将监听 onChanged 回调函数并使用新值重建滑块以更新滑块的视觉外观。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| activeColor | 滑块已选定部分的颜色 |
| divisions | 离散分区的数量 |
| max | 用户可以选择的最大值 |
| min | 用户可以选择的最小值 |
| onChanged | 当用户为滑块选择新值时的回调函数 |
| onChangedEnd | 用户完成为滑块选择新值时的回调函数 |
| onChangedStart | 当用户开始为滑块选择新值时的回调函数 |
| value | 此滑块的当前选定值 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |
| debugFillProperties | 添加与节点关联的额外属性 |


## CupertinoSwitch

![CupertinoSwitch](https://flutter.io/images/widget-catalog/cupertino-switch.png)

iOS 风格的开关。

用于切换单个设置的开/关状态。

开关本身不保持任何状态。相反，当开关的状态发生变化时，组件会调用 onChanged 回调函数。大多数使用开关的组件将监听 onChanged 回调函数并使用新值重建开关以更新开关的可视外观。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| activeColor | 此开关打开时使用的颜色 |
| onChanged | 当用户打开或关闭开关时的回调函数 |
| value | 此开关是打开还是关闭 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |
| debugFillProperties | 添加与节点关联的额外属性 |

## CupertinoNavigationBar

![CupertinoNavigationBar](https://flutter.io/images/widget-catalog/cupertino-nav-bar.png)

iOS 风格的导航栏。

导航栏是一个工具栏，最小由一个组件组成，通常是工具栏 middle 中的页面标题。

它还支持在 middle 之前添加 leading 组件，在 middle 之后添加 trailing 组件，同时保持 middle 组件居中。

如果没有为 leading 指定组件，且 automaticallyImplyLeading 为 true（默认为true），则leading 组件会自动为返回图标按钮（在全屏对话的情况下，为关闭按钮），以弹出当前路由。

如果没有为 middle 指定组件，且 automaticallyImplyMiddle 为 true（默认为true），则 middle 组件会自动从目前 [CupertinoPageRoute]()的获取标题文本。

它应放在屏幕顶部，并自动记录操作系统的状态栏。

如果给定的 backgroundColor 的不透明度不是 1.0（默认情况下是这种情况），它将对其后面的内容产生模糊效果。

当 transitionBetweenRoutes 为 true 时，如果正在转换的路径也具有 [CupertinoNavigationBar]() 或 [CupertinoSliverNavigationBar ]() 且 transitionBetweenRoutes 设置为 true，则此导航栏将在路径顶部而不是在其中进行转换。如果 transitionBetweenRoutes 为 true，则 Widget 参数都不能在其子树中包含键，因为该组件将同时存在于树中的多个位置。

默认情况下， 每个 [PageRoute]() 中只应存在一个 [CupertinoNavigationBar]() 或 [CupertinoSliverNavigationBar]() 以支持默认转换。使用 transitionBetweenRoutes 或 heroTag 可以自定义每个路径的多个导航栏的过渡行为。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| actionsForegroundColor | 用于导航栏中 leading 和 trailing 组件的文本和图标的默认颜色 |
| automaticallyImplyLeading | 控制当 leading 为 null 时是否应该尝试使用默认组件 |
| automaticallyImplyMiddle | 控制当 middle 为 null 时是否应该尝试使用默认组件 |
| backgroundColor | 导航栏的背景颜色。如果它包含透明度，标签栏将自动对其背后的内容产生模糊效果 |
| border | 导航栏的边框。默认情况下，渲染单个像素底部边框 |
| fullObstruction | 如果导航栏的背景颜色没有透明度，则为 true |
| heroTag | 如果 transitionBetweenRoutes 为 true，则标记导航栏的 Hero 组件 |
| leading | 放置在导航栏开头的组件。通常是正常页面的后退按钮或完整页面对话框的取消按钮 |
| middle | 置在导航栏中间的组件。通常是标题或分段控件 |
| padding | 导航栏内容的内边距 |
| preferredSize | 如果它不受限制，则为此组件的预设尺寸 |
| previousPageTitle | 自动隐含 leading 按钮时手动指定上一个路由的标题 |
| trailing | 放置在导航栏末尾的组件。通常在页面上执行其他操作，例如搜索或编辑功能 |
| transitionBetweenRoutes | 是否在导航栏之间转换 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## CupertinoTabBar

![CupertinoTabBar](https://flutter.io/images/widget-catalog/cupertino-tab-bar.png)

iOS 风格的底部导航标签栏。

使用 [BottomNavigationBarItem]() 显示多个选项卡，其中一个选项卡处于活动状态，默认情况下为第一个选项卡。

此 StatelessWidget 不存储活动选项卡本身。你必须监听 onTap 回调函数并在 currentIndex 改变时调用 `setState` 重新映射。

根据标准 iOS 设计，选项卡更改通常会触发 [Navigator]() 之间的切换，每个 [Navigator]() 都有自己的导航堆栈。

如果给定的 backgroundColor 的不透明度不是 1.0（默认情况下是这种情况），它将对其后面的内容产生模糊效果。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| activeColor | 选定状态的 [BottomNavigationBarItem]() 的图标和标题的前景色 |
| backgroundColor | 标签栏的背景颜色。如果它包含透明度，标签栏将自动对其背后的内容产生模糊效果 |
| border | [CupertinoTabBar]() 的边框 |
| currentIndex | 当前的活动项的索引 |
| iconSize | 所有 [BottomNavigationBarItem]() 图标的大小 |
| inactiveColor | 处于未选定状态的 [BottomNavigationBarItem]() 的图标和标题的前景色 |
| items | 位于底部导航栏中的交互式项目 |
| onTap | 点击项目时的回调函数 |
| opaque | 如果标签栏的背景颜色没有透明度，则为 true |
| preferredSize | 如果它不受限制，则为此组件的预设尺寸 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| build | 构建此组件的 UI |
| copyWith | 创建当前 [CupertinoTabBar]() 的副本，但提供的参数已被覆盖 |

## CupertinoTabScaffold

![CupertinoTabScaffold](https://flutter.io/images/widget-catalog/cupertino-tab-scaffold.png)

实现选项卡式 iOS 应用程序的根布局和行为结构。

脚手架构建了底部的标签栏和标签栏之间或之后的内容。

必须有 tabBar 和 tabBuilder。CupertinoTabScaffold 会自动监听提供 [CupertinoTabBar]() 的点击回调函数更改活动标签。

选项卡的内容是使用活动选项卡索引处提供的 tabBuilder 构建的。该 tabBuilder 必须能够建立相同数量的网页，因为有 tabBar.items。非活动选项卡将移至 Offstage， 并禁用其动画。

使用 [CupertinoTabView]() 作为每个选项卡的内容，以支持具有并行导航状态和历史记录的选项卡。

在以上所有选项卡而不是当前选中的一个内（例如，在此脚手架的顶部显示对话时）跳转路由时，在 [CupertinoTabView]() 的 BuildContext 内部使用 *Navigator.of(rootNavigator: true)*。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| tabBar | tabBar 是一个 [CupertinoTabBar]()，绘制在屏幕底部，让用户在主内容区域在不同的选项卡之间切换 |
| tabBuilder | 一个 [IndexedWidgetBuilder]()，选项卡变为活动状态时调用 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |

## CupertinoTabView

![CupertinoTabView](https://flutter.io/images/widget-catalog/cupertino-tab-view.png)

单个选项卡视图，具有自己的 Navigator 状态和历史记录。

用作 [CupertinoTabScaffold]() 中每个选项卡内容的典型选项卡视图，其中具有并行导航状态和历史记录的多个选项卡可以共存。

CupertinoTabView 配置顶级 Navigator 以按以下顺序搜索路由：

1. 对于 `/` 路径，使用 builder 属性（如果非 null）。
2. 否则，如果有路由入口，使用 routes 表（包括 `/`，如果没有指定 builder）。
3. 否则，调用 onGenerateRoute（如果提供）。对于未由 builder 和 routes 处理的任何**有效**路由，它应返回非空值。
3. 最后，如果所有其他方法都失败则调用 onUnknownRoute。

这些导航属性不与任何同级 CupertinoTabView 共享， 也不与任何祖先或后代 [Navigator]() 实例共享。

要在 CupertinoTabView 上层而不是在其内部切换路由（例如在所有选项卡上显示对话框时），请使用 *Navigator.of(rootNavigator: true)*。

## CupertinoTextField

![CupertinoTextField](https://flutter.io/images/widget-catalog/cupertino-textfield.png)

iOS 风格的文本字段。

文本字段允许用户使用硬件键盘或屏幕键盘输入文本。

此组件对应于 iOS 上的 *UITextField* 和可编辑的 *UITextView*。

只要用户更改字段中的文本，文本字段就会调用 onChanged 回调函数。如果用户指示他们已完成在字段中键入（例如，通过按下软键盘上的按钮），则文本字段会调用 onSubmitted 回调函数。

要控制文本字段中显示的文本，请使用 controller。例如，要设置文本字段的初始值，请使用已包含某些文本的 controller。

controller 还可以控制选择并组成区域（观察文本更改，选择，并组成区域）。

文本字段具有可覆盖的 decoration，默认情况下，在文本字段周围绘制圆角矩形边框。如果将 decoration 属性设置为 null，则将完全删除装饰。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| autocorrect | 是否启用自动更正 |
| autofocus | 如果没有其他内容已经获得焦点，这个文本字段是否应该获得焦点 |
| clearButtonMode | 显示 iOS 样式的清除按钮以清除当前文本条目 |
| controller | 控制正在编辑的文本 |
| cursorColor | 绘制光标时使用的颜色 |
| cursorRadius | 光标的圆角半径 |
| cursorWidth | 光标厚度 |
| decoration | 控制文本输入后面框的 [BoxDecoration]() |
| enabled | false 时禁用文本字段 |
| focusNode | 控制此组件是否具有键盘焦点 |
| inputFormatters | 可选的输入验证和格式覆盖 |
| keyboardAppearance | 键盘的外观 |
| keyboardType | 用于编辑文本的键盘类型 |
| maxLength | 文本字段中允许的最大字符数（Unicode 标量值） |
| maxLengthEnforced | 如果为 true，则阻止该字段允许超过 maxLength 个字符 |
| maxLines | 文本要跨越的最大行数，必要时换行 |
| obscureText | 是否隐藏正在编辑的文本（例如，用于密码） |
| onChanged | 当正在编辑的文本发生更改时的回调函数 |
| onEditingComplete | 当用户提交可编辑内容时的回调函数（例如，用户按下键盘上的“完成”按钮） |
| onSubmitted | 当用户指示他们已完成编辑字段中的文本时的回调函数 |
| padding | 当 clearButtonMode 不是永远时 ，在 prefix 和suffix 之间的文本输入区域或清除按钮周围的内边距 |
| placeholder  | 当文本条目为空时，出现在文本字段第一行的浅色占位符提示 |
| prefix  | 在文本之前显示的可选 Widget |
| prefixMode  | 当 prefix 参数不为 null 时，根据文本条目的状态 控制 prefix 组件的可见性 |
| scrollPadding  | 当 Textfield 滚动到视图中时，将填充配置到 Scrollable 周围的边缘 |
| style  | 用于正在编辑的文本的样式 |
| suffix  | 在文本之后显示的可选 Widget |
| suffixMode  | 当 suffix 参数不为 null 时，根据文本条目的状态 控制 suffix 组件的可见性 |
| textAlign  | 文本应如何水平对齐 |
| textCapitalization  | 配置平台键盘如何选择大写或小写键盘 |
| textInputAction  | 用于键盘的操作按钮类型 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |
| debugFillProperties | 添加与节点关联的额外属性 |

## CupertinoTimerPicker

![CupertinoTimerPicker](https://flutter.io/images/widget-catalog/cupertino-timer-picker.png)

iOS 风格的倒计时时间选择器。

此选择器显示小时，分钟和秒旋转器的倒计时持续时间。持续时间在 0 到 23 小时 59 分 59 秒之间。

[CupertinoTimerPickerMode]() 中列出了几种计时器选择器模式。

### 属性

| 属性 | 功能 |
| ------ | ------ |
| initialTimerDuration | 倒计时器的初始持续时间 |
| minuteInterval | 分钟微调器的粒度。必须是 60 的整数因子 |
| mode | 计时器选择器的模式 |
| onTimerDurationChanged | 计时器持续时间改变时的回调函数 |
| secondInterval | 第二个微调器的粒度。必须是 60 的整数因子 |

### 方法

| 名称 | 功能 |
| ------ | ------ |
| createState | 在树中的给定位置为此组件创建可变状态 |