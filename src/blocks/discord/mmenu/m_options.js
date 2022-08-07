import * as Blockly from "blockly";


const blockName = "c_options";

const blockData = {
    "message0": "Get %1 option",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH",
            "options": [
                [
                    "message",
                    "targetMessage"
                ],
                [
                    "user",
                    "targetUser"
                ],
                [
                    "member",
                    "targetMember"
                ],

            ]
        }
    ],
    "colour": "#4C97FF",
    "output": ["String", "Member", "User"],
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH");
    return [`interaction.options.${searchType}`, Blockly.JavaScript.ORDER_NONE];
};
