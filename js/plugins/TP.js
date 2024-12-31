Game_BattlerBase.prototype.maxTp = function() {
    return $gameVariables.value(966);
};
Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    var value = Math.floor(0 * damageRate * this.tcr);
    this.gainSilentTp(value);
};       