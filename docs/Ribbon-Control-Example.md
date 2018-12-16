# Ribbon Control Example

This example explains how to create a window with the Ribbon control with Ribbon Buttons which trigger commands allowing to add and remove the items in the GridView.

Every command has to be added to _redui.commands_ object as a property and has to provide 2 functions:
* **execute** - executes the command
* **canExecute** - determines whether the command can be executed.

When RibbonButton is bound to a command (property "command"):
* Click on the RibbonButton triggers the command (executes function 'execute')
* State of the command (result of 'canExecute' function) controls the state of the RibbonButton

'canExecute' function of every command is triggered automatically:
* Upon every event of the following types:
	* {"redui_gridview_currentrowchanged"}
	* {"redui_gridview_sortingchanged"}
	* {"redui_treeview_currentnodechanged"}
	* {"redui_treeviewnode_expanded"}
	* {"redui_window_shown"}
	* {"redui_window_closed"}
	* {"redui_pager_pagechanged"}
	* change
	* select
	* focusin
	* focusout
* After any of the command is executed

_Don't put the complex long-running logic into 'canExecute' function!_

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "RibbonExample",
            "title": "Ribbon Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
            "controls": [
                {
                    "name": "myRibbon",
                    "type": "ribbon",
                    "controls": [
                        {
                            "name": "refreshRibbonButton",
                            "type": "ribbonbutton",
                            "text": "Remove",
                            "iconSource": "/examples/resources/remove32x32.png",
                            "command" : "ribbon_example_remove"
                        },
                        {
                            "name": "addNewRibbonButton",
                            "type": "ribbonbutton",
                            "text": "New",
                            "iconSource": "/examples/resources/addnew.png",
                            "command" : "ribbon_example_addnew"
                        }
                    ]
                },
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 200,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
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
            "name": "NewCustomerWindow",
            "title": "New Customer",
            "width": 400,
            "height": 300,
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
			lastName: "Pizzi"
		},
		{
			id: 2,
			firstName: "Jacques",
			lastName: "Petit"
		},
		{
			id: 3,
			firstName: "Koen",
			lastName: "Van Bommel"
		}
	]
};
{code:javascript}

## Code

{code:javascript}
var nextCustomerId = 4;

redui.commands.ribbon_example_remove = {
	execute: function () {
		var currentRow = exampleWindow.customersGrid.currentRow;
		if (currentRow) {
			var customer = currentRow.bindingContext;

			var index = -1;
			for (var i = 0, len = customersData.list.length; i < len; i++) {
				if (customersData.list[i](i).id == customer.id) {
					index = i;
					break;
				}
			}

			customersData.list.splice(index, 1);
			exampleWindow.customersGrid.bind(customersData);
		}
	},
	canExecute: function () {
		var currentRow = exampleWindow.customersGrid.currentRow;
		if (currentRow) {
			return true;
		}
		return false;
	}
};
redui.commands.ribbon_example_addnew = {
	execute: function () {
		var newCustomer = {
			id: nextCustomerId++,
			firstName: "",
			lastName: ""
		};

		var newCustomerWindow = redui.createNewWindow("NewCustomerWindow");
		newCustomerWindow.bind(newCustomer);
		newCustomerWindow.showModal();

		newCustomerWindow.closed(function (target, dialogResult) {
			if (dialogResult === "OK") {
				customersData.list.push(newCustomer);
				exampleWindow.customersGrid.bind(customersData);
			}
		});
	},
	canExecute: function () {
		if (customersData.list.length < 5) {
			return true;
		}
		return false;
	}
};

var exampleWindow = redui.createNewWindow("RibbonExample");
exampleWindow.bind(customersData);
exampleWindow.show();
{code:javascript}