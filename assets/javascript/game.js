
    var characters = [{name:"obi", attack:10, counterAttack: 5,health:120},
    { name:"luke", attack:15, counterAttack: 5,health:100},
    {name:"sidious", attack:10, counterAttack: 5,health:180},
    {name:"maul", attack:10, counterAttack: 5,health:150},]
    var counter = 0;
    var heroAdder;
    var heroAtk;
    var heroHp;
    var defenderAtk;
    var defenderHp;
    var wins;
    function heroStats(a){
        var id = $(a).attr('id');
        for(i = 0; i < characters.length; i++){
            if(id == characters[i].name){
                heroAtk = characters[i].attack;
                heroAdder = characters[i].attack;
                heroHp = characters[i].health;
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
        if(wins == 3){
        $('#fightText p').text("You Win!");          
        }
        if(defenderHp <= 0){
            $('.defender').remove();
            $('#fightText p').text("You defeated the defender. Select a new One.");

            wins ++;
            counter--;
        }
        if(heroHp <= 0) {
            $('#fightText p').text("You have lost.");
            restart();
        }
        if(defenderHp > 0 && heroHp > 0){
        defenderHp = defenderHp - heroAtk;
        console.log("defender hp:" +defenderHp)
        $('#defender1 #hp').text(defenderHp);
        heroHp = heroHp - defenderAtk;
        console.log("Hero HP: " + heroHp)
        $('#yourChar #hp').text(heroHp);
        $('#fightText p').text("You attacked defender for " + heroAtk + " .Defender attacked you for " + defenderAtk);
        heroAtk = heroAtk + heroAdder;}
    }
    function restart(){
        alert("hit refresh im bad");
    }
      $(document).ready(function(){
        $('.char').on('click', function(){
            one(this);
                $('.villan').on('click', function(){
                    two(this);  
                });
                $('#button').on('click', function(){
                    
                    fight();
                });
         });
        
     });
  