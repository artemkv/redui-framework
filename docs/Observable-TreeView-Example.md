# Observable TreeView Example

This example explains how to take advantage of knockout.js observable array.
There is no hard dependency on knockout.js, but if it is used, RedUI will take advantage of it's power.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ObservableTreeViewExample",
            "title": "Observable With TreeView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "myRibbon",
                    "type": "ribbon",
                    "controls": [
                        {
                            "name": "addNewRibbonButton",
                            "type": "ribbonbutton",
                            "text": "Add New Subnode",
                            "iconSource": "/examples/resources/addnew.png"
                        }
                    ]
                },
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
                                "source": "/examples/resources/user-admin.png"
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
                }
            ]
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var subnodes = ko.observableArray([
	{
		title: "Manager",
		name: "Fiorello Lombardi",
		items: []()
	},
	{
		title: "Goalkeeping Coach",
		name: "Armando Arcuri",
		items: []()
	}
]);

var corporateManagement = {
	items: ko.observableArray([
		{
			title: "Team Manager",
			name: "Giulio Bellucci",
			items: subnodes
		}
	])
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ObservableTreeViewExample");
exampleWindow.bind(corporateManagement);
exampleWindow.show();

var counter = 1;
exampleWindow.myRibbon.addNewRibbonButton.getElement().click(function () {
	var newItem = {
		title: "title" + counter.toString(),
		name: "name" + counter.toString(),
		items: []()
	};

	subnodes.push(newItem);
	counter++;
});
{code:javascript}