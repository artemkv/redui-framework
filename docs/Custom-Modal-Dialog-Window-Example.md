# Custom Modal Dialog Window Example

This example explains how to create a modal dialog window with custom "Yes" and "No" buttons, show on the screen and process the result.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "CustomDialogWindowExample",
            "title": "Custom Dialog Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "infoStaticText",
                    "type": "statictext",
                    "text": "Confirm the action by clicking Yes or No"
                },
                {
                    "name": "YesButton",
                    "type": "button",
                    "text": "Yes",
                    "isDialogButton": true,
                    "dialogResult": "Yes"
                },
                {
                    "name": "NoButton",
                    "type": "button",
                    "text": "No",
                    "isDialogButton": true,
                    "dialogResult": "No"
                }
            ]
        }
    ]
}
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("CustomDialogWindowExample");
exampleWindow.showModal();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "Yes") {
		alert("You clicked Yes");
	}
	if (dialogResult === "No") {
		alert("You clicked No");
	}
	if (dialogResult === "Cancel") {
		alert("Closing window this way returns Cancel");
	}
});
{code:javascript}