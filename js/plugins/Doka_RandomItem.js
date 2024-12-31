//=============================================================================
// Doka_RandomItem.js
// by 多卡多卡 on 2019/8/21
// https://rpg.blue/thread-478478-1-1.html
//=============================================================================

/*:
 * @plugindesc 随机物品(其实是个抽奖模拟器)  Ver.1.2.1
 * @author 多卡多卡
 *
 * @param 返回对象类型
 * @type boolean
 * @on Object
 * @off ItemId
 * @desc 调用随机物品函数时返回对象的类型
 * Object:物品 / ItemId:物品的Id
 * @default true
 *
 * @param 保留小数位数
 * @type number
 * @min 0
 * @desc 打开物品出现率列表时物品出率保留小数的位数
 * @default 4
 *
 * @param 效果音
 * @type boolean
 * @on 是
 * @off 否
 * @desc 打开物品出现率列表时是否播放效果音
 * @default true
 *
 * @param 物品出现率列表的标题
 * @desc 打开物品出现率列表时标题的文字
 * @default 物品出现率:
 *
 * @param 空白物品的描述
 * @desc 打开物品出现率列表时对空白物品的描述
 * @default 什么也没有
 *
 * @param 标题栏颜色
 * @desc 标题栏的颜色
 * @default #84aaff
 *
 * @param 自动替换空白物品颜色
 * @desc 自动将空白物品的名称替换为指定颜色，不需要此功能时将此参数清空，此时需要为每个空白物品单独指定颜色
 * @default #84aaff
 *
 * @param 道具量词
 * @desc \LASTITEMNUM中道具的量词
 * @default 个
 *
 * @param 武器量词
 * @desc \LASTITEMNUM中武器的量词
 * @default 把
 *
 * @param 防具量词
 * @desc \LASTITEMNUM中防具的量词
 * @default 件
 *
 * @param 物品列表1
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表2
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表3
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表4
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表5
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表6
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表7
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表8
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表9
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表10
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表11
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表12
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表13
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表14
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表15
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表16
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表17
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表18
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表19
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表20
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表21
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表22
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表23
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表24
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表25
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表26
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表27
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表28
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表29
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @param 物品列表30
 * @type struct<ItemList>
 * @desc 物品列表的详细配置信息。
 * @default 
 *
 * @help
 * 这是一个类似抽奖池的功能的插件，能够检验血统_(:3」∠)_ 
 * (目前可以实现抽不空的奖池,抽空的暂时无法实现)
 * 除了抽奖之外，还可以实现砍树或者挖矿获得的随机物品。
 *
 * 每一个物品列表相当于一个奖池,奖池内的物品出现率可以自行设置。
 * 出现率采用的是权值而不是百分比(因为代码比较好写，
 * 而且可以防止百分比之和不是100%时出现的奇怪问题)
 * 例如有3个物品，出现率分别设置为4,3,1,则实际出现率为50%,37.5%和12.5%，
 * 简单来说就是实际出现率等于该物品的出现率除以所有物品的出现率之和。
 * 如果要实现空白物品(就是谢谢惠顾那种),将出现率设为大于0的数字即可。
 * 如果30个列表或50个道具不够用，有需要自己打开插件添加即可。
 * 
 * -----------------------------------------------------------------------------
 * 该插件适用于MIT协议，原作者拥有全部版权，可用于商业用途。
 * 如需公开发行项目、转载或修改后再次发布，请注明原作者。
 *
 * -----------------------------------------------------------------------------
 * 插件参数:
 * --返回对象类型:指定RandomItem返回对象的类型(Object/ItemId)
 * 
 * 当为true时，返回的将会是物品对象($dataItems[物品编号]之类的)，
 * 与'物品数量'参数无关。当要获得指定数量的该物品时，
 * 可以参考使用方法里介绍的用法。
 * 如要判断物品的类型，请使用:
 * DataManager.isItem(Object)
 * DataManager.isWeapon(Object)
 * DataManager.isArmor(Object)这三个函数进行判断。
 * 当这三个函数某一个返回true时，即为物品的类型。
 * 当为false时,将仅返回物品的Id(Number),此时无法使用上述三个函数判断类型!
 *
 * -----------------------------------------------------------------------------
 * 转义符号:
 * 在'显示文字'中，可以对特定的字符进行替换
 * \LASTITEM       : 替换为上一个抽取出的随机物品的图标加名称
 * \LASTITEMID     : 替换为上一个抽取出的随机物品的Id
 * \LASTITEMNUM    : 替换为上一个抽取出的随机物品的数量加上量词
 * \LASTITEMNUM_N  : 替换为上一个抽取出的随机物品的数量不加量词
 * 其中自定义量词优先级大于通用量词，如果没有自定义量词则显示通用量词
 *
 * -----------------------------------------------------------------------------
 * 插件指令:
 * RandomItemList [物品列表序号]
 * 打开物品出现率列表可以查看每种物品的出率
 * 如果超过28种物品，可以按上下方向键或滚动滚轮进行查看
 * 例:RandomItemList 1   --> 打开1号物品列表的出现率列表
 * 
 * -----------------------------------------------------------------------------
 * 使用方法:
 * RandomItem([物品列表序号])
 * 获得指定列表的一个随机物品
 * 例:RandomItem(1)
 * 从1号物品列表中抽取出一个物品(就是从1号奖池单抽)
 * 返回类型取决于参数'返回对象类型'(true:Object/false:ItemId)
 * 如果需要指定返回的类型，可以添加一个参数进行指定:
 * 例:RandomItem(1,true)
 * 从1号物品列表中抽取出一个物品,返回类型强制为Object,无视'返回对象类型'
 * 注意目前无法实现抽空奖池!!!所以再抽一次出现率不会发生变化。
 * 当false时返回类型强制为ItemId(Number)
 * 如果抽到了空物品，当为Object时返回null,为ItemId时返回0。
 *
 * LastRandomItem()
 * 上一个抽取出的随机物品，返回类型取决于参数'返回对象类型'
 * 同样的，可以添加一个参数指定返回类型:
 * 例:上一个随机物品的Id:
 * LastRandomItem(false)
 * 如果抽到了空物品，当为Object时返回null,为ItemId时返回0。
 *
 * LastRandomItemNum()
 * 上一个抽取出的随机物品的数量
 * 单独的该函数没有实际意义，完整的使用方法如下:
 * $gameParty.gainItem(RandomItem(1),LastRandomItemNum())
 * 从1号物品列表中抽取出一个物品并获得对应数量(这才是真正意义上的抽奖)
 * 如果抽到了空物品，将返回0。
 *
 * ----关于颜色
 * 有以下颜色供参考：
 *  #FF4444 赤    #FF784C 橙   
 *  #FFFF40 黄    #80FF80 绿   
 *  #98F5FF 青    #40C0F0 蓝   
 *  #8080FF 紫    #FF69B4 粉   
 *  #8B4C39 棕    #BEBEBE 亮灰 
 *  #797979 暗灰 
 *
 * 如果你想配置更完美的颜色，推荐去这个网址找到你想要的颜色代码：
 * http://tool.oschina.net/commons?type=3
 *
 * -----------------------------------------------------------------------------
 * Ver.1.1 追加转义字符
 * 
 * Ver.1.2 可对标题栏、物品名和物品出率更改颜色
 *
 * Ver.1.2.1 可对物品列表添加描述
 */
