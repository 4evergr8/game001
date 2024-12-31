/*:
 * @plugindesc タイトル画面で動画再生
 * @author 奏ねこま（おとぶき ねこま）
 * 
 * @param Movie File Name
 * @desc 動画ファイル名
 * （拡張子不要：movie_file.webm -> movie_file）
 * @type string
 * @defualt
 * 
 * @param Extension
 * @desc 動画ファイルの拡張子
 * （auto:自動判別/.webm /.mp4）
 * @type select
 * @option auto
 * @option .webm
 * @option .mp4
 * @default auto
 * 
 * @param X-coord
 * @desc 動画を再生する位置（X座標）
 * @type number
 * @min -999
 * @default 0
 * 
 * @param Y-coord
 * @desc 動画を再生する位置（Y座標）
 * @type number
 * @min -999
 * @default 0
 * 
 * @param Priority
 * @desc 背景画像やウインドウに対する動画の優先度
 * （0で背景画像よりも後ろ/数字が大きいほど手前で再生）
 * @type number
 * @default 0
 * 
 * @help
 * [概要]
 *  タイトル画面で動画を再生します。
 * 
 * [仕様]
 *  ・動画はループ再生になります。
 *  ・オプション画面を開くと動画は停止します。
 *  ・オプション画面からタイトル画面に戻ると最初からの再生となります。
 *  ・音声付き動画の場合、環境や動作条件によっては無音になることがあります。
 *  ・音声付き動画の音量はBGMの音量設定に従います。
 * 
 * [利用規約] ..................................................................
 *  - 本プラグインの利用は、RPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
 *  - 商用、非商用、有償、無償、一般向け、成人向けを問わず、利用可能です。
 *  - 利用の際、連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *  - プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *  - 本プラグインにより生じたいかなる問題についても、一切の責任を負いかねます。
 * [改訂履歴] ..................................................................
 *   Version 1.00  2018/12/27  初版
 * -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 *  Web Site: http://makonet.sakura.ne.jp/rpg_tkool/
 *  Twitter : https://twitter.com/koma_neko
 *  Copylight (c) 2018 Nekoma Otobuki
 */