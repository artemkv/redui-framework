# Sortable GridView Control Example

This example explains how to create a window with a sortable GridView control, bind to the data and show on the screen. 

In the real life scenario sorting is expected to be performed on the server based on the sorting info passed from the client. Efficiency of the sorting depends on how the data is stored, so you should be prudent when selecting which columns should be sortable.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "GridViewSortingExample",
            "title": "GridView Column Sorting Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
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
                            "width": 170,
                            "bindsTo": "title",
                            "isSortable": true
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "name",
                            "label": "Name",
                            "width": 280,
                            "bindsTo": "name",
                            "isSortable": true
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
// Function that returns data sorted.
// In the real life this function would perform an ajax request to the server
// That would return data sorted as requested
function getSortedData(sortingInfo) {
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
			},
			{
				id: 17,
				title: "Manager",
				name: "Armando Arcuri",
			},
			{
				id: 18,
				title: "Goalkeeping Coach",
				name: "Alessio Ferri",
			},
			{
				id: 19,
				title: "Assistant Manager",
				name: "Giuseppe Milani",
			},
			{
				id: 20,
				title: "First-team Coach",
				name: "Fiorello Lombardi",
			}
		]
	};

	if (!sortingInfo) {
		return teamManagement;
	}
	
	var columns = sortingInfo.sortingColumns;
	var len = columns.length;

        // In a real-life scenario sorting will be performed on the server
	teamManagement.list.sort(function (a, b) {
		for (var i = 0; i < len; i++) {
			var valueA = a[columns[i](columns[i).columnName];
			var valueB = b[columns[i](columns[i).columnName];

			if (valueA === valueB) {
				continue;
			}

			if (columns[i](i).isAscending) {
				return valueA > valueB;
			} else {
				return valueA < valueB;
			}
		}
	});

	return teamManagement;
}
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("GridViewSortingExample");
var sortedData = getSortedData();
exampleWindow.bind(sortedData);
exampleWindow.show();

exampleWindow.managersGrid.sortingChanged(function (target, sortingInfo) {
	var sortedData = getSortedData(sortingInfo);
	exampleWindow.bind(sortedData);
});
{code:javascript}