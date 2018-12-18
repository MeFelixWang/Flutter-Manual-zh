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

## CupertinoFullscreenDialogTransition

![CupertinoFullscreenDialogTransition](https://flutter.io/images/widget-catalog/cupertino-fullscreen-dialog-transition.png)

## CupertinoPageScaffold

![CupertinoPageScaffold](https://flutter.io/images/widget-catalog/cupertino-page-scaffold.png)

## CupertinoPageTransition

![CupertinoPageTransition](https://flutter.io/images/widget-catalog/cupertino-page-transition.png)

## CupertinoPicker

![CupertinoPicker](https://flutter.io/images/widget-catalog/cupertino-picker.png)

## CupertinoPopupSurface

![CupertinoPopupSurface]()

## CupertinoSegmentedControl

![CupertinoSegmentedControl](https://flutter.io/images/widget-catalog/cupertino-segmented-control.png)

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