//=============================================================================
// plugin name Ayatam_SpSkillLimits.js
// ■ Sp貯蓄式スキルMV 対応コアver 1.6.3
//
// (C)2022 ayatam
//=============================================================================
//  【更新内容】
//  2022/3/9 v0.01 試作完成。
//=============================================================================

var Imported = Imported || {};
Imported.Ayatam_SpSkillLimits = true;

var Ayatam = Ayatam || {};
Ayatam.SPSKILLLIMITS = Ayatam.SPSKILLLIMITS || {};

/*:
 * @target MV
 * @plugindesc Sp貯蓄式スキルMV v0.01
 * Spを消費してスキルを発動する機能を追加
 * @author Ayatam (Another Young Animations)
 * 
 * @help ■ Sp貯蓄式スキルMV
 * 本プラグインは、Core ver 1.6.3 に対応。
 * 
 * 【利用規約】
 * ・改造はご自由に行ってください。
 * ・他サイト様の素材との競合によるエラーには基本、対応しません。
 * ・素材単体でのエラーには対応します。ただし、その責任は負いません。
 * ・アダルト・商業可。
 * 
 * 【素材を使用したゲーム等について】
 * ・作者名、サイト名、URLなどをread_meなどに分かりやすい形で記載してください。
 * 
 *   作者名:ayatam
 *   サイト名:Another Young Animations 公式サイト
 *   URL:https://ayatam.wixsite.com/index
 * 
 * =============================================================================
 *  【プラグイン使用方法】
 *  ・プラグインパラメータの各種設定をお好みの設定にし、
 *  ・下記を参考の上、スクリプトコマンドを使用し、
 *    ゲーム内でSp貯蓄式スキルを実装してください。
 *  ・本プラグインにはプラグインコマンドはありません。
 *    スクリプトコマンドのみです。
 * 
 * =============================================================================
 * 
 * =============================================================================
 * 
 *  スクリプトコマンド - SP関係 -
 * 
 * =============================================================================
 * 
 *  ●SPの取得「対象アクターにSPを獲得させる」
 *   Ayatam.SPSKILLLIMITS.addBattleActorSp(actorId,sp)
 *   actorId : アクターのid。
 *   sp      : 追加するSP量。0で獲得を無効化します。
 * 
 *  【例:1】アクターID:1 の現在SP量を 25 獲得させる。
 *          Ayatam.SPSKILLLIMITS.addBattleActorSp(1,25)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの変更「戦闘中の全生存アクターにSPを獲得させる」
 *   Ayatam.SPSKILLLIMITS.addAllBattleActorSp(sp)
 *   sp      : 追加するSP量。0で獲得を無効化します。
 * 
 *  【例:1】戦闘中の全生存アクターにSPを 10 獲得させる。
 *          Ayatam.SPSKILLLIMITS.addAllBattleActorSp(10)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの取得「対象アクターの戦闘開始時SP量を参照」
 *   Ayatam.SPSKILLLIMITS.getBattleStartActorSp(actorId)
 *   actorId : アクターのid。
 * 
 *  【例:1】アクターID:1 の戦闘開始時獲得SP量を参照。
 *          Ayatam.SPSKILLLIMITS.getBattleStartActorSp(1)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの変更「対象アクターの戦闘開始時SP量変更」
 *   Ayatam.SPSKILLLIMITS.setBattleStartActorSp(actorId,sp)
 *   actorId : アクターのid。
 *   sp      : 変更するSP量。0で獲得を無効化します。
 * 
 *  【例:1】アクターID:1 の戦闘開始時獲得SP量を 10 に変更。
 *          Ayatam.SPSKILLLIMITS.setBattleStartActorSp(1,10)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの取得「対象アクターの戦闘行動前SP量を参照」
 *   Ayatam.SPSKILLLIMITS.getBattleTurnActorSp(actorId)
 *   actorId : アクターのid。
 * 
 *  【例:1】アクターID:1 の戦闘行動前獲得SP量を参照。
 *          Ayatam.SPSKILLLIMITS.getBattleTurnActorSp(1)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの変更「対象アクターの戦闘行動前SP量変更」
 *   Ayatam.SPSKILLLIMITS.setBattleTurnActorSp(actorId,sp)
 *   actorId : アクターのid。
 *   sp      : 変更するSP量。0で獲得を無効化します。
 * 
 *  【例:1】アクターID:1 の戦闘行動前獲得SP量を 10 に変更。
 *          Ayatam.SPSKILLLIMITS.setBattleTurnActorSp(1,10)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの取得「対象スキルの消費SP量を参照」
 *   Ayatam.SPSKILLLIMITS.getSkillCostSp(skillId)
 *   skillId : スキルのid。
 * 
 *  【例:1】スキルID:1 の消費SP量を参照。
 *          Ayatam.SPSKILLLIMITS.getSkillCostSp(1)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの変更「対象スキルの消費SP量変更」
 *   Ayatam.SPSKILLLIMITS.setSkillCostSp(skillId,sp)
 *   skillId : スキルのid。
 *   sp      : 変更するSP量。0で獲得を無効化します。
 * 
 *  【例:1】スキルID:1 の消費SP量を 10 に変更。
 *          Ayatam.SPSKILLLIMITS.setSkillCostSp(1,10)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの取得「対象スキル使用時のSP獲得量を参照」
 *   Ayatam.SPSKILLLIMITS.getSkillAfterSp(skillId)
 *   skillId : スキルのid。
 * 
 *  【例:1】スキルID:1 使用時のSP獲得量を参照。
 *          Ayatam.SPSKILLLIMITS.getSkillAfterSp(1)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの変更「対象スキル使用時のSP獲得量変更」
 *   Ayatam.SPSKILLLIMITS.setSkillAfterSp(skillId,sp)
 *   skillId : スキルのid。
 *   sp      : 変更するSP量。0で獲得を無効化します。
 * 
 *  【例:1】スキルID:1 使用時のSP獲得量を 10 に変更。
 *          Ayatam.SPSKILLLIMITS.setSkillAfterSp(1,10)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの取得「対象スキル使用時のSP獲得の全体化の有無参照」
 *   Ayatam.SPSKILLLIMITS.getSkillAfterSpIsAll(skillId)
 *   skillId : スキルのid。
 * 
 *  【例:1】スキルID:1 使用時のSP獲得量を参照。
 *          Ayatam.SPSKILLLIMITS.getSkillAfterSpIsAll(1)
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●SPの変更「対象スキル使用時のSP獲得の全体化の変更」
 *   Ayatam.SPSKILLLIMITS.setSkillAfterSpAll(skillId,flag)
 *   skillId : スキルのid。
 *   flag    : true: 生存メンバー全体化/ false: 使用者のみ。
 * 
 *  【例:1】スキルID:1 使用時のSP獲得を全体化に変更する。
 *          Ayatam.SPSKILLLIMITS.setSkillAfterSpAll(1,true)
 * 
 * =============================================================================
 * 
 * =============================================================================
 * 
 *  スクリプトコマンド - メモ欄設定 -
 * 
 * =============================================================================
 * 
 *  ●アクター個別 バトル開始時SPの 初期化/維持 設定
 *  <ssl battleStartSpKeep: keep>
 *  keep                  : 戦闘開始時にSPを
 *                          true : 維持
 *                          false: 初期化
 * 
 * 【例:1】 戦闘開始時にSPを初期化する場合
 *          <ssl battleStartSpKeep: false>
 * 
 * 【例:2】 戦闘開始時にSPを維持する場合
 *          <ssl battleStartSpKeep: true>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●アクター個別 行動前獲得SPの設定
 *  <ssl turnSp: Sp>
 *  Sp         : 行動前獲得SPを数値で指定。
 *               0 で獲得しない。
 * 
 * 【例:1】 行動前獲得SPを無効に指定。
 *          <ssl turnSp: 0>
 * 
 * 【例:2】 行動前獲得SPを18に指定。
 *          <ssl turnSp: 18>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●アクター個別 初期SP最大値設定
 *  <ssl defaultMaxSp: maxSp>
 *  maxSp      : 最大SPを数値で指定。
 *               0 で無限。
 * 
 * 【例:1】 獲得可能最大SPを無限に指定。
 *          <ssl defaultMaxSp: 0>
 * 
 * 【例:2】 獲得可能最大SPを18に指定。
 *          <ssl defaultMaxSp: 18>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●アクター個別 レベルごとのバトル開始時獲得SPの設定
 *   <ssl lvlEachStartSp>
 *   lvl: turnSp
 *   </ssl lvlEachStartSp>
 *   lvl : レベル到達時に バトル開始時獲得SPを turnSp に変更する。
 * 
 * 【例:1】対象のアクターID:1のメモ欄に
 * 
 *         <ssl lvlEachStartSp>
 *         10: 10
 *         15: 50
 *         20: 60
 *         </ssl lvlEachStartSp>
 * 
 *         と指定すると、アクターID:1のレベルが、
 *         10になるとバトル開始時獲得SPが10に
 *         15になるとバトル開始時獲得SPが50に
 *         20になるとバトル開始時獲得SPが60に
 *         変更されます。
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●アクター個別 レベルごとの行動前獲得SPの設定
 *   <ssl lvlEachTurnSp>
 *   lvl: turnSp
 *   </ssl lvlEachTurnSp>
 *   lvl : レベル到達時に 行動前獲得SPを turnSp に変更する。
 * 
 * 【例:1】対象のアクターID:1のメモ欄に
 * 
 *         <ssl lvlEachTurnSp>
 *         10: 10
 *         15: 50
 *         20: 60
 *         </ssl lvlEachTurnSp>
 * 
 *         と指定すると、アクターID:1のレベルが、
 *         10になると行動前獲得SPが10に
 *         15になると行動前獲得SPが50に
 *         20になると行動前獲得SPが60に
 *         変更されます。
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●アクター個別 レベルごとのSP最大値設定
 *   <ssl lvlEachMaxSp>
 *   lvl: maxSp
 *   </ssl lvlEachMaxSp>
 *   lvl : レベル到達時に SP最大値を maxSp に変更する。
 * 
 * 【例:1】対象のアクターID:1のメモ欄に
 * 
 *         <ssl lvlEachMaxSp>
 *         10: 10
 *         15: 50
 *         20: 60
 *         </ssl lvlEachMaxSp>
 * 
 *         と指定すると、アクターID:1のレベルが、
 *         10になるとSP最大値が10に
 *         15になるとSP最大値が50に
 *         20になるとSP最大値が60に
 *         変更されます。
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●スキル個別 SPコストの設定
 *  <ssl SpCost: Sp>
 *  Sp         : 対象スキルのSPコストを数値で指定。
 *               0 でSP消費対象外と判定。
 * 
 * 【例:1】 対象スキルのSPコストを消費対象外に指定。
 *          <ssl SpCost: 0>
 * 
 * 【例:2】 対象スキルのSPコストを18に指定。
 *          <ssl SpCost: 18>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●スキル個別 スキル使用時獲得SPの設定
 *  <ssl AfterSp: Sp>
 *  Sp         : 対象スキルを使用時獲得SPを数値で指定。
 *               0 で無効。
 * 
 * 【例:1】 対象スキルを使用時獲得SPを無効に指定。
 *          <ssl AfterSp: 0>
 * 
 * 【例:2】 対象スキルを使用時獲得SPを18に指定。
 *          <ssl AfterSp: 18>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●スキル個別 スキル使用時獲得SPの全体化設定
 *  <ssl AfterSpAll: flag>
 *  flag            : true: 生存メンバー全体化/ false: 使用者のみ。
 * 
 * 【例:1】 対象スキルを使用時獲得SPを全体化に指定。
 *          <ssl AfterSpAll: true>
 * 
 * 【例:2】 対象スキルを使用時獲得SPを使用者のみに指定。
 *          <ssl AfterSpAll: false>
 * 
 * ※未設定で使用者のみが採用されます。
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●アイテム個別 アイテム使用時SP獲得の設定
 *  <ssl EarnSp: Sp>
 *  Sp         : 対象アイテム使用時SP獲得を数値で指定。
 *               0 で無効。
 * 
 * 【例:1】 対象アイテム使用時SP獲得を50に指定。
 *          <ssl EarnSp: 50>
 * 
 * 【例:2】 対象アイテム使用時SP獲得を18に指定。
 *          <ssl EarnSp: 18>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●武器/防具個別 対象武器/防具装備時、バトル開始時SPの設定
 *  <ssl AddStartSp: Sp>
 *  Sp         : 対象武器/防具装備時、バトル開始時SPを数値で指定。
 *               0 で無効。
 * 
 * 【例:1】 対象武器/防具装備時、バトル開始時SPを50に指定。
 *          <ssl AddStartSp: 50>
 * 
 * 【例:2】 対象武器/防具装備時、バトル開始時SPを18に指定。
 *          <ssl AddStartSp: 18>
 * 
 * -----------------------------------------------------------------------------
 * 
 *  ●武器/防具個別 対象武器/防具装備時、行動前獲得SPの設定
 *  <ssl AddTurnSp: Sp>
 *  Sp         : 対象武器/防具装備時、行動前獲得SPを数値で指定。
 *               0 で無効。
 * 
 * 【例:1】 対象武器/防具装備時、行動前獲得SPを50に指定。
 *          <ssl AddTurnSp: 50>
 * 
 * 【例:2】 対象武器/防具装備時、行動前獲得SPを18に指定。
 *          <ssl AddTurnSp: 18>
 * 
 * =============================================================================
 * 
 * @param GlobalSettings
 * @text 基本設定
 * @type struct<SpSkillLimitsGlobalSettings>
 * @default {"setup":"","battleStartSp":"true","battleTurnSp":"2","maxSp":"99","exchangeMpToSp":"false"}
 * @desc Sp貯蓄式スキルMVの基本設定を行います。
 */

