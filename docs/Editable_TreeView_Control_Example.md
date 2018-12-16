# Editable TreeView Control Example

This example explains how to create a window with a TreeView with editable controls.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "EditableTreeViewExample",
            "title": "Editable TreeView Example",
            "left": 500,
            "top": 100,
            "width": 900,
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
                                "type": "combobox",
                                "bindsTo": "title",
                                "getOptionsFunction": "getTitles"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "textbox",
                                "bindsTo": "name"
                            },
                            {
                                "name": "mentorObjectSelector",
                                "type": "objectselector",
                                "bindsTo": "mentor",
                                "getObjectFunction": "getMentor",
                                "objectValueProperty": "name"
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
var corporateManagement = {
	items: [
		{
			id: 1,
			title: "chairman",
			name: "Gerardo Marcelo",
			mentor: {},
			items: []()
		},
		{
			id: 2,
			title: "cfo",
			name: "Salvo Folliero",
			mentor: {},
			items: []()
		},
		{
			id: 3,
			title: "general_manager",
			name: "Arrigo Onio",
			mentor: {},
			items: [
				{
					id: 5,
					title: "sports_director",
					name: "Edoardo Manna",
					mentor: {},
					items: []()
				},
				{
					id: 6,
					title: "team_manager",
					name: "Giulio Bellucci",
					mentor: {},
					items: [
						{
							id: 7,
							title: "manager",
							name: "Fiorello Lombardi",
							mentor: {},
							items: []()
						},
						{
							id: 8,
							title: "gk_coach",
							name: "Armando Arcuri",
							mentor: {},
							items: []()
						},
						{
							id: 9,
							title: "assist_manager",
							name: "Alessio Ferri",
							mentor: {},
							items: []()
						},
						{
							id: 10,
							title: "coach",
							name: "Giuseppe Milani",
							mentor: {},
							items: []()
						}
					]
				}
			]
		},
		{
			id: 4,
			title: "director",
			name: "Manlio Ferrari",
			mentor: {},
			items: []()
		}
	]
};

var titles = [
	{ id: "", value: "", toString: function () { return this.value } },
	{ id: "chairman", value: "Chairman", toString: function () { return this.value } },
	{ id: "cfo", value: "CFO", toString: function () { return this.value } },
	{ id: "general_manager", value: "General Manager", toString: function () { return this.value } },
	{ id: "sports_director", value: "Sports Director", toString: function () { return this.value } },
	{ id: "team_manager", value: "Team Manager", toString: function () { return this.value } },
	{ id: "manager", value: "Manager", toString: function () { return this.value } },
	{ id: "gk_coach", value: "Goalkeeping Coach", toString: function () { return this.value } },
	{ id: "assist_manager", value: "Assistant Manager", toString: function () { return this.value } },
	{ id: "coach", value: "First-team Coach", toString: function () { return this.value } },
	{ id: "director", value: "Director", toString: function () { return this.value } }
];

redui.optionsBag.getTitles = function () {
	return titles;
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
redui.objectSources.getMentor = function (callback) {
	// This window is used to select a mentor
	var mentorsWindow = redui.createNewWindow("ObjectSelectorGridSelector");
	mentorsWindow.bind(teamManagement);

	mentorsWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			// If the row was selected,
			// Get the object bound to the current row
			var currentRow = mentorsWindow.managersGrid.currentRow;
			if (currentRow) {
				var object = currentRow.bindingContext;
			}
			// Return object to the object selector
			callback(object);
		}
	});

	mentorsWindow.showModal();
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("EditableTreeViewExample");
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


.