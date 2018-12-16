# Image Control Example

This example explains how to create a simple window with Image control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ImageExample",
            "title": "Image Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "userIcon",
                    "type": "image",
                    "alternateText": "User Icon",
                    "width": 64,
                    "height": 64,
                    "bindsTo": "imageUri"
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
var userData = {
	imageUri: "/demo/resources/user-admin.png"
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ImageExample");
exampleWindow.bind(userData);
exampleWindow.show();
{code:javascript}


.