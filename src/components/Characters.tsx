import {Container, Grid} from "@mui/material";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import {useState} from "react";

const charactersList = [
    {
        id: 25,
        name: "Gotthard Lauterbach",
        description: "Postać Konrada - Człowiek - Student Medycyny",
        group: "Bohaterowie",
        isRightHanded: true,
        characteristics: [
            {
                id: 5005,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 5006,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 26
            },
            {
                id: 5007,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 5008,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 5009,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 5010,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 28
            },
            {
                id: 5011,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 5012,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 5013,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 60
            },
            {
                id: 5014,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 5015,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 28
            },
            {
                id: 5016,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [],
        talents: [
            {
                id: 672,
                talent: {
                    id: 165,
                    name: "SAVVY",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 673,
                talent: {
                    id: 137,
                    name: "NOBLE_BLOOD",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 674,
                talent: {
                    id: 151,
                    name: "READ_WRITE",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 675,
                talent: {
                    id: 9,
                    name: "AMBIDEXTROUS",
                    nameTranslation: null,
                    maxLevel: "2"
                },
                value: 1
            },
            {
                id: 676,
                talent: {
                    id: 10,
                    name: "ANIMAL_AFFINITY",
                    nameTranslation: null,
                    maxLevel: "WPB"
                },
                value: 2
            },
            {
                id: 677,
                talent: {
                    id: 67,
                    name: "DOOMED",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 240,
                weapon: {
                    id: 3,
                    name: "DAGGER",
                    nameTranslation: "Sztylet",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 9,
                        name: "VERY_SHORT",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 2,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 2503,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2504,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2505,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2506,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2507,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2508,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 26,
        name: "Throngroth Hegalison",
        description: "Postać Piotra Ż. - Krasnolud - Zabójca Trolli",
        group: "Bohaterowie",
        isRightHanded: true,
        characteristics: [
            {
                id: 2509,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 3
            },
            {
                id: 2510,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 52
            },
            {
                id: 2511,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 34
            },
            {
                id: 2512,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 2513,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 48
            },
            {
                id: 2514,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 2515,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 19
            },
            {
                id: 2516,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 2517,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 2518,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 61
            },
            {
                id: 2519,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 22
            },
            {
                id: 2520,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 17
            }
        ],
        skills: [],
        talents: [
            {
                id: 330,
                talent: {
                    id: 198,
                    name: "STURDY",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 331,
                talent: {
                    id: 156,
                    name: "CHAOS_RESISTANCE",
                    nameTranslation: null,
                    maxLevel: "TB"
                },
                value: 1
            },
            {
                id: 332,
                talent: {
                    id: 135,
                    name: "NIGHT_VISION",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            },
            {
                id: 333,
                talent: {
                    id: 151,
                    name: "READ_WRITE",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 334,
                talent: {
                    id: 157,
                    name: "RESOLUTE",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 335,
                talent: {
                    id: 69,
                    name: "DUAL_WIELDER",
                    nameTranslation: null,
                    maxLevel: "AGB"
                },
                value: 1
            },
            {
                id: 336,
                talent: {
                    id: 87,
                    name: "FRENZY",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1255,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1256,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1257,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1258,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1259,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1260,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 27,
        name: "Ullagrund Ganddreng",
        description: "Postać Piotra P. - Krasnolud - Czeladnik",
        group: "Bohaterowie",
        isRightHanded: true,
        characteristics: [
            {
                id: 2497,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 3
            },
            {
                id: 2498,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 46
            },
            {
                id: 2499,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 23
            },
            {
                id: 2500,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 2501,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 50
            },
            {
                id: 2502,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 31
            },
            {
                id: 2503,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 24
            },
            {
                id: 2504,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 2505,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 2506,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 54
            },
            {
                id: 2507,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 14
            },
            {
                id: 2508,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 19
            }
        ],
        skills: [],
        talents: [
            {
                id: 324,
                talent: {
                    id: 151,
                    name: "READ_WRITE",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 325,
                talent: {
                    id: 157,
                    name: "RESOLUTE",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 326,
                talent: {
                    id: 127,
                    name: "MAGIC_RESISTANCE",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 327,
                talent: {
                    id: 198,
                    name: "STURDY",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 328,
                talent: {
                    id: 135,
                    name: "NIGHT_VISION",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            },
            {
                id: 329,
                talent: {
                    id: 212,
                    name: "VERY_STRONG",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1249,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1250,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1251,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1252,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1253,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1254,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 28,
        name: "Nobbi Wesołek",
        description: "Postać Huberta - Niziołek - Czeladnik",
        group: "Bohaterowie",
        isRightHanded: true,
        characteristics: [
            {
                id: 2545,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 3
            },
            {
                id: 2546,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 14
            },
            {
                id: 2547,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 2548,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 17
            },
            {
                id: 2549,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 2550,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 2551,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 2552,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 2553,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 2554,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 2555,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 2556,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 8
            }
        ],
        skills: [],
        talents: [
            {
                id: 340,
                talent: {
                    id: 178,
                    name: "SMALL",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 153,
                weapon: {
                    id: 45,
                    name: "SLING",
                    nameTranslation: "Proca",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 15,
                        name: "SLING",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 60.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 6,
                    weaponQualities: []
                },
                value: 1
            },
            {
                id: 154,
                weapon: {
                    id: 60,
                    name: "STONE_BULLET",
                    nameTranslation: "Pocisk kamienny",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 20,
                        name: "SLING_AMMUNITION",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 1.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 1,
                    weaponQualities: [
                        {
                            id: 129,
                            name: "PUMMEL",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 12
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 1273,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1274,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1275,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1276,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1277,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1278,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 29,
        name: "Rygar",
        description: "Postać Kuby - Człowiek - Uczeń Szczurołapa",
        group: "Bohaterowie",
        isRightHanded: true,
        characteristics: [
            {
                id: 3481,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3482,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 3483,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3484,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 3485,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 33
            },
            {
                id: 3486,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 3487,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3488,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 36
            },
            {
                id: 3489,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 23
            },
            {
                id: 3490,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 3491,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 34
            },
            {
                id: 3492,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1741,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1742,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1743,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1744,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1745,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1746,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [
            {
                id: 89,
                condition: {
                    id: 4,
                    name: "BROKEN",
                    nameTranslation: null,
                    hasCounter: false
                },
                value: 1,
                counter: 1
            }
        ],
        notes: []
    },
    {
        id: 30,
        name: "Renia Sianko",
        description: "Postać Klaudii - Człowiek - Przekupka",
        group: "Bohaterowie",
        isRightHanded: true,
        characteristics: [
            {
                id: 2533,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 2534,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 2535,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 25
            },
            {
                id: 2536,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 26
            },
            {
                id: 2537,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 31
            },
            {
                id: 2538,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 28
            },
            {
                id: 2539,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 36
            },
            {
                id: 2540,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 2541,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 2542,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 31
            },
            {
                id: 2543,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 2544,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 11
            }
        ],
        skills: [],
        talents: [
            {
                id: 337,
                talent: {
                    id: 176,
                    name: "SIXTH_SENSE",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            },
            {
                id: 338,
                talent: {
                    id: 151,
                    name: "READ_WRITE",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 339,
                talent: {
                    id: 10,
                    name: "ANIMAL_AFFINITY",
                    nameTranslation: null,
                    maxLevel: "WPB"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1267,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1268,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1269,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1270,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1271,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1272,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 31,
        name: "Mutant Rolf Hurtsis",
        description: "Mutant, Zbój",
        group: "Mutanci",
        isRightHanded: true,
        characteristics: [
            {
                id: 2137,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 2138,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 2139,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 25
            },
            {
                id: 2140,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 2141,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 28
            },
            {
                id: 2142,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 2143,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 2144,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 2145,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 2146,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 25
            },
            {
                id: 2147,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 0
            },
            {
                id: 2148,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 8
            }
        ],
        skills: [
            {
                id: 197,
                skill: {
                    id: 8,
                    name: "ATHLETICS",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 198,
                skill: {
                    id: 28,
                    name: "MELEE_BASIC",
                    nameTranslation: null
                },
                value: 37
            },
            {
                id: 199,
                skill: {
                    id: 38,
                    name: "PERCEPTION",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 200,
                skill: {
                    id: 37,
                    name: "OUTDOOR_SURVIVAL",
                    nameTranslation: null
                },
                value: 34
            },
            {
                id: 201,
                skill: {
                    id: 15,
                    name: "DODGE",
                    nameTranslation: null
                },
                value: 54
            }
        ],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 131,
                weapon: {
                    id: 3,
                    name: "DAGGER",
                    nameTranslation: "Sztylet",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 9,
                        name: "VERY_SHORT",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 2,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 1069,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1070,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1071,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1072,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1073,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1074,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Zwierzęcy - do obrony używa wyłącznie uniku, nie porozumiewa się",
            "Żarłoczny - Jeśli zabije lub unieruchomi żywego przeciwnika (albo natknie się na świeże ciało), musi zdać Przeciętny (+20) Test Siły Woli, inaczej zaczyna ucztować, tracąc następną Akcję i Ruch.",
            "Strach(2) - strona 190",
            "Zaraza - Stworzenie (albo jego broń) przenosi paskudną infekcję. Jeśli spowoduje utratę Żywotności żyjącego przeciwnika, musi on zdać Łatwy (+40) Test Odporności, inaczej nabawi się Ropiejącej Rany (patrz strona 187)."
        ]
    },
    {
        id: 33,
        name: "Mutant Terenz",
        description: "Mutant, Zbój",
        group: "Mutanci",
        isRightHanded: true,
        characteristics: [
            {
                id: 1813,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 1814,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 1815,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1816,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 1817,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1818,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1819,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 1820,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1821,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1822,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1823,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1824,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 106,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 907,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 908,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 909,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 910,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 911,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 912,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Spaczenie (Pomniejsze) - po kontakcie należy wykonać Test Odporności (+0), w przypadku porażki postać otrzymuje 1 punkt zepsucia.",
            "Mutacja - Gwoździogłowy - Jeśli znajduje się w pobliżu dowolnych sojuszników, którzy nie mają cechy Głupi, stwór prowadzony jest przez sojuszników i nic się nie dzieje. W innym przypadku stwór musi zdać Łatwy (+40) Test Inteligencji na początku każdej Rundy, inaczej staje się bardzo zdezorientowany."
        ]
    },
    {
        id: 34,
        name: "Mutant Mikael",
        description: "Mutant, Zbój",
        group: "Mutanci",
        isRightHanded: true,
        characteristics: [
            {
                id: 1825,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 1826,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 1827,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1828,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1829,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1830,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1831,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 1832,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1833,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1834,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1835,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1836,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 107,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 913,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 914,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 915,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 916,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 917,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 918,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Spaczenie (Pomniejsze) - po kontakcie należy wykonać Test Odporności (+0), w przypadku porażki postać otrzymuje 1 punkt zepsucia.",
            "Mutacja - Psi wygląd"
        ]
    },
    {
        id: 35,
        name: "Mutant Johann",
        description: "Mutant, Zbój",
        group: "Mutanci",
        isRightHanded: true,
        characteristics: [
            {
                id: 1837,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 1838,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 1839,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1840,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1841,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1842,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1843,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 1844,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1845,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1846,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1847,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1848,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 108,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 919,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 920,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 921,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 922,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 923,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 924,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Spaczenie (Pomniejsze) - po kontakcie należy wykonać Test Odporności (+0), w przypadku porażki postać otrzymuje 1 punkt zepsucia.",
            "Mutacja - Szpiczastogłowy - Jeśli znajduje się w pobliżu dowolnych sojuszników, którzy nie mają cechy Głupi, stwór prowadzony jest przez sojuszników i nic się nie dzieje. W innym przypadku stwór musi zdać Łatwy (+40) Test Inteligencji na początku każdej Rundy, inaczej staje się bardzo zdezorientowany."
        ]
    },
    {
        id: 36,
        name: "Mutant Erik",
        description: "Mutant, Zbój",
        group: "Mutanci",
        isRightHanded: true,
        characteristics: [
            {
                id: 1849,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 5
            },
            {
                id: 1850,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 1851,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1852,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1853,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1854,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1855,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 1856,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1857,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1858,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1859,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1860,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 109,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 925,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 926,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 927,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 928,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 929,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 930,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Zwierzęce nogi (kozy) - +1 do szybkości",
            "Spaczenie (Pomniejsze) - po kontakcie należy wykonać Test Odporności (+0), w przypadku porażki postać otrzymuje 1 punkt zepsucia."
        ]
    },
    {
        id: 37,
        name: "Mutant Knud Cratinx",
        description: "Mutant, Banita",
        group: "Mutanci",
        isRightHanded: true,
        characteristics: [
            {
                id: 1861,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 1862,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 36
            },
            {
                id: 1863,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 43
            },
            {
                id: 1864,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 1865,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 1866,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1867,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 33
            },
            {
                id: 1868,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 1869,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 33
            },
            {
                id: 1870,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 1871,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1872,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [
            {
                id: 106,
                skill: {
                    id: 28,
                    name: "MELEE_BASIC",
                    nameTranslation: null
                },
                value: 54
            },
            {
                id: 107,
                skill: {
                    id: 98,
                    name: "RANGED_CROSSBOW",
                    nameTranslation: null
                },
                value: 52
            },
            {
                id: 108,
                skill: {
                    id: 27,
                    name: "LEADERSHIP",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 109,
                skill: {
                    id: 38,
                    name: "PERCEPTION",
                    nameTranslation: null
                },
                value: 43
            },
            {
                id: 110,
                skill: {
                    id: 37,
                    name: "OUTDOOR_SURVIVAL",
                    nameTranslation: null
                },
                value: 38
            },
            {
                id: 111,
                skill: {
                    id: 25,
                    name: "INTIMIDATE",
                    nameTranslation: null
                },
                value: 49
            }
        ],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 110,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            },
            {
                id: 111,
                weapon: {
                    id: 38,
                    name: "CROSSBOW",
                    nameTranslation: "Kusza",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 11,
                        name: "CROSSBOW",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 60.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 9,
                    weaponQualities: [
                        {
                            id: 95,
                            name: "RELOAD",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 96,
                            name: "TWO_HANDED",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 1
            },
            {
                id: 112,
                weapon: {
                    id: 58,
                    name: "BOLT",
                    nameTranslation: "Bełt",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 19,
                        name: "CROSSBOW_AMMUNITION",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 1.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 0,
                    weaponQualities: [
                        {
                            id: 127,
                            name: "IMPALE",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 15
            }
        ],
        armors: [
            {
                id: 15,
                name: "MUTATION_SPIKY_SCALES",
                nameTranslation: "Mutacja (Kolczaste Łuski)",
                armorCategory: {
                    id: 5,
                    name: "OTHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 31,
                        bodyLocalization: {
                            id: 2,
                            name: "RIGHT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 32,
                        bodyLocalization: {
                            id: 3,
                            name: "LEFT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 33,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 34,
                        bodyLocalization: {
                            id: 1,
                            name: "HEAD",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 35,
                        bodyLocalization: {
                            id: 5,
                            name: "RIGHT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 36,
                        bodyLocalization: {
                            id: 6,
                            name: "LEFT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            }
        ],
        bodyLocalizations: [
            {
                id: 931,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 932,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 933,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 934,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 935,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 936,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Kolczaste łuski - +1 punkt pancerza na wszystkich lokalizacjach",
            "Spaczenie (Pomniejsze) - po kontakcie należy wykonać Test Odporności (+0), w przypadku porażki postać otrzymuje 1 punkt zepsucia."
        ]
    },
    {
        id: 40,
        name: "Adolphus Kuftsos",
        description: "Doświadczony Łowca Nagród",
        group: "Główni BN",
        isRightHanded: true,
        characteristics: [
            {
                id: 3769,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3770,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 48
            },
            {
                id: 3771,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 58
            },
            {
                id: 3772,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 51
            },
            {
                id: 3773,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 3774,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 3775,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 57
            },
            {
                id: 3776,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 3777,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3778,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 34
            },
            {
                id: 3779,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 3780,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 18
            }
        ],
        skills: [
            {
                id: 454,
                skill: {
                    id: 8,
                    name: "ATHLETICS",
                    nameTranslation: null
                },
                value: 77
            },
            {
                id: 455,
                skill: {
                    id: 28,
                    name: "MELEE_BASIC",
                    nameTranslation: null
                },
                value: 63
            },
            {
                id: 456,
                skill: {
                    id: 98,
                    name: "RANGED_CROSSBOW",
                    nameTranslation: null
                },
                value: 73
            },
            {
                id: 457,
                skill: {
                    id: 10,
                    name: "CHARM",
                    nameTranslation: null
                },
                value: 37
            },
            {
                id: 458,
                skill: {
                    id: 27,
                    name: "LEADERSHIP",
                    nameTranslation: null
                },
                value: 37
            },
            {
                id: 459,
                skill: {
                    id: 42,
                    name: "RIDE_HORSE",
                    nameTranslation: null
                },
                value: 67
            },
            {
                id: 460,
                skill: {
                    id: 17,
                    name: "ENDURANCE",
                    nameTranslation: null
                },
                value: 85
            },
            {
                id: 461,
                skill: {
                    id: 48,
                    name: "ANIMAL_CARE",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 462,
                skill: {
                    id: 38,
                    name: "PERCEPTION",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 463,
                skill: {
                    id: 23,
                    name: "GOSSIP",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 464,
                skill: {
                    id: 9,
                    name: "BRIBERY",
                    nameTranslation: null
                },
                value: 42
            },
            {
                id: 465,
                skill: {
                    id: 118,
                    name: "SWIM",
                    nameTranslation: null
                },
                value: 61
            },
            {
                id: 466,
                skill: {
                    id: 47,
                    name: "STEALTH_URBAN",
                    nameTranslation: null
                },
                value: 77
            },
            {
                id: 467,
                skill: {
                    id: 45,
                    name: "STEALTH_RURAL",
                    nameTranslation: null
                },
                value: 72
            },
            {
                id: 468,
                skill: {
                    id: 37,
                    name: "OUTDOOR_SURVIVAL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 469,
                skill: {
                    id: 24,
                    name: "HAGGLE",
                    nameTranslation: null
                },
                value: 32
            },
            {
                id: 470,
                skill: {
                    id: 119,
                    name: "TRACK",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 471,
                skill: {
                    id: 12,
                    name: "CLIMB",
                    nameTranslation: null
                },
                value: 66
            },
            {
                id: 472,
                skill: {
                    id: 25,
                    name: "INTIMIDATE",
                    nameTranslation: null
                },
                value: 66
            }
        ],
        talents: [
            {
                id: 591,
                talent: {
                    id: 172,
                    name: "SHADOW",
                    nameTranslation: null,
                    maxLevel: "AGB"
                },
                value: 2
            },
            {
                id: 592,
                talent: {
                    id: 194,
                    name: "STRONG_BACK",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 593,
                talent: {
                    id: 152,
                    name: "RELENTLESS",
                    nameTranslation: null,
                    maxLevel: "AGB"
                },
                value: 1
            },
            {
                id: 594,
                talent: {
                    id: 193,
                    name: "STRIKE_TO_STUN",
                    nameTranslation: null,
                    maxLevel: "WSB"
                },
                value: 1
            },
            {
                id: 595,
                talent: {
                    id: 191,
                    name: "STRIKE_MIGHTY_BLOW",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 596,
                talent: {
                    id: 129,
                    name: "MARKSMAN",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 597,
                talent: {
                    id: 181,
                    name: "SPRINTER",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            }
        ],
        traits: [
            {
                id: 58,
                trait: {
                    id: 83,
                    name: "AMORPHOUS",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            }
        ],
        spells: [
            {
                id: 3,
                name: "DOME",
                nameTranslation: null,
                spellGroup: {
                    id: 2,
                    name: "ARCANE_SPELLS",
                    nameTranslation: null
                }
            }
        ],
        weapons: [
            {
                id: 223,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            },
            {
                id: 224,
                weapon: {
                    id: 38,
                    name: "CROSSBOW",
                    nameTranslation: "Kusza",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 11,
                        name: "CROSSBOW",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 60.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 9,
                    weaponQualities: [
                        {
                            id: 95,
                            name: "RELOAD",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 96,
                            name: "TWO_HANDED",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 1
            },
            {
                id: 225,
                weapon: {
                    id: 58,
                    name: "BOLT",
                    nameTranslation: "Bełt",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 19,
                        name: "CROSSBOW_AMMUNITION",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 1.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 0,
                    weaponQualities: [
                        {
                            id: 127,
                            name: "IMPALE",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 40
            }
        ],
        armors: [
            {
                id: 9,
                name: "MAIL_SHIRT",
                nameTranslation: "Kaftan kolczy",
                armorCategory: {
                    id: 3,
                    name: "MAIL",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 15,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 2,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [
                    {
                        id: 2,
                        name: "MINUS_TEN_STEALTH",
                        nameTranslation: null
                    }
                ],
                armorQualities: [
                    {
                        id: 1,
                        name: "FLEXIBLE",
                        nameTranslation: null
                    }
                ]
            },
            {
                id: 1,
                name: "LEATHER_JACK",
                nameTranslation: "Skórzana kurta",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 1,
                        bodyLocalization: {
                            id: 2,
                            name: "RIGHT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 2,
                        bodyLocalization: {
                            id: 3,
                            name: "LEFT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 3,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            },
            {
                id: 3,
                name: "LEATHER_LEGGINGS",
                nameTranslation: "Skórzane nogawice",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 5,
                        bodyLocalization: {
                            id: 5,
                            name: "RIGHT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 6,
                        bodyLocalization: {
                            id: 6,
                            name: "LEFT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            }
        ],
        bodyLocalizations: [
            {
                id: 1885,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1886,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1887,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1888,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 3,
                injuries: []
            },
            {
                id: 1889,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1890,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            }
        ],
        conditions: [
            {
                id: 90,
                condition: {
                    id: 1,
                    name: "ABLAZE",
                    nameTranslation: null,
                    hasCounter: false
                },
                value: 1,
                counter: 1
            }
        ],
        notes: []
    },
    {
        id: 41,
        name: "Oprych",
        description: "",
        group: "Oprychy",
        isRightHanded: true,
        characteristics: [
            {
                id: 3973,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3974,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 3975,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3976,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3977,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3978,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 25
            },
            {
                id: 3979,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 35
            },
            {
                id: 3980,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3981,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 25
            },
            {
                id: 3982,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3983,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 25
            },
            {
                id: 3984,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 15
            }
        ],
        skills: [],
        talents: [],
        traits: [
            {
                id: 130,
                trait: {
                    id: 6,
                    name: "BELLIGERENT",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            }
        ],
        spells: [],
        weapons: [
            {
                id: 235,
                weapon: {
                    id: 63,
                    name: "CLUB",
                    nameTranslation: "Maczuga",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: [
                        {
                            id: 136,
                            name: "UNDAMAGING",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 137,
                            name: "UNBALANCED",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 1
            },
            {
                id: 236,
                weapon: {
                    id: 3,
                    name: "DAGGER",
                    nameTranslation: "Sztylet",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 9,
                        name: "VERY_SHORT",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 2,
                    weaponQualities: []
                },
                value: 1
            },
            {
                id: 237,
                weapon: {
                    id: 61,
                    name: "AXE",
                    nameTranslation: "Topór",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: [
                        {
                            id: 130,
                            name: "HACK",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 131,
                            name: "UNBALANCED",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 1
            }
        ],
        armors: [
            {
                id: 1,
                name: "LEATHER_JACK",
                nameTranslation: "Skórzana kurta",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 1,
                        bodyLocalization: {
                            id: 2,
                            name: "RIGHT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 2,
                        bodyLocalization: {
                            id: 3,
                            name: "LEFT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 3,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            }
        ],
        bodyLocalizations: [
            {
                id: 1987,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1988,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1989,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1990,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1991,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1992,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 42,
        name: "Marcus",
        description: "Kapitan barki \"Lyan\"",
        group: "Główni BN",
        isRightHanded: true,
        characteristics: [
            {
                id: 1933,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 1934,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 58
            },
            {
                id: 1935,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 44
            },
            {
                id: 1936,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 1937,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 48
            },
            {
                id: 1938,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 42
            },
            {
                id: 1939,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 43
            },
            {
                id: 1940,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 1941,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 1942,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 1943,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 1944,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 15
            }
        ],
        skills: [
            {
                id: 169,
                skill: {
                    id: 14,
                    name: "CONSUME_ALCOHOL",
                    nameTranslation: null
                },
                value: 73
            },
            {
                id: 170,
                skill: {
                    id: 36,
                    name: "NAVIGATION",
                    nameTranslation: null
                },
                value: 50
            },
            {
                id: 171,
                skill: {
                    id: 123,
                    name: "TRADE_CARPENTER",
                    nameTranslation: null
                },
                value: 49
            },
            {
                id: 172,
                skill: {
                    id: 37,
                    name: "OUTDOOR_SURVIVAL",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 173,
                skill: {
                    id: 44,
                    name: "ROW",
                    nameTranslation: null
                },
                value: 64
            },
            {
                id: 174,
                skill: {
                    id: 105,
                    name: "SAIL_BARGE",
                    nameTranslation: null
                },
                value: 82
            },
            {
                id: 175,
                skill: {
                    id: 28,
                    name: "MELEE_BASIC",
                    nameTranslation: null
                },
                value: 65
            },
            {
                id: 176,
                skill: {
                    id: 96,
                    name: "RANGED_BLACKPOWDER",
                    nameTranslation: null
                },
                value: 50
            }
        ],
        talents: [
            {
                id: 170,
                talent: {
                    id: 212,
                    name: "VERY_STRONG",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 171,
                talent: {
                    id: 83,
                    name: "FISHERMAN",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            },
            {
                id: 172,
                talent: {
                    id: 141,
                    name: "ORIENTATION",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 122,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            },
            {
                id: 123,
                weapon: {
                    id: 31,
                    name: "PISTOL",
                    nameTranslation: "Pistolet",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 9,
                        name: "BLACKPOWDER",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 20.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 8,
                    weaponQualities: [
                        {
                            id: 80,
                            name: "BLACKPOWDER",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 81,
                            name: "DAMAGING",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 82,
                            name: "PISTOL",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 83,
                            name: "RELOAD",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 1
            },
            {
                id: 124,
                weapon: {
                    id: 53,
                    name: "BULLET_AND_POWDER",
                    nameTranslation: "Pocisk i proch",
                    weaponType: {
                        id: 2,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 17,
                        name: "BLACKPOWDER_AMMUNITION",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 5,
                        name: "RANGED",
                        nameTranslation: null
                    },
                    weaponRange: 1.0,
                    isUsingStrength: false,
                    isUsingStrengthInRange: false,
                    damage: 1,
                    weaponQualities: [
                        {
                            id: 120,
                            name: "IMPALE",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 121,
                            name: "PENETRATING",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 20
            }
        ],
        armors: [
            {
                id: 1,
                name: "LEATHER_JACK",
                nameTranslation: "Skórzana kurta",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 1,
                        bodyLocalization: {
                            id: 2,
                            name: "RIGHT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 2,
                        bodyLocalization: {
                            id: 3,
                            name: "LEFT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 3,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            },
            {
                id: 3,
                name: "LEATHER_LEGGINGS",
                nameTranslation: "Skórzane nogawice",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 5,
                        bodyLocalization: {
                            id: 5,
                            name: "RIGHT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 6,
                        bodyLocalization: {
                            id: 6,
                            name: "LEFT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            }
        ],
        bodyLocalizations: [
            {
                id: 967,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 968,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 969,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 970,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 971,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 972,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 43,
        name: "Max Ernst",
        description: "Mąciwoda",
        group: "Oprychy",
        isRightHanded: true,
        characteristics: [
            {
                id: 1945,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 1946,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 42
            },
            {
                id: 1947,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 23
            },
            {
                id: 1948,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 44
            },
            {
                id: 1949,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 1950,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 1951,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 46
            },
            {
                id: 1952,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 24
            },
            {
                id: 1953,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 34
            },
            {
                id: 1954,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 1955,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 24
            },
            {
                id: 1956,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 12
            }
        ],
        skills: [
            {
                id: 177,
                skill: {
                    id: 28,
                    name: "MELEE_BASIC",
                    nameTranslation: null
                },
                value: 52
            },
            {
                id: 178,
                skill: {
                    id: 42,
                    name: "RIDE_HORSE",
                    nameTranslation: null
                },
                value: 51
            },
            {
                id: 179,
                skill: {
                    id: 13,
                    name: "COOL",
                    nameTranslation: null
                },
                value: 65
            },
            {
                id: 180,
                skill: {
                    id: 15,
                    name: "DODGE",
                    nameTranslation: null
                },
                value: 56
            },
            {
                id: 181,
                skill: {
                    id: 25,
                    name: "INTIMIDATE",
                    nameTranslation: null
                },
                value: 54
            }
        ],
        talents: [
            {
                id: 173,
                talent: {
                    id: 64,
                    name: "DIRTY_FIGHTING",
                    nameTranslation: null,
                    maxLevel: "WSB"
                },
                value: 1
            },
            {
                id: 174,
                talent: {
                    id: 192,
                    name: "STRIKE_TO_INJURE",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            },
            {
                id: 175,
                talent: {
                    id: 193,
                    name: "STRIKE_TO_STUN",
                    nameTranslation: null,
                    maxLevel: "WSB"
                },
                value: 1
            },
            {
                id: 176,
                talent: {
                    id: 65,
                    name: "DISARM",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            },
            {
                id: 177,
                talent: {
                    id: 191,
                    name: "STRIKE_MIGHTY_BLOW",
                    nameTranslation: null,
                    maxLevel: "SB"
                },
                value: 1
            },
            {
                id: 178,
                talent: {
                    id: 56,
                    name: "COOLHEADED",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 125,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [
            {
                id: 1,
                name: "LEATHER_JACK",
                nameTranslation: "Skórzana kurta",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 1,
                        bodyLocalization: {
                            id: 2,
                            name: "RIGHT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 2,
                        bodyLocalization: {
                            id: 3,
                            name: "LEFT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 3,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            },
            {
                id: 3,
                name: "LEATHER_LEGGINGS",
                nameTranslation: "Skórzane nogawice",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 5,
                        bodyLocalization: {
                            id: 5,
                            name: "RIGHT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 6,
                        bodyLocalization: {
                            id: 6,
                            name: "LEFT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            }
        ],
        bodyLocalizations: [
            {
                id: 973,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 974,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 975,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 976,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 977,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 978,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 44,
        name: "Ochroniarze Dandysów",
        description: "Arwin, Franka, Gorrof, Miltrud",
        group: "Grupa Dandysów",
        isRightHanded: true,
        characteristics: [
            {
                id: 3949,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3950,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 50
            },
            {
                id: 3951,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3952,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 54
            },
            {
                id: 3953,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 52
            },
            {
                id: 3954,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 43
            },
            {
                id: 3955,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 43
            },
            {
                id: 3956,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 3957,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 28
            },
            {
                id: 3958,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 3959,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 3960,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 18
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 232,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [
            {
                id: 9,
                name: "MAIL_SHIRT",
                nameTranslation: "Kaftan kolczy",
                armorCategory: {
                    id: 3,
                    name: "MAIL",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 15,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 2,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [
                    {
                        id: 2,
                        name: "MINUS_TEN_STEALTH",
                        nameTranslation: null
                    }
                ],
                armorQualities: [
                    {
                        id: 1,
                        name: "FLEXIBLE",
                        nameTranslation: null
                    }
                ]
            },
            {
                id: 1,
                name: "LEATHER_JACK",
                nameTranslation: "Skórzana kurta",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 1,
                        bodyLocalization: {
                            id: 2,
                            name: "RIGHT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 2,
                        bodyLocalization: {
                            id: 3,
                            name: "LEFT_ARM",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 3,
                        bodyLocalization: {
                            id: 4,
                            name: "BODY",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            },
            {
                id: 3,
                name: "LEATHER_LEGGINGS",
                nameTranslation: "Skórzane nogawice",
                armorCategory: {
                    id: 1,
                    name: "SOFT_LEATHER",
                    nameTranslation: null
                },
                armorBodyLocalizations: [
                    {
                        id: 5,
                        bodyLocalization: {
                            id: 5,
                            name: "RIGHT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    },
                    {
                        id: 6,
                        bodyLocalization: {
                            id: 6,
                            name: "LEFT_LEG",
                            nameTranslation: null
                        },
                        armorPoints: 1,
                        brokenArmorPoints: 0
                    }
                ],
                armorPenalties: [],
                armorQualities: []
            }
        ],
        bodyLocalizations: [
            {
                id: 1975,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1976,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1977,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1978,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 3,
                injuries: []
            },
            {
                id: 1979,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            },
            {
                id: 1980,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 1,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 45,
        name: "Dziedzice",
        description: "Jacob von Katzenreik i Georg Von Ostbrun",
        group: "Grupa Dandysów",
        isRightHanded: true,
        characteristics: [
            {
                id: 3877,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3878,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 38
            },
            {
                id: 3879,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 3880,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 33
            },
            {
                id: 3881,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 24
            },
            {
                id: 3882,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 41
            },
            {
                id: 3883,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 36
            },
            {
                id: 3884,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 44
            },
            {
                id: 3885,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 22
            },
            {
                id: 3886,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 26
            },
            {
                id: 3887,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 3888,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 9
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1939,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1940,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1941,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1942,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1943,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1944,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 52,
        name: "Ameba",
        description: "Potwór z kanałów",
        group: "Potwory",
        isRightHanded: true,
        characteristics: [
            {
                id: 3553,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3554,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 3555,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 0
            },
            {
                id: 3556,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3557,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3558,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 0
            },
            {
                id: 3559,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 20
            },
            {
                id: 3560,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 10
            },
            {
                id: 3561,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 0
            },
            {
                id: 3562,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 0
            },
            {
                id: 3563,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 0
            },
            {
                id: 3564,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 20
            }
        ],
        skills: [],
        talents: [
            {
                id: 533,
                talent: {
                    id: 145,
                    name: "PHARMACIST",
                    nameTranslation: null,
                    maxLevel: "INTB"
                },
                value: 1
            }
        ],
        traits: [
            {
                id: 13,
                trait: {
                    id: 76,
                    name: "VENOM",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "0"
            },
            {
                id: 14,
                trait: {
                    id: 83,
                    name: "AMORPHOUS",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 15,
                trait: {
                    id: 82,
                    name: "ABSORB",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 16,
                trait: {
                    id: 66,
                    name: "TENTACLES",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "2"
            },
            {
                id: 17,
                trait: {
                    id: 80,
                    name: "WEAPON",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "+6"
            }
        ],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1777,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1778,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1779,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1780,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1781,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1782,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 54,
        name: "\"Miażdżyciel\" Braugen ",
        description: "Gladiator",
        group: "Zawodnicy",
        isRightHanded: true,
        characteristics: [
            {
                id: 4753,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 4754,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 57
            },
            {
                id: 4755,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 28
            },
            {
                id: 4756,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 54
            },
            {
                id: 4757,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 52
            },
            {
                id: 4758,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 41
            },
            {
                id: 4759,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 33
            },
            {
                id: 4760,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 29
            },
            {
                id: 4761,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 23
            },
            {
                id: 4762,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 4763,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 27
            },
            {
                id: 4764,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 18
            }
        ],
        skills: [
            {
                id: 481,
                skill: {
                    id: 17,
                    name: "ENDURANCE",
                    nameTranslation: null
                },
                value: 74
            },
            {
                id: 482,
                skill: {
                    id: 15,
                    name: "DODGE",
                    nameTranslation: null
                },
                value: 53
            },
            {
                id: 483,
                skill: {
                    id: 25,
                    name: "INTIMIDATE",
                    nameTranslation: null
                },
                value: 74
            }
        ],
        talents: [
            {
                id: 632,
                talent: {
                    id: 64,
                    name: "DIRTY_FIGHTING",
                    nameTranslation: null,
                    maxLevel: "WSB"
                },
                value: 2
            },
            {
                id: 633,
                talent: {
                    id: 158,
                    name: "REVERSAL",
                    nameTranslation: null,
                    maxLevel: "WSB"
                },
                value: 1
            },
            {
                id: 634,
                talent: {
                    id: 118,
                    name: "IRON_JAW",
                    nameTranslation: null,
                    maxLevel: "TB"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 239,
                weapon: {
                    id: 2,
                    name: "IMPROVISED_WEAPON",
                    nameTranslation: "Broń improwizowana",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 7,
                        name: "VARIES",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 1,
                    weaponQualities: [
                        {
                            id: 1,
                            name: "UNDAMAGING",
                            nameTranslation: null,
                            value: 1
                        },
                        {
                            id: 135,
                            name: "UNBALANCED",
                            nameTranslation: null,
                            value: 1
                        }
                    ]
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 2377,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2378,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2379,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2380,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2381,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2382,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 55,
        name: "Herold Tzeentcha",
        description: "Spotkany w świątyni w kanałach",
        group: "Demony",
        isRightHanded: true,
        characteristics: [
            {
                id: 2701,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 2702,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 2703,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 49
            },
            {
                id: 2704,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 50
            },
            {
                id: 2705,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 2706,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 2707,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 59
            },
            {
                id: 2708,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 2709,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 49
            },
            {
                id: 2710,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 99
            },
            {
                id: 2711,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 19
            },
            {
                id: 2712,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 19
            }
        ],
        skills: [],
        talents: [],
        traits: [],
        spells: [],
        weapons: [
            {
                id: 158,
                weapon: {
                    id: 1,
                    name: "HAND_WEAPON",
                    nameTranslation: "Broń ręczna",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 1,
                        name: "AVERAGE",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 4,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 1351,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1352,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1353,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1354,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1355,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1356,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: [
            "Demoniczny 8+ - po otrzymaniu obrażeń rzuć k10, jeśli wyrzucona liczba jest równa lub większa od 8, obrażenia są ignorowane",
            "Nie czuje bólu - wszystkie kary z Ran Krytycznych są ignorowane jeśli nie są amputacjami",
            "Rogi +8 - jeśli zyska przewagę pod wpływem szarżowania, może wykonać darmowy atak rogami na +8",
            "Strach (2) - należy wykonać Test Opanowania na 2 PS, można go ponawiać pod koniec każdej rundy, bez udanego testu przestraszony dostaje -1 PS do wszystkich testów wobec źródła strachu, nie może również do niego podejść bez Testu Opanowania (+0), który nieudany dodaje 1 poziom Paniki"
        ]
    },
    {
        id: 65,
        name: "Troll",
        description: "Troll",
        group: "Potwory",
        isRightHanded: true,
        characteristics: [
            {
                id: 4045,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 6
            },
            {
                id: 4046,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 30
            },
            {
                id: 4047,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 15
            },
            {
                id: 4048,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 4049,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 4050,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 10
            },
            {
                id: 4051,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 15
            },
            {
                id: 4052,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 15
            },
            {
                id: 4053,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 10
            },
            {
                id: 4054,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 20
            },
            {
                id: 4055,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 5
            },
            {
                id: 4056,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 30
            }
        ],
        skills: [],
        talents: [],
        traits: [
            {
                id: 155,
                trait: {
                    id: 62,
                    name: "STUPID",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 156,
                trait: {
                    id: 25,
                    name: "DIE_HARD",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 157,
                trait: {
                    id: 56,
                    name: "REGENERATE",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 158,
                trait: {
                    id: 57,
                    name: "SIZE",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "Duży"
            },
            {
                id: 159,
                trait: {
                    id: 71,
                    name: "TOUGH",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 160,
                trait: {
                    id: 9,
                    name: "BITE",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "+8"
            },
            {
                id: 161,
                trait: {
                    id: 77,
                    name: "VOMIT",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 162,
                trait: {
                    id: 42,
                    name: "INFECTED",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            }
        ],
        spells: [],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 2023,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2024,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2025,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2026,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2027,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 2028,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [
            {
                id: 92,
                condition: {
                    id: 10,
                    name: "STUNNED",
                    nameTranslation: null,
                    hasCounter: false
                },
                value: 2,
                counter: 0
            }
        ],
        notes: []
    },
    {
        id: 68,
        name: "Johannes Teugen",
        description: "Człowiek, Demonolog i Patrycjusz",
        group: "Główni BN",
        isRightHanded: true,
        characteristics: [
            {
                id: 3865,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3866,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 3867,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 3868,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 42
            },
            {
                id: 3869,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3870,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 58
            },
            {
                id: 3871,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 3872,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 3873,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 59
            },
            {
                id: 3874,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 60
            },
            {
                id: 3875,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 51
            },
            {
                id: 3876,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 18
            }
        ],
        skills: [
            {
                id: 473,
                skill: {
                    id: 28,
                    name: "MELEE_BASIC",
                    nameTranslation: null
                },
                value: 55
            },
            {
                id: 474,
                skill: {
                    id: 26,
                    name: "INTUITION",
                    nameTranslation: null
                },
                value: 73
            },
            {
                id: 475,
                skill: {
                    id: 70,
                    name: "LANGUAGE_MAGICK",
                    nameTranslation: null
                },
                value: 74
            },
            {
                id: 476,
                skill: {
                    id: 57,
                    name: "CHANNELLING_DHAR",
                    nameTranslation: null
                },
                value: 80
            }
        ],
        talents: [
            {
                id: 598,
                talent: {
                    id: 144,
                    name: "PETTY_MAGIC",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 599,
                talent: {
                    id: 220,
                    name: "ARCANE_MAGIC_DEMONOLOGY",
                    nameTranslation: null,
                    maxLevel: "1"
                },
                value: 1
            },
            {
                id: 600,
                talent: {
                    id: 170,
                    name: "SECOND_SIGHT",
                    nameTranslation: null,
                    maxLevel: "IB"
                },
                value: 1
            }
        ],
        traits: [],
        spells: [
            {
                id: 3,
                name: "DOME",
                nameTranslation: null,
                spellGroup: {
                    id: 2,
                    name: "ARCANE_SPELLS",
                    nameTranslation: null
                }
            },
            {
                id: 4,
                name: "ENTANGLE",
                nameTranslation: null,
                spellGroup: {
                    id: 2,
                    name: "ARCANE_SPELLS",
                    nameTranslation: null
                }
            },
            {
                id: 1,
                name: "BOLT",
                nameTranslation: null,
                spellGroup: {
                    id: 2,
                    name: "ARCANE_SPELLS",
                    nameTranslation: null
                }
            },
            {
                id: 2,
                name: "CORROSIVE_BLOOD",
                nameTranslation: null,
                spellGroup: {
                    id: 2,
                    name: "ARCANE_SPELLS",
                    nameTranslation: null
                }
            }
        ],
        weapons: [
            {
                id: 226,
                weapon: {
                    id: 3,
                    name: "DAGGER",
                    nameTranslation: "Sztylet",
                    weaponType: {
                        id: 1,
                        name: "MELEE",
                        nameTranslation: null
                    },
                    weaponGroupType: {
                        id: 1,
                        name: "BASIC",
                        nameTranslation: null
                    },
                    weaponReach: {
                        id: 9,
                        name: "VERY_SHORT",
                        nameTranslation: null
                    },
                    weaponRange: 0.0,
                    isUsingStrength: true,
                    isUsingStrengthInRange: false,
                    damage: 2,
                    weaponQualities: []
                },
                value: 1
            }
        ],
        armors: [],
        bodyLocalizations: [
            {
                id: 1933,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1934,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1935,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1936,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1937,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1938,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    },
    {
        id: 70,
        name: "Gideon",
        description: "Sheru-Tar Gee'Taru - Herold Tzeentcha",
        group: "Główni BN",
        isRightHanded: true,
        characteristics: [
            {
                id: 3853,
                characteristic: {
                    id: 12,
                    name: "MOVEMENT",
                    nameTranslation: null
                },
                value: 4
            },
            {
                id: 3854,
                characteristic: {
                    id: 1,
                    name: "WEAPON_SKILL",
                    nameTranslation: null
                },
                value: 45
            },
            {
                id: 3855,
                characteristic: {
                    id: 2,
                    name: "BALLISTIC_SKILL",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 3856,
                characteristic: {
                    id: 3,
                    name: "STRENGTH",
                    nameTranslation: null
                },
                value: 42
            },
            {
                id: 3857,
                characteristic: {
                    id: 4,
                    name: "TOUGHNESS",
                    nameTranslation: null
                },
                value: 40
            },
            {
                id: 3858,
                characteristic: {
                    id: 5,
                    name: "INITIATIVE",
                    nameTranslation: null
                },
                value: 58
            },
            {
                id: 3859,
                characteristic: {
                    id: 6,
                    name: "AGILITY",
                    nameTranslation: null
                },
                value: 47
            },
            {
                id: 3860,
                characteristic: {
                    id: 7,
                    name: "DEXTERITY",
                    nameTranslation: null
                },
                value: 39
            },
            {
                id: 3861,
                characteristic: {
                    id: 8,
                    name: "INTELLIGENCE",
                    nameTranslation: null
                },
                value: 59
            },
            {
                id: 3862,
                characteristic: {
                    id: 9,
                    name: "WILLPOWER",
                    nameTranslation: null
                },
                value: 60
            },
            {
                id: 3863,
                characteristic: {
                    id: 10,
                    name: "FELLOWSHIP",
                    nameTranslation: null
                },
                value: 51
            },
            {
                id: 3864,
                characteristic: {
                    id: 11,
                    name: "WOUNDS",
                    nameTranslation: null
                },
                value: 22
            }
        ],
        skills: [],
        talents: [],
        traits: [
            {
                id: 119,
                trait: {
                    id: 80,
                    name: "WEAPON",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "+9"
            },
            {
                id: 120,
                trait: {
                    id: 24,
                    name: "DAEMONIC",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "+8"
            },
            {
                id: 121,
                trait: {
                    id: 74,
                    name: "UNSTABLE",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 122,
                trait: {
                    id: 59,
                    name: "SPELLCASTER",
                    nameTranslation: null,
                    hasValue: true
                },
                value: null
            },
            {
                id: 123,
                trait: {
                    id: 84,
                    name: "BLIGHTED",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "(Purpurowa Gorączka Mózgowa))"
            },
            {
                id: 124,
                trait: {
                    id: 21,
                    name: "CORRUPTED",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "(Umiarkowane)"
            },
            {
                id: 125,
                trait: {
                    id: 31,
                    name: "FEAR",
                    nameTranslation: null,
                    hasValue: true
                },
                value: "2"
            },
            {
                id: 126,
                trait: {
                    id: 36,
                    name: "HARDY",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 127,
                trait: {
                    id: 50,
                    name: "NIGHT_VISION",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            },
            {
                id: 128,
                trait: {
                    id: 85,
                    name: "FLESHTHIEF",
                    nameTranslation: null,
                    hasValue: false
                },
                value: null
            }
        ],
        spells: [
            {
                id: 6,
                name: "BLUE_FIRE_OF_TZEENTCH",
                nameTranslation: null,
                spellGroup: {
                    id: 17,
                    name: "LORE_OF_TZEENTCH",
                    nameTranslation: null
                }
            },
            {
                id: 5,
                name: "BOLT_OF_CORRUPTION",
                nameTranslation: null,
                spellGroup: {
                    id: 18,
                    name: "CHAOS_SPELLS",
                    nameTranslation: null
                }
            },
            {
                id: 7,
                name: "PINK_FIRE_OF_TZEENTCH",
                nameTranslation: null,
                spellGroup: {
                    id: 17,
                    name: "LORE_OF_TZEENTCH",
                    nameTranslation: null
                }
            },
            {
                id: 9,
                name: "MINDFIRE",
                nameTranslation: null,
                spellGroup: {
                    id: 17,
                    name: "LORE_OF_TZEENTCH",
                    nameTranslation: null
                }
            },
            {
                id: 8,
                name: "POWER_OF_CHAOS",
                nameTranslation: null,
                spellGroup: {
                    id: 18,
                    name: "CHAOS_SPELLS",
                    nameTranslation: null
                }
            }
        ],
        weapons: [],
        armors: [],
        bodyLocalizations: [
            {
                id: 1927,
                bodyLocalization: {
                    id: 1,
                    name: "HEAD",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1928,
                bodyLocalization: {
                    id: 2,
                    name: "RIGHT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1929,
                bodyLocalization: {
                    id: 3,
                    name: "LEFT_ARM",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1930,
                bodyLocalization: {
                    id: 4,
                    name: "BODY",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1931,
                bodyLocalization: {
                    id: 5,
                    name: "RIGHT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            },
            {
                id: 1932,
                bodyLocalization: {
                    id: 6,
                    name: "LEFT_LEG",
                    nameTranslation: null
                },
                armorPoints: 0,
                injuries: []
            }
        ],
        conditions: [],
        notes: []
    }
]
const charactersListByGroup = charactersList.reduce<Map<string, object[]>>(
    (acc: Map<string, object[]>, character: object & { group: string }) => {
        const characters = acc.get(character.group) || []
        characters.push(character)
        acc.set(character.group, characters)
        return acc
    },
    new Map<string, object[]>()
)

export default function Characters() {
    const [selectedCharacter, setSelectedCharacter] = useState()

    const handleSelectCharacter = (character: any) => setSelectedCharacter(character)

    // return <Container sx={{maxWidth: '1800px !important'}}>
    return <Container>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <CharacterList charactersListByGroup={charactersListByGroup} onSelect={handleSelectCharacter}/>
            </Grid>
            <Grid item xs={8}>
                <CharacterDetails character={selectedCharacter}/>
            </Grid>
        </Grid>
    </Container>
}