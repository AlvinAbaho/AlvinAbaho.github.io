// CSE 190 M, Homework 6: ASCIImation
// This file contains the ASCII animations as large strings.
//
// You can refer to them by variable names such as blank or dive, or by indexes
// into an array ANIMATIONS, such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"].
//
// The former is probably more intuitive for new programmers, but the latter
// may allow you to write more elegant code by indexing using the text of the
// menu option selected in the HTML.  (See bottom of file.)
//
// (Hint: The array index you want is the same as the select box's selected value...)
//
// YOU SHOULD NOT EDIT THIS FILE IN ANY WAY.
// TO ADD YOUR CUSTOM ANIMATION, CREATE YOUR OWN FILE myanimation.js AND
// PUT YOUR CODE IN THERE.  In myanimation.js, it is legal for you to modify
// the variables that have been declared in this file.

var BLANK = "";

var CUSTOM = "";   // you could change the value of this variable in your code

var EXERCISE = "  o\n" +
    " /#\\\n" +
    " _|_\n" +
    "=====\n" +
    " \\o/\n" +
    "  #\n" +
    "_/ \\_\n";

var JUGGLER = "   o\n" +
    "   O\n" +
    " o/|\\o\n" +
    "  / \\\n" +
    "=====\n" +
    "    o\n" +
    " o_O\n" +
    "   |o\n" +
    "  / \\\n" +
    "=====\n" +
    " o   o\n" +
    "  \\O\n" +
    "   o\\\n" +
    "  / \\\n" +
    "=====\n" +
    "  o\n" +
    "  _O_o\n" +
    "  o|\n" +
    "  / \\\n";

var BIKE = "\n" +
    "   _o\n" +
    " _< \\\\_\n" +
    "(_)>(_)            .\n" +
    "=====\n" +
    "\n" +
    "     _o\n" +
    "   _< \\\\_\n" +
    "  (_)>(_)          .\n" +
    "=====\n" +
    "\n" +
    "       _o\n" +
    "     _< \\\\_\n" +
    "    (_)>(_)        .\n" +
    "=====\n" +
    "          o\n" +
    "         /\\\\_\n" +
    "       _< (_)\n" +
    "      (_)          .\n" +
    "=====\n" +
    "            o\n" +
    "           /\\\\_\n" +
    "         _< (_)\n" +
    "        (_)        .\n" +
    "=====\n" +
    "             _\n" +
    "           _ \\\\\\\\o\n" +
    "          (_)/<_\n" +
    "              (_)  .\n" +
    "\n" +
    "=====\n" +
    "               _\n" +
    "             _ \\\\\\\\o\n" +
    "            (_)/<_\n" +
    "                (_).\n" +
    "=====\n" +
    "                  _\n" +
    "                 (_)\\\\__/o\n" +
    "                   \\\\_| \\\\\n" +
    "                  .(_)\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\' \\\\/\n" +
    "                  .  (_)\'  _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'  \\\\/\n" +
    "                  .  (_)\'   _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'   \\\\/\n" +
    "                  .  (_)\'    _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\_o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__ o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__  o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__   o\n";

var DIVE = "  o\n" +
    " /|\\\n" +
    ",/ \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "..,..,,.,...,,|.,|..,.,,...,..,,,..,..,..,.,\n" +
    "=====\n" +
    "     o\n" +
    "    -|-\n" +
    "    / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "      \\o/\n" +
    "       |\n" +
    "      / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "        \\o/\n" +
    "        /\n" +
    "       / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "            |o__\n" +
    "            /\n" +
    "          /\\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "              o/__\n" +
    "           __/\n" +
    "             \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "\n" +
    "                  __ o__\n" +
    "                 /)  \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "...,,,...,.,.,|..|.,.,...,,,.,..,.,.,,,..,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "                           \\)\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/    \\\n" +
    "-|----------|-|--|-|--\'    /o\\\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "....,...,...,,|,,|,.,.,.,.,.,.,.,....,,,,,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |           \\|\n" +
    "              |  |            \\o\n" +
    "              |  |            ( \\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,....,,...|.,|.,.,.,.,.,.,.,.,.,.,.,.,,,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                \\)\n" +
    "              |  |                |\n" +
    "              |  |               /o\\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,,...,.,,,,,|.,|.,,,.,.,,.,..,.,,....,,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                 \\ /\n" +
    "              |  |                  |\n" +
    "              |  |                 /o\\\n" +
    ",..,.,..,,.,.,|,,|.,,,.,,.,,.,...,,..,,.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,\\|.,..,.\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                `.\' \'.\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,`\'.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n";


