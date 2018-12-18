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

## CupertinoSlider

![CupertinoSlider](https://flutter.io/images/widget-catalog/cupertino-slider.png)

## CupertinoSwitch

![CupertinoSwitch](https://flutter.io/images/widget-catalog/cupertino-switch.png)

## CupertinoNavigationBar

![CupertinoNavigationBar](https://flutter.io/images/widget-catalog/cupertino-nav-bar.png)

## CupertinoTabBar

![CupertinoTabBar](https://flutter.io/images/widget-catalog/cupertino-tab-bar.png)

## CupertinoTabScaffold

![CupertinoTabScaffold](https://flutter.io/images/widget-catalog/cupertino-tab-scaffold.png)

## CupertinoTabView

![CupertinoTabView](https://flutter.io/images/widget-catalog/cupertino-tab-view.png)

## CupertinoTextField

![CupertinoTextField](https://flutter.io/images/widget-catalog/cupertino-textfield.png)

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