//=============================================================================
//  【SpSkillLimitsGlobalSettings】
//=============================================================================

/*~struct~SpSkillLimitsGlobalSettings:
 * @param setup
 * @text 基本設定
 *
 * @param battleStartSp
 * @text 戦闘開始時SP
 * @parent setup
 * @type boolean
 * @default true
 * @on 初期化
 * @off 維持
 * @desc 戦闘開始時に全メンバーのSPを 初期化/維持 させるかの指定をしてください。
 *
 * @param battleTurnSp
 * @text 行動前獲得SP
 * @parent setup
 * @type number
 * @min 0
 * @default 2
 * @desc 毎ターンの行動前に獲得するSPを指定。0 で無効。
 *
 * @param maxSp
 * @text SPの最大値
 * @parent setup
 * @type number
 * @min 0
 * @default 99
 * @desc SPの最大値を指定。0 で無限。
 * 
 * @param exchangeMpToSp
 * @text MPをSPに置き換える
 * @parent setup
 * @type boolean
 * @default true
 * @on 置き換える
 * @off 置き換えない
 * @desc ステータス全般のMPをSPに置き換えるかを指定します。置き換えない場合、SPをバトルステータスにのみ追加します。
 */

//=============================================================================
//
// - プラグイン本体 - ここから下は変更禁止 -
//
//=============================================================================

