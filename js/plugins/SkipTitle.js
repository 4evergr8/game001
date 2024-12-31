/*:
 * @target MZ
 * @plugindesc skip title
 * @author AnChi
 *
 * @help skip the title and rewrite all return function.
 * 
 * @param default_title_map
 * @text 預設標題設定
 * @type struct<TitleMapData>
 * @desc 預設取代標題的地圖與玩家設定
 * 
 */
/*~struct~TitleMapData:
 * @param id
 * @text 地圖編號
 * @desc 用來取代標題的地圖的編號
 * @type number
 * @default 1
 * 
 * @param x
 * @text 玩家 x 座標
 * @desc 進入地圖時玩家的 x 座標
 * @type number
 * @default 0
 * 
 * @param y
 * @text 玩家 y 座標
 * @desc 進入地圖時玩家的 y 座標
 * @type number
 * @default 0
 * 
 * @param dir
 * @text 玩家朝向
 * @desc 進入地圖時玩家應朝向什麼方向
 * 0: 不改變、 2: 下、 4: 左、 6: 右、 8: 上
 * @type number
 * @default 2
 * 
 * @param fade
 * @text 淡出模式
 * @desc 轉移地圖的淡出模式
 * 0: 黑色、1: 白色、 2: 無
 * @type number
 * @default 0
 */

(() => {
    const filename = document.currentScript.src.split("/").pop().replace(".js", "")
    const userParams = PluginManager.parameters(filename)

    /**
     * @type {{
     *  id:     number,
     *  x:      number,
     *  y:      number,
     *  dir:    0 | 2 | 4 | 6 | 8,
     *  fade:   0 | 1 | 2,
     * }}
     */
    const CONFIG = (() => {
        const isNaNOr = (v, or) => isNaN(v) ? or : v

        let temp = JSON.parse(userParams["default_title_map"])
        temp.id = isNaNOr(Number(temp.id), 1)
        temp.x = isNaNOr(Number(temp.x), 0)
        temp.y = isNaNOr(Number(temp.y), 0)
        temp.dir = isNaNOr(Number(temp.dir), 2)
        temp.fade = isNaNOr(Number(temp.fade), 0)

        return temp
    })()

    const returnToCustomTitle = () => {
        DataManager.setupNewGame()
        SceneManager.goto(Scene_Map)
    }

    const DataManager_setupNewGame = DataManager.setupNewGame
    DataManager.setupNewGame = function () {
        DataManager_setupNewGame.call(this)
    }

    // just skip the title.
    DataManager.isTitleSkip = function () {
        return true
    }

    Game_Player.prototype.setupForNewGame = function () {
        this.reserveTransfer(CONFIG.id, CONFIG.x, CONFIG.y, CONFIG.dir, CONFIG.fade)
    }

    // becouse I skip the title, now return command will get wrong,
    // there for I also skip the return.
    Game_Interpreter.prototype.command354 = function () {
        returnToCustomTitle()
        return true
    }

    // and also turn to first map when game over.
    Scene_Gameover.prototype.gotoTitle = function () {
        returnToCustomTitle()
    };

})()