# Validation, GridView

This example explains how to validate GridView cells.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "GridViewValidationExample",
            "title": "GridView Validation Example",
            "left": 500,
            "top": 100,
            "width": 800,
            "height": 500,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": true,
                    "createNewRowValueFunction": "createNewRowValue",
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected",
                            "isRequired": true
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 120,
                            "bindsTo": "firstName",
                            "isRequired": true
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 120,
                            "bindsTo": "lastName",
                            "isRequired": true
                        },
                        {
                            "type": "gridviewcomboboxcolumn",
                            "name": "country",
                            "label": "Country",
                            "width": 100,
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue",
                            "isRequired": true
                        },
                        {
                            "type": "gridviewobjectselectorcolumn",
                            "name": "manager",
                            "label": "Manager",
                            "width": 150,
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name",
                            "isRequired": true
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age",
                            "isRequired": true
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
var customerData = {
	createNewRowValue: function () {
		return {
			id: -1,
			firstName: "",
			lastName: "",
			isVip: false,
			isSelected: false,
			age: 0,
			description: "",
			manager: null,
			address: {
				street: "",
				zip: 0,
				city: "",
				country: ""
			}
		};
	},
	list: [
		{
			id: 1,
			firstName: "",
			lastName: "Pizzi",
			isVip: false,
			isSelected: false,
			age: 0,
			description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
			manager: { id: 7, name: "Fiorello Lombardi" },
			address: {
				street: "Via Roma",
				zip: 1000,
				city: "Torino",
				country: "it"
			}
		},
		{
			id: 2,
			firstName: "Jacques",
			lastName: "",
			isVip: true,
			isSelected: true,
			age: 27,
			description: "",
			manager: null,
			address: {
				street: "Bld. Voltaire",
				zip: 2345,
				city: "Paris",
				country: "fr"
			}
		},
		{
			id: 3,
			firstName: "Koen",
			lastName: "Van Bommel",
			isVip: false,
			isSelected: false,
			age: 54,
			description: "",
			manager: null,
			address: {
				street: "Strandstradt",
				zip: 5434,
				city: "Den Haag",
				country: ""
			}
		}
	]
};

// Countries to choose from
var countries = [
	{ optid: "", optvalue: "" },
	{ optid: "be", optvalue: "Belgium" },
	{ optid: "fr", optvalue: "France" },
	{ optid: "it", optvalue: "Italy" },
	{ optid: "nl", optvalue: "Netherlands" }
];

redui.optionsBag["getcountries"](_getcountries_) = function () {
	return countries;
};

// Managers to choose from
var corporateManagement = {
	items: [
		{
			id: 1,
			title: "Chairman",
			name: "Gerardo Marcelo",
			items: []()
		},
		{
			id: 2,
			title: "CFO",
			name: "Salvo Folliero",
			items: []()
		},
		{
			id: 3,
			title: "General Manager",
			name: "Arrigo Onio",
			items: [
				{
					id: 5,
					title: "Sports Director",
					name: "Edoardo Manna",
					items: []()
				},
				{
					id: 6,
					title: "Team Manager",
					name: "Giulio Bellucci",
					items: [
						{
							id: 7,
							title: "Manager",
							name: "Fiorello Lombardi",
							items: []()
						},
						{
							id: 8,
							title: "Goalkeeping Coach",
							name: "Armando Arcuri",
							items: []()
						},
						{
							id: 9,
							title: "Assistant Manager",
							name: "Alessio Ferri",
							items: []()
						},
						{
							id: 10,
							title: "First-team Coach",
							name: "Giuseppe Milani",
							items: []()
						}
					]
				}
			]
		},
		{
			id: 4,
			title: "Director",
			name: "Manlio Ferrari",
			items: []()
		}
	]
};

redui.objectSources.getManager = function (callback) {
	var managersWindow = redui.createNewWindow("ObjectSelectorTreeSelector");
	managersWindow.bind(corporateManagement);

	managersWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			var currentNode = managersWindow.managersTree.currentNode;
			if (currentNode) {
				var object = currentNode.bindingContext;
			}
			callback(object);
		}
	});

	managersWindow.showModal();
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("GridViewValidationExample");
exampleWindow.bind(customerData);
exampleWindow.show();
{code:javascript}