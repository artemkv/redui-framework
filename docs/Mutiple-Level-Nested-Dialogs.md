# Mutiple Level Nested Dialogs

This example shows multiple level of nested dialogs.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "FirstLevelWindow",
            "title": "Customers",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "addNewButton",
                    "type": "button",
                    "text": "Add Customer"
                },
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 200,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 200,
                            "bindsTo": "lastName"
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
        },
        {
            "name": "SecondLevelWindow",
            "title": "New Customer",
            "width": 600,
            "height": 500,
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
                    "name": "customerAgeTextBox",
                    "type": "textbox",
                    "label": "Age",
                    "bindsTo": "age"
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
            "name": "ThirdLevelWindow",
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
var customersData = {
	list: [
		{
			id: 1,
			firstName: "Mario",
			lastName: "Pizzi",
			age: 35,
			manager: { id: 7, name: "Fiorello Lombardi" }
		},
		{
			id: 2,
			firstName: "Jacques",
			lastName: "Petit",
			age: 27,
			manager: { id: 0, name: "" }
		},
		{
			id: 3,
			firstName: "Koen",
			lastName: "Van Bommel",
			age: 54,
			manager: { id: 0, name: "" }
		}
	]
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

// This function will be called when user clicks lookup button of the object selector
redui.objectSources.getManager = function (callback) {
	// This window is used to select a manager
	var thirdLevelWindow = redui.createNewWindow("ThirdLevelWindow");
	thirdLevelWindow.bind(teamManagement);

	thirdLevelWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			// If the row was selected,
			// Get the object bound to the current row
			var currentRow = thirdLevelWindow.managersGrid.currentRow;
			if (currentRow) {
				var object = currentRow.bindingContext;
			}
			// Return object to the object selector
			callback(object);
		}
	});

	thirdLevelWindow.showModal();
};
{code:javascript}

## Code

{code:javascript}
var firstLevelWindow = redui.createNewWindow("FirstLevelWindow");
firstLevelWindow.bind(customersData);
firstLevelWindow.show();

var nextId = 4;
firstLevelWindow.addNewButton.getElement().click(function (target) {
	newCustomerData = {
		id: nextId++,
		firstName: "",
		lastName: "",
		age: 0,
		manager: { id: 0, name: "" }
	};

	var secondLevelWindow = redui.createNewWindow("SecondLevelWindow");
	secondLevelWindow.bind(newCustomerData);
	secondLevelWindow.showModal();

	secondLevelWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			customersData.list.push(secondLevelWindow.bindingContext);
			firstLevelWindow.bind(customersData);
		}
	});
});
{code:javascript}