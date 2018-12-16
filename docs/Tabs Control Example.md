# Tabs Control Example

This example explains how to create a window with Tabs control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "TabsControlExample",
            "title": "Tabs Control Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "tabsControl",
                    "type": "tabs",
                    "tabPages": [
                        {
                            "name": "generalTabPage",
                            "type": "tabpage",
                            "title": "General",
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
                                }
                            ]
                        },
                        {
                            "name": "addressTabPage",
                            "type": "tabpage",
                            "title": "Address",
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
var exampleWindow = redui.createNewWindow("TabsControlExample");
exampleWindow.bind(customerData);
exampleWindow.show();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		alert("Model data: " + JSON.stringify(customerData));
	}
});
{code:javascript}


.