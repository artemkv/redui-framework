# Master - Detail Example

This example explains how to create a window with a GridView, bind to master data, and show the detail window when the GridView row is selected in a mater window.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "MasterWindowExample",
            "title": "Master Window Example",
            "left": 200,
            "top": 50,
            "width": 600,
            "height": 300,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 200,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 200,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewcomboboxcolumn",
                            "name": "country",
                            "label": "Country",
                            "width": 150,
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue"
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
        },
        {
            "name": "DetailsWindowExample",
            "title": "Details Window Example",
            "left": 900,
            "top": 50,
            "width": 600,
            "height": 500,
            "controls": [
                {
                    "name": "generalGroupBox",
                    "type": "groupbox",
                    "label": "General Info",
                    "controls": [
                        {
                            "name": "customerFirstNameTextBox",
                            "type": "textbox",
                            "label": "First Name",
                            "bindsTo": "firstName"
                        },
                        {
                            "name": "customerLastNameTextBox",
                            "type": "textbox",
                            "label": "Last Name",
                            "bindsTo": "lastName"
                        },
                        {
                            "name": "vipCheckBox",
                            "type": "checkbox",
                            "label": "VIP",
                            "bindsTo": "isVip"
                        },
                        {
                            "name": "descriptionTextArea",
                            "type": "textarea",
                            "label": "Description",
                            "bindsTo": "description",
                            "columns": 30,
                            "rows": 10
                        },
                        {
                            "name": "customerAgeTextBox",
                            "type": "textbox",
                            "label": "Age",
                            "bindsTo": "age"
                        },
                        {
                            "name": "managerObjectSelector",
                            "type": "objectselector",
                            "label": "Manager",
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name"
                        }
                    ]
                },
                {
                    "name": "addressGroupBox",
                    "type": "groupbox",
                    "label": "Address",
                    "bindingContext": "address",
                    "controls": [
                        {
                            "name": "streetTextBox",
                            "type": "textbox",
                            "label": "Street",
                            "bindsTo": "street"
                        },
                        {
                            "name": "zipTextBox",
                            "type": "textbox",
                            "label": "Zip",
                            "bindsTo": "zip"
                        },
                        {
                            "name": "cityTextBox",
                            "type": "textbox",
                            "label": "City",
                            "bindsTo": "city"
                        },
                        {
                            "name": "countryComboBox",
                            "type": "combobox",
                            "label": "Country",
                            "bindsTo": "country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue"
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
// Data for master window
var customersData = {
	list: [
		{
			id: 1,
			firstName: "Mario",
			lastName: "Pizzi",
			isVip: false,
			age: 35,
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
			lastName: "Petit",
			isVip: true,
			age: 27,
			description: "",
			manager: { id: 0, name: "" },
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
			age: 54,
			description: "",
			manager: { id: 0, name: "" },
			address: {
				street: "Strandstradt",
				zip: 5434,
				city: "Den Haag",
				country: "nl"
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

// Options for object selector
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

// This function will be called when user clicks lookup button of the object selector
redui.objectSources.getManager = function (callback) {
	// This window is used to select a manager
	var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
	managersWindow.bind(teamManagement);

	managersWindow.closed(function (target, dialogResult) {
		if (dialogResult === "OK") {
			// If the row was selected,
			// Get the object bound to the current row
			var currentRow = managersWindow.managersGrid.currentRow;
			if (currentRow) {
				var object = currentRow.bindingContext;
			}
			// Return object to the object selector
			callback(object);
		}
	});

	managersWindow.showModal();
};
{code:javascript}

## Code

{code:javascript}
// Master window
var masterWindow = redui.createNewWindow("MasterWindowExample");
masterWindow.bind(customersData);
masterWindow.show();

// Detail Window
var detailWindow;

// Register to the grid events
masterWindow.customersGrid.rowSelected(function (target, row) {
	// Clear existing detail window
	if (detailWindow) {
		detailWindow.close();
	}
	// Create a new detail window
	detailWindow = redui.createNewWindow("DetailsWindowExample");

	// Get the selected customer's data
	var customerData = row.bindingContext;

	if (customerData) {
		// Bind the detail window to the selected customer details
		detailWindow.bind(customerData);

		// When detail window is closed, update the master window
		detailWindow.closed(function (target, dialogResult) {
			if (dialogResult === "OK") {
				var updatedCustomerData = detailWindow.bindingContext;
				row.bind(updatedCustomerData);
			}
		});

		// Show the details window
		detailWindow.show();
	}
});
{code:javascript}