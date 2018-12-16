# Validation, Maximum Length

This example explains how to configure maximum length for text fields. 

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "MaxLengthValidationExample",
            "title": "Maximum Length Validation Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName",
                    "maxlength": 7
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName",
                    "maxlength": 7,
                    "validationErrorMessage": "Last name is too long"
                },
                {
                    "name": "descriptionTextArea",
                    "type": "textarea",
                    "label": "Description",
                    "bindsTo": "description",
                    "columns": 30,
                    "rows": 10,
                    "maxlength": 20
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
	firstName: "This name is too long",
	lastName: "This name is too long",
	description: "This description is too long"
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("MaxLengthValidationExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}


.