/*~struct~ItemList: 
 *
 * @param 描述
 * @desc 随便写什么，为了方便区分每个列表
 * (大于10个中文字符时从外面看会显示不全)
 * @default 
 *
 * @param 物品1
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品2
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品3
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品4
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品5
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品6
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品7
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品8
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品9
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品10
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品11
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品12
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品13
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品14
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品15
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品16
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品17
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品18
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品19
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品20
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品21
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品22
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品23
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品24
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品25
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品26
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品27
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品28
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品29
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品30
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品31
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品32
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品33
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品34
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品35
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品36
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品37
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品38
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品39
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品40
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品41
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品42
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品43
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品44
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品45
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品46
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品47
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品48
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品49
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 *
 * @param 物品50
 * @type struct<Item>
 * @desc 物品的详细配置信息。
 * @default
 */
/*~struct~Item: 
*
* @param 物品类型
* @type select
* @option 道具
* @value item
* @option 武器
* @value weapon
* @option 防具
* @value armor
* @desc 物品的类型
* @default item
*
* @param 出现率
* @desc 物品出现的权重比(注意不是百分比)
* @min 0
* @type number
* @default 1
*
* @param 物品数量
* @desc 物品的数量(注意无论该参数为何值返回的仍然是单个物品(或Id)，需要调用LastRandomItemNum()来获得该参数)
* @min 0
* @type number
* @default 1
*
* @param 自定义量词
* @desc \LASTITEMNUM中自定义的量词(会覆盖类型通用的量词)
* @default 
*
* @param 道具Id
* @type item
* @desc 道具的Id
* @default 0
*
* @param 武器Id
* @type weapon
* @desc 武器的Id
* @default 0
*
* @param 防具Id
* @type armor
* @desc 防具的Id
* @default 0
*
* @param 物品名颜色
* @desc 物品名称的颜色
* @default #ffffff
*
* @param 出现率颜色
* @desc 物品出现概率的颜色
* @default #ffffff
*/

