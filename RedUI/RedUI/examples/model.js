{
    "windows": [
        {
            "name": "DepartmentTree",
            "title": "Department",
            "left": 50,
            "top": 50,
            "width": 200,
            "height": 200,
            "controls": [
                {
                    "name": "dockButton",
                    "type": "button",
                    "text": "Dock"
                },
                {
                    "name": "undockButton",
                    "type": "button",
                    "text": "Undock"
                },
                {
                    "name": "departmentTree",
                    "type": "treeview",
                    "bindsTo": "list",
                    "nodeModel": {
                        "name": "departmentTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "list",
                        "controls": [
                            {
                                "name": "isSelectedCheckBox",
                                "type": "checkbox",
                                "bindsTo": "isSelected"
                            },
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "bindsTo": "image"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "text": "",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "text": "",
                                "bindsTo": "name"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "DepartmentTreeSelector",
            "title": "Department",
            "left": 50,
            "top": 50,
            "width": 600,
            "height": 600,
            "controls": [
                {
                    "name": "departmentTree",
                    "type": "treeview",
                    "label": "Department",
                    "bindsTo": "list",
                    "nodeModel": {
                        "name": "departmentTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "list",
                        "controls": [
                            {
                                "name": "isSelectedCheckBox",
                                "type": "checkbox",
                                "bindsTo": "isSelected"
                            },
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "bindsTo": "image"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "text": "",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "text": "",
                                "bindsTo": "name"
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
        },
        {
            "name": "CustomersGrid",
            "title": "All Customers",
            "left": 451,
            "top": 50,
            "width": 800,
            "height": 600,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Editable Grid",
                    "type": "gridview",
                    "bindsTo": "list",
                    "createNewRowValueFunction": "createNewRowValue",
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 120,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 120,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewcomboboxcolumn",
                            "name": "country",
                            "label": "Country",
                            "width": 100,
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue"
                        },
                        {
                            "type": "gridviewobjectselectorcolumn",
                            "name": "manager",
                            "label": "Manager",
                            "width": 120,
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age"
                        }
                    ]
                },
                {
                    "name": "SaveButton",
                    "type": "button",
                    "text": "Save"
                },
                {
                    "name": "EditButton",
                    "type": "button",
                    "text": "Edit"
                },
                {
                    "name": "BigDataButton",
                    "type": "button",
                    "text": "BigData"
                },
                {
                    "name": "BigPagedDataButton",
                    "type": "button",
                    "text": "BigData Paged"
                },
                {
                    "name": "PagersButton",
                    "type": "button",
                    "text": "Pagers"
                },
                {
                    "name": "customersReadOnlyGrid",
                    "label": "Read-Only Grid",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 150,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 250,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 100,
                            "bindsTo": "age",
                            "cssClass": "redui-demo-bold"
                        }
                    ]
                }
            ]
        },
        {
            "name": "CustomerDetailsSingleContext",
            "title": "Customer Details",
            "left": 451,
            "top": 350,
            "width": 600,
            "height": 500,
            "controls": [
                {
                    "name": "generalStaticText",
                    "type": "statictext",
                    "text": "General Info"
                },
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
                    "name": "addressGroupBox",
                    "type": "groupbox",
                    "label": "Address",
                    "controls": [
                        {
                            "name": "streetTextBox",
                            "type": "textbox",
                            "label": "Street",
                            "bindsTo": "address.street"
                        },
                        {
                            "name": "zipTextBox",
                            "type": "textbox",
                            "label": "Zip",
                            "bindsTo": "address.zip"
                        },
                        {
                            "name": "cityTextBox",
                            "type": "textbox",
                            "label": "City",
                            "bindsTo": "address.city"
                        },
                        {
                            "name": "countryComboBox",
                            "type": "combobox",
                            "label": "Country",
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries"
                        }
                    ]
                },
                {
                    "name": "vipCheckBox",
                    "type": "checkbox",
                    "label": "VIP",
                    "bindsTo": "isVip"
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "Cancel"
                }
            ]
        },
        {
            "name": "CustomerDetailsGroupBoxChangesContext",
            "title": "Customer Details",
            "left": 1280,
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
						    "name": "detailslStaticText",
						    "type": "statictext",
						    "text": "Details"
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
				    "name": "EditButton",
				    "type": "button",
				    "text": "Edit",
				    "isDialogButton": true
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
            "name": "CustomerDetailsWindowChangesContext",
            "title": "Customer Details",
            "left": 451,
            "top": 350,
            "width": 600,
            "height": 500,
            "bindingContext": "some.property",
            "controls": [
                {
                    "name": "generalStaticText",
                    "type": "statictext",
                    "text": "General Info"
                },
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
                            "getOptionsFunction": "getcountries"
                        }
                    ]
                },
                {
                    "name": "vipCheckBox",
                    "type": "checkbox",
                    "label": "VIP",
                    "bindsTo": "isVip"
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "Cancel"
                }
            ]
        },
        {
            "name": "SimpleBindingExample",
            "title": "Customer Details",
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
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
            "name": "TextAreaBindingExample",
            "title": "Customer Details",
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "descriptionTextBox",
                    "type": "textarea",
                    "label": "Description",
                    "bindsTo": "description",
                    "columns": 40,
                    "rows": 10
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
            "name": "CheckBoxBindingExample",
            "title": "Customer Details",
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
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
            "name": "AddressEditor",
            "title": "Address",
            "width": 400,
            "height": 400,
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
            "name": "CustomersSimpleGrid",
            "title": "All Customers",
            "width": 800,
            "height": 600,
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
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 120,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 120,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewcomboboxcolumn",
                            "name": "country",
                            "label": "Country",
                            "width": 100,
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age"
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
            "name": "DepartmentTreeEditable",
            "title": "Department",
            "width": 1200,
            "height": 600,
            "controls": [
                {
                    "name": "departmentTree",
                    "type": "treeview",
                    "bindsTo": "list",
                    "nodeModel": {
                        "name": "departmentTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "list",
                        "controls": [
                            {
                                "name": "isSelectedCheckBox",
                                "type": "checkbox",
                                "bindsTo": "isSelected"
                            },
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "bindsTo": "image"
                            },
                            {
                                "name": "titleTextBox",
                                "type": "textbox",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameTextBox",
                                "type": "textbox",
                                "bindsTo": "name"
                            },
							{
							    "name": "assistantObjectSelector",
							    "type": "objectselector",
							    "bindsTo": "assistant",
							    "getObjectFunction": "getManager",
							    "objectValueProperty": "name"
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
        },
        {
            "name": "CustomStylesAndHiddenExample",
            "title": "Customer Details",
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName",
                    "cssClass": "redui-demo-bold"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName",
                    "isHidden": true
                }
            ]
        },
        {
            "name": "ExamplesTree",
            "title": "Examples",
            "left": 50,
            "top": 50,
            "width": 200,
            "height": 200,
            "controls": [
                {
                    "name": "examplesTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "examplesTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "text": "",
                                "bindsTo": "title"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "TextBoxExample",
            "title": "TextBox Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
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
            "name": "TextAreaExample",
            "title": "TextArea Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "descriptionTextArea",
                    "type": "textarea",
                    "label": "Description",
                    "bindsTo": "description"
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
            "name": "CheckBoxExample",
            "title": "CheckBox Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "canWalkCheckBox",
                    "type": "checkbox",
                    "label": "Can Walk",
                    "bindsTo": "canWalk"
                },
                {
                    "name": "canFlyCheckBox",
                    "type": "checkbox",
                    "label": "Can Fly",
                    "bindsTo": "canFly"
                },
                {
                    "name": "canSwimCheckBox",
                    "type": "checkbox",
                    "label": "Can Swim",
                    "bindsTo": "canSwim"
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
            "name": "StaticTextExample",
            "title": "StaticText Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "infoStaticText",
                    "type": "statictext",
                    "bindsTo": "text"
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "Yes",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "No",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        },
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
        },
        {
            "name": "ListBuilderExample",
            "title": "ListBuilder Example",
            "left": 500,
            "top": 100,
            "width": 500,
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
        },
        {
            "name": "ImageExample",
            "title": "Image Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "userIcon",
                    "type": "image",
                    "alternateText": "User Icon",
                    "width": 64,
                    "height": 64,
                    "bindsTo": "imageUri"
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
            "name": "GroupBoxExample",
            "title": "GroupBox Example",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 450,
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
                    "name": "addressGroupBox",
                    "type": "groupbox",
                    "label": "Address",
                    "controls": [
                        {
                            "name": "streetTextBox",
                            "type": "textbox",
                            "label": "Street",
                            "bindsTo": "address.street"
                        },
                        {
                            "name": "zipTextBox",
                            "type": "textbox",
                            "label": "Zip",
                            "bindsTo": "address.zip"
                        },
                        {
                            "name": "cityTextBox",
                            "type": "textbox",
                            "label": "City",
                            "bindsTo": "address.city"
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
            "name": "TabsControlExample",
            "title": "Tabs Control Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "tabsControl",
                    "type": "tabs",
                    "tabPages": [
                        {
                            "name": "generalTabPage",
                            "type": "tabpage",
                            "title": "General",
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
                                }
                            ]
                        },
                        {
                            "name": "addressTabPage",
                            "type": "tabpage",
                            "title": "Address",
                            "controls": [
                                {
                                    "name": "streetTextBox",
                                    "type": "textbox",
                                    "label": "Street",
                                    "bindsTo": "address.street"
                                },
                                {
                                    "name": "zipTextBox",
                                    "type": "textbox",
                                    "label": "Zip",
                                    "bindsTo": "address.zip"
                                },
                                {
                                    "name": "cityTextBox",
                                    "type": "textbox",
                                    "label": "City",
                                    "bindsTo": "address.city"
                                }
                            ]
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
        },
        {
            "name": "AccordionPanelControlExample",
            "title": "Accordion Panel Control Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "generalAccordionPanel",
                    "type": "accordionpanel",
                    "label": "General",
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
                        }
                    ]
                },
                {
                    "name": "addressAccordionPanel",
                    "type": "accordionpanel",
                    "label": "Address",
                    "controls": [
                        {
                            "name": "streetTextBox",
                            "type": "textbox",
                            "label": "Street",
                            "bindsTo": "address.street"
                        },
                        {
                            "name": "zipTextBox",
                            "type": "textbox",
                            "label": "Zip",
                            "bindsTo": "address.zip"
                        },
                        {
                            "name": "cityTextBox",
                            "type": "textbox",
                            "label": "City",
                            "bindsTo": "address.city"
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
            "name": "ButtonExample",
            "title": "Button Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "SimpleButton",
                    "type": "button",
                    "text": "Simple Button"
                },
                {
                    "name": "DialogButton",
                    "type": "button",
                    "text": "Dialog Button",
                    "isDialogButton": true
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
            "name": "ObjectSelectorExample",
            "title": "ObjectSelector Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "managerObjectSelector",
                    "type": "objectselector",
                    "label": "Manager",
                    "bindsTo": "manager",
                    "getObjectFunction": "getManager",
                    "objectValueProperty": "name"
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
            "name": "ObjectSelectorGridSelector",
            "title": "Select Manager",
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
        },
        {
            "name": "ObjectSelectorTreeSelector",
            "title": "Select Manager",
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "managersTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "managersTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "source": "/examples/resources/user-admin.png"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "bindsTo": "name"
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
        },
        {
            "name": "ObjectSelectorListBuilderExample",
            "title": "Editable ObjectSelector Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "tagsObjectSelector",
                    "type": "objectselector",
                    "label": "Tags",
                    "isEditable": true,
                    "bindsTo": "tags",
                    "getObjectFunction": "getTags"
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
            "name": "ObjectSelectorListBuilderSelector",
            "title": "Select Tags",
            "left": 500,
            "top": 100,
            "width": 600,
            "height": 400,
            "controls": [
                {
                    "name": "tagsListBuilder",
                    "type": "listbuilder",
                    "label": "Tags",
                    "bindsTo": "list",
                    "getOptionsFunction": "getTags"
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
            "name": "SimpleWindowExample",
            "title": "Simple Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300
        },
        {
            "name": "DialogWindowExample",
            "title": "Dialog Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "infoStaticText",
                    "type": "statictext",
                    "text": "Confirm the action by clicking OK or Cancel"
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
            "name": "CustomDialogWindowExample",
            "title": "Custom Dialog Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "infoStaticText",
                    "type": "statictext",
                    "text": "Confirm the action by clicking Yes or No"
                },
                {
                    "name": "YesButton",
                    "type": "button",
                    "text": "Yes",
                    "isDialogButton": true,
                    "dialogResult": "Yes"
                },
                {
                    "name": "NoButton",
                    "type": "button",
                    "text": "No",
                    "isDialogButton": true,
                    "dialogResult": "No"
                }
            ]
        },
        {
            "name": "DockableWindowExample",
            "title": "Dockable Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "dockButton",
                    "type": "button",
                    "text": "Dock"
                },
                {
                    "name": "undockButton",
                    "type": "button",
                    "text": "Undock"
                },
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                }
            ]
        },
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
                            "width": 170,
                            "bindsTo": "title"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "name",
                            "label": "Name",
                            "width": 280,
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
        },
        {
            "name": "EditableGridViewExample",
            "title": "Editable GridView Example",
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
            "name": "EditableGridViewCanAddRowsExample",
            "title": "Editable GridView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "managersGrid",
                    "type": "gridview",
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
            "name": "NonBlockingRenderingExample",
            "title": "All Customers",
            "left": 500,
            "top": 100,
            "width": 600,
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
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 150,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 150,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewcomboboxcolumn",
                            "name": "country",
                            "label": "Country",
                            "width": 100,
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age"
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
            "name": "PaginationExample",
            "title": "Pagination",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 450,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "id",
                            "label": "Id",
                            "width": 60,
                            "bindsTo": "id"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 180,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 180,
                            "bindsTo": "lastName"
                        }
                    ]
                },
                {
                    "name": "pager",
                    "type": "pager",
                    "bindsTo": "pagerInfo"
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
        },
        {
            "name": "PagersExample",
            "title": "Pagers",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 300,
            "controls": [
                {
                    "name": "unboundPager",
                    "type": "pager"
                },
                {
                    "name": "pager1",
                    "type": "pager",
                    "bindsTo": "pagerInfo1"
                },
                {
                    "name": "pager2",
                    "type": "pager",
                    "bindsTo": "pagerInfo2"
                },
                {
                    "name": "pager3",
                    "type": "pager",
                    "bindsTo": "pagerInfo3"
                },
                {
                    "name": "pager4",
                    "type": "pager",
                    "bindsTo": "pagerInfo4",
                    "pageNoProperty": "currentPage",
                    "pagesTotalProperty": "pagesCount"
                }
            ]
        },
        {
            "name": "TreeViewExample",
            "title": "TreeView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "managersTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "managersTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "source": "/examples/resources/user-admin.png"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "bindsTo": "name"
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
        },
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
        },
        {
            "name": "EditableTreeViewExample",
            "title": "Editable TreeView Example",
            "left": 500,
            "top": 100,
            "width": 900,
            "height": 400,
            "controls": [
                {
                    "name": "managersTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "managersTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "source": "/examples/resources/user-admin.png"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "combobox",
                                "bindsTo": "title",
                                "getOptionsFunction": "getTitles"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "textbox",
                                "bindsTo": "name"
                            },
                            {
                                "name": "mentorObjectSelector",
                                "type": "objectselector",
                                "bindsTo": "mentor",
                                "getObjectFunction": "getMentor",
                                "objectValueProperty": "name"
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
        },
        {
            "name": "GridViewColumnsExample",
            "title": "GridView Supported Column Types",
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
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 120,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 120,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewcomboboxcolumn",
                            "name": "country",
                            "label": "Country",
                            "width": 100,
                            "bindsTo": "address.country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue"
                        },
                        {
                            "type": "gridviewobjectselectorcolumn",
                            "name": "manager",
                            "label": "Manager",
                            "width": 150,
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age"
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
            "name": "ValidationExample",
            "title": "Validation Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName",
                    "isRequired": true
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName",
                    "isRequired": true,
                    "validationErrorMessage": "Last Name was not provided"
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
            "name": "PatternValidationExample",
            "title": "Pattern Validation Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "urlTextBox",
                    "type": "textbox",
                    "label": "Url",
                    "bindsTo": "url",
                    "isRequired": true,
                    "pattern": "https?://.+"
                },
                {
                    "name": "emailTextBox",
                    "type": "textbox",
                    "label": "Email",
                    "bindsTo": "email",
                    "isRequired": true,
                    "pattern": ".+@.+\\..+",
                    "validationErrorMessage": "Email was not provided or doesn't have a correct format"
                },
                {
                    "name": "ipAddressTextBox",
                    "type": "textbox",
                    "label": "IP Address",
                    "bindsTo": "ipAddress",
                    "pattern": "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"
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
            "name": "MaxLengthValidationExample",
            "title": "Maximum Length Validation Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName",
                    "maxlength": 7
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName",
                    "maxlength": 7,
                    "validationErrorMessage": "Last name is too long"
                },
                {
                    "name": "descriptionTextArea",
                    "type": "textarea",
                    "label": "Description",
                    "bindsTo": "description",
                    "columns": 30,
                    "rows": 10,
                    "maxlength": 20
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
            "name": "ModelValidationExample",
            "title": "Model Validation Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 400,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "emailTextBox",
                    "type": "textbox",
                    "label": "Email",
                    "bindsTo": "email1"
                },
                {
                    "name": "repeatEmailTextBox",
                    "type": "textbox",
                    "label": "Repeat Email",
                    "bindsTo": "email2"
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
        },
        {
            "name": "MasterWindowExample",
            "title": "Master Window Example",
            "left": 50,
            "top": 50,
            "width": 800,
            "height": 500,
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
                        },
                        {
                            "type": "gridviewobjectselectorcolumn",
                            "name": "manager",
                            "label": "Manager",
                            "width": 150,
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name"
                        },
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "vip",
                            "label": "VIP",
                            "width": 60,
                            "bindsTo": "isVip"
                        }
                    ]
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
                }
            ]
        },
        {
            "name": "FirstLevelWindow",
            "title": "Customers",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "controls": [
                {
                    "name": "addNewButton",
                    "type": "button",
                    "text": "Add Customer"
                },
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
            "name": "SecondLevelWindow",
            "title": "New Customer",
            "width": 600,
            "height": 500,
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
            "name": "ThirdLevelWindow",
            "title": "Select Manager",
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
        },
        {
            "name": "ValidationAllControlsExample",
            "title": "Validation, All Control Types",
            "left": 500,
            "top": 100,
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
                            "bindsTo": "firstName",
                            "isRequired": true
                        },
                        {
                            "name": "customerLastNameTextBox",
                            "type": "textbox",
                            "label": "Last Name",
                            "bindsTo": "lastName",
                            "isRequired": true
                        },
                        {
                            "name": "vipCheckBox",
                            "type": "checkbox",
                            "label": "VIP",
                            "bindsTo": "isVip",
                            "isRequired": true
                        },
                        {
                            "name": "descriptionTextArea",
                            "type": "textarea",
                            "label": "Description",
                            "bindsTo": "description",
                            "columns": 30,
                            "rows": 10,
                            "isRequired": true
                        },
                        {
                            "name": "customerAgeTextBox",
                            "type": "textbox",
                            "label": "Age",
                            "bindsTo": "age",
                            "isRequired": true
                        },
                        {
                            "name": "managerObjectSelector",
                            "type": "objectselector",
                            "label": "Manager",
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name",
                            "isRequired": true
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
                            "bindsTo": "street",
                            "isRequired": true
                        },
                        {
                            "name": "zipTextBox",
                            "type": "textbox",
                            "label": "Zip",
                            "bindsTo": "zip",
                            "isRequired": true
                        },
                        {
                            "name": "cityTextBox",
                            "type": "textbox",
                            "label": "City",
                            "bindsTo": "city",
                            "isRequired": true
                        },
                        {
                            "name": "countryComboBox",
                            "type": "combobox",
                            "label": "Country",
                            "bindsTo": "country",
                            "getOptionsFunction": "getcountries",
                            "optionIdProperty": "optid",
                            "optionValueProperty": "optvalue",
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
        },
        {
            "name": "InputTypeExample",
            "title": "TextBox With Overriden Input Type Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 500,
            "controls": [
                {
                    "name": "standardTextBox",
                    "type": "textbox",
                    "label": "Text, Default Option",
                    "bindsTo": "text"
                },
                {
                    "name": "fileTextBox",
                    "type": "textbox",
                    "label": "File",
                    "bindsTo": "fileName",
                    "inputType": "file"
                },
                {
                    "name": "passwordTextBox",
                    "type": "textbox",
                    "label": "Password",
                    "bindsTo": "password",
                    "inputType": "password"
                },
                {
                    "name": "dateTextBox",
                    "type": "textbox",
                    "label": "Date",
                    "bindsTo": "date",
                    "inputType": "date"
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
            "name": "CustomControlExample",
            "title": "Custom Control Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "customControl",
                    "type": "custom",
                    "customType": "customdatapicker",
                    "label": "Date",
                    "bindsTo": "selectedDate",
                    "isRequired": true
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
            "name": "CustomModelPropertiesExample",
            "title": "Custom Model Properties Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "driveCustomControl",
                    "type": "custom",
                    "customType": "customslider",
                    "label": "Drive",
                    "bindsTo": "drive",
                    "cssClass": "vertical-slider",
                    "custom-orientation": "vertical",
                    "custom-length": 200,
                    "custom-min": 0,
                    "custom-max": 100
                },
                {
                    "name": "bassCustomControl",
                    "type": "custom",
                    "customType": "customslider",
                    "label": "Bass",
                    "bindsTo": "bass",
                    "cssClass": "vertical-slider",
                    "custom-orientation": "vertical",
                    "custom-length": 200,
                    "custom-min": 0,
                    "custom-max": 100
                },
                {
                    "name": "midCustomControl",
                    "type": "custom",
                    "customType": "customslider",
                    "label": "Mid",
                    "bindsTo": "mid",
                    "cssClass": "vertical-slider",
                    "custom-orientation": "vertical",
                    "custom-length": 200,
                    "custom-min": 0,
                    "custom-max": 100
                },
                {
                    "name": "trebleCustomControl",
                    "type": "custom",
                    "customType": "customslider",
                    "label": "Treble",
                    "bindsTo": "treble",
                    "cssClass": "vertical-slider",
                    "custom-orientation": "vertical",
                    "custom-length": 200,
                    "custom-min": 0,
                    "custom-max": 100
                },
                {
                    "name": "volumeCustomControl",
                    "type": "custom",
                    "customType": "customslider",
                    "label": "Volume",
                    "bindsTo": "volume",
                    "cssClass": "vertical-slider",
                    "custom-orientation": "vertical",
                    "custom-length": 200,
                    "custom-min": 0,
                    "custom-max": 100
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
            "name": "CustomContainerControlExample",
            "title": "Custom Container Control Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "customTabControl",
                    "type": "custom",
                    "customType": "customtabcontrol",
                    "controls": [
                        {
                            "name": "generalTabPage",
                            "type": "custom",
                            "label": "General",
                            "customType": "customtabpage",
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
                                }
                            ]
                        },
                        {
                            "name": "addressTabPage",
                            "type": "custom",
                            "label": "Address",
                            "customType": "customtabpage",
                            "controls": [
                                {
                                    "name": "streetTextBox",
                                    "type": "textbox",
                                    "label": "Street",
                                    "bindsTo": "address.street"
                                },
                                {
                                    "name": "zipTextBox",
                                    "type": "textbox",
                                    "label": "Zip",
                                    "bindsTo": "address.zip"
                                },
                                {
                                    "name": "cityTextBox",
                                    "type": "textbox",
                                    "label": "City",
                                    "bindsTo": "address.city"
                                }
                            ]
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
            "name": "RibbonExample",
            "title": "Ribbon Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
            "controls": [
                {
                    "name": "myRibbon",
                    "type": "ribbon",
                    "controls": [
                        {
                            "name": "refreshRibbonButton",
                            "type": "ribbonbutton",
                            "text": "Remove",
                            "iconSource": "/examples/resources/remove32x32.png",
                            "command" : "ribbon_example_remove"
                        },
                        {
                            "name": "addNewRibbonButton",
                            "type": "ribbonbutton",
                            "text": "New",
                            "iconSource": "/examples/resources/addnew.png",
                            "command" : "ribbon_example_addnew"
                        }
                    ]
                },
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 200,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewstatictextcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 200,
                            "bindsTo": "lastName"
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
            "name": "NewCustomerWindow",
            "title": "New Customer",
            "width": 400,
            "height": 300,
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
            "name": "ContextMenuExample",
            "title": "Context Menu Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 500,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "contextMenu": "ContextMenuDemo",
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
            "name": "SimpleObservableExample",
            "title": "Simple Observable Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 400,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "firstName1TextBox",
                    "type": "textbox",
                    "label": "First Name'",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastName1TextBox",
                    "type": "textbox",
                    "label": "Last Name'",
                    "bindsTo": "lastName"
                }
            ]
        },
        {
            "name": "ComputedObservableExample",
            "title": "Computed Observable Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 400,
            "controls": [
                {
                    "name": "firstNameTextBox",
                    "type": "textbox",
                    "label": "First Name",
                    "bindsTo": "firstName"
                },
                {
                    "name": "lastNameTextBox",
                    "type": "textbox",
                    "label": "Last Name",
                    "bindsTo": "lastName"
                },
                {
                    "name": "fullNameTextBox",
                    "type": "textbox",
                    "label": "Full Name",
                    "bindsTo": "fullName"
                }
            ]
        },
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
        },
        {
            "name": "ObservableTreeViewExample",
            "title": "Observable With TreeView Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "myRibbon",
                    "type": "ribbon",
                    "controls": [
                        {
                            "name": "addNewRibbonButton",
                            "type": "ribbonbutton",
                            "text": "Add New Subnode",
                            "iconSource": "/examples/resources/addnew.png"
                        }
                    ]
                },
                {
                    "name": "managersTree",
                    "type": "treeview",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "managersTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "source": "/examples/resources/user-admin.png"
                            },
                            {
                                "name": "titleStaticText",
                                "type": "statictext",
                                "bindsTo": "title"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "bindsTo": "name"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "ObservableWindow1Example",
            "title": "Auto-updated Window A",
            "left": 200,
            "top": 100,
            "width": 550,
            "height": 600,
            "controls": [
                {
                    "name": "generalGroupBox",
                    "type": "groupbox",
                    "label": "General Info",
                    "controls": [
                        {
                            "name": "firstNameTextBox",
                            "type": "textbox",
                            "label": "First Name",
                            "bindsTo": "firstName"
                        },
                        {
                            "name": "lastNameTextBox",
                            "type": "textbox",
                            "label": "Last Name",
                            "bindsTo": "lastName"
                        },
                        {
                            "name": "fullNameTextBox",
                            "type": "textbox",
                            "label": "Full Name",
                            "bindsTo": "fullName"
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
                            "rows": 4
                        },
                        {
                            "name": "managerObjectSelector",
                            "type": "objectselector",
                            "label": "Manager",
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name"
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
                }
            ]
        },
        {
            "name": "ObservableWindow2Example",
            "title": "Auto-updated Window B",
            "left": 800,
            "top": 100,
            "width": 550,
            "height": 600,
            "controls": [
                {
                    "name": "generalGroupBox",
                    "type": "groupbox",
                    "label": "General Info",
                    "controls": [
                        {
                            "name": "firstNameTextBox",
                            "type": "textbox",
                            "label": "First Name",
                            "bindsTo": "firstName"
                        },
                        {
                            "name": "lastNameTextBox",
                            "type": "textbox",
                            "label": "Last Name",
                            "bindsTo": "lastName"
                        },
                        {
                            "name": "fullNameTextBox",
                            "type": "textbox",
                            "label": "Full Name",
                            "bindsTo": "fullName"
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
                            "rows": 4
                        },
                        {
                            "name": "managerObjectSelector",
                            "type": "objectselector",
                            "label": "Manager",
                            "bindsTo": "manager",
                            "getObjectFunction": "getManager",
                            "objectValueProperty": "name"
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
                }
            ]
        },
        {
            "name": "TrackChangesExample",
            "trackChanges": true,
            "version": 0,
            "title": "This Window Keeps User Changes",
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
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 120,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 120,
                            "bindsTo": "lastName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "age",
                            "label": "Age",
                            "width": 60,
                            "bindsTo": "age"
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
            "name": "BreadcrumbsControlExample",
            "title": "Breadcrumbs Control Example",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 400,
            "controls": [
                {
                    "name": "navigationBreadcrumbs",
                    "type": "breadcrumbs",
                    "bindsTo": "path",
                    "hrefProperty": "href",
                    "textProperty": "text"
                },
                {
                    "name": "managersTree",
                    "type": "treeview",
                    "label": "Management",
                    "bindsTo": "items",
                    "nodeModel": {
                        "name": "managersTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "items",
                        "controls": [
                            {
                                "name": "nodeAnchoredContent",
                                "type": "anchoredcontent",
                                "bindsTo": "href",
                                "controls": [
                                    {
                                        "name": "nodeIcon",
                                        "type": "image",
                                        "alternateText": "Icon",
                                        "width": 16,
                                        "height": 16,
                                        "source": "/examples/resources/user-admin.png"
                                    },
                                    {
                                        "name": "titleStaticText",
                                        "type": "statictext",
                                        "bindsTo": "title"
                                    },
                                    {
                                        "name": "nameStaticText",
                                        "type": "statictext",
                                        "bindsTo": "name"
                                    }
                                ]
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
        },
        {
            "name": "EmptyWindow"
        }
    ],
    "menus": [
        {
            "name": "ContextMenuDemo",
            "type": "contextmenu",
            "menuItems": [
                {
                    "name": "addMenuItem",
                    "type": "menuitem",
                    "text": "Add",
                    "command" : "context_menu_example_add"
                },
                {
                    "name": "removeMenuItem",
                    "type": "menuitem",
                    "text": "Remove",
                    "command" : "context_menu_example_remove"
                },
                {
                    "name": "separator1",
                    "type": "menuseparator"
                },
                {
                    "name": "disabledMenuItem",
                    "type": "menuitem",
                    "text": "Disabled",
                    "command" : "context_menu_example_disabled"
                }
            ]
        }
    ]
}