# Dynamic TreeView Control Example

This example explains how to create a window with a TreeView control, bind to the data and dynamically add subnodes when the node is expanded.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "DynamicTreeViewExample",
            "title": "Dynamic TreeView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "dynamicTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "dynamicTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "textStaticText",
                                "type": "statictext",
                                "bindsTo": "text"
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
var stubNode = {
	text: "",
	items: []()
};

var treeRootNode = {
	items: [
		{
			text: "root",
			// Adding a stub subnode allows to expand the node
			items: [stubNode](stubNode)
		}
	]
};

// In the real life this function would do an ajax request to the server
var getSubnodes = (function () {
	var counter = 0;
	return function () {
		return [
			{
				text: "node" + counter++,
				items: [stubNode](stubNode)
			},
			{
				text: "node" + counter++,
				items: [stubNode](stubNode)
			},
			{
				text: "node" + counter++,
				items: [stubNode](stubNode)
			}
		]
	};
})();
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("DynamicTreeViewExample");
exampleWindow.bind(treeRootNode);
exampleWindow.show();

exampleWindow.dynamicTree.nodeExpanded(function (target, node) {
	var nodeData = node.bindingContext;
	nodeData.items = getSubnodes();
	node.bind(nodeData);
});
{code:javascript}