var Imported = Imported || {};
Imported.Doka_RandomItem = true;
var Doka_RandomItem = Doka_RandomItem || {};

Doka_RandomItem.parameters = PluginManager.parameters('Doka_RandomItem');
Doka_RandomItem.parameters.title = String(PluginManager.parameters('Doka_RandomItem')['物品出现率列表的标题']);
Doka_RandomItem.parameters.null_description = String(PluginManager.parameters('Doka_RandomItem')['空白物品的描述']);
Doka_RandomItem.parameters.quantifiers_item = String(PluginManager.parameters('Doka_RandomItem')['道具量词']);
Doka_RandomItem.parameters.quantifiers_weapon = String(PluginManager.parameters('Doka_RandomItem')['武器量词']);
Doka_RandomItem.parameters.quantifiers_armor = String(PluginManager.parameters('Doka_RandomItem')['防具量词']);
Doka_RandomItem.parameters.fixed = Number(PluginManager.parameters('Doka_RandomItem')['保留小数位数']);
Doka_RandomItem.type = String(Doka_RandomItem.parameters["返回对象类型"] || "true") == "true";
Doka_RandomItem.playSe = String(Doka_RandomItem.parameters["效果音"] || "true") == "true";
Doka_RandomItem.titleColor = String(Doka_RandomItem.parameters["标题栏颜色"] || "#84aaff");
Doka_RandomItem.blankItemColor = String(Doka_RandomItem.parameters["自动替换空白物品颜色"] || "");
Doka_RandomItem.maxLists = Object.keys(PluginManager.parameters('Doka_RandomItem')).length - 16;
Doka_RandomItem.lists = [];
Doka_RandomItem.lastObject = {};
Doka_RandomItem.listIndex = 1;
Doka_RandomItem.scroll = 0;

