# Store/Restore Window State

This example explains how enable change tracking for the window.
When reopened, window keeps its size and position. GridView inside the window keeps the order, visibility and width of every column.

Set _trackChanges_ window model property to true to force changes to be stored in the local storage.
Use the _version_ window model property to avoid conflicts when changing the window model.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "TrackChangesExample",
            "trackChanges": true,
            "version": 0,
            "title": "This Window Keeps User Changes",
            "left": 500,
            "top": 100,
            "width": 800,
            "height": 500,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 120,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 120,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age"
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
	list: [
		{
			id: 1,
			firstName: "Mario",
			lastName: "Pizzi",
			isVip: false,
			isSelected: false,
			age: 0,
			description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
			manager: { id: 7, name: "Fiorello Lombardi" },
			address: {
				street: "Via Roma",
				zip: 1000,
				city: "Torino",
				country: "it"
			}
		},
		{
			id: 2,
			firstName: "Jacques",
			lastName: "Petit",
			isVip: true,
			isSelected: true,
			age: 27,
			description: "",
			manager: { id: 0, name: "" },
			address: {
				street: "Bld. Voltaire",
				zip: 2345,
				city: "Paris",
				country: "fr"
			}
		},
		{
			id: 3,
			firstName: "Koen",
			lastName: "Van Bommel",
			isVip: false,
			isSelected: false,
			age: 54,
			description: "",
			manager: { id: 0, name: "" },
			address: {
				street: "Strandstradt",
				zip: 5434,
				city: "Den Haag",
				country: "nl"
			}
		}
	]
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("TrackChangesExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}