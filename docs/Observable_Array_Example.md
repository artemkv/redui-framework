# Observable Array Example

This example explains how to take advantage of knockout.js observable array.
There is no hard dependency on knockout.js, but if it is used, RedUI will take advantage of it's power.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ObservableArrayExample",
            "title": "Observable Array Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 600,
            "controls": [
                {
                    "name": "managersGrid1",
                    "type": "gridview",
                    "label": "First Grid View",
                    "bindsTo": "list",
                    "canUserAddRows": true,
                    "createNewRowValueFunction": "createNewRowValue",
                    "columns": [
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "title",
                            "label": "Title",
                            "width": 170,
                            "bindsTo": "title"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "name",
                            "label": "Name",
                            "width": 280,
                            "bindsTo": "name"
                        }
                    ]
                },
                {
                    "name": "managersGrid2",
                    "type": "gridview",
                    "label": "Second Grid View",
                    "bindsTo": "list",
                    "canUserAddRows": true,
                    "createNewRowValueFunction": "createNewRowValue",
                    "columns": [
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "title",
                            "label": "Title",
                            "width": 170,
                            "bindsTo": "title"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "name",
                            "label": "Name",
                            "width": 280,
                            "bindsTo": "name"
                        }
                    ]
                }
            ]
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var teamManagement = {
	createNewRowValue: function () {
		return {
			id: 0,
			title: ko.observable(""),
			name: ko.observable(""),
		}
	},
	list: ko.observableArray([
		{
			id: 7,
			title: ko.observable("Manager"),
			name: ko.observable("Fiorello Lombardi"),
		},
		{
			id: 8,
			title: ko.observable("Goalkeeping Coach"),
			name: ko.observable("Armando Arcuri"),
		}
	])
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ObservableArrayExample");
exampleWindow.bind(teamManagement);
exampleWindow.show();
{code:javascript}


.