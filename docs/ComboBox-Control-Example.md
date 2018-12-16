# ComboBox Control Example

This example explains how to create a simple window with ComboBox control, bind to the data and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "ComboBoxExample",
            "title": "ComboBox Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "countryComboBox",
                    "type": "combobox",
                    "label": "Country",
                    "bindsTo": "country",
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
	country: "fr"
};
{code:javascript}

## Code

{code:javascript}
var countries = [
	{ id: "", value: "", toString: function () { return this.value } },
	{ id: "be", value: "Belgium", toString: function () { return this.value } },
	{ id: "fr", value: "France", toString: function () { return this.value } },
	{ id: "it", value: "Italy", toString: function () { return this.value } },
	{ id: "nl", value: "Netherlands", toString: function () { return this.value } }
];

redui.optionsBag.getcountries = function () {
	return countries;
};

var exampleWindow = redui.createNewWindow("ComboBoxExample");
exampleWindow.bind(addressData);
exampleWindow.show();
{code:javascript}


.