# Validation, Required Fields

This example explains how to configure required fields. Field firstNameTextBox relies on the default error message, field lastNameTextBox uses the custom one.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ValidationExample",
            "title": "Validation Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName",
                    "isRequired": true
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName",
                    "isRequired": true,
                    "validationErrorMessage": "Last Name was not provided"
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
var customerData = {
	firstName: "",
	lastName: "",
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ValidationExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}