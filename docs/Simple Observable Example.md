# Simple Observable Example

This example explains how to take advantage of knockout.js observable.
There is no hard dependency on knockout.js, but if it is used, RedUI will take advantage of it's power.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "SimpleObservableExample",
            "title": "Simple Observable Example",
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
                    "name": "firstName1TextBox",
                    "type": "textbox",
                    "label": "First Name'",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastName1TextBox",
                    "type": "textbox",
                    "label": "Last Name'",
                    "bindsTo": "lastName"
                }
            ]
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var customerData = {
	firstName: ko.observable(""),
	lastName: ko.observable("")
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("SimpleObservableExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}


.