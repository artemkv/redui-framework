# Editable GridView Control Example

This example explains how to create a window with an editable GridView control, bind to the data and show on the screen. 
GridView is editable because we use _gridviewtextboxcolumn_ column types.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "EditableGridViewExample",
            "title": "Editable GridView Example",
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
                            "type": "gridviewtextboxcolumn",
                            "name": "title",
                            "label": "Title",
                            "width": 150,
                            "bindsTo": "title"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
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
var managersWindow = redui.createNewWindow("EditableGridViewExample");
managersWindow.bind(teamManagement);
managersWindow.show();

managersWindow.closed(function (target, dialogResult) {
	alert("GridView data: " + JSON.stringify(managersWindow.managersGrid.bindingContext));
});
{code:javascript}