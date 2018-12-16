# TextArea Control Example

This example explains how to create a simple window with TextArea control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "TextAreaExample",
            "title": "TextArea Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "descriptionTextArea",
                    "type": "textarea",
                    "label": "Description",
                    "bindsTo": "description"
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
var data = {
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("TextAreaExample");
exampleWindow.bind(data);
exampleWindow.show();
{code:javascript}