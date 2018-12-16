/// <reference path="redui-1.0.0.ts"/>
/// <reference path="../Scripts/typings/qunit/qunit.d.ts"/>

test("createNewWindow", function () {
    var redui = <IRedUI>window["redui"];
    var reduiWindow = redui.createNewWindow("EmptyWindow");
    equal(reduiWindow.name, "EmptyWindow", "Tests Window.name property.");
});

test("Window.getElement", function () {
    var redui = <IRedUI>window["redui"];
    var reduiWindow = redui.createNewWindow("EmptyWindow");

    equal(reduiWindow.getElement()[0].id, reduiWindow.id, "Tests Window.getElement function.");
});

test("GroupBox.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");

    equal(reduiWindow["addressGroupBox"].getElement()[0].id, reduiWindow["addressGroupBox"].id, "Tests GroupBox.getElement function.");
});

test("TextBox.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");

    equal(reduiWindow["customerFirstNameTextBox"].getElement()[0].id, reduiWindow["customerFirstNameTextBox"].id, "Tests TextBox.getElement function.");
});

test("TextArea.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsGroupBoxChangesContext");

    equal(reduiWindow["generalGroupBox"]["descriptionTextArea"].getElement()[0].id, reduiWindow["generalGroupBox"]["descriptionTextArea"].id, "Tests TextArea.getElement function.");
});

test("CheckBox.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");

    equal(reduiWindow["vipCheckBox"].getElement()[0].id, reduiWindow["vipCheckBox"].id, "Tests CheckBox.getElement function.");
});

test("ComboBox.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");

    equal(reduiWindow["addressGroupBox"]["countryComboBox"].getElement()[0].id, reduiWindow["addressGroupBox"]["countryComboBox"].id, "Tests ComboBox.getElement function.");
});

test("GridView.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomersGrid");

    equal(reduiWindow["customersGrid"].getElement()[0].id, reduiWindow["customersGrid"].id, "Tests GridView.getElement function.");
});

test("Button.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");

    equal(reduiWindow["OKButton"].getElement()[0].id, reduiWindow["OKButton"].id, "Tests Button.getElement function.");
});

test("TreeView.getElement", function () {
    var redui = <IRedUI>window["redui"];
    var reduiWindow = redui.createNewWindow("DepartmentTree");

    equal(reduiWindow["departmentTree"].getElement()[0].id, reduiWindow["departmentTree"].id, "Tests TreeView.getElement function.");
});

test("StaticText.getElement", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");

    equal(reduiWindow["generalStaticText"].getElement()[0].id, reduiWindow["generalStaticText"].id, "Tests StaticText.getElement function.");
});

test("DataBindSingleContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var customerData = {
        id: 1,
        firstName: "Mario",
        lastName: "Pizzi",
        isVip: true,
        address: {
            street: "Via Roma",
            zip: 1000,
            city: "Torino",
            country: "it"
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");
    reduiWindow.bind(customerData);

    equal(reduiWindow["customerFirstNameTextBox"].getElement().val() , "Mario", "Test Window.bind function.");
    equal(reduiWindow["addressGroupBox"]["zipTextBox"].getElement().val(), "1000", "Test GroupBox.bind function.");

    equal(reduiWindow["customerLastNameTextBox"].getElement().val(), "Pizzi", "Test TextBox.bind function.");
    equal(reduiWindow["vipCheckBox"].getElement().is(':checked'), true, "Test CheckBox.bind function.");
    equal(reduiWindow["addressGroupBox"]["countryComboBox"].getElement().val(), "it", "Test ComboBox.bind function.");
});

test("DataBindGroupBoxChangesContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    redui.objectSources.getManager = function (callback) {
        var object = {
            id: 7,
            isSelected: false,
            title: "Manager",
            name: "Antonio Conte",
            image: ""
        };
        callback(object);
    };

    var customerData = {
        id: 1,
        firstName: "Mario",
        lastName: "Pizzi",
        isVip: true,
        age: 27,
        description: "desc",
        manager: { id: 0, name: "" },
        address: {
            street: "Via Roma",
            zip: 1000,
            city: "Torino",
            country: "it"
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsGroupBoxChangesContext");
    reduiWindow.bind(customerData);

    equal(reduiWindow["generalGroupBox"]["customerFirstNameTextBox"].getElement().val(), "Mario", "Test Window.bind function.");
    equal(reduiWindow["addressGroupBox"]["zipTextBox"].getElement().val(), "1000", "Test GroupBox.bind function.");

    equal(reduiWindow["generalGroupBox"]["descriptionTextArea"].getElement().val(), "desc", "Test TextArea.bind function.");
    equal(reduiWindow["generalGroupBox"]["customerLastNameTextBox"].getElement().val(), "Pizzi", "Test TextBox.bind function.");
    equal(reduiWindow["generalGroupBox"]["vipCheckBox"].getElement().is(':checked'), true, "Test CheckBox.bind function.");
    equal(reduiWindow["addressGroupBox"]["countryComboBox"].getElement().val(), "it", "Test ComboBox.bind function.");
});

test("DataBindToMethodsGroupBoxChangesContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    redui.objectSources.getManager = function (callback) {
        var object = {
            id: 7,
            isSelected: false,
            title: "Manager",
            name: "Antonio Conte",
            image: ""
        };
        callback(object);
    };

    var customerData = {
        _id: 1,
        id: function () { return this._id; },
        _firstName: "Mario",
        firstName: function () { return this._firstName; },
        _lastName: "Pizzi",
        lastName: function () { return this._lastName; },
        _isVip: true,
        isVip: function () { return this._isVip; },
        _age: 27,
        age: function () { return this._age; },
        _description: "desc",
        description: function () { return this._description; },
        _manager: { id: 0, name: "" },
        manager: function () { return this._manager; },
        address: {
            _street: "Via Roma",
            street: function () { return this._street; },
            _zip: 1000,
            zip: function () { return this._zip; },
            _city: "Torino",
            city: function () { return this._city; },
            _country: "it",
            country: function () { return this._country; }
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsGroupBoxChangesContext");
    reduiWindow.bind(customerData);

    equal(reduiWindow["generalGroupBox"]["customerFirstNameTextBox"].getElement().val(), "Mario", "Test Window.bind function.");
    equal(reduiWindow["addressGroupBox"]["zipTextBox"].getElement().val(), "1000", "Test GroupBox.bind function.");

    equal(reduiWindow["generalGroupBox"]["descriptionTextArea"].getElement().val(), "desc", "Test TextArea.bind function.");
    equal(reduiWindow["generalGroupBox"]["customerLastNameTextBox"].getElement().val(), "Pizzi", "Test TextBox.bind function.");
    equal(reduiWindow["generalGroupBox"]["vipCheckBox"].getElement().is(':checked'), true, "Test CheckBox.bind function.");
    equal(reduiWindow["addressGroupBox"]["countryComboBox"].getElement().val(), "it", "Test ComboBox.bind function.");
});

test("DataBindWindowChangesContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var customerData = {
        id: 1,
        firstName: "Mario",
        lastName: "Pizzi",
        isVip: true,
        address: {
            street: "Via Roma",
            zip: 1000,
            city: "Torino",
            country: "it"
        }
    };
    var customerDataWrapper = {
        some: {
            property: customerData
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsWindowChangesContext");
    reduiWindow.bind(customerDataWrapper);

    equal(reduiWindow["customerFirstNameTextBox"].getElement().val(), "Mario", "Test Window.bind function.");
    equal(reduiWindow["addressGroupBox"]["zipTextBox"].getElement().val(), "1000", "Test GroupBox.bind function.");

    equal(reduiWindow["customerLastNameTextBox"].getElement().val(), "Pizzi", "Test TextBox.bind function.");
    equal(reduiWindow["vipCheckBox"].getElement().is(':checked'), true, "Test CheckBox.bind function.");
    equal(reduiWindow["addressGroupBox"]["countryComboBox"].getElement().val(), "it", "Test ComboBox.bind function.");
});

test("GetDataObjectSingleContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var customerData = {
        id: 123,
        firstName: "Mario",
        lastName: "Pizzi",
        isVip: true,
        address: {
            street: "Via Roma",
            zip: 1000,
            city: "Torino",
            country: "it"
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsSingleContext");
    reduiWindow.bind(customerData);

    var customerDataRetrieved = reduiWindow.bindingContext;

    equal(customerDataRetrieved["firstName"], "Mario", "Test Window.getDataObject function.");
    equal(customerDataRetrieved["lastName"], "Pizzi", "Test TextBox.getDataObject function.");
    equal(customerDataRetrieved["id"], 123, "Test getDataObject function returns original object.");

    equal(customerDataRetrieved["address"]["zip"], 1000, "Test GroupBox.getDataObject function.");
    equal(customerDataRetrieved["address"]["country"], "it", "Test ComboBox.getDataObject function.");

    equal(customerDataRetrieved["isVip"], true, "Test CheckBox.getDataObject function.");
});

test("GetDataObjectGroupBoxChangesContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    redui.objectSources.getManager = function (callback) {
        var object = {
            id: 7,
            isSelected: false,
            title: "Manager",
            name: "Antonio Conte",
            image: ""
        };
        callback(object);
    };

    var customerData = {
        id: 123,
        firstName: "Mario",
        lastName: "Pizzi",
        isVip: true,
        age: 27,
        description: "",
        manager: { id: 0, name: "" },
        address: {
            street: "Via Roma",
            zip: 1000,
            city: "Torino",
            country: "it"
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsGroupBoxChangesContext");
    reduiWindow.bind(customerData);

    // Update the city
    reduiWindow["addressGroupBox"]["cityTextBox"].getElement().val("Genoa");
    reduiWindow["addressGroupBox"]["cityTextBox"].getElement().trigger("change");

    // Update the description
    reduiWindow["generalGroupBox"]["descriptionTextArea"].getElement().val("desc");
    reduiWindow["generalGroupBox"]["descriptionTextArea"].getElement().trigger("change");

    var customerDataRetrieved = reduiWindow.bindingContext;

    equal(customerDataRetrieved["firstName"], "Mario", "Test Window.getDataObject function.");
    equal(customerDataRetrieved["lastName"], "Pizzi", "Test TextBox.getDataObject function.");
    equal(customerDataRetrieved["description"], "desc", "Test TextArea.getDataObject function.");
    equal(customerDataRetrieved["id"], 123, "Test getDataObject function returns original object.");

    equal(customerDataRetrieved["address"]["zip"], 1000, "Test GroupBox.getDataObject function.");
    equal(customerDataRetrieved["address"]["country"], "it", "Test ComboBox.getDataObject function.");
    equal(customerDataRetrieved["address"]["city"], "Genoa", "Test property value in the new binding context.");

    equal(customerDataRetrieved["isVip"], true, "Test CheckBox.getDataObject function.");
});

test("GetDataObjectWindowChangesContext", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { id: "", value: "" },
        { id: "be", value: "Belgium" },
        { id: "fr", value: "France" },
        { id: "it", value: "Italy" },
        { id: "nl", value: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var customerData = {
        id: 123,
        firstName: "Mario",
        lastName: "Pizzi",
        isVip: true,
        address: {
            street: "Via Roma",
            zip: 1000,
            city: "Torino",
            country: "it"
        }
    };
    var customerDataWrapper = {
        some: {
            property: customerData
        }
    };

    var reduiWindow = redui.createNewWindow("CustomerDetailsWindowChangesContext");
    reduiWindow.bind(customerDataWrapper);

    // Update the city
    reduiWindow["addressGroupBox"]["cityTextBox"].getElement().val("Genoa");
    reduiWindow["addressGroupBox"]["cityTextBox"].getElement().trigger("change");

    var customerDataRetrieved = reduiWindow.bindingContext;

    equal(customerDataRetrieved["firstName"], "Mario", "Test Window.getDataObject function.");
    equal(customerDataRetrieved["lastName"], "Pizzi", "Test TextBox.getDataObject function.");
    equal(customerDataRetrieved["id"], 123, "Test getDataObject function returns original object.");

    equal(customerDataRetrieved["address"]["zip"], 1000, "Test GroupBox.getDataObject function.");
    equal(customerDataRetrieved["address"]["country"], "it", "Test ComboBox.getDataObject function.");
    equal(customerDataRetrieved["address"]["city"], "Genoa", "Test property value in the new binding context.");

    equal(customerDataRetrieved["isVip"], true, "Test CheckBox.getDataObject function.");
});