//=============================================================================
// プラグイン 初期化
//=============================================================================

//プラグイン名の登録
var AyatamSpSkillLimitsName = document.currentScript.src.match(/^.*\/(.+)\.js$/)[1];

//プラグインパラメータを登録
Ayatam.SPSKILLLIMITS.Parameters = PluginManager.parameters(AyatamSpSkillLimitsName);
//プラグインパラメータの文字列を配列に変換
Ayatam.SPSKILLLIMITS.Parameters = JSON.parse(JSON.stringify(Ayatam.SPSKILLLIMITS.Parameters,(key,value)=>{
    try{return JSON.parse(value);} catch (e) {}
    return value;
    }
));
//基本設定のショートカット
Ayatam.SPSKILLLIMITS.GlobalSettings = Ayatam.SPSKILLLIMITS.Parameters.GlobalSettings;

//=============================================================================
// Ayatam.SPSKILLLIMITS - スクリプトコマンド
//=============================================================================

//=============================================================================
// SP参照・変更系
//=============================================================================
// ● 戦闘中の対象アクターにSPを獲得させる
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.addBattleActorSp = function(id,sp) {
    if(id === 0) return;
    $gameActors.actor(id).addBattleSp(sp);
};
//--------------------------------------------------------------------------
// ● 戦闘中の全生存アクターにSPを獲得させる
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.addAllBattleActorSp = function(sp) {
    var battleMembers = $gameParty.battleMembers();
    battleMembers.forEach(actor => {
        if(actor && actor.isAlive() && actor.isAppeared()) {
            actor.addBattleSp(sp);
        };
    });
};
//--------------------------------------------------------------------------
// ● 対象アクターの戦闘開始時SP量
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.getBattleStartActorSp = function(id) {
    if(id === 0) return;
    return $gameActors.actor(id).getSslActorStartSp();
};

