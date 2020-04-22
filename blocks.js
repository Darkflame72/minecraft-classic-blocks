function onModLoad() {

    // I hate js
    acacia_planks = newBlock("acacia_planks", "4eBnmXK");
    acacia_log = newBlock("acacia_log", ["KwVVnlr", "KwVVnlr", "HS2DtNi"]);
    andesite = newBlock("andesite", "TFNHSzn");
    barrel = newBlock("barrel", ["IF1G4pf", "ZzAF8LP", "QQwJKj6"]);
    barrel_open = newBlock("barrel_open", ["ir0UPKv", "ZzAF8LP", "QQwJKj6"]);
    bee_nest = newBlock("bee_nest", ["x30VmU4", "xEpLAuU", "rDD4oPd"]);
    beehive = newBlock("beehive", ["z71Xiel", "z71Xiel", "gQsnTxK"]);
    birch_log = newBlock("birch_log", ["zhsYkh8", "zhsYkh8", "1YwduX8"]);
    birch_plank = newBlock("birch_plank", "j0U01Tb");
    black_concrete_powder = newBlock("black_concrete_powder", "McQuhRB");
    black_concrete = newBlock("black_concrete", "PA5d8LP");
    black_glazed_terracotta = newBlock("black_glazed_terracotta", "qBFJrtx");
    black_terracotta = newBlock("black_terracotta", "Emhu3FV");
    black_wool = newBlock("black_wool", "3Zkim6x");
    blast_furnace = newBlock("blast_furnace", ["Rlwgnn8", "Rlwgnn8", "nt6bjTj"]);
    blue_concrete_powder = newBlock("blue_concrete_powder", "7ewzzPp");
    blue_concrete = newBlock("blue_concrete", "y1teXTi");
    blue_glazed_terracotta = newBlock("blue_glazed_terracotta", "K6OkkMi");
    blue_ice = newBlock("blue_ice", "XLZnbR9");
    blue_terracotta = newBlock("blue_terracotta", "SemmDVG");
    blue_wool = newBlock("blue_wool", "hJkGSBG");
    bone_block = newBlock("bone_block", ["7Zk2quV", "7Zk2quV", "es2Rvj8"]);
    bookshelf = newBlock("bookshelf", "DRnvzcN");
    brain_coral_block = newBlock("brain_coral_block", "fkiJoEt");
    brown_concrete_powder = newBlock("brown_concrete_powder", "gdLqvCC");
    brown_concrete = newBlock("brown_concrete", "kG4jwlD");
    brown_glazed_terracotta = newBlock("brown_glazed_terracotta", "Z3F0Dw2");
    brown_mushroom_block = newBlock("brown_mushroom_block", "0RY7ywr");
    brown_terracotta = newBlock("brown_terracotta", "AFUQH3K");
    brown_wool = newBlock("brown_wool", "PKm7tLR");
    bubble_coral_block = newBlock("bubble_coral_block", "eZQQywW");
    cactus = newBlock("cactus", ["78ErTBI", "qJMyFPw", "z5DNT6H"]);
    cartography_table = newBlock("cartography_table", ["y2BFNtV", "S45J84H", "470nDiG"]);
    chisled_quartz = newBlock("chised_quartz", ["ENSyVgS", "ENSyVgS", "ndacTNo"]);
    chisled_red_sandstone = newBlock("chisled_red_sandstone", "DAT42Yf");
    chisled_sandstone = newBlock("chisled_sandstone", "MoGrSY5");
    chisled_stone_bricks = newBlock("chisled_stone_bricks", "eXQucX8");
    clay = newBlock("clay", "8RwP9Js");
    coal_block = newBlock("coal_block", "OsRp5PE");
    coarse_dirt = newBlock("coarse_dirt", "45yLMDF");
    cracked_stone_bricks = newBlock("cracked_stone_bricks", "YR3zLR9");
    crafting_table = newBlock("crafting_table", ["MrWk2Py", "MrWk2Py", "GMH8LsI"]);
    cut_red_sandstone = newBlock("cut_red_sandstone", "MrWk2Py");
    cut_sandstone = newBlock("cut_sandstone", "XhbHyZs");
    cyan_concrete_powder = newBlock("cyan_concrete_powder", "vQgPHhR");
    cyan_concrete = newBlock("cyan_concrete", "mI6kLoX");
    cyan_glazed_terracotta = newBlock("cyan_glazed_terracotta", "PiNQE8g");
    cyan_terracotta = newBlock("cyan_terracotta", "PiNQE8g");
    cyan_wool = newBlock("cyan_wool", "WatiJLr");

    // Thanks to Name With Exactly 32 Characters!#4004 for this.
    newCommand("cmd",
        function(arg){
            setblock( getPlayerPosition(), window[arg]);
            return arg + ' block placed';
    });

}

function onTick() {}
