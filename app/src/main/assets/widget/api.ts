/**
 * Created with IntelliJ IDEA.<br/>
 * User: lizhichao<br/>
 * Date: 2018-5-13-0013<br/>
 * Time: 14:04:10<br/>
 * Description: <span style="color:#63D3E9"></span><br/>
 */
declare const api: API;

interface API {
    /**
     * 引用模块
     */
    require: Function,
    /**
     *应用是否全屏,只支持iOS
     */
    fullScreen:boolean,
    /**
     * 引擎版本信息
     */
    version: string,
    /**
     * 系统类型
     */
    systemType: string,
    /**
     * 手机平台的系统版本
     */
    systemVersion: string,
    /**
     * 设备唯一标识
     */
    deviceId: string,
    /**
     * 设备型号
     */
    deviceModel: string,
    /**
     * 设备名称
     */
    deviceName: string,
    /**
     * 当前网络连接类型，如 2g、3g、4g、wifi 等
     */
    connectionType: string,
    /**
     * 用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值
     */
    wgtParam: object,
    /**
     * 用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值
     */
    pageParam: object,
    /**
     * 当应用被第三方应用打开时，传递过来的参数
     */
    appParam: object,
    /**
     * widget 网页包的根目录
     */
    wgtRootDir: string,
    /**
     * 当前 window 名称
     */
    winName: string,
    /**
     * frame 名称
     */
    frameName: string,
    /**
     * 当前 window 宽度
     */
    winWidth: number,
    /**
     * 当前 window 高度
     */
    winHeight: number,
    /**
     * frame 宽度
     */
    frameWidth: number,
    /**
     * frame 高度
     */
    frameHeight: number,
    /**
     * 应用的 ID，可以在网站控制台概览里面查看
     */
    appId: string,
    /**
     * 应用在桌面显示名称
     */
    appName: string,
    /**
     *
     */
    wgtLoaderDir: string,
    /**
     * 应用版本号
     */
    appVersion: string,
    /**
     * 屏幕分辨率宽
     */
    screenWidth: number,
    /**
     * 屏幕分辨率高
     */
    screenHeight: number,
    /**
     * /协议对应地真实目录
     */
    fsDir: string,
    /**
     * 协议对应的真实目录
     */
    cacheDir: string,
    /**
     * 运营商名称，若未获取到则返回none
     */
    operator: string,
    /**
     * iOS中用于推送的Token，若未从系统获取到则返回空字符串
     */
    deviceToken: string,
    /**
     * 得到设备唯一标识
     */
    fingerPrint: string,
    /**
     *当前应用状态栏是否支持沉浸式效果
     */
    statusBarAppearance: boolean,
    /**
     * 获取config.xml配置的debug字段的值
     */
    debug: boolean,
    /**
     * 协议对应的真实目录
     */
    boxDir: string,
    /**
     * 渠道号
     */
    channel: string,
    /**
     * 设备是否越狱
     */
    jailbreak: boolean,
    /**
     * 设备类型{
     * pad
     * phone
     * tv
     * car
     * desk
     * watch
     * }
     */
    uiMode: string,
    /**
     * 页面不被其它内容（如状态栏）遮住的区域
     *top:            // 安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）
     *     left:            // 安全区域左边缘，通常为0（iPhone X横屏时为44）
     *     bottom:            // 安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）
     *     right:
     */
    safeArea: {
        top: number,
        left: number,
        bottom: number,
        right: number
    },
    /**
     * 回到系统桌面
     */
    toLauncher: Function,
    /**
     * 安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页面
     */
    installApp: Function,
    /**
     * 打开手机上其它应用，可以传递参数
     */
    openApp: Function,
    /**
     * 打开 Widget，若此 widget 已经被打开，则会把其调整到最前面显示
     */
    openWidget: Function,
    /**
     * 关闭指定widget，也可以关闭应用
     */
    closeWidget: Function,

