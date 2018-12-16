# CheckBox Control Example

This example explains how to create a simple window with CheckBox controls, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "CheckBoxExample",
            "title": "CheckBox Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "canWalkCheckBox",
                    "type": "checkbox",
                    "label": "Can Walk",
                    "bindsTo": "canWalk"
                },
                {
                    "name": "canFlyCheckBox",
                    "type": "checkbox",
                    "label": "Can Fly",
                    "bindsTo": "canFly"
                },
                {
                    "name": "canSwimCheckBox",
                    "type": "checkbox",
                    "label": "Can Swim",
                    "bindsTo": "canSwim"
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "OK",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "Cancel",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var animalData = {
	canWalk: true,
	canFly: false,
	canSwim: true
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("CheckBoxExample");
exampleWindow.bind(animalData);
exampleWindow.show();
{code:javascript}


.