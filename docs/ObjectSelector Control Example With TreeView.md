# ObjectSelector Control Example With TreeView

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
            "name": "ObjectSelectorTreeSelector",
            "title": "Select Manager",
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "managersTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "managersTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "source": "/demo/resources/user-admin.png"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "bindsTo": "name"
                            }
                        ]
                    }
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
var corporateManagement = {
	items: [
		{
			id: 1,
			title: "Chairman",
			name: "Gerardo Marcelo",
			items: []()
		},
		{
			id: 2,
			title: "CFO",
			name: "Salvo Folliero",
			items: []()
		},
		{
			id: 3,
			title: "General Manager",
			name: "Arrigo Onio",
			items: [
				{
					id: 5,
					title: "Sports Director",
					name: "Edoardo Manna",
					items: []()
				},
				{
					id: 6,
					title: "Team Manager",
					name: "Giulio Bellucci",
					items: [
						{
							id: 7,
							title: "Manager",
							name: "Fiorello Lombardi",
							items: []()
						},
						{
							id: 8,
							title: "Goalkeeping Coach",
							name: "Armando Arcuri",
							items: []()
						},
						{
							id: 9,
							title: "Assistant Manager",
							name: "Alessio Ferri",
							items: []()
						},
						{
							id: 10,
							title: "First-team Coach",
							name: "Giuseppe Milani",
							items: []()
						}
					]
				}
			]
		},
		{
			id: 4,
			title: "Director",
			name: "Manlio Ferrari",
			items: []()
		}
	]
};
{code:javascript}

## Code

{code:javascript}
// This function will be called when user clicks lookup button of the object selector
redui.objectSources.getManager = function (callback) {
	// This window is used to select a manager
	var managersWindow = redui.createNewWindow("ObjectSelectorTreeSelector");
	managersWindow.bind(corporateManagement);

	managersWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			// If the node was selected,
			// Get the object bound to the current node
			var currentNode = managersWindow.managersTree.currentNode;
			if (currentNode) {
				var object = currentNode.bindingContext;
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