var Doka_RandomItem_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
    if (!Doka_RandomItem_DataManager_isDatabaseLoaded.call(this)) return false;
    if (!Doka_RandomItem.loaded) {
        for (var i = 0; i < Doka_RandomItem.maxLists; i++) {
            if (Doka_RandomItem.parameters['物品列表' + String(i + 1)] != "") {
                Doka_RandomItem.lists[i] = [];
                var obj = JSON.parse(Doka_RandomItem.parameters['物品列表' + String(i + 1)]);
                delete obj['描述'];
                Object.getOwnPropertyNames(obj).forEach(function (key) {
                    obj[key] != "" && Doka_RandomItem.lists[i].push(JSON.parse(obj[key]));
                });
                for (var ii = 0; ii < Doka_RandomItem.lists[i].length; ii++) {
                    var rate = Number(Doka_RandomItem.lists[i][ii]['出现率']);
                    var num = Number(Doka_RandomItem.lists[i][ii]['物品数量']);
                    var quantifiers = String(Doka_RandomItem.lists[i][ii]['自定义量词'] || "");
                    var itemColor = String(Doka_RandomItem.lists[i][ii]["物品名颜色"] || "#ffffff");
                    var probabilityColor = String(Doka_RandomItem.lists[i][ii]["出现率颜色"] || "#ffffff");
                    var object;
                    switch (Doka_RandomItem.lists[i][ii]['物品类型']) {
                        case "item": object = $dataItems[Number(Doka_RandomItem.lists[i][ii]['道具Id'])]; break;
                        case "weapon": object = $dataWeapons[Number(Doka_RandomItem.lists[i][ii]['武器Id'])]; break;
                        case "armor": object = $dataArmors[Number(Doka_RandomItem.lists[i][ii]['防具Id'])]; break;
                    };
                    Doka_RandomItem.lists[i][ii] = {};
                    Doka_RandomItem.lists[i][ii].rate = rate;
                    Doka_RandomItem.lists[i][ii].num = num;
                    Doka_RandomItem.lists[i][ii].quantifiers = quantifiers;
                    Doka_RandomItem.lists[i][ii].itemColor = itemColor;
                    Doka_RandomItem.lists[i][ii].probabilityColor = probabilityColor;
                    Doka_RandomItem.lists[i][ii].object = object;
                };
            }
            else Doka_RandomItem.lists[i] = [];
        };
        Doka_RandomItem.loaded = true;
    };
    return true;
};

var Doka_RandomItem_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Doka_RandomItem_Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'RandomItemList') {
        Doka_RandomItem.playSe && SoundManager.playOk();
        Doka_RandomItem.listIndex = Number(args[0]);
        SceneManager.push(Scene_RandomItemList);
    }
};

RandomItem = function (index, type) {
    var num = Math.floor(Math.random() * Doka_RandomItem_getRateSum(index));
    for (var i = 0; i < Doka_RandomItem.lists[index - 1].length; i++) {
        Doka_RandomItem_getObjectArray(index, i + 1).contains(num) && (Doka_RandomItem.lastObject = Doka_RandomItem.lists[index - 1][i]);
    };
    return LastRandomItem(type);
};

LastRandomItem = function (type) {
    return (type != undefined ? type : Doka_RandomItem.type) ? Doka_RandomItem.lastObject.object :
        (Doka_RandomItem.lastObject.object == null ? 0 : Doka_RandomItem.lastObject.object.id);
};

LastRandomItemNum = function () {
    return Doka_RandomItem.lastObject.object == null ? 0 : Doka_RandomItem.lastObject.num;
};

Doka_RandomItem_getRateSum = function (index) {
    var sum = 0;
    Doka_RandomItem.lists[index - 1].forEach(function (item) {
        sum += item.rate ? item.rate : 0;
    });
    return sum;
};

Doka_RandomItem_getObjectArray = function (index, num) {
    var array = [];
    var font = 0;
    for (var i = 0; i < num - 1; i++) {
        font += Doka_RandomItem.lists[index - 1][i].rate ? Doka_RandomItem.lists[index - 1][i].rate : 0;
    };
    for (var j = 0; j < Doka_RandomItem.lists[index - 1][num - 1].rate; j++) {
        array.push(font + j);
    };
    return array;
};

//==============================
// * 画一个窗口怎么要写这么多代码?
//------------------------------

function Scene_RandomItemList() {
    this.initialize.apply(this, arguments);
}
Scene_RandomItemList.prototype = Object.create(Scene_MenuBase.prototype);
Scene_RandomItemList.prototype.constructor = Scene_RandomItemList;
Scene_RandomItemList.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_RandomItemList.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createWindow();
};

Scene_RandomItemList.prototype.createWindow = function () {
    this._itemList = new Window_RandomItemList();
    this._itemListTitle = new Window_RandomItemListTitle();
    this.addWindow(this._itemList);
    this.addChild(this._itemListTitle);
};

