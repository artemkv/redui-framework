# ListBuilder Control Example

This example explains how to create a simple window with ListBuilder control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ListBuilderExample",
            "title": "ListBuilder Example",
            "left": 500,
            "top": 100,
            "width": 600,
            "height": 400,
            "controls": [
                {
                    "name": "countriesListBuilder",
                    "type": "listbuilder",
                    "label": "Countries",
                    "bindsTo": "countries",
                    "getOptionsFunction": "getcountries"
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
var addressData = {
	countries: [ "fr", "it" ](-_fr_,-_it_-)
};
{code:javascript}

## Code

{code:javascript}
var countries = [
	{ id: "be", value: "Belgium", toString: function () { return this.value } },
	{ id: "fr", value: "France", toString: function () { return this.value } },
	{ id: "it", value: "Italy", toString: function () { return this.value } },
	{ id: "nl", value: "Netherlands", toString: function () { return this.value } }
];

redui.optionsBag.getcountries = function () {
	return countries;
};

var exampleWindow = redui.createNewWindow("ListBuilderExample");
exampleWindow.bind(addressData);
exampleWindow.show();
{code:javascript}


.