# Button Control Example

This example explains how to create a simple window with a Button control and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ButtonExample",
            "title": "Button Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "SimpleButton",
                    "type": "button",
                    "text": "Simple Button"
                },
                {
                    "name": "DialogButton",
                    "type": "button",
                    "text": "Dialog Button",
                    "isDialogButton": true
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

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ButtonExample");
exampleWindow.show();

exampleWindow.SimpleButton.getElement().click(function () {
	alert("Simple button clicked");
});
exampleWindow.DialogButton.getElement().click(function () {
	alert("Dialog button clicked");
});
{code:javascript}


.