Scene_RandomItemList.prototype.update = function () {
    Scene_MenuBase.prototype.update.call(this);
    (Input.isTriggered('cancel') || TouchInput.isCancelled()) && (SoundManager.playCancel(), SceneManager.pop(Scene_RandomItemList), Doka_RandomItem.scroll = 0);
};

//物品栏

function Window_RandomItemList() {
    this.initialize.apply(this, arguments);
}

Window_RandomItemList.prototype = Object.create(Window_Selectable.prototype);
Window_RandomItemList.prototype.constructor = Window_RandomItemList;

Window_RandomItemList.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, 84, Graphics.boxWidth, Graphics.boxHeight - 84);
    this._index = 0;
    this._scroll = 0;
    this.refresh();
    this.activate();
};

Window_RandomItemList.prototype.maxCols = function () {
    return 2;
};

Window_RandomItemList.prototype.drawItem = function (listIndex, index) {
    var item = Doka_RandomItem.lists[listIndex - 1][index].object;
    var numberWidth = this.textWidth('00000');
    var rect = {};
    rect.x = (index % 2 == 0 ? 0 : Graphics.boxWidth / 2);
    rect.y = this.lineHeight() * (Math.floor(index / 2) - this._scroll);
    rect.width = Graphics.boxWidth / 2;
    this.changePaintOpacity(true);
    if (item) {
        this.drawIcon(item.iconIndex, rect.x, rect.y, rect.width - numberWidth);
        this.changeTextColor(Doka_RandomItem.lists[listIndex - 1][index].itemColor);
        this.drawText(item.name + (Doka_RandomItem.lists[listIndex - 1][index].num != 1 ? ('×' + Doka_RandomItem.lists[listIndex - 1][index].num) : ''), rect.x + Window_Base._iconWidth, rect.y, rect.width);
        this.resetTextColor();
    }
    else {
        this.changeTextColor(Doka_RandomItem.blankItemColor != "" ? Doka_RandomItem.blankItemColor : Doka_RandomItem.lists[listIndex - 1][index].itemColor)
        this.drawText(Doka_RandomItem.parameters.null_description, rect.x + Window_Base._iconWidth, rect.y, rect.width);
        this.resetTextColor();
    }
    this.changeTextColor(Doka_RandomItem.lists[listIndex - 1][index].probabilityColor);
    this.drawItemRate(100 * Doka_RandomItem.lists[listIndex - 1][index].rate / Doka_RandomItem_getRateSum(listIndex), rect.x + numberWidth, rect.y, rect.width);
    this.resetTextColor();
};

Window_RandomItemList.prototype.drawItemRate = function (rate, x, y, width) {
    this.drawText(rate.toFixed(Doka_RandomItem.parameters.fixed) + '%', x, y, width - this.textWidth('100.0000%'), 'right');
};

Window_RandomItemList.prototype.drawItemList = function (listIndex) {
    this.createContents();
    var max_scroll = Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1].length > 28 ? (Math.ceil((Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1].length - 28) / 2)) : 0;
    this._scroll != 0 && this.drawText('↑', Graphics.boxWidth / 2 - 25, -5, this.textWidth('0'));
    this._scroll != max_scroll && this.drawText('↓', Graphics.boxWidth / 2 - 25, Graphics.boxHeight - 162, this.textWidth('0'));
    this.drawAllItems(listIndex);
};

Window_RandomItemList.prototype.drawAllItems = function (listIndex) {
    for (var i = 0; i < Doka_RandomItem.lists[listIndex - 1].length; i++) {
        this.drawItem(Doka_RandomItem.listIndex, i);
    };
};

Window_RandomItemList.prototype.modulateScroll = function () {
    var max_scroll = Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1].length > 28 ? (Math.ceil((Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1].length - 28) / 2)) : 0;
    this._index <= -1 && (this._index += 2, this._scroll -= (this._scroll > 0 ? 1 : 0));
    this._index >= (28 - Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1].length % 2) && (this._index -= 2, this._scroll += (this._scroll < max_scroll ? 1 : 0));
};