    getFsWidgets: Function,
    /**
     * 若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。若当前正在进行openWin、closeWin等带动画过渡的window操作，调用此方法会失效
     */
    openWin: Function,
    /**
     * 打开侧滑式布局

     打开后，其所在 window 的 name 默认为 slidLayout，所以关闭整个侧滑布局可以通过 api.closeWin({name:'slidLayout'}) 实现，同时可以通过 api.openWin({name:'slidLayout'})来把整个侧滑显示到最前面
     */
    openSlidLayout: Function,
    /**
     * 向左或右进行侧滑
     */
    openSlidPane: Function,
    /**
     * 当 SlidPane 处于左或右侧滑状态时，将其收起
     */
    closeSlidPane: Function,
    /**
     * 设置 window 属性
     */
    setWinAttr: Function,
    /**
     * 若当前正在进行 openWin、closeWin 等带动画过渡的 window 操作，调用此方法会失效
     */
    closeWin: Function,
    /**
     * 关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭

     若当前正在进行 openWin、closeWin 等带动画过渡的 window 操作，调用此方法会失效
     */
    closeToWin: Function,
    /**
     * 在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本，具体执行逻辑见补充说明。
     */
    execScript: Function,
    /**
     * 若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新

     此方法对 frameGroup 里面的 frame 不起作用
     */
    openFrame: Function,
    /**
     * 设置frame属性
     */
    setFrameAttr: Function,
    /**
     * 调整 frame 到前面
     */
    bringFrameToFront: Function,
    /**
     * 调整 frame 到后面
     */
    sendFrameToBack: Function,
    /**
     * 关闭frame
     */
    closeFrame: Function,
    /**
     * frame 动画，支持平移，缩放，旋转和透明度变化

     仅支持 frame，不支持 window 以及 frameGroup 里面的 frame
     */
    animation: Function,
    /**
     * 若frame组已存在，则会把该frame组显示到最前面。frame组打开后，当前页面加载完成后，页面会预加载后面指定个数页面
     */
    openFrameGroup: Function,
    /**
     * 设置 frame 组属性
     */
    setFrameGroupAttr: Function,
    /**
     * 设置 frame 组当前可见 frame
     */
    setFrameGroupIndex: Function,
    /**
     * 关闭frame组
     */
    closeFrameGroup: Function,
    /**
     * 打开弹出层窗口，只支持iPad
     */
    openPopoverWin:Function,
    /**
     * 关闭整个弹出层窗口，只 iPad 上面有效
     */
    closePopoverWin:Function,
    /**
     *显示默认下拉刷新组件，使用默认下拉刷新组件时页面必须设置为弹动。
     */
    setRefreshHeaderInfo: Function,
    /**
     * 通知下拉刷新数据加载完毕，组件会恢复到默认状态
     */
    refreshHeaderLoadDone: Function,
    /**
     * 监听事件，支持系统事件和自定义事件
     */
    addEventListener: Function,
    /**
     * 移除事件监听
     */
    removeEventListener: Function,

    log: Function,
    /**
     * 弹出带一个按钮的对话框，更多按钮的对话框请使用confirm方法
     */
    alert: Function,
    /**
     * 弹出带两个或三个按钮的confirm对话框
     */
    confirm: Function,
    /**
     * 弹出带两个或三个按钮和输入框的对话框
     */
    prompt: Function,
    /**
     * 显示进度提示框
     */
    showProgress: Function,
    /**
     * 隐藏进度提示框
     */
    hideProgress: Function,
    /**
     * 设置偏好数据
     */
    setPrefs: Function,
    /**
     * 获取偏好设置值
     */
    getPrefs: Function,
    /**
     * 从加密的key.xml文件中读取指定数据，key.xml文件放置于网页包里面的res目录
     */
    loadSecureValue: Function,
    /**
     * 删除偏好设置值
     */
    removePrefs: Function,
    /**
     * 通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。
     */
    getPicture: Function,
    /**
     * 跨域异步请求，支持标准HTTP协议，支持HTTPS单向/双向认证请求，支持文件上传，支持缓存。 HTTPS需要向国际受信任的CA证书颁发机构购买CA证书，否则将可能请求失败，可以在config中配置不校验CA证书是否受信任。 云编译开启全局加密的情况下，请务必使用api.ajax，避免使用JQ等框架的ajax，否则将引起请求失败。
     */
    ajax: Function,

