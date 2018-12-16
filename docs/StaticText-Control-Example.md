# StaticText Control Example

This example explains how to create a simple window with StaticText control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "StaticTextExample",
            "title": "StaticText Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "infoStaticText",
                    "type": "statictext",
                    "bindsTo": "text"
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "Yes",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "No",
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
var info = {
	text: "Are you sure?"
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("StaticTextExample");
exampleWindow.bind(info);
exampleWindow.show();
{code:javascript}


.