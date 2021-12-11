// const strBtn = document.querySelector("#strBtn")
// const agiBtn = document.querySelector("#agiBtn")
// const intBtn = document.querySelector("#intBtn")

// strBtn.addEventListener("click", () =>  {
//     filterSelection("strHero")
// });
// agiBtn.addEventListener("click", () => {
//     filterSelection("agiHero")
// });
// intBtn.addEventListener("click", () =>  {
//     filterSelection("intHero")
// });


$("#strBtn").click(function(){
    $(".intHero").hide();
    $(".agiHero").hide();
    $(".strHero").show();
  });

$("#agiBtn").click(function(){
    $(".strHero").hide();
    $(".intHero").hide();
    $(".agiHero").show();
});

$("#intBtn").click(function(){
    $(".strHero").hide();
    $(".agiHero").hide();
    $(".intHero").show();
});

$("#allBtn").click(function(){
    $(".strHero").show();
    $(".agiHero").show();
    $(".intHero").show();
});

let heroes = [
    {
        name: "antimage",
        id: 1,
        localized_name: "anti-Mage"
    },
    {
        name: "axe",
        id: 2,
        localized_name: "axe"
    },
    {
        name: "bane",
        id: 3,
        localized_name: "bane"
    },
    {
        name: "bloodseeker",
        id: 4,
        localized_name: "bloodseeker"
    },
    {
        name: "crystal_maiden",
        id: 5,
        localized_name: "crystal maiden"
    },
    {
        name: "drow_ranger",
        id: 6,
        localized_name: "drow ranger"
    },
    {
        name: "earthshaker",
        id: 7,
        localized_name: "earthshaker"
    },
    {
        name: "juggernaut",
        id: 8,
        localized_name: "juggernaut"
    },
    {
        name: "mirana",
        id: 9,
        localized_name: "mirana"
    },
    {
        name: "nevermore",
        id: 11,
        localized_name: "shadow fiend"
    },
    {
        name: "morphling",
        id: 10,
        localized_name: "morphling"
    },
    {
        name: "phantom_lancer",
        id: 12,
        localized_name: "phantom lancer"
    },
    {
        name: "puck",
        id: 13,
        localized_name: "puck"
    },
    {
        name: "pudge",
        id: 14,
        localized_name: "pudge"
    },
    {
        name: "razor",
        id: 15,
        localized_name: "razor"
    },
    {
        name: "sand_king",
        id: 16,
        localized_name: "sand king"
    },
    {
        name: "storm_spirit",
        id: 17,
        localized_name: "storm spirit"
    },
    {
        name: "sven",
        id: 18,
        localized_name: "sven"
    },
    {
        name: "tiny",
        id: 19,
        localized_name: "tiny"
    },
    {
        name: "vengefulspirit",
        id: 20,
        localized_name: "vengeful spirit"
    },
    {
        name: "windrunner",
        id: 21,
        localized_name: "windranger"
    },
    {
        name: "zuus",
        id: 22,
        localized_name: "zeus"
    },
    {
        name: "kunkka",
        id: 23,
        localized_name: "kunkka"
    },
    {
        name: "lina",
        id: 25,
        localized_name: "lina"
    },
    {
        name: "lich",
        id: 31,
        localized_name: "lich"
    },
    {
        name: "lion",
        id: 26,
        localized_name: "lion"
    },
    {
        name: "shadow_shaman",
        id: 27,
        localized_name: "shadow shaman"
    },
    {
        name: "slardar",
        id: 28,
        localized_name: "slardar"
    },
    {
        name: "tidehunter",
        id: 29,
        localized_name: "tidehunter"
    },
    {
        name: "witch_doctor",
        id: 30,
        localized_name: "witch doctor"
    },
    {
        name: "riki",
        id: 32,
        localized_name: "riki"
    },
    {
        name: "enigma",
        id: 33,
        localized_name: "enigma"
    },
    {
        name: "tinker",
        id: 34,
        localized_name: "tinker"
    },
    {
        name: "sniper",
        id: 35,
        localized_name: "sniper"
    },
    {
        name: "necrolyte",
        id: 36,
        localized_name: "necrophos"
    },
    {
        name: "warlock",
        id: 37,
        localized_name: "warlock"
    },
    {
        name: "beastmaster",
        id: 38,
        localized_name: "beastmaster"
    },
    {
        name: "queenofpain",
        id: 39,
        localized_name: "queen of pain"
    },
    {
        name: "venomancer",
        id: 40,
        localized_name: "venomancer"
    },
    {
        name: "faceless_void",
        id: 41,
        localized_name: "faceless void"
    },
    {
        name: "skeleton_king",
        id: 42,
        localized_name: "wraith king"
    },
    {
        name: "death_prophet",
        id: 43,
        localized_name: "death prophet"
    },
    {
        name: "phantom_assassin",
        id: 44,
        localized_name: "phantom assassin"
    },
    {
        name: "pugna",
        id: 45,
        localized_name: "pugna"
    },
    {
        name: "templar_assassin",
        id: 46,
        localized_name: "templar assassin"
    },
    {
        name: "viper",
        id: 47,
        localized_name: "viper"
    },
    {
        name: "luna",
        id: 48,
        localized_name: "luna"
    },
    {
        name: "dragon_knight",
        id: 49,
        localized_name: "dragon knight"
    },
    {
        name: "dazzle",
        id: 50,
        localized_name: "dazzle"
    },
    {
        name: "rattletrap",
        id: 51,
        localized_name: "clockwerk"
    },
    {
        name: "leshrac",
        id: 52,
        localized_name: "leshrac"
    },
    {
        name: "furion",
        id: 53,
        localized_name: "nature's prophet"
    },
    {
        name: "life_stealer",
        id: 54,
        localized_name: "lifestealer"
    },
    {
        name: "dark_seer",
        id: 55,
        localized_name: "dark seer"
    },
    {
        name: "clinkz",
        id: 56,
        localized_name: "clinkz"
    },
    {
        name: "omniknight",
        id: 57,
        localized_name: "omniknight"
    },
    {
        name: "enchantress",
        id: 58,
        localized_name: "enchantress"
    },
    {
        name: "huskar",
        id: 59,
        localized_name: "huskar"
    },
    {
        name: "night_stalker",
        id: 60,
        localized_name: "night stalker"
    },
    {
        name: "broodmother",
        id: 61,
        localized_name: "broodmother"
    },
    {
        name: "bounty_hunter",
        id: 62,
        localized_name: "bounty hunter"
    },
    {
        name: "weaver",
        id: 63,
        localized_name: "weaver"
    },
    {
        name: "jakiro",
        id: 64,
        localized_name: "jakiro"
    },
    {
        name: "batrider",
        id: 65,
        localized_name: "batrider"
    },
    {
        name: "chen",
        id: 66,
        localized_name: "chen"
    },
    {
        name: "spectre",
        id: 67,
        localized_name: "spectre"
    },
    {
        name: "doom_bringer",
        id: 69,
        localized_name: "doom"
    },
    {
        name: "ancient_apparition",
        id: 68,
        localized_name: "ancient apparition"
    },
    {
        name: "ursa",
        id: 70,
        localized_name: "ursa"
    },
    {
        name: "spirit_breaker",
        id: 71,
        localized_name: "spirit breaker"
    },
    {
        name: "gyrocopter",
        id: 72,
        localized_name: "gyrocopter"
    },
    {
        name: "alchemist",
        id: 73,
        localized_name: "alchemist"
    },
    {
        name: "invoker",
        id: 74,
        localized_name: "invoker"
    },
    {
        name: "silencer",
        id: 75,
        localized_name: "silencer"
    },
    {
        name: "obsidian_destroyer",
        id: 76,
        localized_name: "outworld devourer"
    },
    {
        name: "lycan",
        id: 77,
        localized_name: "lycan"
    },
    {
        name: "brewmaster",
        id: 78,
        localized_name: "brewmaster"
    },
    {
        name: "shadow_demon",
        id: 79,
        localized_name: "shadow demon"
    },
    {
        name: "lone_druid",
        id: 80,
        localized_name: "lone druid"
    },
    {
        name: "chaos_knight",
        id: 81,
        localized_name: "chaos knight"
    },
    {
        name: "meepo",
        id: 82,
        localized_name: "meepo"
    },
    {
        name: "treant",
        id: 83,
        localized_name: "treant protector"
    },
    {
        name: "ogre_magi",
        id: 84,
        localized_name: "ogre magi"
    },
    {
        name: "undying",
        id: 85,
        localized_name: "undying"
    },
    {
        name: "rubick",
        id: 86,
        localized_name: "rubick"
    },
    {
        name: "disruptor",
        id: 87,
        localized_name: "disruptor"
    },
    {
        name: "nyx_assassin",
        id: 88,
        localized_name: "nyx assassin"
    },
    {
        name: "naga_siren",
        id: 89,
        localized_name: "naga siren"
    },
    {
        name: "keeper_of_the_light",
        id: 90,
        localized_name: "keeper of the light"
    },
    {
        name: "wisp",
        id: 91,
        localized_name: "wisp"
    },
    {
        name: "visage",
        id: 92,
        localized_name: "visage"
    },
    {
        name: "slark",
        id: 93,
        localized_name: "slark"
    },
    {
        name: "medusa",
        id: 94,
        localized_name: "medusa"
    },
    {
        name: "troll_warlord",
        id: 95,
        localized_name: "troll warlord"
    },
    {
        name: "centaur",
        id: 96,
        localized_name: "centaur warrunner"
    },
    {
        name: "magnataur",
        id: 97,
        localized_name: "magnus"
    },
    {
        name: "shredder",
        id: 98,
        localized_name: "timbersaw"
    },
    {
        name: "bristleback",
        id: 99,
        localized_name: "bristleback"
    },
    {
        name: "tusk",
        id: 100,
        localized_name: "tusk"
    },
    {
        name: "skywrath_mage",
        id: 101,
        localized_name: "skywrath mage"
    },
    {
        name: "abaddon",
        id: 102,
        localized_name: "abaddon"
    },
    {
        name: "elder_titan",
        id: 103,
        localized_name: "elder titan"
    },
    {
        name: "legion_commander",
        id: 104,
        localized_name: "legion commander"
    },
    {
        name: "ember_spirit",
        id: 106,
        localized_name: "ember spirit"
    },
    {
        name: "earth_spirit",
        id: 107,
        localized_name: "earth spirit"
    },
    {
        name: "abyssal_underlord",
        id: 108,
        localized_name: "underlord"
    },
    {
        name: "terrorblade",
        id: 109,
        localized_name: "terrorblade"
    },
    {
        name: "phoenix",
        id: 110,
        localized_name: "phoenix"
    },
    {
        name: "techies",
        id: 105,
        localized_name: "techies"
    },
    {
        name: "oracle",
        id: 111,
        localized_name: "oracle"
    },
    {
        name: "winter_wyvern",
        id: 112,
        localized_name: "winter wyvern"
    },
    {
        name: "arc_warden",
        id: 113,
        localized_name: "arc warden"
    }
]

$("#searchBtn").click(function(){
    let heroSearch = document.querySelector('#searchBar').value.toLowerCase();
    console.log(heroSearch);

   let heroSearchToObj = heroes.filter(obj =>
        {return obj.localized_name === heroSearch});
    console.log(heroSearchToObj); 

    let heroId = heroSearchToObj[0].id;

    console.log(heroId)

    let url = 'https://api.opendota.com/api/heroes/' + heroId + '/itemPopularity';

    fetch(url)
    .then(response => response.text())
    .then(data => console.log(data));
    });
    // .catch(function() {
    
// });






