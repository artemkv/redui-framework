# TextBox Control, Override Input Type

This example shows how to override the value of the type attribute of the input element that is rendered for the TextBox. This can be useful for date, date and time, password fields etc.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "InputTypeExample",
            "title": "TextBox With Overriden Input Type Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 500,
            "controls": [
                {
                    "name": "standardTextBox",
                    "type": "textbox",
                    "label": "Text, Default Option",
                    "bindsTo": "text"
                },
                {
                    "name": "fileTextBox",
                    "type": "textbox",
                    "label": "File",
                    "bindsTo": "fileName",
                    "inputType": "file"
                },
                {
                    "name": "passwordTextBox",
                    "type": "textbox",
                    "label": "Password",
                    "bindsTo": "password",
                    "inputType": "password"
                },
                {
                    "name": "dateTextBox",
                    "type": "textbox",
                    "label": "Date",
                    "bindsTo": "date",
                    "inputType": "date"
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

## TextBox Control, Override Input Type

{code:javascript}
var data = {
	text: "",
	fileName: "",
	password: "",
	date: "",
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("InputTypeExample");
exampleWindow.bind(data);
exampleWindow.show();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		alert("Model data: " + JSON.stringify(data));
	}
});
{code:javascript}


.