var CALL_OF_DUTY =
    "                                                  \n                                                  \n            .7Y,              .BBBBY              \n            MB18:  k17        UBkUNB              \n           iBqi7  jMi7      :L8Bqrur              \n         .GBBBBBLXBBBB:    BBBBBMBBBEr            \n         BMBMMBBqZOZOBBq. BMMBBOBOBBBL;, :        \n         B0NP8P8O8E0U0BB:jBqN8q0NGS7BBBBBB2Li,    \n        .BM0E01UBBMFSF:55BBMM0GZEBGSBMMBk .iUqM   \n         BjkFLJMBBSOBr  ,BqMFkq5kB:.BBBB,         \n        ZBONZGM Y8GFS   :BS77M2UMu  .BBB          \n        qBB8kZB   BXi   qBZESqXZ.                 \n         .JBG2B   BBX ,ZBGG8BMBB2                 \n           Nqi8  BBOF UBG1PBBBMkqBr               \n          kBB8MkEB57BiGFS2BN YBBEBBi              \n          kBBOYBBBJ.MB7P1EB,   8BBXB.             \n          ;BBBi JS7 :B8OZMO     MBBBY             \nBMMMZq527.UBZ:    .BGBBBBO      7BEBY             \njU0ZMBBM0XBPM.    .BBu7::       ,BZMB             \n     ,rjY1BB1.    .BM            BB8B.            \n          :i,    7JU5:ii;i:.      MBB             \n             .   UXY7uU22kPNS1vi  ,BBr            \n                   :iirii,. :iLYu: LBBBB.         \n"
    + "=====\n" +
    "                                                  \n                                                  \n            :FX7               715U.              \n            MB7Pr  rY,        iB88BB              \n           7BOrL  ;M;L        qMPiuU              \n         :BBBBBBPuBBkS     r8BBBZNEu:r            \n         B8OOEBBPZMMBBBr  7BMBBMBBBBB:            \n         BMNPOXkM8Z8UPBBi:BZqB0ENGq0BBMMXB.       \n         BGqqk5uMBGPEMqB:1BZ8ZEEZMZ7MBBBB7UXP1L   \n         B2kFJJEBBP00,  .BGBNS00SBFvBBGB7   .rY   \n        qBMNN8B:MkSBP    MqjYEPJZB. 7BBB.         \n        :BBM08F  UE2:   :BZFLq2Pv    :L:          \n          :BBY:  YBP,   EB8GB0OBu                 \n           BBBJ BBBBr  BBqUGBBBNNM:               \n          BMMME0B,vBL  Bq22MEYBBSEBu              \n         MBBOFGBMZJB1  SPSXB,  PBBNZ              \n         BB:iB2 iJ::BO:.0FPB.   qBZBL             \nBMMMGP2YMB.  BBLi  7BBBBBMBB    BBBB              \nj200MMMEGMBU jBBJ  FBBEMBBM    :B0Bq              \n     ,rUUSNv  Y.   :X          7BGBk              \n         .:7Y.    7i:,::,,..    MBP               \n            .:.  i0kUUUUUFSqS2;iBB:               \n                   ,iirir,,.,irLNMq               \n"
    + "=====\n" +
    "                                                  \n                                                  \n             ,:                YFkU.              \n            MMZE   ::         vBEGBB              \n           :BY:v  vqY7       .GMFi1v              \n          FBBBEE:iBBYL     vMBBBGNZL::            \n         MBBBBB80BBBBBU.  YBMBBMBBBBG.            \n        .BX0SZ8Bq0SGjOBB,:B0qM00PGXGBBON0F        \n        .BMNGGu1MMM5kSBB.XBE8EEZZB5YBBBBB7SkFY,   \n         BuS5LJEBBPG0:   B8BPF0qSB57BBZB.   :u:   \n        iBEENXNFBP10U    M0YL0SYGB. YBBB          \n        BBPN0BM :qqSF   .BGSjN5Nr    :r.          \n        :BBq5OJ   BrM   MBGZB8OBi                 \n          ,BJu. 7BBBE  .BZSkZB8GB                 \n          5BMFu,OBBF    UBZUqMNYNO                \n        :BBBBBBBM8Bi     :uqUuESUBS               \n        UB,.M0U.YFBZ.     LM0NXE8kG               \nEZG055j;JB. UBv   :L.   BBBBE1qMMPX               \nSkMOBBMZkUSr.BM       0BBBBP7XBOBM.               \n    .iLF15P5 vBB7     BBv    ZOBB                 \n         .i7rUBY  77L7BBY . iBM.                  \n             :,  :NqULYkJYJJMBG:                  \n                   .::::ii;::LqBE7,               \n"
    + "=====\n" +
    "                                                  \n                                                  \n                              .BBBBi              \n           .0MN:   ri         FBSFMB              \n           YBrLj  q5ji      .LBBS;F:              \n          LBBUjr UBOU7     0BBBBBBBZu,            \n         OBBBBBGMBBBBBj:  EBMBBMBMBBZ,            \n        7BqMNBBZ5qPMYBBB.rBE0MqEqOuNBBBBBS.       \n        YB8EO85BMMqYE5BM 8BBMZO8OB51BBBBY:1NZq.   \n        iBSqk1Y8BBEN;    OMMFS0SFB1.BBBB     i    \n        LMNNSukMPkZ8N,   MMLL8XYMX  :BBG          \n        BBNOEM0rSuFZXB. :BMZPO0Bi                 \n        XBBF5kO  ZY7BB7 kBBG8ZOB.                 \n         .7BFk8  BJMBG   YBBZEqB:                 \n          FBUiMYXBBB,      .BBBMi                 \n         :BBBBMBBBMBv       UBZk7                 \n          BBBB,:G8Y;;       MBBBv                 \nNXXkUJv7,.iPBi             PBBBB                  \n0ZBBBBBM8F7NB             5B0MB:                  \n    :vUqXX1BB7            BBBk                    \n         .:5BBL  .UujYJL7OBGB.                    \n             .   iNEF1UUYkMBNkv7:                 \n                   .::ii;::kEO:7UY,               \n"