Ayatam.SPSKILLLIMITS.setBattleStartActorSp = function(id,sp) {
    if(id === 0) return;
    if(sp < 0) sp = 0;
    $gameActors.actor(id).setSslActorStartSp(sp);
};
//--------------------------------------------------------------------------
// ● 対象アクターの戦闘行動前SP量
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.getBattleTurnActorSp = function(id) {
    if(id === 0) return;
    return $gameActors.actor(id).getSslActorTurnSp();
};

Ayatam.SPSKILLLIMITS.setBattleTurnActorSp = function(id,sp) {
    if(id === 0) return;
    if(sp < 0) sp = 0;
    $gameActors.actor(id).setSslActorTurnSp(sp);
};
//--------------------------------------------------------------------------
// ● 対象スキルのSP量
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.getSkillCostSp = function(id) {
    if(id === 0) return;
    return $dataSkills[id].sslSpCost;
};

Ayatam.SPSKILLLIMITS.setSkillCostSp = function(id,sp) {
    if(id === 0) return;
    if(sp < 0) sp = 0;
    $dataSkills[id].sslSpCost = sp;
};
//--------------------------------------------------------------------------
// ● 対象スキルの使用時獲得SP量
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.getSkillAfterSp = function(id) {
    if(id === 0) return;
    return $dataSkills[id].sslAfterSkillSp;
};

Ayatam.SPSKILLLIMITS.setSkillAfterSp = function(id,sp) {
    if(id === 0) return;
    if(sp < 0) sp = 0;
    $dataSkills[id].sslAfterSkillSp = sp;
};
//--------------------------------------------------------------------------
// ● 対象スキルの使用時獲得SP全体化
//--------------------------------------------------------------------------
Ayatam.SPSKILLLIMITS.getSkillAfterSpIsAll = function(id) {
    if(id === 0) return;
    return $dataSkills[id].sslAfterSkillSpAll;
};

Ayatam.SPSKILLLIMITS.setSkillAfterSpAll = function(id,flag) {
    if(id === 0) return;
    if(sp < 0) sp = 0;
    $dataSkills[id].sslAfterSkillSpAll = flag;
};

//=============================================================================
// Game_Actor - Sp貯蓄式スキルMV用のセットアップ
//=============================================================================

var _SpSkillLimits_Game_Actor_prototype_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    _SpSkillLimits_Game_Actor_prototype_setup.call(this,actorId);
    this.setupSpSkillLimitsSettings();
};

Game_Actor.prototype.setupSpSkillLimitsSettings = function() {
    this.spBattleStartKeep = !Ayatam.SPSKILLLIMITS.GlobalSettings.battleStartSp;
    if(this.currentSpPoints === undefined) this.currentSpPoints = 0;
    if(this.actorStartSpPoints === undefined) this.actorStartSpPoints = 0;
    if(this.actorTurnSpPoints === undefined) this.actorTurnSpPoints = 0;
    if(this.equipStartSpPoints === undefined) this.equipStartSpPoints = 0;
    if(this.equipTurnSpPoints === undefined) this.equipTurnSpPoints = 0;
    this.turnSpPoints = Ayatam.SPSKILLLIMITS.GlobalSettings.battleTurnSp;
    this.maxSpPoints = Ayatam.SPSKILLLIMITS.GlobalSettings.maxSp;
    this.spStartLvlGraph = [];
    this.spTurnLvlGraph = [];
    this.spMaxLvlGraph = [];
    this.getSpSkillLimitsNoteInformation();
    this.getSpSkillLimitsAllItemsNoteInformation();
};

