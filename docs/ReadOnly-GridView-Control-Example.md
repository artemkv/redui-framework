# ReadOnly GridView Control Example

This example explains how to create a window with a read-only GridView control, bind to the data and show on the screen. 
GridView is read-only because we use _gridviewstatictextcolumn_ column types.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ReadOnlyGridViewExample",
            "title": "Read-Only GridView Example",
            "left": 500,
            "top": 100,
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
var managersWindow = redui.createNewWindow("ReadOnlyGridViewExample");
managersWindow.bind(teamManagement);

managersWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		var currentRow = managersWindow.managersGrid.currentRow;
		if (currentRow) {
			var object = currentRow.bindingContext;
			alert("Selected row: " + JSON.stringify(object));
		} else {
			alert("Row was not selected.");
		}
	}
});

managersWindow.show();
{code:javascript}