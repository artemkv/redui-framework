# Validation, Model Validation

This example explains how to use the model validation.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ModelValidationExample",
            "title": "Model Validation Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 400,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "emailTextBox",
                    "type": "textbox",
                    "label": "Email",
                    "bindsTo": "email1"
                },
                {
                    "name": "repeatEmailTextBox",
                    "type": "textbox",
                    "label": "Repeat Email",
                    "bindsTo": "email2"
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
	firstName: "Claudio",
	lastName: "Lucchesi",
	email1: "claudio.lucchesi@xmail.com",
	email2: "",
	// This is a custom validation function
	// When return value is a "falsy" value, control is considered valid
	// When return value is a "thruthy" value, is is treated as an error message
	validate: function (control, value) {
		if (control.name === "emailTextBox" || control.name === "repeatEmailTextBox") {
			if (this.email1 !== this.email2) {
				return "Emails do not match"
			}
			return null;
		}
	}
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ModelValidationExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}