Game_Actor.prototype.getSpSkillLimitsNoteInformation = function() {
    var lists = $dataActors[this.actorId()].note.split(/[\r\n]+/);
    var checkLvlMaxSp = false;
    var checkLvlStartSp = false;
    var checkLvlTurnSp = false;
    lists.forEach(note => {
        if(note !== "") {
            //個別設定の最大SPを取得
            if(note.match(/<ssl defaultMaxSp: (.*)>/i)) {
                var result = note.match(/<ssl defaultMaxSp: (.*)>/i);
                this.maxSpPoints = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
            //個別設定の行動前獲得SPを取得
            if(note.match(/<ssl turnSp: (.*)>/i)) {
                var result = note.match(/<ssl turnSp: (.*)>/i);
                this.turnSpPoints = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
            //個別設定のバトル開始時SPの 初期化/維持 取得
            if(note.match(/<ssl battleStartSpKeep: (.*)>/i)) {
                var result = note.match(/<ssl battleStartSpKeep: (.*)>/i);
                this.spBattleStartKeep = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
            //個別設定のバトル開始時SPレベルグラフを取得
            if(note.match(/<ssl lvlEachStartSp>/i)) checkLvlStartSp = true;
            if(note.match(/<\/ssl lvlEachStartSp>/i)) checkLvlStartSp = false;
            if(checkLvlStartSp) {
                if(note.match(/(.*): (.*)/i)) {
                    var result = note.match(/(.*): (.*)/i);
                    this.spStartLvlGraph[Number(result[1])] = JSON.parse(JSON.stringify(result[2],(key,value)=>{
                        try{return JSON.parse(value);} catch (e) {}
                        return value;
                        }
                    ));
                };
            };
            //個別設定の行動前獲得SPレベルグラフを取得
            if(note.match(/<ssl lvlEachTurnSp>/i)) checkLvlTurnSp = true;
            if(note.match(/<\/ssl lvlEachTurnSp>/i)) checkLvlTurnSp = false;
            if(checkLvlTurnSp) {
                if(note.match(/(.*): (.*)/i)) {
                    var result = note.match(/(.*): (.*)/i);
                    this.spTurnLvlGraph[Number(result[1])] = JSON.parse(JSON.stringify(result[2],(key,value)=>{
                        try{return JSON.parse(value);} catch (e) {}
                        return value;
                        }
                    ));
                };
            };
            //個別設定の最大SPレベルグラフを取得
            if(note.match(/<ssl lvlEachMaxSp>/i)) checkLvlMaxSp = true;
            if(note.match(/<\/ssl lvlEachMaxSp>/i)) checkLvlMaxSp = false;
            if(checkLvlMaxSp) {
                if(note.match(/(.*): (.*)/i)) {
                    var result = note.match(/(.*): (.*)/i);
                    this.spMaxLvlGraph[Number(result[1])] = JSON.parse(JSON.stringify(result[2],(key,value)=>{
                        try{return JSON.parse(value);} catch (e) {}
                        return value;
                        }
                    ));
                };
            };
        };
    });
};

Game_Actor.prototype.getSpSkillLimitsAllItemsNoteInformation = function() {
    $dataSkills.forEach(skill => {
        if(skill) {
          this.getSpSkillLimitsSkillNoteInformation(skill);  
        };
    });
    $dataItems.forEach(item => {
        if(item) {
          this.getSpSkillLimitsItemNoteInformation(item);  
        };
    });
    $dataWeapons.forEach(weapon => {
        if(weapon) {
          this.getSpSkillLimitsWeaponNoteInformation(weapon);  
        };
    });
    $dataArmors.forEach(armor => {
        if(armor) {
          this.getSpSkillLimitsArmorNoteInformation(armor);  
        };
    });
};

Game_Actor.prototype.getSpSkillLimitsSkillNoteInformation = function(skill) {
    if(skill.sslNoteLoaded !== undefined) return;
    skill.sslNoteLoaded = true;
    skill.sslSpCost = 0;
    skill.sslAfterSkillSp = 0;
    skill.sslAfterSkillSpAll = false;
    var lists = skill.note.split(/[\r\n]+/);
    lists.forEach(note => {
        if(note !== "") {
            //SPコストの取得 別プラグイン「スキルレベルシステム」と同期
            if(note.match(/<ssl SpCost: (.*)>/i)) {
                var result = note.match(/<ssl SpCost: (.*)>/i);
                skill.sslSpCost = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
            //スキル使用時獲得SPの取得 別プラグイン「スキルレベルシステム」と同期
            if(note.match(/<ssl AfterSp: (.*)>/i)) {
                var result = note.match(/<ssl AfterSp: (.*)>/i);
                skill.sslAfterSkillSp = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
            //スキル使用時獲得SP全体化の取得 別プラグイン「スキルレベルシステム」と同期
            if(note.match(/<ssl AfterSpAll: (.*)>/i)) {
                var result = note.match(/<ssl AfterSpAll: (.*)>/i);
                skill.sslAfterSkillSpAll = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
        };
    });
};

Game_Actor.prototype.getSpSkillLimitsItemNoteInformation = function(item) {
    if($dataItems[item.id].sslNoteLoaded !== undefined) return;
    $dataItems[item.id].sslNoteLoaded = true;
    $dataItems[item.id].sslEarnSp = 0;
    var lists = item.note.split(/[\r\n]+/);
    lists.forEach(note => {
        if(note !== "") {
            //アイテム使用時SP獲得の取得
            if(note.match(/<ssl EarnSp: (.*)>/i)) {
                var result = note.match(/<ssl EarnSp: (.*)>/i);
                $dataItems[item.id].sslEarnSp = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
        };
    });
};

Game_Actor.prototype.getSpSkillLimitsWeaponNoteInformation = function(weapon) {
    if($dataWeapons[weapon.id].sslNoteLoaded !== undefined) return;
    $dataWeapons[weapon.id].sslNoteLoaded = true;
    $dataWeapons[weapon.id].sslAddStartSp = 0;
    $dataWeapons[weapon.id].sslAddTurnSp = 0;
    var lists = weapon.note.split(/[\r\n]+/);
    lists.forEach(note => {
        if(note !== "") {
            //対象武器装備時、バトル開始時SPの取得
            if(note.match(/<ssl AddStartSp: (.*)>/i)) {
                var result = note.match(/<ssl AddStartSp: (.*)>/i);
                $dataWeapons[weapon.id].sslAddStartSp = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
            //対象武器装備時、行動前獲得SPの取得
            if(note.match(/<ssl AddTurnSp: (.*)>/i)) {
                var result = note.match(/<ssl AddTurnSp: (.*)>/i);
                $dataWeapons[weapon.id].sslAddTurnSp = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                    try{return JSON.parse(value);} catch (e) {}
                    return value;
                    }
                ));
            };
        };
    });
};

Game_Actor.prototype.getSpSkillLimitsArmorNoteInformation = function(armor) {
    if($dataArmors[armor.id].sslNoteLoaded !== undefined) return;
    $dataArmors[armor.id].sslNoteLoaded = true;
    $dataArmors[armor.id].sslAddStartSp = 0;
    $dataArmors[armor.id].sslAddTurnSp = 0;
    var lists = armor.note.split(/[\r\n]+/);
    lists.forEach(note => {
        if(note !== "") {
            if(note !== "") {
                //対象防具装備時、バトル開始時SPの取得
                if(note.match(/<ssl AddStartSp: (.*)>/i)) {
                    var result = note.match(/<ssl AddStartSp: (.*)>/i);
                    $dataArmors[armor.id].sslAddStartSp = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                        try{return JSON.parse(value);} catch (e) {}
                        return value;
                        }
                    ));
                };
                //対象防具装備時、行動前獲得SPの取得
                if(note.match(/<ssl AddTurnSp: (.*)>/i)) {
                    var result = note.match(/<ssl AddTurnSp: (.*)>/i);
                    $dataArmors[armor.id].sslAddTurnSp = JSON.parse(JSON.stringify(result[1],(key,value)=>{
                        try{return JSON.parse(value);} catch (e) {}
                        return value;
                        }
                    ));
                };
            };
        };
    });
};
//--------------------------------------------------------------------------
// ● バトル開始時SP初期化/維持の取得
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslBattleStart = function() {
    return this.spBattleStartKeep;
};
//--------------------------------------------------------------------------
// ● 現在のSP
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslSp = function() {
    return this.currentSpPoints;
};

Game_Actor.prototype.setSslSp = function(sp) {
    if(this.currentSpPoints === sp) return;
    this.currentSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● SP最大値
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslMaxSp = function() {
    return this.maxSpPoints;
};

Game_Actor.prototype.setSslMaxSp = function(sp) {
    if(this.maxSpPoints === sp) return;
    this.maxSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● アクター戦闘開始時SP
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslActorStartSp = function() {
    return this.actorStartSpPoints;
};

Game_Actor.prototype.setSslActorStartSp = function(sp) {
    if(this.actorStartSpPoints === sp) return;
    this.actorStartSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● アクター行動前SP
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslActorTurnSp = function() {
    return this.actorTurnSpPoints;
};

Game_Actor.prototype.setSslActorTurnSp = function(sp) {
    if(this.actorTurnSpPoints === sp) return;
    this.actorTurnSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● 装備品戦闘開始時SP
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslEquipStartSp = function() {
    return this.equipStartSpPoints;
};

Game_Actor.prototype.setSslEquipStartSp = function(sp) {
    if(this.equipStartSpPoints === sp) return;
    this.equipStartSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● 装備品行動前SP
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslEquipTurnSp = function() {
    return this.equipTurnSpPoints;
};

Game_Actor.prototype.setSslEquipTurnSp = function(sp) {
    if(this.equipTurnSpPoints === sp) return;
    this.equipTurnSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● デフォルトの行動前SP
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslTurnSp = function() {
    return this.turnSpPoints;
};

Game_Actor.prototype.setSslTurnSp = function(sp) {
    if(this.turnSpPoints === sp) return;
    this.turnSpPoints = sp;
};
//--------------------------------------------------------------------------
// ● 装備品の装備時SPを情報を取得
//--------------------------------------------------------------------------
var _SpSkillLimits_Game_Actor_prototype_initEquips = Game_Actor.prototype.initEquips;
Game_Actor.prototype.initEquips = function(equips) {
    _SpSkillLimits_Game_Actor_prototype_initEquips.call(this,equips);
    this.setSslEquipsSp();
};

var _SpSkillLimits_Game_Actor_prototype_changeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
    _SpSkillLimits_Game_Actor_prototype_changeEquip.call(this,slotId,item);
    this.setSslEquipsSp();
};

Game_Actor.prototype.setSslEquipsSp = function() {
    var slots = this.equipSlots();
    var maxSlots = slots.length;
    var countStartSp = 0;
    var countTurnSp = 0;
    for (var i = 0; i < maxSlots; i++) {
        if(this._equips[i]._itemId !== 0) {
            if(i === 0) {
                countStartSp += $dataWeapons[this._equips[i]._itemId].sslAddStartSp;
                countTurnSp += $dataWeapons[this._equips[i]._itemId].sslAddTurnSp;
            }else{
                countStartSp += $dataArmors[this._equips[i]._itemId].sslAddStartSp;
                countTurnSp += $dataArmors[this._equips[i]._itemId].sslAddTurnSp;
            };
        };
    };
    this.setSslEquipStartSp(countStartSp);
    this.setSslEquipTurnSp(countTurnSp);
};
//--------------------------------------------------------------------------
// ● バトル開始時SP獲得
//--------------------------------------------------------------------------
Game_Actor.prototype.addBattleStartSp = function() {
    if(!this.getSslBattleStart()) this.setSslSp(0);
    var addSp = this.getSslActorStartSp() + this.getSslEquipStartSp();
    var checkCurrentSp = this.getSslSp();
    var sumSp = checkCurrentSp + addSp;
    if(sumSp >= this.getSslMaxSp()) {
        if(this.getSslMaxSp() === 0) {
            this.setSslSp(sumSp);
        }else{
            this.setSslSp(this.getSslMaxSp());
        };
    }else{
        this.setSslSp(sumSp);
    }; 
};
//--------------------------------------------------------------------------
// ● バトル行動前SP獲得
//--------------------------------------------------------------------------
Game_Actor.prototype.addBattleTurnSp = function() {
    var addSp = this.getSslTurnSp() + this.getSslActorTurnSp() + this.getSslEquipTurnSp();
    var checkCurrentSp = this.getSslSp();
    var sumSp = checkCurrentSp + addSp;
    if(sumSp >= this.getSslMaxSp()) {
        if(this.getSslMaxSp() === 0) {
            this.setSslSp(sumSp);
        }else{
            this.setSslSp(this.getSslMaxSp());
        };
    }else{
        this.setSslSp(sumSp);
    }; 
};
//--------------------------------------------------------------------------
// ● バトル特別SP獲得
//--------------------------------------------------------------------------
Game_Actor.prototype.addBattleSp = function(sp) {
    var checkCurrentSp = this.getSslSp();
    var sumSp = checkCurrentSp + sp;
    if(sumSp >= this.getSslMaxSp()) {
        if(this.getSslMaxSp() === 0) {
            this.setSslSp(sumSp);
        }else{
            this.setSslSp(this.getSslMaxSp());
        };
    }else{
        this.setSslSp(sumSp);
    }; 
};
//--------------------------------------------------------------------------
// ● SP使用可能か
//--------------------------------------------------------------------------
Game_Actor.prototype.sslCanUseSp = function(sp) {
    var checkCurrentSp = this.getSslSp();
    var sumSp = checkCurrentSp - sp;
    if(sumSp < 0) {
        return false;
    }else{
        return true;
    }; 
};
//--------------------------------------------------------------------------
// ● SP使用の実行
//--------------------------------------------------------------------------
Game_Actor.prototype.sslUseSp = function(sp) {
    var checkCurrentSp = this.getSslSp();
    var sumSp = checkCurrentSp - sp;
    if(sumSp <= 0) {
        this.setSslSp(0);
    }else{
        this.setSslSp(sumSp);
    }; 
};
//--------------------------------------------------------------------------
// ● レベル変動グラフの取得 バトル開始時
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslLevelUpStartSp = function(lvl) {
    return this.spStartLvlGraph[lvl];
};
//--------------------------------------------------------------------------
// ● レベル変動グラフの取得 行動前時
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslLevelUpTurnSp = function(lvl) {
    return this.spTurnLvlGraph[lvl];
};
//--------------------------------------------------------------------------
// ● レベル変動グラフの取得 最大値
//--------------------------------------------------------------------------
Game_Actor.prototype.getSslLevelUpMaxSp = function(lvl) {
    return this.spMaxLvlGraph[lvl];
};
//--------------------------------------------------------------------------
// ● レベルアップ時SP変動
//--------------------------------------------------------------------------
var _SpSkillLimits_Game_Actor_prototype_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    _SpSkillLimits_Game_Actor_prototype_levelUp.call(this);
    this.sslLevelUp();
};

Game_Actor.prototype.sslLevelUp = function() {
    var startSp = this.getSslLevelUpStartSp(this._level);
    var turnSp = this.getSslLevelUpTurnSp(this._level);
    var maxSp = this.getSslLevelUpMaxSp(this._level);
    if(startSp !== undefined) this.setSslActorStartSp(startSp);
    if(turnSp !== undefined) this.setSslActorTurnSp(turnSp);
    if(maxSp !== undefined) this.setSslMaxSp(maxSp);
};
//--------------------------------------------------------------------------
// ● レベルダウン時SP変動
//--------------------------------------------------------------------------
var _SpSkillLimits_Game_Actor_prototype_levelDown = Game_Actor.prototype.levelDown;
Game_Actor.prototype.levelDown = function() {
    _SpSkillLimits_Game_Actor_prototype_levelDown.call(this);
    this.sslLevelDown();
};

Game_Actor.prototype.sslLevelDown = function() {
    var startSp = this.getSslLevelUpStartSp(this._level);
    var turnSp = this.getSslLevelUpTurnSp(this._level);
    var maxSp = this.getSslLevelUpMaxSp(this._level);
    if(startSp === undefined) {
        for(var lvl = this._level; lvl >= 0; --lvl) {
            var result = this.getSslLevelUpStartSp(lvl);
            if(result !== undefined) {
                this.setSslActorStartSp(result);
                break;
            }
        };
    }else{
        this.setSslActorStartSp(startSp);
    };
    if(turnSp === undefined) {
        for(var lvl = this._level; lvl >= 0; --lvl) {
            var result = this.getSslLevelUpTurnSp(lvl);
            if(result !== undefined) {
                this.setSslActorTurnSp(result);
                break;
            }
        };
    }else{
        this.setSslActorTurnSp(turnSp);
    };
    if(maxSp === undefined) {
        for(var lvl = this._level; lvl >= 0; --lvl) {
            var result = this.getSslLevelUpMaxSp(lvl);
            if(result !== undefined) {
                this.setSslMaxSp(result);
                break;
            }
        };
    }else{
        this.setSslMaxSp(maxSp);
    };
};

//=============================================================================
// Game_BattlerBase - Sp貯蓄式スキルMV用のセットアップ
//=============================================================================

var _SpSkillLimits_Game_BattlerBase_prototype_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
    return (_SpSkillLimits_Game_BattlerBase_prototype_meetsSkillConditions.call(this,skill) && this.sslCanPaySpCost(skill));
};

Game_BattlerBase.prototype.sslCanPaySpCost = function(skill) {
    if(this.constructor !== Game_Actor) return true;
    return $gameActors.actor(this._actorId).sslCanUseSp(skill.sslSpCost);
};

var _SpSkillLimits_Game_BattlerBase_prototype_paySkillCost = Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    _SpSkillLimits_Game_BattlerBase_prototype_paySkillCost.call(this,skill);
    this.sslPaySpCost(skill);
};

Game_BattlerBase.prototype.sslPaySpCost = function(skill) {
    if(this.constructor !== Game_Actor) return;
    $gameActors.actor(this._actorId).sslUseSp(skill.sslSpCost);
};

//=============================================================================
// Scene_Battle - Sp貯蓄式スキルMV用のセットアップ
//=============================================================================

var _SpSkillLimits_Scene_Battle_prototype_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
    _SpSkillLimits_Scene_Battle_prototype_start.call(this);
    this.sslBattleStartSp();
};

Scene_Battle.prototype.sslBattleStartSp = function() {
    var battleMembers = $gameParty.battleMembers();
    battleMembers.forEach(actor => {
        if(actor && actor.isAlive() && actor.isAppeared()) {
            actor.addBattleStartSp();
        };
    });
};

//=============================================================================
// BattleManager - Sp貯蓄式スキルMV用のセットアップ
//=============================================================================

var _SpSkillLimits_BattleManager_startInput = BattleManager.startInput;
BattleManager.startInput = function() {
    this.sslBattleTurnSp();
    _SpSkillLimits_BattleManager_startInput.call(this);
};

BattleManager.sslBattleTurnSp = function() {
    var battleMembers = $gameParty.battleMembers();
    battleMembers.forEach(actor => {
        if(actor && actor.isAlive() && actor.isAppeared()) {
            actor.addBattleTurnSp();
        };
    });
};

var _SpSkillLimits_BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    _SpSkillLimits_BattleManager_startAction.call(this);
    this.sslEarnSkillItemSp();
};

BattleManager.sslEarnSkillItemSp = function() {
    if(this._subject.constructor !== Game_Actor) return;
    var actor = this._subject;
    var item = this._action.item();
    if(item) {
        if(DataManager.isSkill(item)) {
            if($dataSkills[item.id].sslAfterSkillSp > 0) {
                if($dataSkills[item.id].sslAfterSkillSpAll) {
                    var battleMembers = $gameParty.battleMembers();
                    battleMembers.forEach(member => {
                        if(member && member.isAlive() && member.isAppeared()) {
                            member.addBattleSp($dataSkills[item.id].sslAfterSkillSp);
                        };
                    });
                }else{
                    $gameActors.actor(actor._actorId).addBattleSp($dataSkills[item.id].sslAfterSkillSp);
                };
            };
        }else if(DataManager.isItem(item)) {
            if($dataItems[item.id].sslEarnSp > 0) {
                $gameActors.actor(actor._actorId).addBattleSp($dataItems[item.id].sslEarnSp);
            };
        };
    };
};

//=============================================================================
// Window_Base - MPとSPを置き換えるセットアップ
//=============================================================================

var _SpSkillLimits_Window_Base_prototype_drawActorMp = Window_Base.prototype.drawActorMp;
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    if(Ayatam.SPSKILLLIMITS.GlobalSettings.exchangeMpToSp) {
        this.drawActorSp(actor,x,y,width);
    }else{
        _SpSkillLimits_Window_Base_prototype_drawActorMp.call(this,actor,x,y,width);
    };
};

var _SpSkillLimits_Window_BattleStatus_prototype_drawGaugeAreaWithTp = Window_BattleStatus.prototype.drawGaugeAreaWithTp;
Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    if(!Ayatam.SPSKILLLIMITS.GlobalSettings.exchangeMpToSp) {
        this.drawActorHp(actor, rect.x + 0, rect.y, 96);
        this.drawActorMp(actor, rect.x + 103, rect.y, 96);
        this.drawActorTp(actor, rect.x + 204, rect.y, 70);
        this.drawActorSp(actor,rect.x + 276,rect.y, 56);
        return;
    }else{
        this.drawActorHp(actor, rect.x + 0, rect.y, 108);
        this.drawActorTp(actor, rect.x + 123, rect.y, 96);
        this.drawActorMp(actor, rect.x + 234, rect.y, 96);
        return;
    };
};