    call: Function,
    /**
     * 调用系统短信界面发送短信，或者后台直接发送短信
     */
    sms: Function,
    /**
     * 发送邮件,需要在手机上面已经配置好邮件账户
     */
    mail: Function,
    /**
     * 读取文本文件内容，只支持utf-8编码文本类型文件
     */
    readFile: Function,
    /**
     * 写入内容到文本文件
     */
    writeFile: Function,
    /**
     * 录制amr格式音频
     */
    startRecord: Function,
    /**
     * 停止录音
     */
    stopRecord: Function,
    /**
     * 播放本地音频，支持amr格式
     */
    startPlay: Function,
    /**
     * 停止播放音频
     */
    stopPlay: Function,
    /**
     * 调用系统自带定位功能，开始定位
     */
    startLocation: Function,
    /**
     * 停止定位
     */
    stopLocation: Function,
    /**
     * 获取位置信息，获取成功后自动停止获取。

     若之前已通过 startLocation() 方法进行定位，则直接返回上次定位的数据，否则使用默认设置进行定位
     */
    getLocation: Function,
    /**
     * 开启传感器
     */
    startSensor: Function,
    /**
     * 停止传感器
     */
    stopSensor: Function,
    /**
     * 设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景），以及设置状态栏背景颜色
     */
    setStatusBarStyle: Function,
    /**
     * 设置是否全屏
     */
    setFullScreen: Function,
    /**
     * 移除启动图。若 config.xml 里面配置 autoLaunch 为 false，则启动图不会自动消失，直到调用此方法移除。
     */
    removeLaunchView: Function,
    /**
     * 在应用内打开系统通讯录界面选择联系人,打开通讯录界面
     */
    openContacts: Function,
    /**
     * 打开时间选择器
     */
    openPicker: Function,
    /**
     * 打开系统视频播放器
     */
    openVideo: Function,
    /**
     * 下载文件
     */
    download: Function,
    /**
     * 取消文件下载
     */
    cancelDownload: Function,
    /**
     * 清除缓存，包括下载的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。
     */
    clearCache: Function,
    /**
     * 底部弹出框
     */
    actionSheet: Function,
    /**
     * 弹出一个定时自动关闭的提示框
     */
    toast: Function,
    /**
     * 展示一个悬浮框，浮动在屏幕上。
     */
    showFloatBox: Function,
    /**
     * 向用户发出震动、声音提示、灯光闪烁、状态栏消息等通知，以及闹钟功能。状态栏消息点击后，页面可以通过监听 noticeclicked 事件得到内容。

     注：当应用在前台弹出通知提示时，iOS上面通知将在显示几秒后消失，不会在通知栏保留。
     */
    notification: Function,
    /**
     * 取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃
     */
    cancelNotification: Function,
    /**
     * 锁住 SlidPane，使其不能跟随手指滑动而移动
     */
    lockSlidPane: Function,
    /**
     * 解锁 SlidPane，使其能跟随手指滑动而移动
     */
    unlockSlidPane: Function,
    /**
     * 设置屏幕旋转方向
     */
    setScreenOrientation: Function,
    /**
     * 设置是否禁止屏幕休眠
     */
    setKeepScreenOn: Function,
    /**
     * 将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。
     */
    sendEvent: Function,
    /**
     * 当前window或者frame的a标签历史记录后退一页
     */
    historyBack: Function,
    /**
     * 当前window或者frame的a标签历史记录前进一页
     */
    historyForward: Function,
    /**
     * 判断设备上面是否已安装指定应用
     */
    appInstalled: Function,
    /**
     * 图片缓存
     */
    imageCache: Function,

    requestFocus: Function,

    onTvPeak: Function,

    setTvFocusElement: Function,
    /**
     * 页面向下滚动一页
     */
    pageDown: Function,
    /**
     * 页面向上滚动一页
     */
    pageUp: Function,

    scrollBy: Function,

    scrollTo: Function,
    /**
     * 保存图片和视频到系统相册
     */
    saveMediaToAlbum: Function,
    /**
     * 设置是否禁止截屏，只支持Android
     */
    setScreenSecure: Function,
    /**
     * 设置应用图标右上角数字，支持所有 iOS 手机，以及部分 Android 手机，如小米和三星的某些型号，不支持的设备，表现结果为调用该接口无任何效果
     */
    setAppIconBadge: Function,
    /**
     * 获取缓存占用空间大小，缓存包括下载的缓存文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间
     */
    getCacheSize: Function,
    /**
     * 获取剩余存储空间大小
     */
    getFreeDiskSpace: Function,
    /**
     * 取消异步请求
     */
    cancelAjax: Function,
    /**
     * 设置下拉刷新组件为刷新中状态
     */
    refreshHeaderLoading: Function,
    /**
     * 使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效。
     */
    accessNative: Function,
    /**
     * 卸载应用，只支持Android
     */
    uninstallApp: Function,
    /**
     * 打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。

     此方法在 openWin 方法的基础上增加了 leftPane、rightPane 参数，所以可以通过 api.closeWin()方法来关闭整个抽屉式侧滑。
     */
    openDrawerLayout: Function,
    /**
     * 打开抽屉式侧滑Pane
     */
    openDrawerPane: Function,
    /**
     * 关闭抽屉式侧滑Pane
     */
    closeDrawerPane: Function,
    /**
     * 显示自定义下拉刷新组件。

     使用自定义下拉刷新组件之前，需要在config.xml里面配置要使用的自定义下拉刷新模块名称
     */
    setCustomRefreshHeaderInfo: Function,
    /**
     * 设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听。
     */
    setFrameClient: Function,
    /**
     * 重启应用，云修复完成后可以调用此方法来重启应用使云修复生效。
     */
    rebootApp: Function,
    /**
     * 获取本机电话号码，只支持 Android 部分手机
     */
    getPhoneNumber: Function,
    /**
     * 获取总存储空间大小
     */
    getTotalSpace: Function,
    /**
     * 在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。
     */
    loadData: Function,
    /**
     * 重新显示闪屏广告，若没有闪屏广告则不显示。
     */
    showLaunchView: Function,
    /**
     * 对当前页面或应用设置模糊效果

     该方法只支持iOS 8及以上系统
     */
    setBlurEffect: Function,
    /**
     * 解析元素 tapmode 属性，优化点击事件处理

     默认页面加载完成后，引擎会对 dom 里面的元素进行 tapmode 属性解析，若是之后用代码创建的 dom 元素，则需要调用该方法后 tapmode 属性才会生效
     */
    parseTapmode: Function
}