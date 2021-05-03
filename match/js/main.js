//初始化数据
var first_line=3;//第一行火柴数量
var second_line=5;//第二行火柴数量
var third_line=7;//第三行火柴数量

var player_one=0;//玩家一的火柴数量
var player_two=0;//玩家二的火柴数量

//裁判栏内容dom定位
var referee=document.getElementById('referee_content');
//裁判内容html初始化
var  referee_content_html='';
//游戏状态
var game_state='没有选择先手';

//三行火柴渲染函数
function loading(){
    //定义dom
    var parent=document.getElementById('Three_lines_of_matches');

    //初始化数据，并更新目前火柴数量
    var set_first_line_html='<div><div>第一行当前有'+first_line+'根火柴</div><div class="d_flex">';
    var set_second_line_html='<div><div>第二行当前有'+second_line+'根火柴</div><div class="d_flex">';
    var set_third_line_html='<div><div>第三行当前有'+third_line+'根火柴</div><div class="d_flex">    ';

    //根据目前火柴数量循环添加火柴图片
    for(var a=0;a<first_line;a++){
        set_first_line_html+='<div class="match_img"><img src="images/match.png" alt=""></div>';
    }
    set_first_line_html+='</div></div>';

    //根据目前火柴数量循环添加火柴图片
    for(var a=0;a<second_line;a++){
        set_second_line_html+='<div class="match_img"><img src="images/match.png" alt=""></div>';
    }
    set_second_line_html+='</div></div>';

    //根据目前火柴数量循环添加火柴图片
    for(var a=0;a<third_line;a++){
        set_third_line_html+='<div class="match_img"><img src="images/match.png" alt=""></div>';
    }
    set_third_line_html+='</div></div>';

    //渲染到视图层上
    parent.innerHTML=set_first_line_html+set_second_line_html+set_third_line_html;
    
    //判断游戏状态决定是否显示玩家信息列表
    if(game_state==='没有选择先手'){
        document.getElementById('players').style.display="none";
    }
}
//开启玩家一的disabled
function open_player_one_disabled(){
    document.getElementById('player_one_choose_match_line').disabled='true';
    document.getElementById('player_one_choose_match_number').disabled='true';
    document.getElementById('player_one_btn').disabled='true';
}
//关闭玩家一的disabled
function close_player_one_disabled(){
    document.getElementById('player_one_choose_match_line').disabled='';
    document.getElementById('player_one_choose_match_number').disabled='';
    document.getElementById('player_one_btn').disabled='';
}
//开启玩家二的disabled
function open_player_two_disabled(){
    document.getElementById('player_two_choose_match_line').disabled='true';
    document.getElementById('player_two_choose_match_number').disabled='true';
    document.getElementById('player_two_btn').disabled='true';
}
//关闭玩家二的disabled
function close_player_two_disabled(){
    document.getElementById('player_two_choose_match_line').disabled='';
    document.getElementById('player_two_choose_match_number').disabled='';
    document.getElementById('player_two_btn').disabled='';
}
//当点击玩家一为先手时
function choose_player_one(){
    //隐藏选择先手按钮
    document.getElementById('choose_first_hand').style.display="none";
    //显示玩家信息列表
    document.getElementById('players').style.display="flex";
    //裁判栏更新对应文字
    set_referee_content('玩家一为先手');
    //游戏状态更改
    game_state='开始游戏';
    //开启玩家二disabled
    open_player_two_disabled();
    
}
//当点击玩家二为先手时
function choose_player_two(){
    //隐藏选择先手按钮
    document.getElementById('choose_first_hand').style.display="none";
    //显示玩家信息列表
    document.getElementById('players').style.display="flex";
    //裁判栏更新对应文字
    set_referee_content('玩家二为先手');
    //游戏状态更改
    game_state='开始游戏';
    //开启玩家一disabled
    open_player_one_disabled();
}
//玩家一选择拾取行数
function player_one_choose_line(value){
    //定位dom
    var select=document.getElementById('player_one_choose_match_number');
    //初始化当前行数的火柴数量
    var line_number=0;
    //初始化火柴数下拉选择框的html
    match_number_option='';

    //根据传过来的value判断选中是第几行的火柴并更新火柴数量
    if(value==='1'){
        line_number=first_line;
    }else if(value==='2'){
        line_number=second_line;
    }else if(value==='3'){
        line_number=third_line;
    }
    //根据火柴数量循环添加对应option
    for(let a=0;a<line_number;a++){
        var index=a+1
        match_number_option+='<option value="'+index+'">'+index+'</option>';
    }
    //渲染到下拉框
    select.innerHTML=match_number_option;

}
//玩家二选择拾取行数
function player_two_choose_line(value){
    //定位dom
    var select=document.getElementById('player_two_choose_match_number');
    //初始化当前行数的火柴数量
    var line_number=0;
    //初始化火柴数下拉选择框的html
    match_number_option='';

    //根据传过来的value判断选中是第几行的火柴并更新火柴数量
    if(value==='1'){
        line_number=first_line;
    }else if(value==='2'){
        line_number=second_line;
    }else if(value==='3'){
        line_number=third_line;
    }

    //根据火柴数量循环添加对应option
    for(let a=0;a<line_number;a++){
        var index=a+1
        match_number_option+='<option value="'+index+'">'+index+'</option>';
    }

    //渲染到下拉框
    select.innerHTML=match_number_option;

}
//裁判栏内容更新函数
function set_referee_content(content){
    //根据传来的内容拼接成html
    referee_content_html+='<div>'+content+'</div>';
    //渲染到div中
    referee.innerHTML=referee_content_html;
}

