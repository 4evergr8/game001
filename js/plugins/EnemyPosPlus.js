//=============================================================================
// EnemyPosPlus.js
//=============================================================================

/*:
 * @plugindesc 可以追加調整敵人位置.
 * @author STILILA
 *
 *
 * @help
 * 在敵人註解欄打上
 * <ScreenXplus:n>   // 敵人X + n
 * <ScreenYplus:n>   // 敵人Y + n
 */


(function() {
	
const _Game_Enemy_screenX = Game_Enemy.prototype.screenX
Game_Enemy.prototype.screenX = function() {
	const posPlus = this.enemy().meta.ScreenXplus
    return _Game_Enemy_screenX.call(this) + (posPlus ? Number(posPlus) : 0)
};

const _Game_Enemy_screenY = Game_Enemy.prototype.screenY
Game_Enemy.prototype.screenY = function() {
	const posPlus = this.enemy().meta.ScreenYplus
    return _Game_Enemy_screenY.call(this) + (posPlus ? Number(posPlus) : 0)
};

})();