var _SpSkillLimits_Window_BattleStatus_prototype_drawGaugeAreaWithoutTp = Window_BattleStatus.prototype.drawGaugeAreaWithoutTp;
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    if(!Ayatam.SPSKILLLIMITS.GlobalSettings.exchangeMpToSp) {
        this.drawActorHp(actor, rect.x + 0, rect.y, 108);
        this.drawActorMp(actor, rect.x + 123,  rect.y, 96);
        this.drawActorSp(actor,rect.x + 234,rect.y, 96);
    }else{
        _SpSkillLimits_Window_BattleStatus_prototype_drawGaugeAreaWithoutTp.call(this,rect,actor);
    };
};

Window_Base.prototype.drawActorSp = function(actor, x, y, width) {
    width = width || 186;
    this.changeTextColor(this.systemColor());
    this.drawText("SP", x, y, 44);
    var currentSp = actor.getSslSp();
    if(currentSp > 0) {
        this.changeTextColor(this.textColor(29));
    }else{
        this.changeTextColor(this.textColor(18));
    };
    this.drawText(currentSp, x + width - 64, y, 64, 'right');
};

//=============================================================================
// Window_BattleStatus - SPの変化を監視
//=============================================================================

var _SpSkillLimits_Window_BattleStatus_prototype_update = Window_BattleStatus.prototype.update;
Window_BattleStatus.prototype.update = function() {
    _SpSkillLimits_Window_BattleStatus_prototype_update.call(this);
    this.sslCheckSpForUpdate();
};

Window_BattleStatus.prototype.sslCheckSpForUpdate = function() {
    if(this._sslBattleMember !== $gameParty.battleMembers()) this._sslBattleMember = $gameParty.battleMembers();
    if(this._sslCheckSp === undefined) this._sslCheckSp = [];
    this._sslBattleMember.forEach(actor => {
        if(actor && actor.isAlive() && actor.isAppeared()) {
            if(this._sslCheckSp[actor.id] !== actor.getSslSp()) {
                this.refresh();
                this._sslCheckSp[actor.id] = actor.getSslSp();
            };
        };
    });
};

//=============================================================================
// Window_SkillList - スキルリストのcost表示をSPに置き換えるセットアップ
//=============================================================================

var _SpSkillLimits_Window_SkillList_prototype_drawSkillCost = Window_SkillList.prototype.drawSkillCost;
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (skill.sslSpCost > 0) {
        this.changeTextColor(this.tpCostColor());
        this.drawText(skill.sslSpCost, x, y, width, 'right');
    } else {
        _SpSkillLimits_Window_SkillList_prototype_drawSkillCost.call(this,skill,x,y,width);
    }
};

//=============================================================================
// プラグイン終了 - End of file
//=============================================================================