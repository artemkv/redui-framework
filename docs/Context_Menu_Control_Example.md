# Context Menu Control Example

This example explains how to create a window with the GridView with the ContextMenu attached which trigger commands allowing to add and remove the items in the GridView.

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
            "name": "ContextMenuExample",
            "title": "Context Menu Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "contextMenu": "ContextMenuDemo",
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
    ],
    "menus": [
        {
            "name": "ContextMenuDemo",
            "type": "contextmenu",
            "menuItems": [
                {
                    "name": "addMenuItem",
                    "type": "menuitem",
                    "text": "Add",
                    "command" : "context_menu_example_add"
                },
                {
                    "name": "removeMenuItem",
                    "type": "menuitem",
                    "text": "Remove",
                    "command" : "context_menu_example_remove"
                },
                {
                    "name": "separator1",
                    "type": "menuseparator"
                },
                {
                    "name": "disabledMenuItem",
                    "type": "menuitem",
                    "text": "Disabled",
                    "command" : "context_menu_example_disabled"
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

redui.commands.context_menu_example_add = {
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
		return true;
	}
};
redui.commands.context_menu_example_remove = {
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
redui.commands.context_menu_example_disabled = {
	execute: function () {
	},
	canExecute: function () {
		return false;
	}
};

var exampleWindow = redui.createNewWindow("ContextMenuExample");
exampleWindow.bind(customersData);
exampleWindow.show();
{code:javascript}


.