test("GridView.DataBind", function () {
    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];
    
    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    // Customer data
    var customerData = {
        createNewRowValue: function () {
            return {
                id: -1,
                firstName: "",
                lastName: "",
                isVip: false,
                isSelected: false,
                age: 0,
                manager: { id: 0, name: "" },
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
                firstName: "Mario",
                lastName: "Pizzi",
                isVip: false,
                isSelected: false,
                age: 27,
                manager: { id: 0, name: "" },
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
                isSelected: true,
                age: 27,
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
                isSelected: false,
                age: 27,
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

    // Create a window with the grid (left pane)
    var customersGridWindow = redui.createNewWindow("CustomersGrid");
    customersGridWindow.bind(customerData);

    var gridView = <IGridView>customersGridWindow["customersGrid"];

    equal(gridView.rows[1].cells[0].getElement().is(':checked'), true, "Test GridView.bind function - checkbox checked.");
    equal(gridView.rows[1].cells[1].getElement().val(), "Jacques", "Test GridView.bind function - textbox cell.");
    equal(gridView.rows[2].cells[0].getElement().is(':checked'), false, "Test GridView.bind function - checkbox unchecked.");
    equal(gridView.rows[1].cells[3].getElement().val(), "fr", "Test GridView.bind function - combobox cell.");

    var updatedData = {
        id: 3,
        firstName: "Ivan",
        lastName: "Kalashnikov",
        isSelected: true,
        isVip: true,
        age: 27,
        manager: { id: 0, name: "" },
        address: {
            street: "Strandstradt",
            zip: 5434,
            city: "Den Haag",
            country: "nl"
        }
    };

    // Bind row individually
    customersGridWindow["customersGrid"].rows[1].bind(updatedData);
    equal(gridView.rows[1].cells[1].getElement().val(), "Ivan", "Test GridViewRow.bind function - textbox cell.");
    equal(gridView.rows[1].cells[0].getElement().is(':checked'), true, "Test GridViewRow.bind function - checkbox checked.");
    equal(gridView.rows[1].cells[3].getElement().val(), "nl", "Test GridView.bind function - combobox cell.");

    // Bind cells individually
    customersGridWindow["customersGrid"].rows[2].cells[1].bind(updatedData);
    equal(gridView.rows[2].cells[1].getElement().val(), "Ivan", "Test GridViewRowCell.bind function - textbox cell.");

    customersGridWindow["customersGrid"].rows[2].cells[0].bind(updatedData);
    equal(gridView.rows[2].cells[0].getElement().is(':checked'), true, "Test GridViewRowCell.bind function - checkbox checked.");

    customersGridWindow["customersGrid"].rows[2].cells[3].bind(updatedData);
    equal(gridView.rows[2].cells[3].getElement().val(), "nl", "Test GridView.bind function - combobox cell.");
});

test("GridView.getDataObject", function () {
    var redui = <IRedUI>window["redui"];

    // Customer data
    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    // Customer data
    var customerData = {
        createNewRowValue: function () {
            return {
                id: -1,
                firstName: "",
                lastName: "",
                isVip: false,
                isSelected: false,
                age: 0,
                manager: { id: 0, name: "" },
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
                firstName: "Mario",
                lastName: "Pizzi",
                isVip: false,
                isSelected: false,
                age: 27,
                manager: { id: 0, name: "" },
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
                isSelected: true,
                age: 27,
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
                isSelected: false,
                age: 27,
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

    // Create a window with the grid (left pane)
    var customersGridWindow = redui.createNewWindow("CustomersGrid");
    customersGridWindow.bind(customerData);

    var customerDataRetrieved = customersGridWindow.bindingContext;

    equal(customerDataRetrieved.list[1]["lastName"], "Petit", "Test GridView.getDataObject function.");
    equal(customerDataRetrieved.list[1]["id"], 2, "Test GridView.getDataObject function, stored databound object.");
    equal(customerDataRetrieved.list[1]["address"]["country"], "fr", "Test GridView.getDataObject function, combobox column.");
    equal(customerDataRetrieved.list[1]["isSelected"], true, "Test GridView.getDataObject function - checkbox checked.");
    equal(customerDataRetrieved.list[2]["isSelected"], false, "Test GridView.getDataObject function - checkbox unchecked.");

    // Retrieve single row data
    var customerRecordRetrieved = customersGridWindow["customersGrid"].rows[1].bindingContext;

    equal(customerRecordRetrieved["lastName"], "Petit", "Test GridViewRow.getDataObject function.");
    equal(customerRecordRetrieved["isSelected"], true, "Test GridViewRow.getDataObject function - checkbox checked.");
    equal(customerRecordRetrieved["address"]["country"], "fr", "Test GridViewRow.getDataObject function, combobox column.");

    // Retrieve single field data
    var customerFieldRetrieved = customersGridWindow["customersGrid"].rows[1].cells[0].bindingContext;
    equal(customerFieldRetrieved["isSelected"], true, "Test GridViewRowCell.getDataObject function - checkbox checked.");

    var customerFieldRetrieved = customersGridWindow["customersGrid"].rows[1].cells[3].bindingContext;
    equal(customerFieldRetrieved["address"]["country"], "fr", "Test GridViewRowCell.getDataObject function - combobox value.");
});

test("TreeView.DataBind", function () {
    var corporateManagement = {
        list: [
            {
                id: 1,
                isSelected: false,
                title: "Chairman",
                name: "Gerardo Marcelo",
                image: "",
                list: []
            },
            {
                id: 2,
                isSelected: false,
                title: "CFO",
                name: "Salvo Folliero",
                image: "",
                list: []
            },
            {
                id: 3,
                isSelected: false,
                title: "General Manager",
                name: "Arrigo Onio",
                image: "",
                list: [
                    {
                        id: 5,
                        isSelected: false,
                        title: "Sports Director",
                        name: "Edoardo Manna",
                        image: "",
                        list: []
                    },
                    {
                        id: 6,
                        isSelected: false,
                        title: "Team Manager",
                        name: "Giulio Bellucci",
                        image: "",
                        list: []
                    }
                ]
            },
            {
                id: 4,
                isSelected: false,
                title: "Director",
                name: "Manlio Ferrari",
                image: "",
                list: []
            }
        ]
    };

    // Create a window with the grid (left pane)
    var redui = <IRedUI>window["redui"];
    var departmentTreeWindow = redui.createNewWindow("DepartmentTree");
    departmentTreeWindow.bind(corporateManagement);

    var treeView = <ITreeView>departmentTreeWindow["departmentTree"];

    equal(treeView.roots[2].nodes[0].controls[2].getElement().text(), "Sports Director", "Test TreeView.bind function.");
});

test("TreeView.GetDataObject", function () {
    var corporateManagement = {
        list: [
            {
                id: 1,
                isSelected: false,
                title: "Chairman",
                name: "Gerardo Marcelo",
                image: "",
                list: []
            },
            {
                id: 2,
                isSelected: false,
                title: "CFO",
                name: "Salvo Folliero",
                image: "",
                list: []
            },
            {
                id: 3,
                isSelected: false,
                title: "General Manager",
                name: "Arrigo Onio",
                image: "",
                list: [
                    {
                        id: 5,
                        isSelected: false,
                        title: "Sports Director",
                        name: "Edoardo Manna",
                        image: "",
                        list: []
                    },
                    {
                        id: 6,
                        isSelected: false,
                        title: "Team Manager",
                        name: "Giulio Bellucci",
                        image: "",
                        list: []
                    }
                ]
            },
            {
                id: 4,
                isSelected: false,
                title: "Director",
                name: "Manlio Ferrari",
                image: "",
                list: []
            }
        ]
    };

    // Create a window with the grid (left pane)
    var redui = <IRedUI>window["redui"];
    var departmentTreeWindow = redui.createNewWindow("DepartmentTree");
    departmentTreeWindow.bind(corporateManagement);

    var dataRetrieved = departmentTreeWindow.bindingContext;

    equal(dataRetrieved.list[2].list[0].title, "Sports Director", "Test TreeView.getDataObject function.");
    equal(dataRetrieved.list[2].list[0].id, 5, "Test TreeView.getDataObject function, stored databound object.");
});

test("rebindTextBoxInsideWindow", function () {
    var customer = {
        id: 1,
        firstName: "Dino",
        lastName: "Baggio",
        isVip: false,
        isSelected: false,
        age: 0,
        description: "",
        manager: { id: 0, name: "" },
        address: {
            street: "",
            zip: 0,
            city: "",
            country: ""
        }
    }

    var customerUpd = {
        firstName: "Roberto",
    }

    var redui = <IRedUI>window["redui"];
    var simpleWindow = redui.createNewWindow("SimpleBindingExample");

    simpleWindow.bind(customer);

    simpleWindow["firstNameTextBox"].bind(customerUpd);

    equal(customer.firstName, "Dino", "Window bound to object");
    equal(customerUpd.firstName, "Roberto", "Control bound to object");
});

test("rebindGridViewRowInsideGridView", function () {
    // Customer data
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
                manager: { id: 0, name: "" },
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
                firstName: "Mario",
                lastName: "Pizzi",
                isVip: false,
                isSelected: false,
                age: 0,
                description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
                manager: { id: 7, name: "Antonio Conte" },
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
                isSelected: true,
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
                isSelected: false,
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

    var customerUpd = {
        id: 1,
        firstName: "James",
        lastName: "Bond",
        isVip: false,
        isSelected: false,
        age: 0,
        description: "",
        manager: { id: 0, name: "" },
        address: {
            street: "",
            zip: 0,
            city: "",
            country: ""
        }
    }

    var redui = <IRedUI>window["redui"];

    // Countries to choose from
    var countries = [
        { optid: "", optvalue: "" },
        { optid: "be", optvalue: "Belgium" },
        { optid: "fr", optvalue: "France" },
        { optid: "it", optvalue: "Italy" },
        { optid: "nl", optvalue: "Netherlands" }
    ];

    redui.optionsBag["getcountries"] = function () {
        return countries;
    };

    var simpleWindow = redui.createNewWindow("CustomersSimpleGrid");

    simpleWindow.bind(customerData);

    simpleWindow["customersGrid"].rows[0].bind(customerUpd);

    equal(customerData.list[0].firstName, "Mario", "GridView bound to object");
    equal(customerUpd.firstName, "James", "GridViewRow bound to object");
});

test("getWindowModel", function () {
    var redui = <IRedUI>window["redui"];
    var reduiWindowModel = redui.model.getWindowModel("EmptyWindow");
    equal(reduiWindowModel.name, "EmptyWindow", "Tests WindowModel.name property.");
});

test("addWindowModel", function () {
    var redui = <IRedUI>window["redui"];
    var reduiWindowModel = <IWindowModel>{
        name: "GeneratedFromTest_addWindowModel",
        title: "Title_GeneratedFromTest_addWindowModel",
        type: "window"
    };
    redui.model.addWindowModel(reduiWindowModel);

    var reduiWindow = redui.createNewWindow("GeneratedFromTest_addWindowModel");
    equal(reduiWindow.name, "GeneratedFromTest_addWindowModel", "Tests Window.name property.");
});

test("getWindowModelNonExistingWindow", function () {
    var success = true;
    try {
        var redui = <IRedUI>window["redui"];
        var reduiWindowModel = redui.model.getWindowModel("NotExistingWindow");
    } catch (e) {
        equal(e, "Window with name 'NotExistingWindow' is not found in the model.", "Tests error message");
        success = false;
    }

    equal(success, false, "Tests the error was produced")
});

test("addWindowModelTwice", function () {
    var success = true;
    try {
        var redui = <IRedUI>window["redui"];
        var reduiWindowModel = <IWindowModel>{
            name: "GeneratedFromTest_addWindowModelTwice",
            title: "Title_GeneratedFromTest_addWindowModelTwice",
            type: "window"
        };
        redui.model.addWindowModel(reduiWindowModel);
        redui.model.addWindowModel(reduiWindowModel);
    } catch (e) {
        equal(e, "Window with name 'GeneratedFromTest_addWindowModelTwice' is defined twice.", "Tests error message");
        success = false;
    }

    equal(success, false, "Tests the error was produced")
});

test("removeWindowModel", function () {
    var redui = <IRedUI>window["redui"];
    var reduiWindowModel = <IWindowModel>{
        name: "GeneratedFromTest_removeWindowModel",
        title: "Title_GeneratedFromTest_removeWindowModel",
        type: "window"
    };
    redui.model.addWindowModel(reduiWindowModel);
    var reduiWindowModel = redui.model.getWindowModel("GeneratedFromTest_removeWindowModel");
    equal(reduiWindowModel.name, "GeneratedFromTest_removeWindowModel", "Tests that window model was added.");

    redui.model.removeWindowModel("GeneratedFromTest_removeWindowModel");

    var success = true;
    try {
        redui.model.getWindowModel("GeneratedFromTest_removeWindowModel");
    } catch (e) {
        equal(e, "Window with name 'GeneratedFromTest_removeWindowModel' is not found in the model.", "Tests error message");
        success = false;
    }

    equal(success, false, "Tests the error was produced")
});
