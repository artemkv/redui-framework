# Validation, Pattern Match

This example explains how to configure validation pattern for the text fields. Field urlTextBox relies on the default error messages, which are different for required field and pattern match checks. Field emailTextBox uses the custom one, which is the same for all validation scenarios. Field ipAddressTextBox is not marked as required, and relies only on the pattern.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "PatternValidationExample",
            "title": "Pattern Validation Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "urlTextBox",
                    "type": "textbox",
                    "label": "Url",
                    "bindsTo": "url",
                    "isRequired": true,
                    "pattern": "https?://.+"
                },
                {
                    "name": "emailTextBox",
                    "type": "textbox",
                    "label": "Email",
                    "bindsTo": "email",
                    "isRequired": true,
                    "pattern": ".+@.+\\..+",
                    "validationErrorMessage": "Email was not provided or doesn't have a correct format"
                },
                {
                    "name": "ipAddressTextBox",
                    "type": "textbox",
                    "label": "IP Address",
                    "bindsTo": "ipAddress",
                    "pattern": "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"
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
var siteData = {
	url: "",
	email: "",
	ipAddress: ""
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("PatternValidationExample");
exampleWindow.bind(siteData);
exampleWindow.show();
{code:javascript}


.