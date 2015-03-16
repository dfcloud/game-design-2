define(['app/config', 
        'app/mob'], 
function(config, Mob) {

    "use strict";

    var MobFactory = {
        mobs: [],
        canspawn: true,
        buildBoss: function(game)
        {
            switch(game.currentLevel){
                case 0:
                    var tempMob =  new Mob(game, 100, true,
                        config.game.level[game.currentLevel].bossHitPoints);
                    tempMob.mob.width = 150;
                    tempMob.mob.height = 150;
                    tempMob.mob.loadTexture('megaMan');
                    MobFactory.mobs.push(tempMob);
                    break;
                case 1:
                    var tempMob =  new Mob(game, 100, true,
                        config.game.level[game.currentLevel].bossHitPoints);
                    tempMob.mob.width = 195;
                    tempMob.mob.height = 195;
                    tempMob.mob.loadTexture('captainAmerica');
                    MobFactory.mobs.push(tempMob);
                    break;
                case 2:
                    var tempMob =  new Mob(game, 100, true,
                    config.game.level[game.currentLevel].bossHitPoints);
                    tempMob.mob.width = 200;
                    tempMob.mob.height = 200;
                    tempMob.mob.loadTexture('superMan');
                    MobFactory.mobs.push(tempMob);
                    break;

            }


        },
        build: function(game, mobs)
        {
            var buildLocations = [];
            for (var i = 0; i < mobs; i++)
            {
                var loc = Math.random() * config.game.width - 100;
                if (function(loc, buildLocations) {
                    return buildLocations.forEach(function(i) {
                        if (i - loc > -100 || i - loc < 100) return false;
                    });
                }) {
                    buildLocations.push(loc);
                }
                else
                {
                    i--;
                }
            }

            for (var i = 0; i < mobs; i++)
            {
                // TODO add positioning options

                 var tempMob =  new Mob(game, buildLocations[i], false,
                 config.game.level[game.currentLevel].mobHitPoints)
                tempMob.mob.width = 180;
                tempMob.mob.height = 180;
                var rnum = Math.floor((Math.random() * 3) + 1);

                switch(rnum){
                    case 1:
                                    tempMob.mob.loadTexture('soldier1');
                                     break;



                    case 2:
                                    tempMob.mob.loadTexture('soldier2');
                                     break;


                    case 3:
                                    tempMob.mob.loadTexture('soldier3');
                                     break;

                }

                MobFactory.mobs.push(tempMob);


            }

            return MobFactory.mobs;
        },
        getAliveMobs: function()
        {
            var temp = [];
            MobFactory.mobs.forEach(function(mob) {
                if (mob.mob.alive) {
                    temp.push(mob)
                }
            });
            return temp;
        }
    }

    return MobFactory;

});
