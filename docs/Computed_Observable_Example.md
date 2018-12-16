# Computed Observable Example

This example explains how to take advantage of knockout.js computed observable.
There is no hard dependency on knockout.js, but if it is used, RedUI will take advantage of it's power.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ComputedObservableExample",
            "title": "Computed Observable Example",
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
                    "name": "fullNameTextBox",
                    "type": "textbox",
                    "label": "Full Name",
                    "bindsTo": "fullName"
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

// Computed observable
customerData.fullName = ko.computed(function () { return this.firstName() + " " + this.lastName(); }, customerData);
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ComputedObservableExample");
exampleWindow.bind(customerData);

// Disable full text textbox
exampleWindow.fullNameTextBox.getElement().prop('readonly', true);

exampleWindow.show();
{code:javascript}


.