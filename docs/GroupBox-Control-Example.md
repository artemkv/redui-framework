# GroupBox Control Example

This example explains how to create a simple window with GroupBox control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "GroupBoxExample",
            "title": "GroupBox Example",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 450,
            "controls": [
                {
                    "name": "customerFirstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "customerLastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "addressGroupBox",
                    "type": "groupbox",
                    "label": "Address",
                    "controls": [
                        {
                            "name": "streetTextBox",
                            "type": "textbox",
                            "label": "Street",
                            "bindsTo": "address.street"
                        },
                        {
                            "name": "zipTextBox",
                            "type": "textbox",
                            "label": "Zip",
                            "bindsTo": "address.zip"
                        },
                        {
                            "name": "cityTextBox",
                            "type": "textbox",
                            "label": "City",
                            "bindsTo": "address.city"
                        }
                    ]
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
	firstName: "Mario",
	lastName: "Pizzi",
	address: {
		street: "Via Roma",
		zip: 1000,
		city: "Torino"
	}
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("GroupBoxExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}


.