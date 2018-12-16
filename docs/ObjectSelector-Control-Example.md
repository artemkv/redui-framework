# ObjectSelector Control Example With GridView

This example explains how to create a simple window with ObjectSelector control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ObjectSelectorExample",
            "title": "ObjectSelector Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
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
                    "name": "managerObjectSelector",
                    "type": "objectselector",
                    "label": "Manager",
                    "bindsTo": "manager",
                    "getObjectFunction": "getManager",
                    "objectValueProperty": "name"
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
        },
        {
            "name": "ObjectSelectorGridSelector",
            "title": "Select Manager",
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "managersGrid",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "title",
                            "label": "Title",
                            "width": 150,
                            "bindsTo": "title"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "name",
                            "label": "Name",
                            "width": 250,
                            "bindsTo": "name"
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
var playerData = {
	firstName: "Claudio",
	lastName: "Lucchesi",
	manager: {}
};

// Options for object selector
var teamManagement = {
	list: [
		{
			id: 7,
			title: "Manager",
			name: "Fiorello Lombardi",
		},
		{
			id: 8,
			title: "Goalkeeping Coach",
			name: "Armando Arcuri",
		},
		{
			id: 9,
			title: "Assistant Manager",
			name: "Alessio Ferri",
		},
		{
			id: 10,
			title: "First-team Coach",
			name: "Giuseppe Milani",
		}
	]
};
{code:javascript}

## Code

{code:javascript}
// This function will be called when user clicks lookup button of the object selector
redui.objectSources.getManager = function (callback) {
	// This window is used to select a manager
	var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
	managersWindow.bind(teamManagement);

	managersWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			// If the row was selected,
			// Get the object bound to the current row
			var currentRow = managersWindow.managersGrid.currentRow;
			if (currentRow) {
				var object = currentRow.bindingContext;
			}
			// Return object to the object selector
			callback(object);
		}
	});

	managersWindow.showModal();
};

var exampleWindow = redui.createNewWindow("ObjectSelectorExample");
exampleWindow.bind(playerData);
exampleWindow.show();
{code:javascript}


.