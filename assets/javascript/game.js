
    var characters = [{name:"obi", attack:10, counterAttack: 10,health:120},
    { name:"luke", attack:27, counterAttack: 5,health:105},
    {name:"sidious", attack:2, counterAttack: 20,health:180},
    {name:"maul", attack:4, counterAttack: 15,health:160},]
    var counter = 0;
    var heroAdder;
    var heroAtk;
    var heroHp;
    var defenderAtk;
    var defenderHp;
    var wins =0;
/* <div class = "col-xs-3 col-sm-3 col-md-3 col-lg-3 pic char" id = "luke">
                <p class = "center">Luke</p>
                <img class = "img-responsive pic" src = "assets/images/luke.png">
                <p id = "hp" class = "center">100</p>
            </div> */
    function populate(){
            $('div')
    }
    function heroStats(a){
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
        var id = $(a).attr('id');
        for(i = 0; i < characters.length; i++){
            if(id == characters[i].name){
                defenderAtk = characters[i].counterAttack;
                defenderHp = characters[i].health;
            }
            
        }
    }
    function one(a){
        if(counter ===0){
        $(a).addClass('hero');
        heroStats(a);
        $('.hero').removeClass('char');
        $('.char').addClass('villan');
        $('.villan').appendTo("#enemyAtk");
        counter++;
        }
    }
    function two(a){
        if(counter ===1){
        $(a).addClass('defender');
        villanStats(a);
        $('.defender').removeClass('villan');
        $('.defender').appendTo("#defender1");
        counter++;
        }
    }
   
    function fight(){
        if(defenderHp > 0 && heroHp > 0){
        defenderHp = defenderHp - heroAtk;
        console.log("defender hp:" +defenderHp);
        console.log("hero attack: " + heroAtk);
        $('#defender1 #hp').text(defenderHp);
        heroHp = heroHp - defenderAtk;
        console.log("Hero HP: " + heroHp);
        console.log("defender attack: " + defenderAtk);
        $('#yourChar #hp').text(heroHp);
        $('#fightText p').text("You attacked defender for " + heroAtk + " .Defender attacked you for " + defenderAtk);
        heroAtk = heroAtk + heroAdder;}
        if(defenderHp < 0){
            $('.defender').addClass('char')
            $('.defender').remove('.defender, .villan')
            $('.defender').appendTo("#yourChar").hide();
            $('#fightText p').text("You defeated the defender. Select a new One.");
            defenderAtk = 0;
            defenderHp = 0;
            wins ++;
            console.log(wins)
            counter--;
        }
        if(wins == 3){
            $('#fightText p').text("You Win!");
            restart();       
            }
        if(heroHp <= 0) {
                $('#fightText p').text("You have lost.");
                restart();
            }
    }
    function reset(){

    }
    function restart(){
    var counter = 0;
    var heroAdder;
    var heroAtk;
    var heroHp;
    var defenderAtk;
    var defenderHp;
    var wins =0;
    $('div').remove('.hero, .villan, .defender');
    }
      $(document).ready(function(){
        $('.char').on('click', function(){
            one(this);
                $('.villan').on('click', function(){
                    two(this);  
                });
               
         });
         $('#button').on('click', function(){    
            fight();
        });
     });
  