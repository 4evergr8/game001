//=============================================================================
// T_dashMotion.js
//=============================================================================
//Copyright (c) 2016 Trb
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
//twitter https://twitter.com/Trb_surasura
/*:
 * @plugindesc 跑步倾斜动作
 * @author Trb
 * @version 1.00 2016/6/3 初版
 * 
 * @help 当角色在奔跑时，我们可以稍微倾斜和上下移动图像
 * 做简单的冲刺动作。
 * 如果想要调整上下的运动和倾斜的角度，请直接在插件中编辑。
 */
(function () {


var SC_uo = Sprite_Character.prototype.updateOther;
Sprite_Character.prototype.updateOther = function() {
    SC_uo.call(this);
    var chara = this._character;
    if(chara.isDashing() && (chara.isMoving() || this.T_lastMoving)){//当角色在运行时
        this.y -= chara.pattern() % 2 * 2;//修正y坐标(上下移动图像)
        switch(chara.direction()){//根据角色的方向分歧
            case 2://朝上下看的时候
            case 8:
                this.scale.y = 0.92;//压扁一点
                this.rotation = 0;
            break;
            case 4://当你向左看的时候
                this.rotation = -0.14;//稍微向左倾斜
            break;
            case 6://当你向右看的时候
                this.rotation = 0.14;//稍微向右倾斜
            break;
        }
    }else{//不运行时，重置角度和挤压
        this.rotation = 0;
        this.scale.y = 1;
    }
    this.T_lastMoving = chara.isMoving();
};

})();