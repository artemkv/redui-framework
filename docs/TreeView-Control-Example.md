# TreeView Control Example

This example explains how to create a window with a TreeView control, bind to the data and show on the screen. 
In this example, TreeViewNode contains Image and StaticText control, but it can contain any control type.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "TreeViewExample",
            "title": "TreeView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
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
var exampleWindow = redui.createNewWindow("TreeViewExample");
exampleWindow.bind(corporateManagement);

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		var currentNode = exampleWindow.managersTree.currentNode;
		if (currentNode) {
			var object = currentNode.bindingContext;
			alert("Selected node: " + JSON.stringify(object));
		} else {
			alert("Node was not selected.");
		}
	}
});

exampleWindow.show();
{code:javascript}