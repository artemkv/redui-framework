# ListView Control Example

This example explains how to create a window with a ListView control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ListViewExample",
            "title": "ListView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "albumsListView",
                    "type": "listview",
                    "bindsTo": "items",
                    "label": "Albums",
                    "itemModel": {
                        "name": "albumsListViewItem",
                        "type": "listviewitem",
                        "controls": [
                            {
                                "name": "albumCoverImage",
                                "type": "image",
                                "alternateText": "Image",
                                "width": 55,
                                "height": 55,
                                "bindsTo": "imageUri"
                            },
                            {
                                "name": "yearStaticText",
                                "type": "statictext",
                                "bindsTo": "year"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "bindsTo": "title"
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
var albumsData = {
	items: [
		{
			title: "The Doors",
			year: "1967",
			imageUri: "/examples/resources/images/1967a.jpg"
		},
		{
			title: "Strange Days",
			year: "1967",
			imageUri: "/examples/resources/images/1967b.jpg"
		},
		{
			title: "Waiting for the Sun",
			year: "1968",
			imageUri: "/examples/resources/images/1968.jpg"
		},
		{
			title: "The Soft Parade",
			year: "1969",
			imageUri: "/examples/resources/images/1969.jpg"
		},
		{
			title: "Morrison Hotel",
			year: "1970",
			imageUri: "/examples/resources/images/1970.jpg"
		},
		{
			title: "L.A. Woman",
			year: "1971",
			imageUri: "/examples/resources/images/1971.jpg"
		},
	]
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("ListViewExample");
exampleWindow.bind(albumsData);
exampleWindow.show();
{code:javascript}