Window_RandomItemList.prototype.refresh = function () {
    this.modulateScroll();
    this.createContents();
    this.drawItemList(Doka_RandomItem.listIndex);
    this.select(this._index);
};

Window_RandomItemList.prototype.update = function () {
    Window_Selectable.prototype.update.call(this);
    (Input.isRepeated('up') || TouchInput.wheelY < 0) && (this._index -= 2, this.refresh());
    (Input.isRepeated('down') || TouchInput.wheelY > 0) && (this._index += 2, this.refresh());
    Input.isRepeated('left') && (this._index -= this._index % 2, this.refresh());
    Input.isRepeated('right') && (this._index += (1 - this._index % 2), this.refresh());
    if(TouchInput.isTriggered())
    {
        var x0 = (TouchInput.x >= 18 && TouchInput.x <= 401) ? 0 : ((TouchInput.x >= 414 && TouchInput.x <= 798) ? 1 : -1);
        var y0 = (TouchInput.y >= 102 && TouchInput.y <= 606) ? Math.floor((TouchInput.y - 102) / 36) : -1;
        this._index = ((x0 == -1 || y0 == -1) ? this._index : (x0 + 2 * y0));
        this.refresh();
    }
};

//标题栏

function Window_RandomItemListTitle() {
    this.initialize.apply(this, arguments);
};
Window_RandomItemListTitle.prototype = Object.create(Window_Selectable.prototype);
Window_RandomItemListTitle.prototype.constructor = Window_RandomItemListTitle;

Window_RandomItemListTitle.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, 84);
    this.refresh();
};

Window_RandomItemListTitle.prototype.refresh = function () {
    this.createContents();
    this.drawTitle();
};

Window_RandomItemListTitle.prototype.drawTitle = function () {
    this.changeTextColor(Doka_RandomItem.titleColor);
    this.drawText(Doka_RandomItem.parameters.title, 0, 8, 168);
    this.resetTextColor();
};

Window_RandomItemListTitle.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    (Input.isTriggered('up') || TouchInput.wheelY < 0) && this.refresh() ;
    (Input.isTriggered('down') || TouchInput.wheelY > 0) && this.refresh() ;
};

//==============================
// * 转义字符
//------------------------------

var Doka_Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function (text) {
    text = Doka_Window_Base_convertEscapeCharacters.call(this, text);
    text = text.replace(/\x1b([A-Z_]+)/gi, function () {
        switch (arguments[1].toUpperCase()) {
            case 'LASTITEM': return this.lastItem();
            case 'LASTITEMID': return this.lastItemId();
            case 'LASTITEMNUM': return this.lastItemNum();
            case 'LASTITEMNUM_N': return this.lastItemNum_n();
            default:
                return '\x1b' + arguments[1];
        };
    }.bind(this));
    return text;
};

Window_Base.prototype.lastItem = function () {
    return LastRandomItem(true) != null ? ('\x1bI[' + LastRandomItem(true).iconIndex + ']' + LastRandomItem(true).name) : '';
};

Window_Base.prototype.lastItemId = function () {
    return LastRandomItem(false);
};

Window_Base.prototype.lastItemNum = function () {
    if (Doka_RandomItem.lastObject != null && Doka_RandomItem.lastObject.quantifiers != "")
        return LastRandomItemNum() + Doka_RandomItem.lastObject.quantifiers;
    else if (DataManager.isItem(LastRandomItem(true)))
        return LastRandomItemNum() + Doka_RandomItem.parameters.quantifiers_item;
    else if (DataManager.isWeapon(LastRandomItem(true)))
        return LastRandomItemNum() + Doka_RandomItem.parameters.quantifiers_weapon;
    else if (DataManager.isArmor(LastRandomItem(true)))
        return LastRandomItemNum() + Doka_RandomItem.parameters.quantifiers_armor;
};

Window_Base.prototype.lastItemNum_n = function () {
    return LastRandomItemNum();
};