var WALKING_KID =
    "                                                 \n                                                 \n                                                 \n                                                 \n                 .:i77v7v7vr7i:.                 \n               :LjLY7L7L777LvYYjvi               \n             :uJL77r7r7r7r7r7r77YJu:             \n            ;1LL7L7v7v777v7v7v7L7LL1r            \n           iFLLvLvLvYvYvYLLvLLL7LvLL5i           \n           SJYLYLYLYLYYjYjYjYJLYLYLYYF.          \n          71JLYLYLYvL77r7r77vvYLYLJLJ1L          \n          u5YYvL77r77YJuJuJJ7vr7rLvYYFU          \n          5UY7vLuJU2PXqSXSqkq1UjUYL7YuS          \n          uuLUFXjUBG:::::::::kBUJkXSLYu          \n          u5NU7:.UBB:.:::::,.BBP.:7uEF5 ,,  .i.  \n          NBj:,:.iBN.,:::i::.2BL.:,:7BB 7U,,7U;; \n          kB:.,.. . ..,:i:... . ..,.:BB :L::::L7 \n          jB,.,,,,.,,,:::ii:.,.,,:,,.OOYuJLrrLYJ:\n          Pq::ii;i;i;iUBBBqiiir;;ii::UPjjUXP27.  \n          0Br77L77rv77;L2ji777rv7v777SU2FBBP     \n          YBB15JJvYLYLYr7rLLYLJLYLjuPkPMB1:      \n           UBBLkkFU2UUUuUUU5U2US2SS0NBMj         \n                UBBOOGBBBBM8MGO0EqZMMr           \n              ,JkEMOq0PJiUXPSqFS58Zr             \n            :LkUjjq1jYJ.,iUvYLJJqU               \n           7i:,7jkZ5LYvYLLvLvYYU2                \n          :i:,,iPBBUY7v7L7v7v7Y2j                \n          iULUN5 NO2LL7777777LL1u                \n          ,F0k:  MEJY7L7v7v777Lu5                \n            .   :M1Y777777r7777u5                \n                UkLr7rrr7r7r7rr7F.               \n                SZqZEM8OMMGOGOE00r               \n                BBBMOEMOMBBZ88BBBi               \n                 :FUJUUkYXMX21UXq                \n                  XUUu21UYBqSU5EP                \n                  X8kXSqq:ZBOMBB.    .           \n.   . . . . ....  5kUYuJqi.kBBP.  ..... ...      \n   . ........,,:,:uj7v7YjkrrLviiii::::.,.... .   \n. . . ....,.,,::i;8MMMBBB81v7ii:i:::,.,......    \n         . ......,,iirrr::.,........ .           \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                 :i77LvL7L7v77;:                 \n              .7JLYvL7777rv7vvYLJr.              \n             ruJ77r7r7r7r7r7r77v7jU;             \n            YuL7v777L77rv7v7v7v7v7YuL            \n           LUY7L7L7YLYLYLYvYLYvL7L7YU7           \n          ,5YvLvYYYLjLJLJLYLYYYLYLYLJ5,          \n          L5YYLYLY77r7rrr7r7777LLJLYY57          \n          1UJLL77r7vuu52S21Uuv7r77LvJU1          \n          2U77vU21S2U1U1U225U1S1U2LvvU2          \n          UYj5ku7UBE,.:::::,,NBY7uPFUYU          \n          UPPJi:.FBB,,::::::.BBX.:iLq01  :   :.  \n          8B7,:,.:Ov..:iii:,.7M:.,:,7BB .P; iuL, \n          kB,.....  ...,::.... ..,..:BZ  Ui::irY \n          1Z,.:::,:,:,rir7j::,:,:::.,EMr1JLrrrLLr\n          NP:iiriririiSBMBS;ir;rrrii:Fk5JU1q1u:. \n          8BL7L77777vrrUE1rr77L7v7L7jFUJFGBM,    \n          7BBE12JJYYLY7v77vYYYYJLJY1XSkMBEi      \n           ruvUkZ0q15U52F155S1PSPFPNEMBu.        \n          :,  .LUNMBMBMBMBOBOMZ8PNEBN7           \n         rL7Y1Uk0X8MZXN7,LkUS21USGq:             \n         r5XNBBBqMBN2UJi,iYLvYLuXL               \n          ...    XM1UYJLLLL7LvJUU     .          \n                 XkULYvL77777LL1v  ,7UUU:        \n                 k5YL7L7L77r7;7JJ .5Uu22Ei       \n                .NjJLL7v77;;;jSZP5juYUJUk1       \n                rkuLL77rr;jPMGSv7LULjJuukU       \n                Y2v7r77Y5BBBPY777YujYJYUkU       \n                qGS5PNMMBBBBBO80NSPFUJUFO:       \n                jBBBGOEBErY2U52XGBBBBMZNr        \n                  Okk5qMS           ...          \n                  PX2FSGq                        \n                  SXSFPqM                        \n                  jE5kS08:       .   .           \n        .   . .   7uL7YJP7  ........... . .      \n   .   . ......,.,5SjuuFXOi:::::,,.,.,........ . \n    . ......,,:::i5EMBBMMFLrrii::::,,,,........  \n       . ............,,,...:,,,,.,.,...... .     \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                 :;v7YLYLYLL77ri                 \n              ,7uLL7v7777r77v7LLj7:              \n             rjY7777r777r7r7777v7Yu7             \n            LUL7v7vvL7v7v7L7v7v7L7Ljj            \n           r2YvL7LvYLYLYLYLYLYvL7L7YUL           \n          .5jLLvYLYLjLYLYLLLYYJLYLYvY5:          \n          ikJYLYvL77rrrrrrrrr77LvYLJL1L          \n          Y1jvL77r7LU2PXqXPF2Yv77rL7JU5          \n          L1vvLU15qkLjYJLjYjY2P515JL7u1          \n          vuu5XLrvBB:.:::,:,.XB2iLSk5YU          \n          YE0L::.7BB:,::::::.BBE.::7SOS  :.   ,  \n          1BY,:,,.Yr..::ri:..:S:..:,iBB  UJ..L1, \n          iBi.....  ....,,.... ..,...BZ  Lr::iiL:\n          L8:.:::::::,7uYjS::::::::,,SMiuUYrriv7r\n          1Brrrrrr;rr;YMMB1r;7rrrr;r:5X5uU2qFU7, \n          uBkYUYY7v7L77vPurrL7L7v7Lv2SUJFEBBi    \n          .i...1XSjujJYv7LYjYjjuJUjSPSkBBZr      \n         .::;i,rkNGPXFXXEXPXqk0XEPNPZMMj.        \n         v12qBXNkSZBMBMBEBOM8OEZkPEMFi           \n          :LBBBBBMBGEFXi.iUJ2juuSGJ              \n                .ZMkUuYr:rLL7YLUF:  :r:          \n                 uNUjLYLYLL7LvJuL :Uuj52:        \n                 UFuvL7L7L7v7vvUJ.UYLJj5S        \n                 22LL7L7L77i;7PNZqu7YYjjP:       \n                 qJY7v77r;iYNM1LrYJL7YLj5r       \n                :kj77r7;rY8BOL77LvUJL7LJN:       \n                rSv7rLYSGBBMk1U51PZMZNX02        \n                UBMZO8BMBBBBBBBBBBEqN2L,         \n                 :BMEEPMq  ,:iirv.               \n                  PqXFq80                        \n                  UZSXPZG                        \n                  jGNN0NM.                       \n                  r0JUUSNi   . . . . . .         \n        . . . . . YJL7JjXS................... .  \n   . . ......,,::iPMOBMBM8vrii::::,,.,...... . . \n    . . ....,.,,:,:i777r;:i::::::,,,,..........  \n         . . .....       ............. . .       \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                   ..,,:,:,:..                   \n                :7YLYLJLYYYLYYJvi.               \n              :ujY77r7r7r7777v7LYUr.             \n             v2vv7v7v777vr77v777vvUu:            \n            YULv7LvLvY7L7LvLLY7L7L7u2,           \n           r5LLvYLYLYLJYjYJYjYJLYLYLUU           \n           SJYLYYjLJYYvYvLLYLYYjYJLJYkr          \n          ikjLJLY77r7777L7777r77vLYLj11          \n          rPYL777YLj5E0ENEN0k5YJvL7LL15          \n          r1YL2FkUB87r7rri7rrjB5SSSJLYF          \n          i52PUv:;BBi.::::::.GBG,rYXq5u      ,   \n          LM8r:,,:BBi.::::i:.SBP.,::uBM.uY..Yu:, \n          iBu,,,..,:.,.:ii,...i..,,,:BB :Y:::;L7 \n          :B7.,.,...,...,,:.....,.,.,MBiuL7iirYJ:\n          rBi::iii:i::YEqOM;:iiiii::,1NFjU1kUY,. \n          YBLi777r777r7qMO2i777r77Lrr55jSZBN.    \n          :BB2juLLvY7L77JJrLvYLYvYLj5q5OB8i      \n           JBBNXZ51juuUYYLUJuU5U5USqZOBk:        \n             :  :NMGZGZBBBZ8Z8Z8E0qBM1.          \n                7NB8OZ8P7SONG00FPNMu.            \n              ,X1UkFYjJ:.:jJYjJukE.              \n             :5LYYkUL7Y7L7YvLvJjk                \n            rFLYLUNu7v7L7L7v7vL1j                \n           :v,,iuEMJv7v777v7v7JU5                \n           :.:::LBZJvL7v7L7v7LLU2                \n           F5LJYiB0YL7v77r7777LYk.               \n           :EMN .BUvrr;r;7r777rL1:               \n                7MPXNNGZMMBGOGZ0M7               \n                vBBBBBBBBMkk1XNBBL               \n                 NOqEZMMqUJLLL2.                 \n                 PEZZMMG2jLL7J5.                 \n                 7MZBMM01LL7LLk.                 \n                  FBMBBNjJ7v7jF, ... . . .       \n    ........,.:::.i5XkSrJL7rr72...,.,...... . .  \n   ......,.::i:iii::,,.iY7rr;r77::,:,,........   \n  . . ......,,:,::::i:;1XU1U2USNq:,...... . .    \n           . . . ....,:Y0MMBBB8E7...             \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                                                 \n                 .,:iirrrrrri:.                  \n               :7uYYLYvYvLLYLJYjr:               \n             :ujY77r7r777r7r7r77JuJ.             \n            r5LL7v7v7v777v777v7L7LYFi            \n           r5Lv7L7Y7LvLLYLLvYvYvYvLLF,           \n          .kYYvYLJLjYJYjYjYjYjYYLYvYjF           \n          j1YLYYJYYLYLL7L7LvLLJYjYJLuFr          \n          F5YYLY7vr7rvvYLL7v777v7LLjYSU          \n          quY7L7YYJUqNG0Z0EPqUJYY7v7YUF          \n          FJvU5PUkBSiriiiririkB21qFULju          \n          52qFYi,XBB.,:::::,,BBU,iYkNU5i:  ,L,   \n         .8Bj:,:.2BO.:::::::.BBj.:::uBOjji.rLLL. \n          BB:,,...:...,i7i,...i...:.iBB ji:,:rLi \n          XM..,,,....,.,,,,,.....,..,BM2JY777j7; \n          M2,::ii:i:i:SNNZE:iiiii:i::2SYu5EPv.   \n         .B0irrv77r7rrYMMMYrr7777v77rF21XBBi     \n          MBNYUYYLY7Lv7L5v77LLYLYvYJSP0MB7       \n          .BBBkGqFuUuuYYLYJUjUu2U150EBML         \n            :. .;F8NZNOMBG8EZE8ZEqZMM7           \n                iqOOG88qJOZGZONPX8OY             \n               1qF1JuJj..iULuJujqP.              \n              vkU5YLvLLriLLLvYY2S                \n             .FY1UYvv7LLY7v7L7J1J                \n             YuY22vv7v7v7v777LL5J                \n            :5JJkJL7L7L7v7L77vL2U                \n            kkukkY7L7v7v7v7LvLvU2                \n            Yii2k77;ririririri7vk                \n            :ri7JLY1UFFkSNXqXS55X:               \n            :1PZBBBBBMBBBBBMBBBBBr               \n              ,:MBPSS0BBiGSFU15Y.                \n                rB0SN8B5 XUJJY1r                 \n                 qBBBBB :E551kqJ     .           \n            . .   rPZ2. qEP551E:  ......... .    \n   . ........,,:,,.,::.r0SYL7vLL,,,,.,........ . \n  ... ....,,::iirr7rvLU5MZZNGEMMv::,,.,...... .  \n     . . ......,,::i:ii;rYY1Uu7i...... .         \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                     .......                     \n                :7LvYLYLYLYLYLLr:                \n              ;jYL7777r7r777777YYJ:              \n            :Ju7777r7r7r7r7r7r7rLLUL.            \n           :UJ7v7L7v7L7v7L7v7L7L7LvUU            \n           UjvL7YvYvYLYLYLYLYvYLLvLL2L           \n          71LLvYYjLJYYLYLYLYYJYJLYvYYS:          \n          SjYLYLL7v77r7r7r7r7rL7YLJLj2J          \n         .kUYL7777rYj55kFk55jY77rv7YL11          \n         .PYL7jU52EU2uUYuJUuU2q2Fuu7vJ5          \n         .2YukFjiPBq.:::::,:.MBJiukqUjj          \n         .qNqr:,.ZBB,,:::::,:BBU.:i7NEX.Y;  7L.  \n         .BB::,,.i0;.::i:i,,.LZ:.,,,iBB 7Y::;7Lr \n          BO..,...  ...,:,...   ..,.:BB Lvi:::Lr,\n          05.,::::,:,:r7rYY:,:,:::,,.0ZkJjLYYU7i.\n         .Bj:irrr;ri;iqBMBPirrr;r;riiU1YU58Mr.   \n          BB7vLL77777rrFq1i77v7v7v7LYkUFZBEi     \n          2BB0kUUYJYYLY7L7YLJLJYJLuUqkOMP:       \n           70L.L5q151FUk1F2F1F5qSXXEOBU,         \n               iPZMGMOBBOBMOMO8N0PMMu.           \n            .5Nq1FSXSS1:.Y552F2USMY              \n            JBM0qJJLYLY::;Y7YLJJqi               \n             iMBMUvL7L7Y7L7L7LL5Y                \n       ,ujjL,    uJ7v7v7v77777Y2Y                \n      ,012JjF.  .U7777r777777vv1J                \n      ukUJuYUL.jOP2;;;v7L7L7vvYUU                \n      ukjuYJLkUY7jkO1v;77L7LvLvU2                \n      JkUYjLjJL7L7vUMMXv7rvr77vLX.               \n      iGUUJu2FUSFPXZMBBBGSUUU21EBr               \n       7E0OBBBBBMZMEEXXUXBB8MMB8U.               \n         ,,:..          .BNq1XN:                 \n                        iMX1120i                 \n                        YBNXkPZ:                 \n            . . .....   S0kUUJ1,  ... ... . .    \n   . . . ........,.,,,.:0XUUYJYk:......... . .   \n. ........,.:,::::iirr7LN8MMBMBG7::,,...... . .  \n  .....,.,,:,::::i:i:iii:iirii:,.,.... . .       \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                      .....                      \n                .rrLLYLYLYLYLL7r.                \n              :LjYL77r7r7r7777LLjL:              \n             LUY7777r7r7r7r7r7777YuY             \n            uJL777v7v7v7v7v7L7v7v7LJu            \n           LuY7vvYvLLYLYLYLYLYvY7Y7YuY           \n          ,FjvLvYLJLJLJYYLYLYYJYJLYLj1:          \n          vFYYLYLY77r7r7rrr7r77LLYLJYFY          \n          u2YvL77r7vU1SSPkk12Yv777vvYU5          \n          u5vvLU1SPSYuJuYujUj1XF15YY7U2          \n          YJuFPJrYBB:.:::,:,.qB1iYSk5YU          \n          uEqL::.YBB::::::::.BB0.::7kMX  i.  ,:  \n          PBL,:,,.U7.,::ri:,.iN:..:,;BB  5L.:Yj:.\n          7B:..... ..,.:::.... ..,..,BG  Jr:::iL.\n          UZ:.:::::::,:,Li:::::::::,.XM72uY7rrYLr\n          SM:iirrr;r;ri7BGirrrrrrrri:5X1jU505U:. \n          FB57LvL7L7L77ru777LvL7L7LvUS2uS8BO:    \n          .BBZJJLJJJYYLYvYLJLjYuYJjSXSPBMP:      \n            kBMqqXkFkSXkEqqSPSNPNX0NOBZ7         \n            :NPNXZGMOMMBXMOM8MEZXNZM2:           \n             kBOE2FU1U1:.i1jUuUuX8Y.             \n              r7v2JYLLLiirLLvYLuk:               \n         .r;i    LUvv7LvY777v7YUj                \n        7SUuu5   1JLvv7777777vL5Y                \n       :PjJLLUr LqJ;rr77v7v7v7YUU                \n       U1uLY7J22XXPF7rrv7LvL7LvU2                \n       U2LY7LJU7r;LkMFv;77L7vvLJk.               \n       k2JvLYuLYLYLYSBBPL7r777rJki               \n       i0PNEBMBMBMBBBBBBBGGqZNMBBr               \n         i7JjuLL7ujjLvi,iB8GZOBr                 \n                        :B0XXSG.                 \n                        iMqNFP0,                 \n                        rONXqXO.                 \n                 .      ;MXS22S:   . .           \n        . . . ......... JXUYYvJj, .........      \n   . . ......,.,,:,::i:;XMZGE8ZBJ:,:.,.... ... . \n. ........,.,,::::i:ii;i;7JjUJY;:.,...... . .    \n   . ..........,.,.,....         . .             \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                    ...,.,....                   \n                ,rLLJYYLJYJYJYJ7i                \n              :JJY7v77r7r7r7r77YYur.             \n             71Yv7v77777vr77v7v7LvUu,            \n            L2LL7L7L7L7L7L7LvL7L7Lvu2.           \n           ;5LLvYLYLYLYYjYJYJYJLYLYLUU           \n           kJYLYYjLjYYLYLYLYLJYjYJLJYki          \n          :XuLJLL77r777rv77r7rv7LLYLj11          \n          ;qjY777L7J2qNENEqNS1LY7v7LL15          \n          r5YLU5X2M0L7v77rv7LjMFkF5YLY5          \n          :5UP5Y:;BB;.::::,:.qBZ,7jqX1u     .,   \n          LOM7:,,:BBi.::::::.SBZ.,::UBM.27.,jY:, \n          iBU,,:..:i.,,ir7:,..7,.,,,:BB rv:::rL; \n          .BL.,.,.. ,.,.:,..,...,.,..MBrUL7iirJJ,\n          ;Bi,:i:i:i:i::5F:::i:i:i::,205JUFSUv.  \n          LBvi77vr7r7rrrOE7rv77rv7LrrUFuFGBX     \n          ,BBUYuLYLY7L77vL7LLYvYvYvj1PFOBZi      \n           JBBqP0FUjUjUYJYUYuJ2U2UFXZOBF:        \n             :  ,jGE0EEBMBZOEG0GZ0NMM1.          \n                iFO8OGMNLkOE8EZkP0Bu.            \n             :2Gk2UUJuJ:.,JjYuJUSZ.              \n            rBBZGjYLL7Y7L7YvLvYjk.               \n            :0BBBXLL777LvL7L7vL1u                \n                :Ljv77v7777777YU5                \n                 jYL7L7v777v7LLU2                \n                .FJ7L7v77r7777vYX.               \n                ,S77r777r7;7rr;Lk:               \n                rNPXZ0MMB8OEZ0ZXMY               \n                uBqXU55GOBBBMBBB:i               \n                 :1Lv7LJ18B80XGS                 \n                  2j7v7YjZMMGG8F                 \n                  UuY7v7JFOMM8GU                 \n               .  L5Lv7vL2kqS5J1i  ... . . . .   \n      . . ....... 72L;rr7uMMMOMMU.:,,........ .  \n     . ......,,::,iL;;ir;7u51SjLi:::,,.,...... . \n    . . ....,,:::7SuUJUuUu5:,...,.,...... . .    \n           . ....vMBMBBBBMki.. . .               \n                                                 \n"
    + "=====\n" +
    "                                                 \n                                                 \n                                                 \n                                                 \n                  ..::i:ii:::..                  \n               .;JYYYJLYLYYJYjYY;,               \n              LjJvv77r7r7r7rv7v7juY.             \n            ,5JL7L7L7v77rv777v7v7LJ5:            \n           ,FYL7L7L7L7YLLvLvLvYvLvYYS,           \n           5jYvLLJLJYJYuYjJJYjYJLYvJjF           \n          iFJLYYJYjYYLYvYvLLYLJYjYYLjF7          \n          JSJJLYvLr7rv7L7v77777L7LYjYFU          \n          52jLL7LLYjPPG0G0EqNUYYY7LvYUk          \n          U27J2XFFBN;7rr;rr7r1BS1P5ULJu          \n          j2XkUr:jBB:.:::::,,MBS:;jkNuFr,  iY.   \n          kBX;::.7BB,:::::::.OBS.::iuBMkY::7vL7  \n          PBr.,.,.i...:i7r:...7...,.:BBiYi:::r7i \n          LB:..,.. ..,.,::.,.. ..,.,.BM2JJ7vYY;: \n          SG::::i:i:i::i0u::iiiiiii::USYUSOFi    \n          0Birrv7777r7rvMNr7777v7v7r;55S0BG.     \n          FBMYUYJLYvYLL7Y7LvLLYLYvYYSq8B8:       \n           BBBPZ0PUUuuJUYuYUJ2u2U150GBZ;         \n            ,,  :YE0ZNOMBMZZZEG0ZNGBMr           \n                 jGM8O80YEG8GO0NXGML             \n               rGN5jUjU..:UYjJUuPN.              \n              ,0XXLYLLL7r7YYvYYUF.               \n              11q2YvL7LLYLv7L7Y2u                \n             ;S2P2vv7v7v7v777LL5u                \n            .F11ZLv7L7L7L7v7vvLU1                \n            Uq2NXL7Y7Y77rv7LvLvU5                \n            YUkMF77rr;ririririr7X.               \n            ;77NjjUXkNNZNNSqkSFFNr               \n            :5GMBBM8GZ8BBBBBBBBBBr               \n              ,,.7ULvYY5PMBOPqPB:                \n                  XYYvYY1ZBOZqM0                 \n                 .NqFkFS5MBBMBM:   .             \n      . ......... NE5uUUFj8BBM7 ..,........ .    \n     . ......,,:::JLrrr7LJ7jY7:rii::::,,........ \n  . . . ....,,::i7M0ENGEOZJi;i;ii::,:.,.... . .  \n     .   ......,.,;U5NXXjr::.,...... .           \n                                                 \n"

// can also access the animations as an associative array / hash map,
// such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"]
var ANIMATIONS = [];
ANIMATIONS["Blank"] = ANIMATIONS["blank"] = ANIMATIONS["BLANK"] = "";
ANIMATIONS["Custom"] = ANIMATIONS["custom"] = ANIMATIONS["CUSTOM"] = CUSTOM;   // you could change the value of this in your code
ANIMATIONS["Exercise"] = ANIMATIONS["exercise"] = ANIMATIONS["EXERCISE"] = EXERCISE;
ANIMATIONS["Juggler"] = ANIMATIONS["juggler"] = ANIMATIONS["JUGGLER"] = JUGGLER;
ANIMATIONS["Bike"] = ANIMATIONS["bike"] = ANIMATIONS["BIKE"] = BIKE;
ANIMATIONS["Dive"] = ANIMATIONS["dive"] = ANIMATIONS["DIVE"] = DIVE;
ANIMATIONS["Call of Duty"] = ANIMATIONS["call of duty"] = ANIMATIONS["CALL OF DUTY"] = CALL_OF_DUTY;
ANIMATIONS["Walking Kid"] = ANIMATIONS["walking kid"] = ANIMATIONS["WALKING KID"] = WALKING_KID;