//判断是否游戏结束的函数
function judge_winner(player1,player2){
    //判断目前三行火柴数量，如都为零则游戏结速
    if(first_line===0&&second_line===0&&third_line==0){
        set_referee_content('玩家'+player1+'赢了,玩家'+player2+'输了,');
        open_player_one_disabled();
        open_player_two_disabled();
        return 'end';
    }
}
//玩家一点击确定按钮
function player_one_pick(){
    //获取当前选择行数的值
    var line_value=document.getElementById('player_one_choose_match_line').value;
    //获取当前选择火柴数的值
    var pick_number=document.getElementById('player_one_choose_match_number').value;

    //如果行数和火柴数有意义则进行下一步，否则更新裁判栏内容
    if(line_value===""||line_value==="0"){
        set_referee_content('请选择行数');
    }else if(pick_number===""||pick_number==="0"){
        set_referee_content('请选择拾取的火柴数');
    }else{
        //转整数
        line_value=parseInt(line_value);
        pick_number=parseInt(pick_number);
        
        //根据拾取行数和火柴数更新裁判栏内容
        set_referee_content('玩家一拾取第'+line_value+'行的'+pick_number+'根火柴。');
        //更新玩家拥有的火柴数量
        player_one+=pick_number;
        //更新页面显示玩家的火柴数量
        document.getElementById('player_one_match_number').innerHTML=player_one;
        //根据传来的行数值判断更新各个行数火柴数量
        if(line_value===1){
            first_line-=pick_number;
        }else if(line_value===2){
            second_line-=pick_number;
        }else if(line_value===3){
            third_line-=pick_number;
        }
        //调用函数再次渲染
        loading();
        //关闭玩家二的disabled并开启玩家一的disabled
        close_player_two_disabled();
        open_player_one_disabled();
        //初始化玩家的下拉选择框选中数据
        document.getElementById('player_one_choose_match_line').value='0';
        document.getElementById('player_one_choose_match_number').value='0';
        //进行判断游戏是否结束
        var state=judge_winner('2','1');
        //根据游戏是否结束来更新裁判栏内容
        if(state==='end'){
            set_referee_content('游戏结束');
        }else{
            set_referee_content('玩家二的回合');
        }
        
    }
}

function player_two_pick(){
    //获取当前选择行数的值
    var line_value=document.getElementById('player_two_choose_match_line').value;
    //获取当前选择火柴数的值
    var pick_number=document.getElementById('player_two_choose_match_number').value;

    //如果行数和火柴数有意义则进行下一步，否则更新裁判栏内容
    if(line_value===""){
        set_referee_content('请选择行数');
    }else if(pick_number===""){
        set_referee_content('请选择拾取的火柴数');
    }else{
        //转整数
        line_value=parseInt(line_value);
        pick_number=parseInt(pick_number);
        
        //根据拾取行数和火柴数更新裁判栏内容
        set_referee_content('玩家二拾取第'+line_value+'行的'+pick_number+'根火柴。');
        //更新玩家拥有的火柴数量
        player_two+=pick_number;
        //更新页面显示玩家的火柴数量
        document.getElementById('player_two_match_number').innerHTML=player_two;
         //根据传来的行数值判断更新各个行数火柴数量
        if(line_value===1){
            first_line-=pick_number;
        }else if(line_value===2){
            second_line-=pick_number;
        }else if(line_value===3){
            third_line-=pick_number;
        }
        //调用函数再次渲染
        loading();
         //关闭玩家一的disabled并开启玩家二的disabled
        close_player_one_disabled();
        open_player_two_disabled();
        //初始化玩家的下拉选择框选中数据
        document.getElementById('player_two_choose_match_line').value='0';
        document.getElementById('player_two_choose_match_number').value='0';
        //进行判断游戏是否结束
        var state=judge_winner('1','2');
        //根据游戏是否结束来更新裁判栏内容
        if(state==='end'){
            set_referee_content('游戏结束');
        }else{
            set_referee_content('玩家二的回合');
        }
    }
}

//点击重新开始游戏按钮
function restart(){

    //初始化数据
    first_line=3;//第一行火柴数量
    second_line=5;//第二行火柴数量
    third_line=7;//第三行火柴数量

    player_one=0;//玩家一的火柴数量
    player_two=0;//玩家二的火柴数量

    // //裁判栏内容dom定位
    // var referee=document.getElementById('referee_content');

    //裁判内容html初始化
    referee_content_html='';
    //游戏状态初始化
    game_state='没有选择先手';

    //关闭两位玩家的disabled
    close_player_one_disabled();
    close_player_two_disabled();

    //重新渲染火柴数据 
    loading();

    //显示选择先手按钮
    document.getElementById('choose_first_hand').style.display="block";
    //显示玩家信息列表
    document.getElementById('players').style.display="none";

    //更新页面显示玩家的火柴数量
    document.getElementById('player_one_match_number').innerHTML=player_one;
    document.getElementById('player_two_match_number').innerHTML=player_two;

    
}