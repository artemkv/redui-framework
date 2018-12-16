# Dialog Window Example

This example explains how to create a dialog window with "OK" and "Cancel" buttons, show on the screen and process the result.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "DialogWindowExample",
            "title": "Dialog Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "infoStaticText",
                    "type": "statictext",
                    "text": "Confirm the action by clicking OK or Cancel"
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
var exampleWindow = redui.createNewWindow("DialogWindowExample");
exampleWindow.show();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		alert("You clicked OK");
	}
	if (dialogResult === "Cancel") {
		alert("You clicked Cancel");
	}
});
{code:javascript}