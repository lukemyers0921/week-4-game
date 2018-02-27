
    var characters = [
    { name:"luke", attack:27, counterAttack: 5,health:105, image: "assets/images/luke.png"},
    {name:"obi", attack:10, counterAttack: 10,health:120,image: "assets/images/obi.png"},
    {name:"sidious", attack:2, counterAttack: 20,health:180 , image: "assets/images/sidious.png"},
    {name:"maul", attack:4, counterAttack: 15,health:160 , image: "assets/images/maul.png"},]
    var counter = 0;
    var heroAdder;
    var heroAtk;
    var heroHp;
    var defenderAtk;
    var defenderHp;
    var wins =0;

    function populate(){
        console.log("populate");
        for(i = 0; i < characters.length; i++) {
            $('#yourChar').append('<div class = "col-xs-3 col-sm-3 col-md-3 col-lg-3 pic char" id = "' + characters[i].name + '">');
            var idHolder = '#' + characters[i].name;
            $(idHolder).append('<p class = "center">' + characters[i].name + '</p>')
            $(idHolder).append('<img class = "img-responsive pic" src ="' + characters[i].image + '">');
            $(idHolder).append('<p id = "hp" class = "center">' + characters[i].health + '</p>')
        }
    }
    function heroStats(a){
        console.log("heroStats");
        var id = $(a).attr('id');
        if(wins == 0){
        for(i = 0; i < characters.length; i++){
            if(id == characters[i].name){
                heroAtk = characters[i].attack;
                heroAdder = characters[i].attack;
                heroHp = characters[i].health;
            }
        }
        }
    }
    function villanStats(a){
        console.log("villanStats");
        var id = $(a).attr('id');
        for(i = 0; i < characters.length; i++){
            if(id == characters[i].name){
                defenderAtk = characters[i].counterAttack;
                defenderHp = characters[i].health;
            }
            
        }
    }
    function one(a){
        console.log("one");
        if(counter === 0){
        $(a).addClass('hero');
        heroStats(a);
        $('.hero').removeClass('char');
        $('.char').addClass('villan');
        $('.hero').addClass('char');
        $('.villan').appendTo("#enemyAtk");
        counter++;
        }
    }
    function two(a){
        console.log("two");
        if(counter ===1){
        $(a).addClass('defender');
        villanStats(a);
        $('.defender').removeClass('villan');
        $('.defender').appendTo("#defender1");
        counter++;
        }
    }
   
    function fight(){
        console.log("fight");
        if(defenderHp > 0 && heroHp > 0){
        defenderHp = defenderHp - heroAtk;
        $('#defender1 #hp').text(defenderHp);
        heroHp = heroHp - defenderAtk;
        $('#yourChar #hp').text(heroHp);
        $('#fightText p').text("You attacked defender for " + heroAtk + " .Defender attacked you for " + defenderAtk);
        heroAtk = heroAtk + heroAdder;
        
        }
        if(defenderHp < 0){
            $('.defender').remove();
            $('#fightText p').text("You defeated the defender. Select a new One.");
            defenderAtk = 0;
            defenderHp = 0;
            wins ++;
            counter--;
        }
        if(wins == 3){
            $('#fightText p').text("You Win!");
            $('#reset').show();    
            }
        if(heroHp <= 0) {
                $('#fightText p').text("You have lost.");
                $('#reset').show();
            }
    }
    function restart(){
    console.log("restart");
    counter = 0;
    wins = 0;
    $('.char').remove();
    $('#fightText p').text("");
    $('#yourChar #hp').text("");
    $('#defender1 #hp').text("");  
    heroAdder = null;
    heroAtk = null;
    heroHp = null;
    defenderAtk = null;
    defenderHp = null;
    }
    function start() {
        console.log("start")
        $('#reset').hide();
        $('.char').on('click', function(){
            var self = this;
            one(self);
                $('.villan').on('click', function(){
                   var self2 = this;
                    two(self2);  
                });
               
         });
         $('#button').on('click', function(){    
            fight();
        });
        $('#reset').on('click', function(){
            restart();
            populate();
            start();
        });
        
    }
   
    $(document).ready(function(){
        start();
     });
  