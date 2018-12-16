// RedUI v1.0.0-beta002
// Copyright (c) 2014 Artem Kondratyev
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/jqueryui/jqueryui.d.ts"/>
/// <reference path="../Scripts/typings/mustache/mustache.d.ts"/>

/// <reference path="../redui/redui-1.0.0-interfaces.ts"/>

"use strict";

(function (window: Window) {

    // *****************************************************************************************
    // *                             Constants                                                 *
    // *****************************************************************************************
    var REDUI_VERSION = "1.0.0-beta002";

    // Id of DIV for RedUI application
    var REDUI_APPLICATION_ID = "#redui_application";
    // Name of the RedUI application data attribute which contains the ui model URI
    var REDUI_APPLICATION_MODEL_DATA_NAME = "model";
    // Name of the RedUI application data attribute which contains the templates base url
    var REDUI_APPLICATION_TEMPLATESBASEURL_DATA_NAME = "templatesbaseurl";

    // Basic control types
    var REDUI_CONTROL_TYPE_WINDOW = "window";
    var REDUI_CONTROL_TYPE_TEXTBOX = "textbox";
    var REDUI_CONTROL_TYPE_TEXTAREA = "textarea";
    var REDUI_CONTROL_TYPE_CHECKBOX = "checkbox";
    var REDUI_CONTROL_TYPE_COMBOBOX = "combobox";
    var REDUI_CONTROL_TYPE_LISTBUILDER = "listbuilder";
    var REDUI_CONTROL_TYPE_STATICTEXT = "statictext";
    var REDUI_CONTROL_TYPE_IMAGE = "image";
    var REDUI_CONTROL_TYPE_GROUPBOX = "groupbox";
    var REDUI_CONTROL_TYPE_TABS = "tabs";
    var REDUI_CONTROL_TYPE_TABPAGE = "tabpage";
    var REDUI_CONTROL_TYPE_BUTTON = "button";
    var REDUI_CONTROL_TYPE_OBJECTSELECTOR = "objectselector";
    var REDUI_CONTROL_TYPE_PAGER = "pager";
    var REDUI_CONTROL_TYPE_RIBBON = "ribbon";
    var REDUI_CONTROL_TYPE_RIBBONBUTTON = "ribbonbutton";
    var REDUI_CONTROL_TYPE_CONTEXTMENU = "contextmenu";
    var REDUI_CONTROL_TYPE_MENUITEM = "menuitem";
    var REDUI_CONTROL_TYPE_MENUSEPARATOR = "menuseparator";
    var REDUI_CONTROL_TYPE_LISTVIEW = "listview";
    var REDUI_CONTROL_TYPE_LISTVIEWITEM = "listviewitem";
    var REDUI_CONTROL_TYPE_ACCORDIONPANEL = "accordionpanel";
    var REDUI_CONTROL_TYPE_BREADCRUMBS = "breadcrumbs";
    var REDUI_CONTROL_TYPE_ANCHOREDCONTENT = "anchoredcontent";

    var REDUI_CONTROL_TYPE_CUSTOM = "custom";

    // Grid view control types
    var REDUI_CONTROL_TYPE_GRIDVIEW = "gridview";
    var REDUI_CONTROL_TYPE_GRIDVIEWROW = "gridviewrow";

    var REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCOLUMN = "gridviewstatictextcolumn";
    var REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCOLUMN = "gridviewtextboxcolumn";
    var REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCOLUMN = "gridviewcheckboxcolumn";
    var REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCOLUMN = "gridviewcomboboxcolumn";
    var REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCOLUMN = "gridviewobjectselectorcolumn";

    var REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCELL = "gridviewstatictextcell";
    var REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCELL = "gridviewtextboxcell";
    var REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCELL = "gridviewcheckboxcell";
    var REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCELL = "gridviewcomboboxcell";
    var REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCELL = "gridviewobjectselectorcell";

    // Tree view control types
    var REDUI_CONTROL_TYPE_TREEVIEW = "treeview";
    var REDUI_CONTROL_TYPE_TREEVIEWNODE = "treeviewnode";

    // Events
    var REDUI_EVENT_CHANGE = "change.redui";
    var REDUI_EVENT_CLICK = "click.redui";
    var REDUI_EVENT_SELECT = "select.redui";
    var REDUI_EVENT_FOCUSIN = "focusin.redui";
    var REDUI_EVENT_FOCUSOUT = "focusout.redui";
    var REDUI_EVENT_CONTEXTMENU = "contextmenu.redui";
    var REDUI_EVENT_KEYUP = "keyup.redui";
    var REDUI_EVENT_KEYDOWN = "keydown.redui";
    var REDUI_EVENT_MOUSEENTER = "mouseenter.redui";
    var REDUI_EVENT_MOUSEDOWN = "mousedown.redui";
    var REDUI_EVENT_MOUSEUP = "mouseup.redui";

    // Keys
    var KEY_UP = 38;
    var KEY_DOWN = 40;
    var KEY_ESC = 27;

    // Various constants // TODO: rename with REDUI_ as a prefix
    var DIALOG_RESULT_OK = "OK";
    var DIALOG_RESULT_CANCEL = "Cancel";
    var WINDOW_POSITION_DECLARED = "declared";
    var WINDOW_POSITION_CENTER = "center";

    // Sorting order
    var SORTING_ORDER_NONE = "";
    var SORTING_ORDER_ASC = "ASC";
    var SORTING_ORDER_DESC = "DESC";

    // Special CSS classes
    var REDUI_CLASS_HIDDEN = "redui-hidden";
    var REDUI_CLASS_FOCUSABLE = "redui-focusable";
    var REDUI_CLASS_VALID = "redui-valid";
    var REDUI_CLASS_ACTIVATED = "redui-activated"; // Is used to indicate that the special behavior has been activated for the element 
    var REDUI_CLASS_DISABLED = "redui-disabled";
    var REDUI_CLASS_MODALWINDOW = "redui-modalwindow";
    var REDUI_CLASS_COMMANDBOUND = "redui-commandbound";

    // *****************************************************************************************
    // *                             Helpers                                                   *
    // *****************************************************************************************

    /*
    Returns the new id for the control.
    This function is used to generate a unique id for every control.
     */
    var getNewId = (function () {
        // Last generated id.
        var _lastId = 0;
        return function (): number {
            _lastId++;
            return _lastId;
        };
    })();

    /*
    Returns the modal depth counter,
    which is used to support of multi-level modal dialogs.
     */
    var modalDepthCounter = (function () {
        // Current modal depth.
        var _depth = 0;
        var counter = {
            increase: function (): number {
                _depth++;
                return _depth;
            },
            decrease: function (): number {
                _depth--;
                return _depth;
            },
            current: function (): number {
                return _depth;
            }
        };
        return counter;
    })();

    /*
    Finds an element in an array.
    @arr the array
    @predicate function that tests an array element.
    The first array element for which the predicate returns true is returned.
    If predicate does not return true for any element, null is returned.
     */
    function findInArray(arr: any[], predicate: (x: any) => boolean): any {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (predicate(arr[i])) {
                return arr[i];
            }
        }
        return null;
    }

    /*
    Returns the sourceObject nested property value.
    Example:    a = { b: { c : "hi" } };
                getNestedPropertyValue(a, "b.c") returns "hi".
    If the property value is a function, returns a function.
    @sourceObject the object that owns the property.
    @nestedPropertyPath the path to the nested property.
     */
    function getNestedPropertyValue(sourceObject: any, nestedPropertyPath: string) {
        var propertyChain = nestedPropertyPath.split(".");
        var value = sourceObject;

        for (var i = 0, len = propertyChain.length; i < len; i++) {
            var property = propertyChain[i];
            value = value[property];
            if (value === undefined) {
                throw "Object does not have property '" + property + "'";
            }
        }
        return value;
    }

    /*
    Returns the sourceObject nested property value.
    Example:    a = { b: { c : function () { return "hi"; } } };
                getNestedPropertyValue(a, "b.c") returns "hi".
    If the property value is a function, returns a function.
    @sourceObject the object that owns the property.
    @nestedPropertyPath the path to the nested property.
     */
    function getNestedMethodResult(sourceObject: any, nestedMethodPath: string) {
        var propertyChain = nestedMethodPath.split(".");
        var value = sourceObject;

        for (var i = 0, len = propertyChain.length; i < len; i++) {
            var property = propertyChain[i];
            sourceObject = value;
            value = value[property];
            if (value === undefined) {
                throw "Object does not have property '" + property + "'";
            }
        }
        return value.call(sourceObject);
    }

    /*
    Sets the sourceObject nested property value.
    Example:    a = { b: { c : "" } };
                setNestedPropertyValue(a, "b.c", "hi") changes object a to { b: { c : "hi" } }.
    If the property path points to a function, calls that function passing the value as an argument.
    If any of the properties in the property path does not exist, adds it to the object.
    @sourceObject the object that owns the property.
    @nestedPropertyPath the path to the nested property.
    @value the value to set.
     */
    function setNestedPropertyValue(sourceObject: any, nestedPropertyPath: string, value: any) {
        if (!sourceObject) {
            throw "Cannot set property of an empty object";
        }
        if (!nestedPropertyPath) {
            throw "Cannot set property with empty name";
        }

        var propertyOwner;
        var propertyToSet;
        var nextOwner = sourceObject;
        var propertyChain = nestedPropertyPath.split(".");

        for (var i = 0, len = propertyChain.length; i < len; i++) {
            var property = propertyChain[i];
            // If property does not exist, create it
            if (nextOwner[property] === undefined) {
                nextOwner[property] = {};
            }
            propertyOwner = nextOwner;
            propertyToSet = property;
            nextOwner = nextOwner[property];
        };

        if (isFunction(propertyOwner[propertyToSet])) {
            propertyOwner[propertyToSet](value);
        } else {
            propertyOwner[propertyToSet] = value;
        }
    }

    /*
    Checks whether the object is an array.
    Returns true, if object is an array, otherwise, false.
     */
    var isArray = Function["isArray"] || function (obj: any): boolean {
        return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object Array]";
    };

    /*
    Checks whether the object is a function.
    Returns true, if object is a function, otherwise, false.
     */
    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === "[object Function]";
    }

    /*
    Generates a new guid.
    This guid is not guaranteed to satisfy the official universal uniqueness requirements,
    And should be used for internal purposes (see non-blocking rendering for the GridView).
     */
    function generateNewGuid(): string {
        var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var rnd = Math.random() * 16 | 0;
            var c1 = (c == 'x') ? rnd : (rnd & 0x3 | 0x8);
            return c1.toString(16);
        });
        return guid;
    }

    /*
    Redraws the elements.
    Uses some tricks that force the browser to re-draw the element.
    @elements to redraw.
     */
    function redraw(elements: JQuery) {
        $(elements).each(function () {
            var display = this.style.display;
            //            this.style.display = 'none'; // This line causes IE to go into compatibility view
            this.offsetHeight;
            this.style.display = display;
        });
    };

    /*
    Localizes a text, if it is a label (label is any text that starts with "$label."). 
    Returns text unchanged, if it is not a label, or if localized string cannot be found.
    Localisation is using the current culture and relies on the globalize js library.
    */
    function localizeText(text: string): string {
        if (text && text.substr(0, 7) === "$label.") {
            var label = text.substr(7);

            var globalize = window["Globalize"];
            var labelLocalized = globalize.localize(label, globalize.culture().name);
            if (labelLocalized) {
                return labelLocalized;
            }
            else {
                return text;
            }
        } else {
            // Not a label
            return text;
        }
    }

    // *****************************************************************************************
    // *                             Static Variables                                          *
    // *****************************************************************************************

    // Red UI application
    var _reduiApplication = $(REDUI_APPLICATION_ID);
    if (!_reduiApplication) {
        throw "Application is not found. Please make sure you defined the RedUI application (<div id='redui_application'.../>)";
    }

    // Application UI model
    var _model = loadModel();

    // Templates base URL
    var _templatesBaseUrl = <string>_reduiApplication.data(REDUI_APPLICATION_TEMPLATESBASEURL_DATA_NAME);
    if (!_templatesBaseUrl) {
        throw "Base URL for templates is not set. (<div id='redui_application' ... data-templatesbaseurl='...' ... />)";
    }

    // Templates
    var _templates = {};

    // Control handlers.
    // Control handler is an object implementing IControlHandlerSet interface 
    // and containing functions used to:
    // - create a new control
    // - initialize it from model
    // - activate it
    // - get and set it's value
    var _controlHandlers = {};

    // Flag that controls the localization
    var _isLocalizationEnabled = isFunction(window["Globalize"]);

    // Combobox options
    // This is a global object that is used if the optionsBag is not found on the window context.
    // Otherwise, the optionsBag from the window context is used.
    var _optionsBag = {};

    // Object sources for object selectors
    // This is a global object that is used if the objectSources is not found on the window context.
    // Otherwise, the objectSources from the window context is used.
    var _objectSources = {};

    // Custom control handlers
    // Custom control handler is an object implementing ICustomControlHandlerSet interface
    // and containing functions to:
    // - perform custom activation
    // - get and set control's value 
    var _customControlHandlers = {};

    // Commands
    var _commands = {};

    // *****************************************************************************************
    // *                             Model Access                                              *
    // *****************************************************************************************

    /*
    Loads and returns ui model, the object implementing IApplicationModel interface
    and providing an access to the model of every window and menu.
    If model uri is not specified, returns empty model.
     */
    function loadModel(): IApplicationModel {
        // Empty model
        var model = (function createApplicationModel(): IApplicationModel {
            var _windows = {};
            var _menus = {};

            return <IApplicationModel>{
                // Adds a window model to the application model
                addWindowModel: function addWindowModel(windowModel: IWindowModel): void {
                    if (!("name" in windowModel)) {
                        throw "Window model doesn't contain property 'name'. Model: " + JSON.stringify(windowModel);
                    }
                    if (windowModel.name in _windows) {
                        throw "Window with name '" + windowModel.name + "' is defined twice.";
                    }

                    _windows[windowModel.name] = windowModel;
                },
                // Returns a window model
                getWindowModel: function getWindowModel(name: string): IWindowModel {
                    if (!(name in _windows)) {
                        throw "Window with name '" + name + "' is not found in the model.";
                    }

                    return <IWindowModel>_windows[name];
                },
                // Removes a window model
                removeWindowModel: function removeWindowModel(name: string): void{
                    if (name in _windows) {
                        delete _windows[name];
                    }
                },

                // Adds a menu model to the application model
                addMenuModel: function addMenuModel(menuModel: IContextMenuModel): void {
                    if (!("name" in menuModel)) {
                        throw "Menu model doesn't contain property 'name'. Model: " + JSON.stringify(menuModel);
                    }
                    if (menuModel.name in _menus) {
                        throw "Menu with name '" + menuModel.name + "' is defined twice.";
                    }

                    _menus[menuModel.name] = menuModel;
                },
                // Returns a menu model
                getMenuModel: function getMenuModel(name: string): IContextMenuModel {
                    if (!(name in _menus)) {
                        throw "Menu with name '" + name + "' is not found in the model.";
                    }

                    return <IContextMenuModel>_menus[name];
                },
                // Removes a menu model
                removeMenuModel: function removeMenuModel(name: string): void {
                    if (name in _menus) {
                        delete _menus[name];
                    }
                }
            };
        })();

        var modelUrl = <string>_reduiApplication.data(REDUI_APPLICATION_MODEL_DATA_NAME);
        // If Url is not set, returns an empty model.
        // Developers can always add models programmatically.
        if (!modelUrl) {
            return model;
        }

        try {
            var loadedModel;

            $.ajax({
                url: modelUrl,
                dataType: "json",
                async: false,
                success: function (modelJson) {
                    loadedModel = modelJson;
                }
            });

            // pre-process model...
            if (!("windows" in loadedModel)) {
                throw "Property 'windows' is not found in the model.";
            }
            if (!isArray(loadedModel["windows"])) {
                throw "Property 'windows' is not an array.";
            }
            // ...by transforming to hash table
            var windowModels = loadedModel["windows"];
            if (windowModels) {
                for (var i = 0, len = windowModels.length; i < len; i++) {
                    model.addWindowModel(windowModels[i]);
                }
            }
            var menuModels = loadedModel["menus"];
            if (menuModels) {
                for (var i = 0, len = menuModels.length; i < len; i++) {
                    model.addMenuModel(menuModels[i]);
                }
            }

            return model;
        }
        catch (e) {
            throw "Error while loading model: " + e;
        }
    }

    /*
    Saves updated window model in the local storage. 
    This method is automatically called when window is closed.
    Also after the GridView customization dialog is closed, this method is called for the window containing the GridView.
    @windowModel window model
    */
    function saveModelChanges(windowModel: IWindowModel) {
        if (windowModel.trackChanges) {
            localStorage.setItem("__REDUI_WINDOW[" + windowModel.name + "][" + windowModel.version + "]", JSON.stringify(windowModel));
        }
    }

    /*
    Returnes a clone of the window model merged with the model stored in the local storage.
    @windowModel window model
    */
    function restoreModelChanges(windowModel: IWindowModel) {
        if (windowModel.trackChanges) {
            var stroredWindowModel = {};
            var stroredWindowModelString = localStorage.getItem("__REDUI_WINDOW[" + windowModel.name + "][" + windowModel.version + "]");
            if (stroredWindowModelString) {
                stroredWindowModel = JSON.parse(stroredWindowModelString);
            }
            $.extend(true, windowModel, stroredWindowModel);
        }
    }

    // *****************************************************************************************
    // *                             Control Creation And Initialization                       *
    // *****************************************************************************************

    /*
    Returns the handler set registered for the specified control type.
    Handlers are functions that controls every aspect of control's behavior.
    @controlType the type of the control.
    */
    function getControlHandlerSet(controlType: string): IControlHandlerSet {
        if (!_controlHandlers[controlType]) {
            throw "Control type '" + controlType + "' is not registered.";
        }
        return _controlHandlers[controlType];
    }

    /*
    Creates and initializes any redui control from model.
    Internally calls 'create' and 'initializeFromModel' control-specific handlers.
    It's only necessary to directly call this method from the parent control that is not a generic container (i.e. does not extend IContainerControl),
    Like ContextMenu, that does not allow to add any control type as a child, thus does not extend IContainerControl interface.
    For the controls that are generic controls, like GroupBox, AccordionPanel etc, it's enough to call initializeInnerControls.
    @window owner window.
    @controlModel the model that describes a control.
     */
    function initializeControlFromModel(window: IWindow, controlModel: IControlModel): IControl {
        // Verify and normalize model
        if (!controlModel.type) {
            throw "Control type is not specified in the model (" + JSON.stringify(controlModel) + ")";
        }

        if (!controlModel.name) {
            controlModel.name = "generatedName"; // TODO: implement
        }
        if (!controlModel.cssClass) {
            controlModel.cssClass = "";
        }
        if (controlModel.isHidden) {
            controlModel.isHidden = true;
        } else {
            controlModel.isHidden = false;
        }

        var newControl: IControl;
        try {
            var handlers = getControlHandlerSet(controlModel.type);
            newControl = handlers.create();
            handlers.initializeFromModel(window, newControl, controlModel);
        } catch (e) {
            throw "Cannot initialize control of type '" + controlModel.type + "' from model. " + e;
        }

        newControl.model = controlModel;
        newControl.name = controlModel.name;

        InitializeControlContextMenu(window, newControl, controlModel);

        return newControl;
    }

    /*
    Creates and initializes inner controls of a given control from model.
    Used by container controls (GroupBox, AccordionPanel etc) to initialize the controls collection.
    @window owner window.
    @parentControl parent control
    @controlsModel model that is used to initialize controls.
     */
    function initializeInnerControls(window: IWindow, parentControl: IContainerControl, controlsModel: IControlModel[]) {
        for (var i = 0, len = controlsModel.length; i < len; i++) {
            var controlModel = controlsModel[i];
            // TODO: this common code has to be repeated for controls that has inner elements but are not container controls!

            // Create a new control
            var newControl = initializeControlFromModel(window, controlModel);
            // Make parent accessible
            newControl.parent = parentControl;
            // Make window accessible
            newControl.window = window;
            // Make control accessible by name
            parentControl[newControl.name] = newControl;
            // Make control element accessible
            newControl.getElement = (function (id) {
                return function () { return $("#" + id); };
            })(newControl.id);
            // Add control to the collection of the parent.
            parentControl.controls.push(newControl);
        };
    }

    /*
    Initializes a control context menu. 
    Every control can have a context menu, so this method is called by the framework for every control.
    No need to call it directrly.
    @window owner window.
    @control the control that has a context menu.
    @controlModel the model that describes a control.
     */
    function InitializeControlContextMenu(window: IWindow, control: IControl, controlModel: IControlModel) {
        if (!controlModel.contextMenu) {
            controlModel.contextMenu = "";
        } else {
            try {
                var contextMenuModel = _model.getMenuModel(controlModel.contextMenu);
                var newContextMenu = <IContextMenu>initializeControlFromModel(window, contextMenuModel);

                newContextMenu.parent = control;
                newContextMenu.window = window;
                // Make control element accessible
                newContextMenu.getElement = (function (id) {
                    return function () { return $("#" + id); };
                })(newContextMenu.id);
                control.contextMenu = newContextMenu;
            } catch (e) {
                throw "Cannot initialize control of type '" + controlModel.type + "' from model. " + e;
            }
        }
    }

    /*
     Retrieves the options for combobox/list builder from the function that is set on the combobox model.
     @window window the control belongs to (to resolve the local context)
     @control control to retrieve the options for.
     @controlModel control model.
     */
    function getOptions(window: IWindow, control: IControl, controlModel: IComboBoxModel): ISelectionOption[] {
        var optionsMapped = [];
        if (controlModel.getOptionsFunction) {
            var options = [];

            var windowContext = window.context;
            if (windowContext && windowContext.optionsBag && isFunction(windowContext.optionsBag[controlModel.getOptionsFunction])) {
                // Local options bag
                options = windowContext.optionsBag[controlModel.getOptionsFunction]();
            } else if (isFunction(_optionsBag[controlModel.getOptionsFunction])) {
                // Global options bag
                options = _optionsBag[controlModel.getOptionsFunction]();
            } else {
                throw "Error retrieving options for control '" + control.name + "': Options bag does not have a function with name '" + controlModel.getOptionsFunction + "'";
            }
            if (!isArray(options)) {
                throw "Value returned by the function '" + controlModel.getOptionsFunction + "' used as an 'options' for control '" + control.name + "' is not an array.";
            }

            var optionIdProperty = controlModel.optionIdProperty;
            if (!optionIdProperty) {
                optionIdProperty = "id";
            }
            var optionValueProperty = controlModel.optionValueProperty;

            optionsMapped = $.map(options, function (option) {
                if (!(optionIdProperty in option)) {
                    throw "Option value bound to control '" + controlModel.name + "' doesn't have property '" + optionIdProperty + "'";
                }
                // Only check if the property configured explicitly
                if (optionValueProperty && !(optionValueProperty in option)) {
                    throw "Option value bound to control '" + controlModel.name + "' doesn't have property '" + optionValueProperty + "'";
                }

                var optionMapped = <ISelectionOption>{};
                optionMapped.id = option[optionIdProperty];

                if (optionValueProperty) {
                    optionMapped.value = option[optionValueProperty];
                } else {
                    optionMapped.value = option.toString();
                }

                return optionMapped;
            });
        }
        return optionsMapped;
    }
    
    // *****************************************************************************************
    // *                             Control Rendering                                         *
    // *****************************************************************************************

    /*
    Returns the HTML for a given control.
    Relies on mustache template engine to render the HTML.
    Templates are retrieved once and cached on the _templates object.
    Templates are retrieved with redui version as a url query parameter, that forces the new version of template to be loaded.
    */
    function toHtml(): string {
        var reduiControl = <IControl>this;
        var controlTemplateType = reduiControl.type;
        if (controlTemplateType === REDUI_CONTROL_TYPE_CUSTOM) {
            var customControlModel = <ICustomControlModel>reduiControl.model;
            controlTemplateType = customControlModel.customType;
        }

        var template = _templates[controlTemplateType];

        if (!template) {
            var templateUrl = _templatesBaseUrl + controlTemplateType + ".htm?v=" + REDUI_VERSION;
            var error;
            $.ajax({
                url: templateUrl,
                dataType: "html",
                async: false,
                success: function (templateHtm) {
                    template = Mustache.compile(templateHtm);
                    _templates[controlTemplateType] = template;
                },
                error: function () {
                    error = "Template for type '" + controlTemplateType + "'is not found by url: '" + templateUrl + "'";
                }
            });
            if (error) {
                throw error;
            }
        }

        return template(reduiControl);
    }

    /*
    Localizes the label.
    This function is used called from templates to localize every label/text defined in the model.
    Localization only happens in Globalize.js is found.
    */
    function localize() {
        // If localization is not enabled - render as is
        if (!_isLocalizationEnabled) {
            return function (text, render) {
                return render(text);
            };
        }
        // Otherwise, localize
        return function (text, render) {
            var renderedText = render(text);
            return localizeText(renderedText);
        };
    }

    // *****************************************************************************************
    // *                             Control Databinding                                       *
    // *****************************************************************************************

    /*
    Standard behavior for data binding that is attached to every databound redui control.
    Should only be called as a method of a redui control (requires 'this').
    @dataObject the view model the control is bound to.
    */
    function bind(dataObject: any) {
        var dataBoundControl = <IDataBoundControl>this;
        bindRecursively(dataBoundControl, dataObject);
    }

    /*
    Walks through the hierarchy of controls and binds them to the data.
    Makes the data object (or it's property, in case the control is inside container that changes the context) 
    accessible from the bindingContext property.
    If the property that the control is bound to is a function, calles the function.
    If the function has a property 'subscribe' it is considered to be ko.observable, in which case the control
    automatically subscribes to changes.
    Also binds all the inner controls to the data. Normally it is not required to call this method directly.
    @dataBoundControl the databound control.
    @dataObject the view model the control is bound to.
    */
    function bindRecursively(dataBoundControl: IDataBoundControl, dataObject: any) {
        var controlModel = <IDataBoundControlModel>dataBoundControl.model;
        // Determine the binding context: dataObject or a property inside the dataObject
        var containerControlModel = <IContainerControlModel>controlModel;
        // Container controls are allowed to change the binding context to shorten the binding paths of their children.
        if (containerControlModel.bindingContext) {
            // Change the binding context to the value of the property inside the dataObject
            try {
                dataObject = getNestedPropertyValue(dataObject, containerControlModel.bindingContext);
            } catch (e) {
                throw "Databinding context cannot be set for control '" + dataBoundControl.name + "': Data object does not have property '" + containerControlModel.bindingContext + "'";
            }
        }

        // Save context object on the databound control
        dataBoundControl.bindingContext = dataObject;

        // If data binding is defined in the model
        if (controlModel.bindsTo) {
            try {
                var value = getNestedPropertyValue(dataObject, controlModel.bindsTo);
            } catch (e) {
                throw "Error databinding control '" + dataBoundControl.name + "': Data object does not have property '" + controlModel.bindsTo + "'";
            }

            // Unwrap the function
            if (isFunction(value)) {
                // If ko.observable, subscribe manually before unwrapping
                if ("subscribe" in value) {
                    // TODO: handle repeated subscribe!
                    value.subscribe(function (newValue) {
                        updateElementValue(dataBoundControl, newValue)
                    });
                }
                value = getNestedMethodResult(dataObject, controlModel.bindsTo);
            }

            updateElementValue(dataBoundControl, value);
        }

        // Bind children
        if ("controls" in dataBoundControl) {
            var containerControl = <IContainerControl>dataBoundControl;
            for (var i = 0, innerControlsLen = containerControl.controls.length; i < innerControlsLen; i++) {
                var innerControl = containerControl.controls[i];
                if (isFunction(innerControl["bind"])) {
                    bindRecursively(<IDataBoundControl>innerControl, dataObject);
                }
            };
        }
    }

    /*
    Updates the value of the rendered element, the value that is seen by user.
    For that, relies to the control-specific handler.
    Normally it is not required to call this method directly.
    @dataBoundControl the databound control.
    @value the value of the control, comes from the property of the dataObject.
    */
    function updateElementValue(dataBoundControl: IDataBoundControl, value: any) {
        try {
            var handlers = getControlHandlerSet(dataBoundControl.type);
            handlers.setValue(dataBoundControl, value);
        } catch (e) {
            throw "Error setting value for control of type '" + dataBoundControl.type + "'. " + e;
        }
    }

    /*
    Takes the value that is seen by user from the rendered element and
    updates the dataObject the dataBoundControl is bound to.
    For that, relies to the control-specific handler.
    After the dataObject is updated, triggers the validation.
    @dataBoundControl the databound control.
    */
    function updateBinding(dataBoundControl: IDataBoundControl): void {
        var controlModel = <IDataBoundControlModel>dataBoundControl.model;
        var dataObject = dataBoundControl.bindingContext;

        if (dataObject && controlModel.bindsTo) {
            var element = dataBoundControl.getElement();
            var value = null;

            try {
                var handlers = getControlHandlerSet(dataBoundControl.type);
                value = handlers.getValue(dataBoundControl);
            } catch (e) {
                throw "Cannot update data object for control of type '" + dataBoundControl.type + "'. " + e;
            }

            setNestedPropertyValue(dataObject, controlModel.bindsTo, value);

            // Attention: at this moment the data object is already updated!
            validateControl(dataBoundControl);
        }
    }

    // *****************************************************************************************
    // *                             Control Validation                                        *
    // *****************************************************************************************

    /*
    Performs the control validation.
    In the current implementation is aware of the control internal structure, so walks the inner controls on its own.
    It's rarely needed to call this method directly.
    @dataBoundControl the databound control.
    */
    // TODO: In the current implementation is aware of the control internal structure, so walks the inner controls on its own.
    function validateControl(dataBoundControl: IDataBoundControl): boolean {
        function invalidate(dataBoundControl: IDataBoundControl, errorMessage: string) {
            // Localize the message
            var localizedErrorMessage = localizeText(errorMessage);
            // Put an error message in the error box
            var validationErrorBox = $("#" + dataBoundControl.id + "_validationerrorbox");
            validationErrorBox.text(localizedErrorMessage);
            // Enable invalid state
            var controlOuter = $("#" + dataBoundControl.id + "_template");
            controlOuter.removeClass(REDUI_CLASS_VALID);
        }

        var controlModel = <IDataBoundControlModel>dataBoundControl.model;

        // Start with assumption that is valid
        var isValid = true;

        var dataObject = null;
        if ("bindingContext" in dataBoundControl) {
            dataObject = dataBoundControl.bindingContext;
        }

        var value = null;
        if (controlModel.bindsTo) {
            try {
                var value = getNestedPropertyValue(dataObject, controlModel.bindsTo);

                // Unwrap function
                if (isFunction(value)) {
                    value = getNestedMethodResult(dataObject, controlModel.bindsTo);
                }
            } catch (e) {
                // Ignore, continue validation
            }
        }

        // Validate required
        if (controlModel["isRequired"] && !value) {
            // Required value is missing - construct an error message
            var errorMessage = "";
            if (controlModel["validationErrorMessage"]) {
                errorMessage = controlModel["validationErrorMessage"];
            } else {
                errorMessage = "Value for field " + (controlModel["label"] ? controlModel["label"] + " " : "") + "is required";
            }
            invalidate(dataBoundControl, errorMessage);
            isValid = false;
        }

        // Validate max length
        var maxLength = +controlModel["maxlength"];
        if (isValid && maxLength && value && value.length > maxLength) {
            // Value is too long - construct an error message
            var errorMessage = "";
            if (controlModel["validationErrorMessage"]) {
                errorMessage = controlModel["validationErrorMessage"];
            } else {
                errorMessage = "Value for field " + (controlModel["label"] ? controlModel["label"] + " " : "") + "exceeds the maximum length (" + maxLength + ")";
            }
            invalidate(dataBoundControl, errorMessage);
            isValid = false;
        }

        // Validate against pattern
        if (isValid && controlModel["pattern"] && value) {
            // Conforms with HTML5 pattern attribute:
            // If an input element has a pattern attribute specified, and the attribute's 
            // value, when compiled as a JavaScript regular expression with the global, 
            // ignoreCase, and multiline flags disabled
            var regExp = new RegExp(controlModel["pattern"]);

            if (!regExp.test(value)) {
                // Value is not validating - construct an error message
                var errorMessage = "";
                if (controlModel["validationErrorMessage"]) {
                    errorMessage = controlModel["validationErrorMessage"];
                } else {
                    errorMessage = "Value for field " + (controlModel["label"] ? controlModel["label"] + " " : "") + "doesn't have a correct format";
                }
                invalidate(dataBoundControl, errorMessage);
                isValid = false;
            }
        }

        // Validate using model
        if (isValid && dataObject && isFunction(dataObject.validate)) {
            var errorMessage = <string>dataObject.validate(dataBoundControl, value);
            if (errorMessage) {
                invalidate(dataBoundControl, errorMessage);
                isValid = false;
            }
        }

        // Validate cells
        if (dataBoundControl.type === REDUI_CONTROL_TYPE_GRIDVIEW) {
            var gridView = <IGridView>dataBoundControl;
            for (var j = 0, rowsLen = gridView.rows.length; j < rowsLen; j++) {
                var gridViewRow = <IGridViewRow>gridView.rows[j];
                if (!gridViewRow.isSentinel) {
                    for (var i = 0, cellsLen = gridViewRow.cells.length; i < cellsLen; i++) {
                        var cell = gridViewRow.cells[i];
                        // Order of operands is important to make sure inners control validation always runs!
                        isValid = validateControl(<IDataBoundControl>cell) && isValid;
                    };
                }
            }
        }

        // Validate inner controls
        if ("controls" in dataBoundControl) {
            var containerControl = <IContainerControl>dataBoundControl;
            for (var i = 0, innerControlsLen = containerControl.controls.length; i < innerControlsLen; i++) {
                var innerControl = containerControl.controls[i];
                // Order of operands is important to make sure inners control validation always runs!
                isValid = validateControl(<IDataBoundControl>innerControl) && isValid;
            };
        }

        // If the control itself is valid
        // Any any inner control is valid,
        if (isValid) {
            // Clear validation error message, if any...
            var validationErrorBox = $("#" + dataBoundControl.id + "_validationerrorbox");
            validationErrorBox.text("");
            // ...and disable invalid state
            var controlOuter = $("#" + dataBoundControl.id + "_template");
            controlOuter.addClass(REDUI_CLASS_VALID);
        }

        // At this stage all the individual (non-container) controls
        // should have their error messages set
        // Return the overall validation result
        return isValid;
    }

    // *****************************************************************************************
    // *                             Control Activation                                        *
    // *****************************************************************************************

    /*
    Helper to call the control-specific activation handler.
    Generic containers (GroupBox, AccordionPanel etc) don't have to call this method directly
    and can activate their children by calling activateInnerControls.
    @control control to activate
    */
    function activateControl(control: IControl) {
        try {
            var handlers = getControlHandlerSet(control.type);
            handlers.activate(control);

            if (control.contextMenu) {
                activateControl(control.contextMenu);
            }
        } catch (e) {
            throw "Error activating control of type '" + control.type + "'. " + e;
        }
    }

    /*
    Activates inner controls of the given control.
    @control control to activate
    */
    function activateInnerControls(control: IControl) {
        // Bind children to events
        if ("controls" in control) {
            var containerControl = <IContainerControl>control;
            for (var i = 0, innerControlsLen = containerControl.controls.length; i < innerControlsLen; i++) {
                activateControl(containerControl.controls[i]);
            };
        }
    }

    /*
    Subscribes the databound control to change event.
    Change triggers binding update.
    */
    function subscribeToChange(dataBoundControl: IDataBoundControl) {
        var controlModel = <IDataBoundControlModel>dataBoundControl.model;

        function updateControlBinding() {
            updateBinding(dataBoundControl);
        };

        if (controlModel.bindsTo) {
            dataBoundControl.getElement().bind(REDUI_EVENT_CHANGE, updateControlBinding);
        }
    }

    // *****************************************************************************************
    // *                             Commands                                                  *
    // *****************************************************************************************

    /*
    Binds control to command.
    For the given control click triggers the command execution (if enabled).
    */
    function bindToCommand(control: IControl) {
        var model = <ICommandBoundControlModel>control.model;

        // If command is not specified - don't bind
        if (!model.command) {
            return;
        }
        // If specified, then should be provided
        if (!(model.command in _redui.commands)) {
            throw "Error binding control '" + control.name + "' of type '" + control.type + "' to command. The command '" + model.command + "' is not found in redui.commands.";
        }

        var command = <ICommand>_redui.commands[model.command];
        if (!isFunction(command.execute)) {
            throw "Error binding control '" + control.name + "' of type '" + control.type + "' to command. The command '" + model.command + "' does not contain execute function.";
        }

        // On click execute the command
        control.getElement().bind(REDUI_EVENT_CLICK, function () {
            if (isFunction(command.canExecute) && command.canExecute()) {
                command.execute(control);
                updateCommandState();
            }
        });
    }

    /*
    Updates the state of the elements bound to commands.
    Calls canExecute of every command and toggles redui-disabled class accordingly
    */
    function updateCommandState() {
        for (var commandName in _commands) {
            if (_commands.hasOwnProperty(commandName)) {
                var command = _commands[commandName];
                // If bound to command - then disabled by default
                var canExecute = false;
                if (isFunction(command.canExecute)) {
                    var canExecute = (<ICommand>command).canExecute();
                }
                var elements = $("." + REDUI_CLASS_COMMANDBOUND);
                for (var i = 0, len = elements.length; i < len; i++) {
                    var element = $(elements[i]);
                    var elementCommandName = element.data("command");
                    if (commandName == elementCommandName) {
                        if (canExecute) {
                            element.removeClass(REDUI_CLASS_DISABLED);
                        } else {
                            element.addClass(REDUI_CLASS_DISABLED);
                        }
                    }
                }
            }
        }
    }

    /* 
    Acivates the command mechanism.
    */
    function activateCommands() {
        $(document).bind(REDUI_EVENT_GRIDVIEW_CURRENTROWCHANGED, updateCommandState);
        $(document).bind(REDUI_EVENT_GRIDVIEW_SORTINGCHANGED, updateCommandState);
        $(document).bind(REDUI_EVENT_TREEVIEW_CURRENTNODECHANGED, updateCommandState);
        $(document).bind(REDUI_EVENT_TREEVIEWNODE_EXPANDED, updateCommandState);
        $(document).bind(REDUI_EVENT_WINDOW_SHOWN, updateCommandState);
        $(document).bind(REDUI_EVENT_WINDOW_CLOSED, updateCommandState);
        $(document).bind(REDUI_EVENT_PAGER_PAGECHANGED, updateCommandState);

        $(document).bind(REDUI_EVENT_CHANGE, updateCommandState);
        $(document).bind(REDUI_EVENT_SELECT, updateCommandState);
        $(document).bind(REDUI_EVENT_FOCUSIN, updateCommandState);
        $(document).bind(REDUI_EVENT_FOCUSOUT, updateCommandState);

        updateCommandState();
    }

    // *****************************************************************************************
    // *                                                                                       *
    // *                      Here begins the control-specific code                            *
    // *                                                                                       *
    // *****************************************************************************************
    // *                             Controls - Window                                         *
    // *****************************************************************************************

    var REDUI_EVENT_WINDOW_SHOWN = "redui_window_shown";
    var REDUI_EVENT_WINDOW_DOCKED = "redui_window_docked";
    var REDUI_EVENT_WINDOW_CLOSING = "redui_window_closing";
    var REDUI_EVENT_WINDOW_CLOSED = "redui_window_closed";

    var REDUI_CLASS_WINDOW_CLOSEBUTTON = "redui-window-closebutton";

    function registerWindow() {
        var REDUI_WINDOW_TITLE_HEIGHT = 32;
        var WINDOW_MINIMAL_WIDTH = 200;
        var WINDOW_MINIMAL_HEIGHT = 200;

        _controlHandlers[REDUI_CONTROL_TYPE_WINDOW] = <IControlHandlerSet>{
            create(): IWindow {
                var window = <IWindow>{
                    // Privates
                    _toHtml: toHtml,
                    _localize: localize,
                    // Properties
                    model: null,
                    id: "redui_window_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_WINDOW,
                    parent: null,
                    window: null,
                    controls: [],
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    titleWidth: 0,
                    titleHeight: 0,
                    clientAreaWidth: 0,
                    clientAreaHeight: 0,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    show: null,
                    close: null,
                    showModal: null,
                    dock: null,
                    undock: null,
                    closing: function (handler: (target: any, dialogResult: string) => void) {
                        this.getElement().bind(REDUI_EVENT_WINDOW_CLOSING, handler);
                    },
                    closed: function (handler: (target: any, dialogResult: string) => void) {
                        this.getElement().bind(REDUI_EVENT_WINDOW_CLOSED, handler);
                    }
                };
                return window;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var reduiWindow = <IWindow>control;
                var windowModel = <IWindowModel>model;

                if (!windowModel.version) {
                    windowModel.version = 0;
                }

                // Clone model
                windowModel = $.extend(true, {}, windowModel);
                // Restore changes
                restoreModelChanges(windowModel);

                reduiWindow.model = windowModel;

                reduiWindow.name = windowModel.name;

                // Normalize model
                windowModel.type = REDUI_CONTROL_TYPE_WINDOW;
                windowModel.isHidden = true; // Window is always hidden initially.
                if (!windowModel.title) {
                    windowModel.title = "";
                }
                if (!windowModel.width) {
                    windowModel.width = 0;
                }
                if (!windowModel.height) {
                    windowModel.height = 0;
                }
                if (!windowModel.left) {
                    windowModel.left = 0;
                }
                if (!windowModel.top) {
                    windowModel.top = 0;
                }
                if (!windowModel.trackChanges) {
                    windowModel.trackChanges = false;
                }

                // Initialize window own properties
                reduiWindow.width = windowModel.width;
                reduiWindow.height = windowModel.height;
                reduiWindow.left = windowModel.left;
                reduiWindow.top = windowModel.top;

                reduiWindow.titleWidth = reduiWindow.width;
                reduiWindow.titleHeight = REDUI_WINDOW_TITLE_HEIGHT;

                reduiWindow.clientAreaWidth = reduiWindow.width;
                reduiWindow.clientAreaHeight = reduiWindow.height - REDUI_WINDOW_TITLE_HEIGHT;

                // Initialize methods
                reduiWindow.getElement = function () { return $("#" + reduiWindow.id); };

                // Initialize inner controls
                if (windowModel.controls) {
                    initializeInnerControls(reduiWindow, reduiWindow, windowModel.controls);
                }
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Window value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Window cannot be used for data input";
			},
            activate(control: IControl): void {
                var newWindow = <IWindow>control;
                var windowElement = newWindow.getElement();
                var windowModel = <IWindowModel>newWindow.model;

                // TODO: should be optional?
                windowElement.draggable({
                    containment: REDUI_APPLICATION_ID,
                    handle: "#" + newWindow.id + "_titleouter"
                });

                var outer = $("#" + newWindow.id + "_clientareaouter");
                var title = $("#" + newWindow.id + "_titleouter");
                var dialogButtonOuter = $("#" + newWindow.id + "_dialogbuttonspanelouter");

                // TODO: should be optional?
                windowElement.resizable({
                    handles: "se",
                    minWidth: WINDOW_MINIMAL_WIDTH,
                    minHeight: WINDOW_MINIMAL_HEIGHT,
                    helper: "redui-resizable-helper",
                    stop: function (event, ui) {
                        var dWidth = ui.size.width - ui.originalSize.width;
                        var dHeight = ui.size.height - ui.originalSize.height;

                        outer.width(outer.width() + dWidth);
                        outer.height(outer.height() + dHeight);

                        title.width(title.width() + dWidth);

                        dialogButtonOuter.width(dialogButtonOuter.width() + dWidth);

                        // update window properties
                        newWindow.width += dWidth;
                        newWindow.height += dHeight;

                        newWindow.clientAreaWidth += dWidth;
                        newWindow.clientAreaHeight += dHeight;

                        newWindow.titleWidth += dWidth;

                        windowModel.width += dWidth;
                        windowModel.height += dHeight;
                    }
                });

                // Close button
                $("." + REDUI_CLASS_WINDOW_CLOSEBUTTON, windowElement).click(function () {
                    newWindow.close(DIALOG_RESULT_CANCEL);
                });

                // Esc button
                windowElement.bind(REDUI_EVENT_KEYUP, function (e) {
                    if (e.keyCode == KEY_ESC) { // esc
                        newWindow.close(DIALOG_RESULT_CANCEL);
                    }
                });

                activateInnerControls(control);
            }
        };
    }

    // *****************************************************************************************
    // *                             Controls - Simple                                         *
    // *****************************************************************************************

    function registerTextBox() {
        _controlHandlers[REDUI_CONTROL_TYPE_TEXTBOX] = <IControlHandlerSet>{
            create(): ITextBox {
                var textBox = <ITextBox>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_TEXTBOX,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return textBox;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newTextBox = <ITextBox>control;
                var controlModel = <ITextBoxModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.inputType) {
                    controlModel.inputType = "text";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.val(value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.val();
            },
            activate(control: IControl): void {
                var dataBoundControl = <IDataBoundControl>control;
                subscribeToChange(dataBoundControl);
            }
        };
    }

    function registerTextArea() {
        var REDUI_TEXTAREA_COLUMNS_DEFAULT = 80;
        var REDUI_TEXTAREA_ROWS_DEFAULT = 10;

        _controlHandlers[REDUI_CONTROL_TYPE_TEXTAREA] = <IControlHandlerSet>{
            create(): ITextArea {
                var textArea = <ITextArea>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_TEXTAREA,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return textArea;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newTextArea = <ITextArea>control;
                var controlModel = <ITextAreaModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.columns) {
                    controlModel.columns = REDUI_TEXTAREA_COLUMNS_DEFAULT;
                }
                if (!controlModel.rows) {
                    controlModel.rows = REDUI_TEXTAREA_ROWS_DEFAULT;
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.val(value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.val();
            },
            activate(control: IControl): void {
                var dataBoundControl = <IDataBoundControl>control;
                subscribeToChange(dataBoundControl);
            }
        };
    }

    function registerCheckBox() {
        _controlHandlers[REDUI_CONTROL_TYPE_CHECKBOX] = <IControlHandlerSet>{
            create(): ICheckBox {
                var checkBox = <ICheckBox>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_CHECKBOX,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return checkBox;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newCheckBox = <ICheckBox>control;
                var controlModel = <ICheckBoxModel>model;
                
                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.prop('checked', value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.is(':checked');
            },
            activate(control: IControl): void {
                var dataBoundControl = <IDataBoundControl>control;
                subscribeToChange(dataBoundControl);
            }
        };
    }

    function registerComboBox() {
        _controlHandlers[REDUI_CONTROL_TYPE_COMBOBOX] = <IControlHandlerSet>{
            create(): IComboBox {
                var comboBox = <IComboBox>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_COMBOBOX,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    options: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return comboBox;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newComboBox = <IComboBox>control;
                var controlModel = <IComboBoxModel>model;
                
                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }

                var optionsMapped = getOptions(window, newComboBox, controlModel);
                newComboBox.options = optionsMapped;
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.val(value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.val();
            },
            activate(control: IControl): void {
                var dataBoundControl = <IDataBoundControl>control;
                subscribeToChange(dataBoundControl);
            }
        };
    }

    function registerListBuilder() {
        _controlHandlers[REDUI_CONTROL_TYPE_LISTBUILDER] = <IControlHandlerSet>{
            create(): IListBuilder {
                var listBuilder = <IListBuilder>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_LISTBUILDER,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    options: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return listBuilder;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newListBuilder = <IListBuilder>control;
                var controlModel = <IListBuilderModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }

                var optionsMapped = getOptions(window, newListBuilder, controlModel);
                newListBuilder.options = optionsMapped;
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                if (!isArray(value)) {
                    var controlModel = <IDataBoundControlModel>dataBoundControl.model;
                    throw "Value of the property '" + controlModel.bindsTo + "' bound to list builder '" + dataBoundControl.name + "' is not an array.";
                }

                $("#" + dataBoundControl.id + "_availableoptions option").each(function (idx, option) {
                    if ($.inArray($(option).val(), value) !== -1) {
                        $(option).appendTo(element);
                    }
                });
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();

                var value = [];
                $("option", element).each(function () {
                    value.push($(this).val());
                });
                return value;
            },
            activate(control: IControl): void {
                var listBuilder = <IListBuilder>control;
                var listBuilderModel = <IListBuilderModel>control.model;
                var id = listBuilder.id;

                subscribeToChange(listBuilder);

                var addSelected = (function (id: string, listBuilder: IListBuilder) {
                    return function () {
                        $("#" + id + "_availableoptions option:selected").appendTo("#" + id);
                        $("#" + id).trigger(REDUI_EVENT_CHANGE, listBuilder);
                    }
                })(id, listBuilder);
                var addAll = (function (id: string, listBuilder: IListBuilder) {
                    return function () {
                        $("#" + id + "_availableoptions option").appendTo("#" + id);
                        $("#" + id).trigger(REDUI_EVENT_CHANGE, listBuilder);
                    }
                })(id, listBuilder);
                var removeSelected = (function (id: string, listBuilder: IListBuilder) {
                    return function () {
                        $("#" + id + " option:selected").appendTo("#" + id + "_availableoptions");
                        $("#" + id).trigger(REDUI_EVENT_CHANGE, listBuilder);
                    }
                })(id, listBuilder);
                var removeAll = (function (id: string, listBuilder: IListBuilder) {
                    return function () {
                        $("#" + id + " option").appendTo("#" + id + "_availableoptions");
                        $("#" + id).trigger(REDUI_EVENT_CHANGE, listBuilder);
                    }
                })(id, listBuilder);

                var moveUp = (function (id: string) {
                    return function () {
                        var selected = $("#" + id + " option:selected");
                        for (var i = 0, len = selected.length; i < len; i++) {
                            var option = $(selected[i]);
                            var prev = option.prev();
                            if (prev && !prev.is(':selected')) {
                                option.insertBefore(prev);
                            }
                        }
                        $("#" + id).trigger(REDUI_EVENT_CHANGE, listBuilder);
                    }
                })(id);
                var moveDown = (function (id: string) {
                    return function () {
                        var selected = $("#" + id + " option:selected");
                        for (var i = selected.length - 1; i >= 0; i--) {
                            var option = $(selected[i]);
                            var next = option.next();
                            if (next && !next.is(':selected')) {
                                option.insertAfter(next);
                            }
                        }
                        $("#" + id).trigger(REDUI_EVENT_CHANGE, listBuilder);
                    }
                })(id);

                $("#" + id + "_addselectedbutton").bind(REDUI_EVENT_CLICK, addSelected);
                $("#" + id + "_addallbutton").bind(REDUI_EVENT_CLICK, addAll);
                $("#" + id + "_removeselectedbutton").bind(REDUI_EVENT_CLICK, removeSelected);
                $("#" + id + "_removeallbutton").bind(REDUI_EVENT_CLICK, removeAll);

                $("#" + id + "_moveupbutton").bind(REDUI_EVENT_CLICK, moveUp);
                $("#" + id + "_movedownbutton").bind(REDUI_EVENT_CLICK, moveDown);
            }
        };
    }

    function registerStaticText() {
        _controlHandlers[REDUI_CONTROL_TYPE_STATICTEXT] = <IControlHandlerSet>{
            create(): IStaticText {
                var staticText = <IStaticText>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_STATICTEXT,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return staticText;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newStaticText = <IStaticText>control;
                var controlModel = <IStaticTextModel>model;
                
                // Normalize model
                if (!controlModel.text) {
                    controlModel.text = "";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.text(value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "StaticText control cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerImage() {
        _controlHandlers[REDUI_CONTROL_TYPE_IMAGE] = <IControlHandlerSet>{
            create(): IImage {
                var image = <IImage>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_IMAGE,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return image;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newImage = <IImage>control;
                var controlModel = <IImageModel>model;
                
                // Normalize model
                if (!controlModel.source) {
                    controlModel.source = "";
                }
                if (!controlModel.alternateText) {
                    controlModel.alternateText = "";
                }
                if (!controlModel.width) {
                    controlModel.width = 0;
                }
                if (!controlModel.height) {
                    controlModel.height = 0;
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.attr("src", value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                throw "Image control cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerGroupBox() {
        _controlHandlers[REDUI_CONTROL_TYPE_GROUPBOX] = <IControlHandlerSet>{
            create(): IGroupBox {
                var groupBox = <IGroupBox>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GROUPBOX,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return groupBox;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newGroupBox = <IGroupBox>control;
                var controlModel = <IGroupBoxModel>model;
                
                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                initializeInnerControls(window, newGroupBox, controlModel.controls);
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "GroupBox control value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "GroupBox control cannot be used for data input";
			},
            activate(control: IControl): void {
                activateInnerControls(control);
            }
        };
    }

    function registerAccordionPanel() {
        var REDUI_CLASS_ACCORDIONPANEL_COLLAPSED = "redui-accordionpanel-collapsed";
        var REDUI_EVENT_ACCORDIONPANEL_EXPANDED = "redui_accordionpanel_expanded";

        function activateAccordionPanel(accordionPanel: IAccordionPanel) {
            var outerElement = $("#" + accordionPanel.id + "_template");
            outerElement.addClass(REDUI_CLASS_ACCORDIONPANEL_COLLAPSED);

            $("#" + accordionPanel.id + "_header").bind(REDUI_EVENT_CLICK, function () {
                expandAccordionPanel(accordionPanel);
            });
        }

        function expandAccordionPanel(accordionPanel: IAccordionPanel) {
            var outerElement = $("#" + accordionPanel.id + "_template");
            if (outerElement.hasClass(REDUI_CLASS_ACCORDIONPANEL_COLLAPSED)) {
                outerElement.trigger(REDUI_EVENT_ACCORDIONPANEL_EXPANDED, accordionPanel);
            }
            outerElement.toggleClass(REDUI_CLASS_ACCORDIONPANEL_COLLAPSED);
        }

        _controlHandlers[REDUI_CONTROL_TYPE_ACCORDIONPANEL] = <IControlHandlerSet>{
            create(): IAccordionPanel {
                var accordionPanel = <IAccordionPanel>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_ACCORDIONPANEL,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return accordionPanel;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newAccordionPanel = <IAccordionPanel>control;
                var controlModel = <IAccordionPanelModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                initializeInnerControls(window, newAccordionPanel, controlModel.controls);
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "AccordionPanel control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "AccordionPanel control cannot be used for data input";
            },
            activate(control: IControl): void {
                activateAccordionPanel(<IAccordionPanel>control);
                activateInnerControls(control);
            }
        };
    }

    var REDUI_CLASS_TABPAGE = "redui-tabpage";
    var REDUI_CLASS_TABHEADER = "redui-tabheader";
    var REDUI_CLASS_TABPAGE_ACTIVE = "redui-tabpage-active";
    var REDUI_CLASS_TABHEADER_ACTIVE = "redui-tabheader-active";

    function switchTab(tabPage: ITabPage) {
        var tabsElement = tabPage.parent.getElement();

        $("." + REDUI_CLASS_TABPAGE, tabsElement).removeClass(REDUI_CLASS_TABPAGE_ACTIVE);
        $("." + REDUI_CLASS_TABHEADER, tabsElement).removeClass(REDUI_CLASS_TABHEADER_ACTIVE);

        tabPage.getElement().addClass(REDUI_CLASS_TABPAGE_ACTIVE);
        $("#" + tabPage.id + "_tabheader", tabsElement).addClass(REDUI_CLASS_TABHEADER_ACTIVE);
    }

    function registerTabs() {
        _controlHandlers[REDUI_CONTROL_TYPE_TABS] = <IControlHandlerSet>{
            create(): ITabs {
                var tabs = <ITabs>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_TABS,
                    parent: null,
                    window: null,
                    tabPages: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return tabs;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newTabs = <ITabs>control;
                var controlModel = <ITabsModel>model;

                newTabs.controls = [];
                newTabs.tabPages = [];
                if (controlModel.tabPages) {
                    for (var i = 0, len = controlModel.tabPages.length; i < len; i++) {
                        var tabPageModel = controlModel.tabPages[i];
                        // Create a new control
                        var newTabPage = <ITabPage>initializeControlFromModel(window, tabPageModel);
                        // Make parent accessible
                        newTabPage.parent = newTabs;
                        // Make window accessible
                        newTabPage.window = window;
                        // Make control accessible by name
                        newTabs[newTabPage.name] = newTabPage;
                        // Make control element accessible
                        newTabPage.getElement = (function (id) {
                            return function () { return $("#" + id); };
                        })(newTabPage.id);
                        // Add control to the collection of the parent.
                        newTabs.tabPages.push(newTabPage);
                        newTabs.controls.push(newTabPage);
                    };
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Tabs control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Tabs control cannot be used for data input";
            },
            activate(control: IControl): void {
                var tabs = <ITabs>control;

                activateInnerControls(tabs);

                // Select the first tab
                if (tabs.tabPages.length > 0) {
                    switchTab(tabs.tabPages[0]);
                }
            }
        };
    }

    function registerTabPage() {
        _controlHandlers[REDUI_CONTROL_TYPE_TABPAGE] = <IControlHandlerSet>{
            create(): ITabPage {
                var tabPage = <ITabPage>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_TABPAGE,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return tabPage;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newTabPage = <ITabPage>control;
                var controlModel = <ITabPageModel>model;

                // Normalize model
                if (!controlModel.title) {
                    controlModel.title = "";
                }
                initializeInnerControls(window, newTabPage, controlModel.controls);
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "TabPage control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "TabPage control cannot be used for data input";
            },
            activate(control: IControl): void {
                var tabPage = <ITabPage>control;

                activateInnerControls(control);

                $("#" + tabPage.id + "_tabbutton" , tabPage.parent.getElement()).bind(REDUI_EVENT_CLICK, function () {
                    switchTab(tabPage);
                });
            }
        };
    }

    function registerButton() {
        _controlHandlers[REDUI_CONTROL_TYPE_BUTTON] = <IControlHandlerSet>{
            create(): IButton {
                var button = <IButton>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_BUTTON,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return button;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newButton = <IButton>control;
                var controlModel = <IButtonModel>model;
                
                // Normalize model
                if (!controlModel.text) {
                    controlModel.text = "";
                }
                if (controlModel.isDialogButton) {
                    controlModel.isDialogButton = true;
                } else {
                    controlModel.isDialogButton = false;
                }
                if (!controlModel.dialogResult) {
                    controlModel.dialogResult = "";
                }
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Button control value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Button control cannot be used for data input";
			},
            activate(control: IControl): void {
                var element = control.getElement();
                var controlModel = <IButtonModel>control.model;
                if (controlModel.isDialogButton) {
                    $(".redui-window-dialogbuttonspanel-inner", control.window.getElement()).append(element);

                    element.click(function () {
                        control.window.close(controlModel.dialogResult);
                    });
                }
            }
        };
    }

    // TODO: move inside the registerObjectSelector
    function setObjectSelectorValue(objectSelector: IControl, object: any): void {
        var objectSelectorModel = <IObjectSelectorBaseModel>objectSelector.model;
        var objectValueProperty = objectSelectorModel.objectValueProperty;

        var value = "";
        if (object) {
            if (objectValueProperty) {
                if (object[objectValueProperty]) {
                    value = object[objectValueProperty];
                } else {
                    // Use ""
                }
            } else {
                value = object.toString();
            }
        }

        var element = $("#" + objectSelector.id);
        element.val(value);
    };

    function selectWithObjectSelector(objectSelector: IObjectSelector) {
        var objectSelectorModel = <IObjectSelectorModel>objectSelector.model;

        function callback(object) {
                    // Update the value shown in UI
                    setObjectSelectorValue(objectSelector, object);

                    // Update the databound object
                    var dataObject = objectSelector.bindingContext;
                    if (dataObject && objectSelectorModel.bindsTo) {
                        setNestedPropertyValue(dataObject, objectSelectorModel.bindsTo, object);
                    }

                    // Validate
                    validateControl(objectSelector);

                    objectSelector.getElement().trigger(REDUI_EVENT_CHANGE, objectSelector);
        };

        if (objectSelectorModel.getObjectFunction) {
            var windowContext = objectSelector.window.context;

            if (windowContext && windowContext.objectSources && isFunction(windowContext.objectSources[objectSelectorModel.getObjectFunction])) {
                windowContext.objectSources[objectSelectorModel.getObjectFunction](callback);
            } else if (isFunction(_objectSources[objectSelectorModel.getObjectFunction])) {
                _objectSources[objectSelectorModel.getObjectFunction](callback);
            } else {
                throw "Error retrieving data object for control '" + objectSelector.name + "': Object sources does not have a function with name '" + objectSelectorModel.getObjectFunction + "'";
            }
        }
    }

    function registerObjectSelector() {
        _controlHandlers[REDUI_CONTROL_TYPE_OBJECTSELECTOR] = <IControlHandlerSet>{
            create(): IObjectSelector {
                var objectSelector = <IObjectSelector>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_OBJECTSELECTOR,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return objectSelector;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newObjectSelector = <IObjectSelector>control;
                var controlModel = <IObjectSelectorModel>model;
				
                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (controlModel.isEditable) {
                    controlModel.isEditable = true;
                } else {
                    controlModel.isEditable = false;
                }
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                setObjectSelectorValue(dataBoundControl, value);
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                // This is only in case the object selector allows manual value editing 
                // (Which in this case should be a string)
                return element.val();
			},
            activate(control: IControl): void {
                var objectSelector = <IObjectSelector>control;
                var controlModel = <IObjectSelectorModel>control.model;

                if (controlModel.isEditable) {
                    subscribeToChange(objectSelector);
                }

                var selectButton = $("#" + control.id + "_lookupbutton", control.window.getElement());
                selectButton.click(function (event) {
                    selectWithObjectSelector(objectSelector);
                });
            }
        };
    }

    var REDUI_EVENT_PAGER_PAGECHANGED = "redui_pager_pagechanged";

    function registerPager() {
        /*
        Renders pager
        @control pager control
        @pageNo current page, counting from 1
        @pagesTotal total number of pages
        */
        function renderPager(control: IDataBoundControl, pageNo: number, pagesTotal: number) {
            // Const
            var visiblePositions = 6;

            // Check if there are pages at all
            if (pagesTotal < 1) {
                return;
            }
            // Check that current page
            if (pageNo < 1 || pageNo > pagesTotal) {
                return;
            }

            var pagesDiv = $("#" + control.id + "_pages");
            pagesDiv.empty();

            // First visible page
            var firstVisiblePageNo = pageNo - (visiblePositions >> 1) + 1;

            // Adjsut first visible page
            if (firstVisiblePageNo < 1) {
                firstVisiblePageNo = 1;
            }

            // Number of pages in sequence
            var lastPageNoInSequence = firstVisiblePageNo + visiblePositions - 1;

            // Adjust last page in sequence
            if (lastPageNoInSequence > pagesTotal) {
                lastPageNoInSequence = pagesTotal;

                // If reached the last pages on the right, get more pages from the left
                if (lastPageNoInSequence - firstVisiblePageNo + 1 < visiblePositions) {
                    firstVisiblePageNo = lastPageNoInSequence - visiblePositions + 1;
                }
                // Adjsut first visible page
                if (firstVisiblePageNo < 1) {
                    firstVisiblePageNo = 1;
                }
            }

            var showEllipsis = false;
            if (lastPageNoInSequence < pagesTotal) {
                lastPageNoInSequence -= 2;
                showEllipsis = true;
            }

            for (var renderedPageNo = firstVisiblePageNo; renderedPageNo <= lastPageNoInSequence; renderedPageNo++) {
                renderPage(pagesDiv, renderedPageNo, pageNo);
            }

            if (showEllipsis) {
                renderEllipsis(pagesDiv);
                renderPage(pagesDiv, pagesTotal, pageNo);
            }
        }

        /*
        Renders page
        @renderedPageNo number of the page to render
        @pageNo current page, counting from 1
        */
        function renderPage(pagesDiv: JQuery, renderedPageNo: number, pageNo: number) {
            if (renderedPageNo === pageNo) {
                pagesDiv.append("<button class='redui-pager-button redui-focusable redui-pager-page redui-pager-currentpage' tabindex='0' type='button' data-pageno='" + renderedPageNo + "'>" + renderedPageNo + "</button>");
            } else {
                pagesDiv.append("<button class='redui-pager-button redui-focusable redui-pager-page' tabindex='0' type='button' data-pageno='" + renderedPageNo + "'>" + renderedPageNo + "</button>");
            }
        }

        /*
        Renders ellipsis
        */
        function renderEllipsis(pagesDiv: JQuery) {
            pagesDiv.append("<span class='redui-pager-ellipsis'>...</span>");
        }

        function bindPagerToData(pager: IDataBoundControl, value: any) {
            $("#" + pager.id + "_firstpage").unbind(REDUI_EVENT_CLICK);
            $("#" + pager.id + "_lastpage").unbind(REDUI_EVENT_CLICK);

            var controlModel = <IPagerModel>pager.model;

            var pageNoProperty = controlModel.pageNoProperty;
            if (!pageNoProperty) {
                pageNoProperty = "pageNo";
            }
            var pagesTotalProperty = controlModel.pagesTotalProperty;
            if (!pagesTotalProperty) {
                pagesTotalProperty = "pagesTotal";
            }

            if (!(pageNoProperty in value)) {
                throw "Pager info value bound to control '" + controlModel.name + "' doesn't have property '" + pageNoProperty + "'";
            }
            if (!(pagesTotalProperty in value)) {
                throw "Pager info value bound to control '" + controlModel.name + "' doesn't have property '" + pagesTotalProperty + "'";
            }

            var pagerInfo = <IPagerInfo>{
                pageNo: value[pageNoProperty],
                pagesTotal: value[pagesTotalProperty]
            };

            renderPager(pager, pagerInfo.pageNo, pagerInfo.pagesTotal);

            $("#" + pager.id + "_firstpage").bind(REDUI_EVENT_CLICK, function () {
                var selectedPage = 1;
                value[pageNoProperty] = selectedPage;
                $("#" + pager.id).trigger(REDUI_EVENT_PAGER_PAGECHANGED, selectedPage);
            });
            $("#" + pager.id + "_lastpage").bind(REDUI_EVENT_CLICK, function () {
                var selectedPage = pagerInfo.pagesTotal;
                value[pageNoProperty] = selectedPage;
                $("#" + pager.id).trigger(REDUI_EVENT_PAGER_PAGECHANGED, selectedPage);
            });

            $("#" + pager.id + " .redui-pager-page").bind(REDUI_EVENT_CLICK, function () {
                var selectedPage = +$(this).data("pageno");
                value[pageNoProperty] = selectedPage;
                $("#" + pager.id).trigger(REDUI_EVENT_PAGER_PAGECHANGED, selectedPage);
            });
        }

        _controlHandlers[REDUI_CONTROL_TYPE_PAGER] = <IControlHandlerSet>{
            create(): IPager {
                var pager = <IPager>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_PAGER,
                    parent: null,
                    window: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize,
                    pageChanged: function (handler: (target: any, pageNo: number) => void) {
                        this.getElement().bind(REDUI_EVENT_PAGER_PAGECHANGED, handler);
                    }
                };
                return pager;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
				// Nothing to do here
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                bindPagerToData(dataBoundControl, value);
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Pager control cannot be used for data input";
			},
            activate(control: IControl): void {
            }
        };
    }

    function registerRibbon() {
        _controlHandlers[REDUI_CONTROL_TYPE_RIBBON] = <IControlHandlerSet>{
            create(): IRibbon {
                var ribbon = <IRibbon>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_RIBBON,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return ribbon;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newRibbon = <IRibbon>control;
                var controlModel = <IRibbonModel>model;
				
                // Normalize model
                initializeInnerControls(window, newRibbon, controlModel.controls);
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Ribbon control value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Ribbon control cannot be used for data input";
			},
            activate(control: IControl): void {
                activateInnerControls(control);
            }
        };
    }

    function registerRibbonButton() {
        _controlHandlers[REDUI_CONTROL_TYPE_RIBBONBUTTON] = <IControlHandlerSet>{
            create(): IRibbonButton {
                var button = <IRibbonButton>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_RIBBONBUTTON,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return button;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newRibbonButton = <IRibbonButton>control;
                var controlModel = <IRibbonButtonModel>model;
				
                // Normalize model
                if (!controlModel.text) {
                    controlModel.text = "";
                }
                if (!controlModel.iconSource) {
                    controlModel.iconSource = "";
                }
                if (!controlModel.command) {
                    controlModel.command = "";
                }
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "RibbonButton control value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "RibbonButton control cannot be used for data input";
			},
            activate(control: IControl): void {
                var controlModel = <IRibbonButtonModel>control.model;
                if (controlModel.command) {
                    bindToCommand(control);
                }
            }
        };
    }

    var REDUI_CLASS_MENUITEM = "redui-menuitem";
    var REDUI_CLASS_MENUITEM_OUTER = "redui-menuitem-outer";

    var REDUI_EVENT_MENUITEM_CANCELLED = "redui_menuitem_cancelled";
    var REDUI_EVENT_MENU_CANCELLED = "redui_menu_cancelled";

    function registerContextMenu() {
        function attachContextMenu(control: IControl, menu: IContextMenu): void {
            var REDUI_MENU_POPUP_DURATION = 20;

            var element = control.getElement();
            if (control.model.type === REDUI_CONTROL_TYPE_WINDOW) {
                element = $("#" + control.id + "_clientareainner", element);
            }
            var menuElement = menu.getElement();

            element.bind(REDUI_EVENT_CONTEXTMENU, function (e) {
                // Prevent standard menu
                e.preventDefault();
                // Cancel previously opened menu
                menuElement.trigger(REDUI_EVENT_MENU_CANCELLED);
                // Prevent bubbling
                e.stopPropagation();

                function onShow() {
                    // Save focus
                    var focusedElement = $(document.activeElement);
                    // Move focus to the first enabled menu item
                    $("." + REDUI_CLASS_MENUITEM + ":not(." + REDUI_CLASS_DISABLED + "):first", menuElement).focus();

                    function closeMenu() {
                        menuElement.hide(20);

                        $(document).unbind(REDUI_EVENT_CLICK + menu.id);
                        $(document).unbind(REDUI_EVENT_CONTEXTMENU + menu.id);
                        $(document).unbind(REDUI_EVENT_MENU_CANCELLED + "." + menu.id);
                        menuElement.unbind(REDUI_EVENT_MENUITEM_CANCELLED + "." + menu.id);
                    }

                    // Left mouse button click anywhere closes the currently open context menu
                    $(document).bind(REDUI_EVENT_CLICK + menu.id, closeMenu);
                    // Right mouse button click anywhere closes the currently open context menu
                    $(document).bind(REDUI_EVENT_CONTEXTMENU + menu.id, closeMenu);
                    // Cancel on the menu closes the currently open context menu
                    $(document).bind(REDUI_EVENT_MENU_CANCELLED + "." + menu.id, closeMenu);
                    // Cancel on the menu item closes the currently open context menu
                    menuElement.bind(REDUI_EVENT_MENUITEM_CANCELLED + "." + menu.id, function (e1) {
                        // Prevent bubbling
                        e1.stopPropagation();
                        // Close current level of menu
                        closeMenu();
                        // Only for the keyboard, for the mouse focus goes where the click happens
                        focusedElement.focus();
                    });
                }

                // Calculate location
                var windowWidth = $(window).width();
                var windowHeight = $(window).height();

                if ((menuElement.outerWidth() + e.pageX) > windowWidth) {
                    menuElement.css("left", windowWidth - menuElement.outerWidth());
                } else {
                    menuElement.css("left", e.pageX);
                }
                if ((menuElement.outerHeight() + e.pageY) > windowHeight) {
                    menuElement.css("top", windowHeight - menuElement.outerHeight());
                } else {
                    menuElement.css("top", e.pageY);
                }

                // Popup
                menuElement.show(REDUI_MENU_POPUP_DURATION, onShow);
            });
        }

        _controlHandlers[REDUI_CONTROL_TYPE_CONTEXTMENU] = <IControlHandlerSet>{
            create(): IContextMenu {
                var contextMenu = <IContextMenu>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_CONTEXTMENU,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return contextMenu;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newContextMenu = <IContextMenu>control;
                var controlModel = <IContextMenuModel>model;

                controlModel.type = REDUI_CONTROL_TYPE_CONTEXTMENU;

                newContextMenu.menuItems = [];
                if (controlModel.menuItems) {
                    for (var i = 0, len = controlModel.menuItems.length; i < len; i++) {
                        var itemModel = controlModel.menuItems[i];
                        // Create a new control
                        var newItem = <IMenuItemBase>initializeControlFromModel(window, itemModel);
                        // Make parent accessible
                        newItem.parent = newContextMenu;
                        // Make window accessible
                        newItem.window = window;
                        // Make menu accessible
                        newItem.menu = newContextMenu;
                        // Make control accessible by name
                        newContextMenu[newItem.name] = newItem;
                        // Make control element accessible
                        newItem.getElement = (function (id) {
                            return function () { return $("#" + id); };
                        })(newItem.id);
                        // Add control to the collection of the parent.
                        newContextMenu.menuItems.push(newItem);
                    };
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "ContextMenu control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "ContextMenu control cannot be used for data input";
            },
            activate(control: IControl): void {
                var contextMenu = <IContextMenu>control;

                for (var i = 0, len = contextMenu.menuItems.length; i < len; i++) {
                    activateControl(contextMenu.menuItems[i]);
                };

                attachContextMenu(contextMenu.parent, contextMenu);
            }
        };
    }

    function registerMenuItem() {
        function getPrevMenuItem(menuItemOuterElement: JQuery) {
            while (true) {
                var prev = menuItemOuterElement.prevAll("." + REDUI_CLASS_MENUITEM_OUTER + ":first");
                if (prev.length > 0) {
                    var prevMenuItem = $("." + REDUI_CLASS_MENUITEM + ":not(." + REDUI_CLASS_DISABLED + ")", prev);
                    if (prevMenuItem.length > 0) {
                        return prevMenuItem;
                    } else {
                        // Skip disabled
                        menuItemOuterElement = prev;
                    }
                } else {
                    // No more elements
                    return null;
                }
            }
        }
        function getNextMenuItem(menuItemOuterElement: JQuery) {
            while (true) {
                var next = menuItemOuterElement.nextAll("." + REDUI_CLASS_MENUITEM_OUTER + ":first");
                if (next.length > 0) {
                    var nextMenuItem = $("." + REDUI_CLASS_MENUITEM + ":not(." + REDUI_CLASS_DISABLED + ")", next);
                    if (nextMenuItem.length > 0) {
                        return nextMenuItem;
                    } else {
                        // Skip disabled
                        menuItemOuterElement = next;
                    }
                } else {
                    // No more elements
                    return null;
                }
            }
        }

        _controlHandlers[REDUI_CONTROL_TYPE_MENUITEM] = <IControlHandlerSet>{
            create(): IMenuItem {
                var button = <IMenuItem>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_MENUITEM,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    menu: null,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return button;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newMenuItem = <IMenuItem>control;
                var controlModel = <IMenuItemModel>model;

                // Normalize model
                if (!controlModel.text) {
                    controlModel.text = "";
                }
                if (!controlModel.command) {
                    controlModel.command = "";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "MenuItem control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "MenuItem control cannot be used for data input";
            },
            activate(control: IControl): void {
                var menuItem = <IMenuItem>control;
                var controlModel = <IMenuItemModel>control.model;
                if (controlModel.command) {
                    bindToCommand(control);
                }

                var menuItemOuterElement = $("#" + control.id + "_template");

                // Keyboard support
                var menuItemElement = control.getElement();
                menuItemElement.bind(REDUI_EVENT_KEYDOWN, function (e) {
                    if (e.keyCode === KEY_UP) {
                        e.stopPropagation();
                        var prevMenuItem = getPrevMenuItem(menuItemOuterElement);
                        if (prevMenuItem) {
                            prevMenuItem.focus();
                        }
                    } else if (e.keyCode === KEY_DOWN) {
                        e.stopPropagation();
                        var nextMenuItem = getNextMenuItem(menuItemOuterElement);
                        if (nextMenuItem) {
                            nextMenuItem.focus();
                        }
                    }
                });
                menuItemElement.bind(REDUI_EVENT_KEYUP, function (e) {
                    if (e.keyCode === KEY_ESC) {
                        e.stopPropagation();
                        menuItemElement.trigger(REDUI_EVENT_MENUITEM_CANCELLED);
                    }
                });
                // Mouse support
                menuItemElement.bind(REDUI_EVENT_MOUSEENTER, function (e) {
                    menuItemElement.focus();
                });
            }
        };
    }

    function registerMenuSeparator() {
        _controlHandlers[REDUI_CONTROL_TYPE_MENUSEPARATOR] = <IControlHandlerSet>{
            create(): IMenuSeparator {
                var button = <IMenuSeparator>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_MENUSEPARATOR,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    menu: null,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return button;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                // Nothing to do here
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "MenuSeparator control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "MenuSeparator control cannot be used for data input";
            },
            activate(control: IControl): void {
                // Nothing to do here
            }
        };
    }

    function registerCustomControl() {
        function getCustomControlValue(control: ICustomControl): any {
            var customControlModel = <ICustomControlModel>control.model;

            if (!(customControlModel.customType in _redui.customControlHandlers)) {
                throw "Cannot update the binding for the custom control '" + control.model.name + "' to data. Custom control handlers does not contain handler object '" + customControlModel.customType + "' with method 'getValue'.";
            }
            var handler = <ICustomControlHandlerSet>_redui.customControlHandlers[customControlModel.customType];
            if (!isFunction(handler.getValue)) {
                throw "Cannot update the binding for the custom control '" + customControlModel.name + "' to data. Custom control handlers does not contain handler object '" + customControlModel.customType + "' with method 'getValue'.";
            }

            return handler.getValue(control);
        }

        function setCustomControlValue(control: ICustomControl, value: any): void {
            var customControlModel = <ICustomControlModel>control.model;

            if (!(customControlModel.customType in _redui.customControlHandlers)) {
                throw "Cannot bind the custom control '" + control.model.name + "' to data. Custom control handlers does not contain handler object '" + customControlModel.customType + "' with method 'setValue'.";
            }
            var handler = <ICustomControlHandlerSet>_redui.customControlHandlers[customControlModel.customType];
            if (!isFunction(handler.setValue)) {
                throw "Cannot bind the custom control '" + control.model.name + "' to data. Custom control handlers does not contain handler object '" + customControlModel.customType + "' with method 'setValue'.";
            }

            handler.setValue(control, value);
        }

        function activateCustomControl(control: ICustomControl): void {
            var customControlModel = <ICustomControlModel>control.model;

            if (customControlModel.customType in _redui.customControlHandlers) {
                var handler = <ICustomControlHandlerSet>_redui.customControlHandlers[customControlModel.customType];
                if (isFunction(handler.activate)) {
                    handler.activate(control);
                }
            }
        }

        _controlHandlers[REDUI_CONTROL_TYPE_CUSTOM] = <IControlHandlerSet>{
            create(): ICustomControl {
                var customControl = <ICustomControl>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_CUSTOM,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return customControl;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newCustomControl = <ICustomControl>control;
                var controlModel = <ICustomControlModel>model;

                if (!controlModel.customType) {
                    throw "Custom type is not specified for control '" + newCustomControl.name + "'.";
                }

                if (controlModel.controls) {
                    initializeInnerControls(window, newCustomControl, controlModel.controls);
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                setCustomControlValue(<ICustomControl>dataBoundControl, value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                return getCustomControlValue(<ICustomControl>dataBoundControl);
            },
            activate(control: IControl): void {
                var customControl = <ICustomControl>control;
                activateCustomControl(customControl);

                subscribeToChange(customControl);

                activateInnerControls(control);
            }
        };
    }

    function registerBreadcrumbs() {
        var REDUI_CLASS_BREADCRUMB = "redui-breadcrumb";

        function renderBreadcrumb(href: string, text: string): string {
            return "<li class='redui-breadcrumb'><a href='" + href + "'>" + text + "</a><span class='redui-breadcrumb-separator'>▶</span></li>";
        }

        function renderLastBreadcrumb(text: string): string {
            return "<li class='redui-breadcrumb'><span class='redui-breadcrumb-currentlocation'>" + text + "</span></li>";
        }

        _controlHandlers[REDUI_CONTROL_TYPE_BREADCRUMBS] = <IControlHandlerSet>{
            create(): IBreadcrumbs {
                var breadcrumbs = <IBreadcrumbs>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_BREADCRUMBS,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return breadcrumbs;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newBreadcrumbs = <IBreadcrumbs>control;
                var controlModel = <IBreadcrumbsModel>model;

                // Normalize model
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                var controlModel = <IBreadcrumbsModel>dataBoundControl.model;

                if (!isArray(value)) {
                    throw "Value of the property '" + controlModel.bindsTo + "' bound to breadcrumbs '" + dataBoundControl.name + "' is not an array.";
                }

                // Clear items
                element.empty();

                var html = "";
                for (var i = 0, len = value.length; i < len; i++) {
                    var currentValue = value[i];

                    var hrefProperty = controlModel.hrefProperty;
                    if (!hrefProperty) {
                        hrefProperty = "href";
                    }
                    var textProperty = controlModel.textProperty;

                    if (!(hrefProperty in currentValue)) {
                        throw "Option value bound to control '" + controlModel.name + "' doesn't have property '" + hrefProperty + "'";
                    }
                    // Only check if the property configured explicitly
                    if (textProperty && !(textProperty in currentValue)) {
                        throw "Option value bound to control '" + controlModel.name + "' doesn't have property '" + textProperty + "'";
                    }

                    var href = currentValue[hrefProperty];
                    var text = "";
                    if (textProperty) {
                        text = currentValue[textProperty];
                    } else {
                        text = currentValue.toString();
                    }

                    if (i < len - 1) {
                        html += renderBreadcrumb(href, text);
                    } else {
                        html += renderLastBreadcrumb(text);
                    }
                }

                element.append(html);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Breadcrumbs control cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerAnchoredContent() {
        var HREF_EMPTY = "javascript:void(0);";

        _controlHandlers[REDUI_CONTROL_TYPE_ANCHOREDCONTENT] = <IControlHandlerSet>{
            create(): IAnchoredContent {
                var anchoredContent = <IAnchoredContent>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_ANCHOREDCONTENT,
                    parent: null,
                    window: null,
                    controls: [],
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return anchoredContent;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newAnchoredContent = <IAnchoredContent>control;
                var controlModel = <IAnchoredContentModel>model;

                // Normalize model
                if (!controlModel.href) {
                    controlModel.href = HREF_EMPTY;
                }

                initializeInnerControls(window, newAnchoredContent, controlModel.controls);
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var href = value;
                if (!href) {
                    href = HREF_EMPTY;
                }
                var element = dataBoundControl.getElement().attr("href", href);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "AnchoredContent control cannot be used for data input";
            },
            activate(control: IControl): void {
                activateInnerControls(control);
            }
        };
    }

    // *****************************************************************************************
    // *                             Controls - List View                                      *
    // *****************************************************************************************

    var REDUI_CLASS_LISTVIEWITEM_OUTER = "redui-listviewitem-outer";

    function registerListView() {
        _controlHandlers[REDUI_CONTROL_TYPE_LISTVIEW] = <IControlHandlerSet>{
            create(): IListView {
                var listView = <IListView>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_LISTVIEW,
                    parent: null,
                    window: null,
                    items: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return listView;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newListView = <IListView>control;
                var controlModel = <IListViewModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }

                newListView.items = [];
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                var controlModel = <IDataBoundControlModel>dataBoundControl.model;

                if (!isArray(value)) {
                    throw "Value of the property '" + controlModel.bindsTo + "' bound to list view '" + dataBoundControl.name + "' is not an array.";
                }
                var listView = <IListView>dataBoundControl;
                var listViewModel = <IListViewModel>controlModel;

                // Clear items
                listView.items = [];
                $("." + REDUI_CLASS_LISTVIEWITEM_OUTER, element).remove();

                var html = "";
                for (var i = 0, len = value.length; i < len; i++) {
                    var nodeValue = value[i];

                    var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_LISTVIEWITEM);
                    var listViewItem = <IListViewItem>handlers.create();
                    handlers.initializeFromModel(dataBoundControl.window, listViewItem, listViewModel.itemModel);

                    listViewItem.parent = listView;
                    listViewItem.listView = listView;
                    listView.items.push(listViewItem);

                    html += listViewItem._toHtml();
                };

                // Append all nodes at once
                $(listView.getElement()).append(html);

                for (var i = 0, itemsLen = listView.items.length; i < itemsLen; i++) {
                    activateControl(listView.items[i]);
                    listView.items[i].bind(value[i]);
                };
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "ListView control cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerListViewItem() {
        _controlHandlers[REDUI_CONTROL_TYPE_LISTVIEWITEM] = <IControlHandlerSet>{
            create(): IListViewItem {
                var listViewItem = <IListViewItem>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_LISTVIEWITEM,
                    controls: [],
                    parent: null,
                    window: null,
                    items: [],
                    listView: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return listViewItem;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newListViewItem = <IListViewItem>control;
                var controlModel = <IListViewItemModel>model;

                newListViewItem.getElement = function () {
                    return $("#" + newListViewItem.id);
                };
                newListViewItem.model = controlModel;
                newListViewItem.window = window;

                initializeInnerControls(window, newListViewItem, controlModel.controls);
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "ListViewItem control value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "ListViewItem control cannot be used for data input";
            },
            activate(control: IControl): void {
                activateInnerControls(control);
            }
        };
    }

    // *****************************************************************************************
    // *                             Controls - Grid View                                      *
    // *****************************************************************************************

    var REDUI_EVENT_GRIDVIEW_CURRENTROWCHANGED = "redui_gridview_currentrowchanged";
    var REDUI_EVENT_GRIDVIEW_SORTINGCHANGED = "redui_gridview_sortingchanged";

    var REDUI_CLASS_GRIDVIEW_GRIDVIEWROW_SELECTED = "redui-gridviewrow-selected";

    function setCurrentRow(gridViewRow: IGridViewRow) {
        var rowElement = gridViewRow.getElement();
        var gridViewOwner = <IGridView>gridViewRow.parent;
        if (gridViewOwner.currentRow) {
            gridViewOwner.currentRow.getElement().removeClass(REDUI_CLASS_GRIDVIEW_GRIDVIEWROW_SELECTED);
        }
        gridViewOwner.currentRow = gridViewRow;
        rowElement.addClass(REDUI_CLASS_GRIDVIEW_GRIDVIEWROW_SELECTED);
        rowElement.trigger(REDUI_EVENT_GRIDVIEW_CURRENTROWCHANGED, gridViewRow);
    }

    function orderColumns(gridViewModel: IGridViewModel) {
        gridViewModel.columns = gridViewModel.columns.sort(
            function compare(columnA: IGridViewColumnModel, columnB: IGridViewColumnModel) {
                return columnA.order > columnB.order ? 1 : -1;
            }
        );
    }

    // TODO: make this method of the GridView, this way it's possible to override it
    function customizeGridView(gridView: IGridView) {
        var windowModel = <IWindowModel>{
            type: REDUI_CONTROL_TYPE_WINDOW,
            name: "_GridViewCustomizeWindow",
            title: "Select Columns",
            width: 500,
            height: 400,
            controls: [
                {
                    name: "columnsListBuilder",
                    type: "listbuilder",
                    label: "Columns",
                    bindsTo: "visibleColumns",
                    getOptionsFunction: "getColumns"
                },
                {
                    name: "OKButton",
                    type: "button",
                    text: "OK",
                    isDialogButton: true,
                    dialogResult: "OK"
                },
                {
                    name: "CancelButton",
                    type: "button",
                    text: "Cancel",
                    isDialogButton: true,
                    dialogResult: "Cancel"
                }
            ]
        };

        var gridViewModel = <IGridViewModel>gridView.model;

        // Definitions for all available columns
        var columnDefinitions = [];

        // Currently visible columns
        var columnData = {
            visibleColumns: [],
            validate: function (control, value) {
                if (this.visibleColumns.length === 0) {
                    return "Please select at least one column";
                }
                return null;
            }
        };

        // Fill definitions for all available columns (ListBuilder options)
        // and visible columns (ListBuilder current selection)
        for (var i = 0, len = gridView.columns.length; i < len; i++) {
            // TODO: GridView columns stay in the same order, so the next time Customize window opens, you need to re-order columns again
            var column = <IGridViewColumn>gridView.columns[i];
            var columnModel = <IGridViewColumnModel>column.model;
            var columnDefinition = {
                id: column.id,
                label: _isLocalizationEnabled ? localizeText(columnModel.label) : columnModel.label,
                toString: function () { return this.label }
            };
            columnDefinitions.push(columnDefinition);

            if (!columnModel.isHidden) {
                columnData.visibleColumns.push(column.id);
            }
        }

        // Prepare window context
        var windowContext = <IWindowContext>{};
        windowContext.optionsBag = {};
        windowContext.optionsBag.getColumns = function () {
            return columnDefinitions;
        };

        // Customize window
        var customizeWindow = _redui.createNewWindowFromModel(windowModel, windowContext);
        customizeWindow.bind(columnData);
        customizeWindow.showModal();

        // This is called when user clicks ok in the customize window
        function updateModel() {
            var visibleColumns = {};
            var gridViewElement = gridView.getElement();
            var headerElement = $("#" + gridView.id + "_header", gridViewElement);
            for (var i = 0, len = columnData.visibleColumns.length; i < len; i++) {
                // Save visible columns and their order
                visibleColumns[columnData.visibleColumns[i]] = i;

                // Re-order columns
                var columnElement = $("#" + columnData.visibleColumns[i], gridViewElement);
                columnElement.appendTo(headerElement);
            }
            for (var i = 0, len = gridView.columns.length; i < len; i++) {
                var column = <IGridViewColumn>gridView.columns[i];
                var columnModel = <IGridViewColumnModel>column.model;

                // Switch on/off columns
                if (column.id in visibleColumns) {
                    columnModel.isHidden = false;
                    column.getElement().removeClass(REDUI_CLASS_HIDDEN);
                    columnModel.order = visibleColumns[column.id];
                } else {
                    columnModel.isHidden = true;
                    column.getElement().addClass(REDUI_CLASS_HIDDEN);
                }
            }

            orderColumns(gridViewModel);

            gridView.columns = gridView.columns.sort(
                function compare(columnA: IGridViewColumn, columnB: IGridViewColumn) {
                    return (<IGridViewColumnModel>columnA.model).order > (<IGridViewColumnModel>columnB.model).order ? 1 : -1;
                }
            );

            saveModelChanges(gridView.window.model);
        };

        customizeWindow.closed(function (target, dialogResult) {
            if (dialogResult === DIALOG_RESULT_OK) {
                updateModel();
                // re-bind
                gridView.bind(gridView.bindingContext);
            }
        });
    }

    function registerGridView() {
        var GRIDVIEW_COLUMN_MINIMAL_WIDTH = 30;
        var ROWS_TO_RENDER_IN_ONE_BATCH = 10;

        var REDUI_CLASS_GRIDVIEW_GRIDVIEWROW = "redui-gridviewrow";
        var REDUI_CLASS_GRIDVIEW_SENTINELGRIDVIEWROW = "redui-sentinelgridviewrow";
        var REDUI_CLASS_GRIDVIEW_COLUMNRESIZER = "redui-gridview-column-resizer";
        var REDUI_CLASS_GRIDVIEW_COLUMNLABELLINK = "redui-gridview-column-label-link";
        var REDUI_CLASS_GRIDVIEW_COLUMNSORTER = "redui-gridview-column-sorter";

        // Add default GridViewColumn context menu
        _redui.model.addMenuModel(<IContextMenuModel>{
            name: "GridViewStandardContextMenu",
            type: "contextmenu",
            menuItems: [
                {
                    name: "selectColumnsMenuItem",
                    type: "menuitem",
                    text: "Select Columns...",
                    command: "REDUI_CustomizeGridView"
                }
            ]
        });

        // Add command to customize the GridView
        _redui.commands.REDUI_CustomizeGridView = {
            execute: function (control: IControl) {
                var menu = (<IMenuItem>control).menu;
                var column = <IGridViewColumn>menu.parent;
                var gridView = <IGridView>column.parent;
                customizeGridView(gridView);
            },
            canExecute: function () {
                return true;
            }
        };

        /*
        Appends rows to the grid view in batches
        @gridView Grid view
        @rowValues Array of row values
        @startIndex Index of the first row of the current batch
        @callback Function to be called after all batches are processed
        @syncId id used to sync to parallel attempts to data bind
        */
        function appendRows(gridView: IGridView, rowValues: any, startIndex: number, syncId: string, callback: () => void ): void {
            //        var start = +new Date(), stop; // Debug timers

            // Sync 2 parallel bindings. If the sync id doesn't match, we are already binding again!
            if (gridView["__syncId"] !== syncId) return;

            // If the window is not there anymore, exit
            if (!_redui.windows[gridView.window.id]) return;

            // Get to the model
            var gridViewModel = <IGridViewModel>gridView.model;

            // Create and initialize rows
            var batchId = gridView.id + "_rowbatch_" + startIndex;
            var html = "<tbody id='" + batchId + "'>";
            var lastIndex = startIndex;
            var rowsTotal = rowValues.length;
            var createdRows = [];
            for (var i = startIndex, len = Math.min(startIndex + ROWS_TO_RENDER_IN_ONE_BATCH, rowsTotal); i < len; i++, lastIndex++) {
                var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWROW);
                var gridViewRow = <IGridViewRow>handlers.create();
                initializeGridViewRow(gridViewRow, gridView, gridViewModel.columns, rowValues[i]);
                html += gridViewRow._toHtml();
                createdRows.push(gridViewRow);
            };
            html += "</tbody>"

            // Append all rows at once
            gridView.getElement().append(html);

            // Broadcast events
            for (var i = 0, len = createdRows.length; i < len; i++) {
                attachOnClickHandlerToGridViewRow(createdRows[i]); // TODO: move to activate?
                activateControl(createdRows[i]);
            }
            // stop = +new Date(); console.log("Start index: " + (startIndex).toString() +  ", timer:" + (stop - start).toString()); // Debug timers

            if (lastIndex < rowsTotal) {
                setTimeout(function () { appendRows(gridView, rowValues, lastIndex, syncId, callback) }, 25);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        }

        /*
        Initializes a grid view row from model.
        @gridViewRow grid view row to initialize.
        @gridView a grid view that row belongs to.
        @columns an array of column models.
        @rowValue the row value (the object that the row will databind to).
        */
        function initializeGridViewRow(gridViewRow: IGridViewRow, gridView: IGridView, columnModels: IGridViewColumnModel[], rowValue: any) {
            // Create an empty row
            gridViewRow.gridView = gridView;
            gridViewRow.parent = gridView;
            gridViewRow.getElement = function () { return $("#" + gridViewRow.id); };
            gridViewRow.bindingContext = rowValue;
            gridViewRow.window = gridView.window;

            // Model
            gridViewRow.model = <IContainerControlModel> {
                type: "gridviewrow"
            };

            if (isArray(columnModels)) {
                for (var i = 0, len = columnModels.length; i < len; i++) {
                    var columnModel = columnModels[i];

                    var cellValue;
                    var observable = null;
                    if (rowValue) {
                        try {
                            cellValue = getNestedPropertyValue(rowValue, columnModel.bindsTo);
                            // Unwrap function
                            if (isFunction(cellValue)) {
                                // If ko.observable, save it before unwrapping
                                if ("subscribe" in cellValue) {
                                    observable = cellValue;
                                }
                                cellValue = getNestedMethodResult(rowValue, columnModel.bindsTo);
                            }
                        } catch (e) {
                            throw "Error databinding cell for column '" + columnModel.label + "': Data object does not have property '" + columnModel.bindsTo + "'";
                        }
                    }

                    var gridViewCell: IGridViewCell;
                    switch (columnModel.type) {
                        case REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCOLUMN:
                            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCELL);
                            gridViewCell = <IGridViewCell>handlers.create();
                            break;
                        case REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCOLUMN:
                            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCELL);
                            gridViewCell = <IGridViewCell>handlers.create();
                            if (!cellValue) {
                                cellValue = false;
                            }
                            break;
                        case REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCOLUMN:
                            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCELL);
                            var gridViewComboBoxCell = <IGridViewComboBoxCell>handlers.create();

                            var column = findInArray(
                                gridView.columns,
                                function (x) {
                                    return x.name === columnModel.name;
                                });

                            gridViewComboBoxCell.options = column.options;
                            gridViewCell = gridViewComboBoxCell;
                            break;
                        case REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCOLUMN:
                            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCELL);
                            gridViewCell = <IGridViewCell>handlers.create();
                            break;
                        case REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCOLUMN:
                            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCELL);
                            gridViewCell = <IGridViewCell>handlers.create();
                            cellValue = getObjectValuePropertyValue(<IObjectSelectorBaseModel>columnModel, cellValue);
                            break;
                        default:
                            throw "Cannor initialize grid view row. Column type '" + columnModel.type + "' is not supported.";
                    }

                    gridViewCell.parent = gridViewRow;
                    gridViewCell.window = gridViewRow.window;
                    gridViewCell.row = gridViewRow;
                    gridViewCell.value = cellValue;
                    gridViewCell.getElement = (function (id) {
                        return function () { return $("#" + id); };
                    })(gridViewCell.id);

                    // Binding context
                    gridViewCell.bindingContext = gridViewRow.bindingContext;

                    // Model
                    gridViewCell.model = columnModel;

                    gridViewRow.cells.push(gridViewCell);

                    if (observable) {
                        (function (gridViewCell, observable) {
                            // TODO: handle repeated subscribe!
                            observable.subscribe(function (newValue) {
                                updateElementValue(gridViewCell, newValue)
                            });
                        })(gridViewCell, observable);
                    }
                };
            }

            gridView.rows.push(gridViewRow);
        }

        function initializeSortingInfo() {
            var sortingInfo = <IGridViewSortingInfo>{
                sortingString: "",
                sortingColumns: []
            };
            return sortingInfo;
        }

        function makeColumnsSortable(gridView: IGridView) {
            for (var i = 0, len = gridView.columns.length; i < len; i++) {
                var column = gridView.columns[i];
                var columnModel = <IGridViewColumnModel>column.model;

                (function makeSortable(gridView: IGridView, column: IGridViewColumn, columnModel: IGridViewColumnModel) {
                    if (columnModel.isSortable) {
                        var labelLink = $("." + REDUI_CLASS_GRIDVIEW_COLUMNLABELLINK + ":not(." + REDUI_CLASS_ACTIVATED + ")", column.getElement());
                        if (labelLink.length !== 0) {
                            labelLink.addClass(REDUI_CLASS_ACTIVATED);

                            labelLink.bind("click", function () {
                                $("." + REDUI_CLASS_GRIDVIEW_COLUMNSORTER, labelLink).remove();
                                if (column.sortingOrder === SORTING_ORDER_NONE) {
                                    column.sortingOrder = SORTING_ORDER_ASC;
                                    labelLink.append("<span class='" + REDUI_CLASS_GRIDVIEW_COLUMNSORTER + "'>▲</span>");
                                } else if (column.sortingOrder === SORTING_ORDER_ASC) {
                                    column.sortingOrder = SORTING_ORDER_DESC;
                                    labelLink.append("<span class='" + REDUI_CLASS_GRIDVIEW_COLUMNSORTER + "'>▼</span>");
                                } else if (column.sortingOrder === SORTING_ORDER_DESC) {
                                    column.sortingOrder = SORTING_ORDER_NONE;
                                }

                                gridView.sortingInfo = initializeSortingInfo();
                                gridView.columns.forEach(function (nextColumn: IGridViewColumn) {
                                    if (nextColumn.sortingOrder === SORTING_ORDER_ASC) {
                                        gridView.sortingInfo.sortingString += " " + nextColumn.model.name + " " + SORTING_ORDER_ASC;
                                        gridView.sortingInfo.sortingColumns.push(<IGridViewColumnSortingInfo>{ columnName: nextColumn.model.name, isAscending: true });
                                    } else if (nextColumn.sortingOrder === SORTING_ORDER_DESC) {
                                        gridView.sortingInfo.sortingString += " " + nextColumn.model.name + " " + SORTING_ORDER_DESC;
                                        gridView.sortingInfo.sortingColumns.push(<IGridViewColumnSortingInfo>{ columnName: nextColumn.model.name, isAscending: false });
                                    }
                                });

                                // Trigger the event
                                gridView.getElement().trigger(REDUI_EVENT_GRIDVIEW_SORTINGCHANGED, gridView.sortingInfo);
                            });
                        }
                    }
                })(gridView, column, columnModel);
            }
        }

        function makeColumnsResizable(gridView: IGridView) {
            for (var i = 0, len = gridView.columns.length; i < len; i++) {
                var column = gridView.columns[i];
                var columnModel = <IGridViewColumnModel>column.model;

                (function makeDraggable(gridView, column, columnModel) {
                    var resizer = $("." + REDUI_CLASS_GRIDVIEW_COLUMNRESIZER + ":not(." + REDUI_CLASS_ACTIVATED + ")", column.getElement());
                    if (resizer.length !== 0) {
                        resizer.addClass(REDUI_CLASS_ACTIVATED);

                        var columnElement = column.getElement();
                        resizer.draggable({
                            axis: "x",
                            containment: "#" + gridView.window.id + "_clientareainner",
                            stop: function (event, ui) {
                                var currentWidth = columnElement.width();
                                var newWidth = currentWidth + ui.position.left - ui.originalPosition.left;

                                if (newWidth < GRIDVIEW_COLUMN_MINIMAL_WIDTH) {
                                    newWidth = GRIDVIEW_COLUMN_MINIMAL_WIDTH;
                                }

                                // Resize the columns
                                $(".redui-gridview-column-" + column.name, gridView.getElement()).width(newWidth);
                                // Update the model
                                column.model.width = newWidth;
                                // Reset resizer position
                                resizer.css({ 'left': 'auto' });
                                // Hack for safari forsing to redraw the table
                                redraw(gridView.getElement());
                            }
                        });
                    }
                })(gridView, column, columnModel);
            }
        }

        function createSentinelRow(gridView: IGridView, columns: IGridViewColumnModel[]): IGridViewRow {
            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_GRIDVIEWROW);
            var gridViewRow = <IGridViewRow>handlers.create();
            initializeGridViewRow(gridViewRow, gridView, columns, gridView.createNewRowValue());
            gridViewRow.isSentinel = true;
            $("tbody:last", gridView.getElement()).append(gridViewRow._toHtml());
            attachOnClickHandlerToGridViewRow(gridViewRow);

            activateControl(gridViewRow);

            return gridViewRow;
        }

        function appendEventsToSentinelRow(gridViewRow: IGridViewRow, gridView: IGridView, columns: IGridViewColumnModel[]) {
            var element = gridViewRow.getElement();
            element.bind(REDUI_EVENT_CHANGE, function () {
                gridViewRow.isSentinel = false;
                element.unbind(REDUI_EVENT_CHANGE);
                element.removeClass(REDUI_CLASS_GRIDVIEW_SENTINELGRIDVIEWROW);

                // Update the data object
                var gridViewModel = <IGridViewModel>gridView.model;
                if (gridView.bindingContext && gridViewModel.bindsTo) {
                    gridView.bindingContext[gridViewModel.bindsTo].push(gridViewRow.bindingContext);
                }

                // Rows can be appended as a result of re-binding
                if ($("." + REDUI_CLASS_GRIDVIEW_SENTINELGRIDVIEWROW, gridView.getElement()).length === 0) {
                    var newSentinelRow = createSentinelRow(gridView, columns);
                    appendEventsToSentinelRow(newSentinelRow, gridView, columns);
                }
            });
        }

        function attachOnClickHandlerToGridViewRow(gridViewRow: IGridViewRow) {
            var rowElement = gridViewRow.getElement();
            rowElement.bind(REDUI_EVENT_MOUSEUP, function () { setCurrentRow(gridViewRow); });
        }

        /*
        Gets the object selector value
        @objectSelectorModel object selector model
        @object cell value
        */
        function getObjectValuePropertyValue(objectSelectorModel: IObjectSelectorBaseModel, object: any): any {
            if (!object) {
                return "";
            }

            var objectValueProperty = objectSelectorModel.objectValueProperty;
            // Only verify if configured explicitly
            if (objectValueProperty && !(objectValueProperty in object)) {
                throw "Object bound to control '" + objectSelectorModel.name + "' doesn't have property '" + objectValueProperty + "'";
            }

            if (objectValueProperty) {
                if (object[objectValueProperty]) {
                    return object[objectValueProperty];
                } else {
                    return "";
                }
            }

            return object.toString();
        }

        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEW] = <IControlHandlerSet>{
            create(): IGridView {
                var gridView = <IGridView>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEW,
                    parent: null,
                    window: null,
                    columns: [],
                    rows: [],
                    currentRow: null,
                    bindingContext: null,
                    contextMenu: null,
                    sortingInfo: initializeSortingInfo(),
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize,
                    createNewRowValue: null,
                    currentRowChanged: function (handler: (target: any, row: IGridViewRow) => void) {
                        this.getElement().bind(REDUI_EVENT_GRIDVIEW_CURRENTROWCHANGED, handler);
                    },
                    sortingChanged: function (handler: (target: any, sortingInfo: IGridViewSortingInfo) => void) {
                        this.getElement().bind(REDUI_EVENT_GRIDVIEW_SORTINGCHANGED, handler);
                    }
                };
                return gridView;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newGridView = <IGridView>control;
                var controlModel = <IGridViewModel>model;
				
                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if ("canUserAddRows" in controlModel) {
                    // If explicitly set, simply normalize
                    if (controlModel.canUserAddRows) {
                        controlModel.canUserAddRows = true;
                    } else {
                        controlModel.canUserAddRows = false;
                    }
                } else {
                    // If not set, enable by default
                    controlModel.canUserAddRows = true;
                }

                for (var i = 0, len = controlModel.columns.length; i < len; i++) {
                    var columnModel = <IGridViewColumnModel>controlModel.columns[i];
                    if (!columnModel.order) {
                        columnModel.order = i;
                    }
                }

                // Order columns
                orderColumns(controlModel);

                newGridView.columns = [];
                if ("columns" in controlModel) {
                    for (var i = 0, len = controlModel.columns.length; i < len; i++) {
                        var columnModel = <IGridViewColumnModel>controlModel.columns[i];
                        var column = <IGridViewColumn>initializeControlFromModel(window, columnModel);

                        // TODO: move to the function, call from everywhere
                        column.getElement = (function (id) {
                            return function () { return $("#" + id); };
                        })(column.id);

                        column.parent = newGridView;
                        column.window = window;

                        newGridView.columns.push(column);
                    };
                }
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                var controlModel = <IDataBoundControlModel>dataBoundControl.model;

                if (!isArray(value)) {
                    throw "Value of the property '" + controlModel.bindsTo + "' bound to grid view '" + dataBoundControl.name + "' is not an array.";
                }
                var gridView = <IGridView>dataBoundControl;
                var gridViewModel = <IGridViewModel>controlModel;

                if ("createNewRowValueFunction" in gridViewModel) {
                    try {
                        gridView.createNewRowValue = getNestedPropertyValue(dataBoundControl.bindingContext, gridViewModel.createNewRowValueFunction); // TODO: check that is function
                    } catch (e) {
                        throw "Error accessing createNewRowValueFunction for control '" + dataBoundControl.name + "': Data object does not have function with name '" + gridViewModel.createNewRowValueFunction + "'";
                    }
                } else {
                    if (gridViewModel.canUserAddRows) {
                        throw "Error initializing control '" + dataBoundControl.name + "': 'createNewRowValueFunction' is required in the model when 'canUserAddRows' is set to true.";
                    }
                }

                // Clear rows
                gridView.rows = [];
                $("." + REDUI_CLASS_GRIDVIEW_GRIDVIEWROW, element).remove();
                gridView.currentRow = null;

                // Append rows in a non-blocking fashion

                // This is an id that used to sync 2 binding attempts
                // This is in case bind was called before the previous async bind has finished
                var syncId = generateNewGuid();
                // Each grid view is bound individually, new binding call always wins
                gridView["__syncId"] = syncId;
                appendRows(gridView, value, 0, syncId, function () {
                    // Create sentinel row that allows adding new rows
                    if (gridViewModel.canUserAddRows) {
                        var sentinelRow = createSentinelRow(gridView, gridViewModel.columns);
                        appendEventsToSentinelRow(sentinelRow, gridView, gridViewModel.columns);
                    }
                    makeColumnsResizable(gridView);
                    makeColumnsSortable(gridView);
                });
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "GridView control cannot be used for data input";
			},
            activate(control: IControl): void {
                var gridView = <IGridView>control;
                for (var i = 0, colsLen = gridView.columns.length; i < colsLen; i++) {
                    activateControl(gridView.columns[i]);
                };
            }
        };
    }

    function registerGridViewRow() {
        function bindGridViewRow(dataObject: any) {
            var dataBoundControl = <IDataBoundControl>this;

            // Save context object on the databound control
            dataBoundControl.bindingContext = dataObject;

            // Bind cells
            if ("cells" in dataBoundControl) { // TODO: why this check?
                var gridViewRow = <IGridViewRow>dataBoundControl;
                for (var i = 0, cellsLen = gridViewRow.cells.length; i < cellsLen; i++) {
                    var cell = gridViewRow.cells[i];
                    bindRecursively(cell, dataObject);
                };
            }
        }

        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWROW] = <IControlHandlerSet>{
            create(): IGridViewRow {
                var gridViewRow = <IGridViewRow>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWROW,
                    parent: null,
                    window: null,
                    gridView: null,
                    cells: [],
                    isSentinel: false,
                    bindingContext: null,
                    contextMenu: null,
                    makeCurrent: function () {
                        setCurrentRow(this);
                    },
                    // Methods
                    bind: bindGridViewRow,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewRow;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                // Nothing to do here
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Grid view row control value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Grid view row control cannot be used for data input";
			},
            activate(control: IControl): void {
                var gridViewRow = <IGridViewRow>control;
                for (var i = 0, cellsLen = gridViewRow.cells.length; i < cellsLen; i++) {
                    activateControl(gridViewRow.cells[i]);
                };
            }
        };
    }

    function registerGridViewStaticTextColumn() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCOLUMN] = <IControlHandlerSet>{
            create(): IGridViewColumn {
                var gridViewColumn = <IGridViewColumn>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCOLUMN,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    sortingOrder: SORTING_ORDER_NONE,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewColumn;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newColumn = <IGridViewColumn>control;
                var controlModel = <IGridViewColumnModel>model;
				
                // TODO: This is duplicated in every column
                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.width) {
                    controlModel.width = 0;
                }
                if (controlModel.isSortable) {
                    controlModel.isSortable = true;
                } else {
                    controlModel.isSortable = false;
                }

                // If not overwritten, use default context menu
                if (!controlModel.contextMenu) {
                    controlModel.contextMenu = "GridViewStandardContextMenu";
                }
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Grid view column value cannot be set";
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Grid view column cannot be used for data input";
			},
            activate(control: IControl): void {
            }
        };
    }

    function registerGridViewTextBoxColumn() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCOLUMN] = <IControlHandlerSet>{
            create(): IGridViewColumn {
                var gridViewColumn = <IGridViewColumn>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCOLUMN,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    sortingOrder: SORTING_ORDER_NONE,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewColumn;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newColumn = <IGridViewColumn>control;
                var controlModel = <IGridViewColumnModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.width) {
                    controlModel.width = 0;
                }
                if (controlModel.isSortable) {
                    controlModel.isSortable = true;
                } else {
                    controlModel.isSortable = false;
                }

                // If not overwritten, use default context menu
                if (!controlModel.contextMenu) {
                    controlModel.contextMenu = "GridViewStandardContextMenu";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Grid view column value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Grid view column cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerGridViewCheckBoxColumn() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCOLUMN] = <IControlHandlerSet>{
            create(): IGridViewColumn {
                var gridViewColumn = <IGridViewColumn>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCOLUMN,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    sortingOrder: SORTING_ORDER_NONE,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewColumn;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newColumn = <IGridViewColumn>control;
                var controlModel = <IGridViewColumnModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.width) {
                    controlModel.width = 0;
                }
                if (controlModel.isSortable) {
                    controlModel.isSortable = true;
                } else {
                    controlModel.isSortable = false;
                }

                // If not overwritten, use default context menu
                if (!controlModel.contextMenu) {
                    controlModel.contextMenu = "GridViewStandardContextMenu";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Grid view column value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Grid view column cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerGridViewComboBoxColumn() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCOLUMN] = <IControlHandlerSet>{
            create(): IGridViewColumn {
                var gridViewColumn = <IGridViewColumn>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCOLUMN,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    sortingOrder: SORTING_ORDER_NONE,
                    options: null,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewColumn;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newColumn = <IGridViewComboBoxColumn>control;
                var controlModel = <IGridViewComboBoxColumnModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.width) {
                    controlModel.width = 0;
                }
                if (controlModel.isSortable) {
                    controlModel.isSortable = true;
                } else {
                    controlModel.isSortable = false;
                }

                var optionsMapped = getOptions(window, newColumn, controlModel);
                newColumn.options = optionsMapped;

                // If not overwritten, use default context menu
                if (!controlModel.contextMenu) {
                    controlModel.contextMenu = "GridViewStandardContextMenu";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Grid view column value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Grid view column cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerGridViewObjectSelectorColumn() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCOLUMN] = <IControlHandlerSet>{
            create(): IGridViewColumn {
                var gridViewColumn = <IGridViewColumn>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCOLUMN,
                    parent: null,
                    window: null,
                    contextMenu: null,
                    sortingOrder: SORTING_ORDER_NONE,
                    // Methods
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewColumn;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newColumn = <IGridViewColumn>control;
                var controlModel = <IGridViewObjectSelectorColumnModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }
                if (!controlModel.width) {
                    controlModel.width = 0;
                }
                if (controlModel.isSortable) {
                    controlModel.isSortable = true;
                } else {
                    controlModel.isSortable = false;
                }
                if (controlModel.isEditable) {
                    controlModel.isEditable = true;
                } else {
                    controlModel.isEditable = false;
                }

                // If not overwritten, use default context menu
                if (!controlModel.contextMenu) {
                    controlModel.contextMenu = "GridViewStandardContextMenu";
                }
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                throw "Grid view column value cannot be set";
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "Grid view column cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerGridViewStaticTextCell() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCELL] = <IControlHandlerSet>{
            create(): IGridViewCell {
                var gridViewCell = <IGridViewCell>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWSTATICTEXTCELL,
                    parent: null,
                    window: null,
                    row: null,
                    value: "",
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewCell;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                throw "Grid view cell doesn't have model";
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.text(value);
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "StaticTextGridViewCell control cannot be used for data input";
			},
            activate(control: IControl): void {
            }
        };
    }

    function registerGridViewTextBoxCell() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCELL] = <IControlHandlerSet>{
            create(): IGridViewCell {
                var gridViewCell = <IGridViewCell>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWTEXTBOXCELL,
                    parent: null,
                    window: null,
                    row: null,
                    value: "",
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewCell;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                throw "Grid view cell doesn't have model";
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.val(value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.val();
            },
            activate(control: IControl): void {
                var dataBoundControl = <IDataBoundControl>control;
                subscribeToChange(dataBoundControl);
            }
        };
    }

    function registerGridViewCheckBoxCell() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCELL] = <IControlHandlerSet>{
            create(): IGridViewCell {
                var gridViewCell = <IGridViewCell>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWCHECKBOXCELL,
                    parent: null,
                    window: null,
                    row: null,
                    value: "",
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewCell;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                throw "Grid view cell doesn't have model";
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.prop("checked", value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.is(':checked');
            },
            activate(control: IControl): void {
                var dataBoundControl = <IDataBoundControl>control;
                subscribeToChange(dataBoundControl);
            }
        };
    }

    function registerGridViewComboBoxCell() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCELL] = <IControlHandlerSet>{
            create(): IGridViewCell {
                var gridViewCell = <IGridViewCell>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWCOMBOBOXCELL,
                    parent: null,
                    window: null,
                    row: null,
                    value: "",
                    bindingContext: null,
                    contextMenu: null,
                    options: [],
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewCell;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                throw "Grid view cell doesn't have model";
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                element.val(value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
                return element.val();
            },
            activate(control: IControl): void {
                var cell = <IGridViewCell>control;
                cell.getElement().val(cell.value);
                subscribeToChange(cell);
            }
        };
    }

    function registerGridViewObjectSelectorCell() {
        _controlHandlers[REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCELL] = <IControlHandlerSet>{
            create(): IGridViewCell {
                var gridViewCell = <IGridViewCell>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_GRIDVIEWOBJECTSELECTORCELL,
                    parent: null,
                    window: null,
                    row: null,
                    value: "",
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return gridViewCell;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                throw "Grid view cell doesn't have model";
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                setObjectSelectorValue(dataBoundControl, value);
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                var element = dataBoundControl.getElement();
				return element.val();
            },
            activate(control: IControl): void {
                var objectSelector = <IObjectSelector>control;

                var selectButton = $("#" + control.id + "_lookupbutton", control.window.getElement());
                selectButton.click(function (event) {
                    selectWithObjectSelector(objectSelector);
                });
            }
        };
    }

    // *****************************************************************************************
    // *                             Controls - Tree View                                      *
    // *****************************************************************************************

    var REDUI_EVENT_TREEVIEW_CURRENTNODECHANGED = "redui_treeview_currentnodechanged";
    var REDUI_EVENT_TREEVIEWNODE_EXPANDED = "redui_treeviewnode_expanded";

    var REDUI_CLASS_TREEVIEWNODE_OUTER = "redui-treeviewnode-outer";
    var REDUI_CLASS_TREEVIEWNODE_SELECTED = "redui-treeviewnode-selected";
    var REDUI_CLASS_TREEVIEWNODE_COLLAPSED = "redui-treeviewnode-collapsed";
    var REDUI_CLASS_TREEVIEWNODE_EMPTY = "redui-treeviewnode-empty";
    var REDUI_CLASS_TREEVIEWNODE_INNERNODES = "redui-treeviewnode-innernodes";

    // Common for tree view and tree view node
    function bindChildTreeViewNode(treeViewNode: ITreeViewNode, value: any) {
        treeViewNode.bind(value);

        var outerElement = $("#" + treeViewNode.id + "_template");

        // Only show expander if there are subnodes
        if (treeViewNode.nodes.length > 0) {
            outerElement.addClass(REDUI_CLASS_TREEVIEWNODE_COLLAPSED);

            // Broadcast events: expanded
            $("#" + treeViewNode.id + "_expander").bind(REDUI_EVENT_CLICK, function () {
                expandNode(treeViewNode);
            });
        } else {
            outerElement.addClass(REDUI_CLASS_TREEVIEWNODE_EMPTY);
        }

        // Broadcast events: set current
        treeViewNode.getElement().bind(REDUI_EVENT_MOUSEUP, function () {
            setCurrentNode(treeViewNode);
        });
    }

    function setCurrentNode(treeViewNode: ITreeViewNode) {
        var outerElement = $("#" + treeViewNode.id + "_template");
        var treeViewOwner = <ITreeView>treeViewNode.treeView;
        if (treeViewOwner.currentNode) {
            $("#" + treeViewOwner.currentNode.id + "_template").removeClass(REDUI_CLASS_TREEVIEWNODE_SELECTED);
        }
        treeViewOwner.currentNode = treeViewNode;
        outerElement.addClass(REDUI_CLASS_TREEVIEWNODE_SELECTED);
        outerElement.trigger(REDUI_EVENT_TREEVIEW_CURRENTNODECHANGED, treeViewNode);
    }

    function expandNode(treeViewNode: ITreeViewNode) {
        var outerElement = $("#" + treeViewNode.id + "_template");
        if (outerElement.hasClass(REDUI_CLASS_TREEVIEWNODE_COLLAPSED)) {
            outerElement.trigger(REDUI_EVENT_TREEVIEWNODE_EXPANDED, treeViewNode);
            outerElement.toggleClass(REDUI_CLASS_TREEVIEWNODE_COLLAPSED);
            if (treeViewNode.nodes.length === 0) {
                outerElement.addClass(REDUI_CLASS_TREEVIEWNODE_EMPTY);
            }
        }
    }

    function registerTreeView() {
        _controlHandlers[REDUI_CONTROL_TYPE_TREEVIEW] = <IControlHandlerSet>{
            create(): ITreeView {
                var treeView = <ITreeView>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_TREEVIEW,
                    parent: null,
                    window: null,
                    roots: null,
                    currentNode: null,
                    bindingContext: null,
                    contextMenu: null,
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize,
                    currentNodeChanged: function (handler: (target: any, node: ITreeViewNode) => void) {
                        this.getElement().bind(REDUI_EVENT_TREEVIEW_CURRENTNODECHANGED, handler);
                    },
                    nodeExpanded: function (handler: (target: any, node: ITreeViewNode) => void) {
                        this.getElement().bind(REDUI_EVENT_TREEVIEWNODE_EXPANDED, handler);
                    }
                };
                return treeView;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newTreeView = <ITreeView>control;
                var controlModel = <ITreeViewModel>model;

                // Normalize model
                if (!controlModel.label) {
                    controlModel.label = "";
                }

                newTreeView.roots = [];
            },
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                var controlModel = <IDataBoundControlModel>dataBoundControl.model;

                if (!isArray(value)) {
                    throw "Value of the property '" + controlModel.bindsTo + "' bound to tree view '" + dataBoundControl.name + "' is not an array.";
                }
                var treeView = <ITreeView>dataBoundControl;
                var treeViewModel = <ITreeViewModel>controlModel;

                // Clear roots
                treeView.roots = [];
                $("." + REDUI_CLASS_TREEVIEWNODE_OUTER, element).remove();
                treeView.currentNode = null;

                var html = "";
                for (var i = 0, len = value.length; i < len; i++) {
                    var nodeValue = value[i];

                    var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_TREEVIEWNODE);
                    var treeViewNode = <ITreeViewNode>handlers.create();
                    handlers.initializeFromModel(dataBoundControl.window, treeViewNode, treeViewModel.nodeModel);

                    treeViewNode.parent = treeView;
                    treeViewNode.treeView = treeView;
                    treeView.roots.push(treeViewNode);

                    html += treeViewNode._toHtml();
                };

                // Append all nodes at once
                $(treeView.getElement()).append(html);

                for (var i = 0, rootsLen = treeView.roots.length; i < rootsLen; i++) {
                    activateControl(treeView.roots[i]);
                    bindChildTreeViewNode(treeView.roots[i], value[i])
                };
            },
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "TreeView control cannot be used for data input";
            },
            activate(control: IControl): void {
            }
        };
    }

    function registerTreeViewNode() {
        _controlHandlers[REDUI_CONTROL_TYPE_TREEVIEWNODE] = <IControlHandlerSet>{
            create(): ITreeViewNode {
                var treeViewNode = <ITreeViewNode>{
                    // Properties
                    model: null,
                    id: "redui_control_" + getNewId(),
                    name: "",
                    type: REDUI_CONTROL_TYPE_TREEVIEWNODE,
                    controls: [],
                    parent: null,
                    window: null,
                    nodes: [],
                    treeView: null,
                    bindingContext: null,
                    contextMenu: null,
                    makeCurrent: function () {
                        setCurrentNode(this);
                    },
                    expand: function () {
                        expandNode(this);
                    },
                    // Methods
                    bind: bind,
                    getElement: null,
                    _toHtml: toHtml,
                    _localize: localize
                };
                return treeViewNode;
            },
            initializeFromModel (window: IWindow, control: IControl, model: IControlModel): void {
                var newTreeViewNode = <ITreeViewNode>control;
                var controlModel = <ITreeViewNodeModel>model;

                newTreeViewNode.nodes = [];
                newTreeViewNode.getElement = function () {
                    return $("#" + newTreeViewNode.id);
                };
                newTreeViewNode.model = controlModel;
                newTreeViewNode.window = window;

                initializeInnerControls(window, newTreeViewNode, controlModel.controls);
			},
            setValue(dataBoundControl: IDataBoundControl, value: any): void {
                var element = dataBoundControl.getElement();
                var controlModel = <IDataBoundControlModel>dataBoundControl.model;

                if (!isArray(value)) {
                    throw "Value of the property '" + controlModel.bindsTo + "' bound to tree view node'" + dataBoundControl.name + "' is not an array.";
                }
                var parentNode = <ITreeViewNode>dataBoundControl;
                var treeViewNodeModel = <ITreeViewNodeModel>controlModel;

                // Clear clildren
                parentNode.nodes = [];
                $("." + REDUI_CLASS_TREEVIEWNODE_OUTER, $("#" + parentNode.id + "_template")).remove();

                var html = "";
                for (var i = 0, len = value.length; i < len; i++) {
                    var nodeValue = value[i];

                    var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_TREEVIEWNODE);
                    var treeViewNode = <ITreeViewNode>handlers.create();
                    handlers.initializeFromModel(dataBoundControl.window, treeViewNode, treeViewNodeModel);

                    treeViewNode.parent = parentNode;
                    treeViewNode.treeView = parentNode.treeView;
                    parentNode.nodes.push(treeViewNode);

                    html += treeViewNode._toHtml();
                };

                // Append all nodes at once
                $("#" + parentNode.id + "_innernodes").first().append(html);

                for (var i = 0, childrenLen = parentNode.nodes.length; i < childrenLen; i++) {
                    activateControl(parentNode.nodes[i]);
                    bindChildTreeViewNode(parentNode.nodes[i], value[i])
                };
			},
            getValue(dataBoundControl: IDataBoundControl): any {
                throw "TreeViewNode control cannot be used for data input";
			},
            activate(control: IControl): void {
                activateInnerControls(control);
            }
        };
    }

    // *****************************************************************************************
    // *                             RedUI object                                              *
    // *****************************************************************************************

    var _redui = <IRedUI>{
        // Constants
        windowPosition: <IWindowPosition>{
            declared: WINDOW_POSITION_DECLARED,
            center: WINDOW_POSITION_CENTER
        },
        // Libary version
        version: REDUI_VERSION,
        // Application UI model
        model: _model,
        // Application windows
        windows: {},
        // Creates a new window
        createNewWindow: null,
        // Creates a new window from a window model
        createNewWindowFromModel: null,
        // Global options bag
        optionsBag: _optionsBag,
        // Global object sources
        objectSources: _objectSources,
        // Custom control handlers
        customControlHandlers: _customControlHandlers,
        // Commands
        commands: _commands
    };

    // Register controls
    registerWindow();

    registerTextBox();
    registerTextArea();
    registerCheckBox();
    registerComboBox();
    registerListBuilder();
    registerStaticText();
    registerImage();
    registerGroupBox();
    registerAccordionPanel();
    registerButton();
    registerObjectSelector();
    registerPager();
    registerRibbon();
    registerRibbonButton();
    registerContextMenu();
    registerMenuItem();
    registerMenuSeparator();
    registerTabs();
    registerTabPage();
    registerListView();
    registerListViewItem();
    registerBreadcrumbs();
    registerAnchoredContent();

    registerCustomControl();

    // Grid view
    registerGridView();
    registerGridViewRow();
    // Columns
    registerGridViewStaticTextColumn();
    registerGridViewTextBoxColumn();
    registerGridViewCheckBoxColumn();
    registerGridViewComboBoxColumn();
    registerGridViewObjectSelectorColumn();
    // Cells
    registerGridViewStaticTextCell();
    registerGridViewTextBoxCell();
    registerGridViewCheckBoxCell();
    registerGridViewComboBoxCell();
    registerGridViewObjectSelectorCell();

    registerTreeView();
    registerTreeViewNode();

    // redui methods

    _redui.createNewWindow = function (windowName: string, context?: IWindowContext): IWindow {
        if (!windowName) {
            throw "Window name is not provided.";
        }

        var windowModel = _model.getWindowModel(windowName);
        return createWindowInternal(windowModel, context);
    };

    _redui.createNewWindowFromModel = function (windowModel: IWindowModel, context?: IWindowContext): IWindow {
        if (!windowModel) {
            throw "UI model is not provided";
        }

        return createWindowInternal(windowModel, context);
    }

    function createWindowInternal(windowModel: IWindowModel, context?: IWindowContext): IWindow {
        if (!context) {
            context = null;
    }

        var newWindow: IWindow;
        try {
            var handlers = getControlHandlerSet(REDUI_CONTROL_TYPE_WINDOW);
            newWindow = <IWindow>handlers.create();

            // Set context - important to do it before initialization
            newWindow.context = context;
            handlers.initializeFromModel(newWindow, newWindow, windowModel);
            InitializeControlContextMenu(newWindow, newWindow, windowModel);
        } catch (e) {
            throw "Error creating window. " + e;
        }

        newWindow.show = function (options?: IWindowDisplayOptions) {
            var windowElement = newWindow.getElement();

            if (options && options.windowPosition === _redui.windowPosition.center) {
                // Center window
                windowElement.css({
                    margin: "-" + newWindow.height / 2 + "px 0 0 -" + newWindow.width / 2 + "px", // newWindow.height doesn't include height of .redui-window-dialogbuttonspanel-outer
                    top: "50%",
                    left: "50%"
                });
            }

            windowElement.removeClass(REDUI_CLASS_HIDDEN);
            windowElement.trigger(REDUI_EVENT_WINDOW_SHOWN);
        };

        newWindow.showModal = function () {
            var windowElement = newWindow.getElement();

            if (!windowElement.hasClass(REDUI_CLASS_MODALWINDOW)) {
                var depth = modalDepthCounter.increase();

                windowElement.css("zIndex", 1000 + depth * 2);
                $("#" + this.id + "_overlay").css("zIndex", 1000 + depth * 2 - 1);

                windowElement.addClass(REDUI_CLASS_MODALWINDOW);
                $("#" + this.id + "_overlay").removeClass(REDUI_CLASS_HIDDEN);
            }

            // Center window
            var options = <IWindowDisplayOptions> {
                windowPosition: _redui.windowPosition.center
            };

            newWindow.show(options);

            var firstFocusable = $("." + REDUI_CLASS_FOCUSABLE + ":first:not(." + REDUI_CLASS_HIDDEN + ")", windowElement);
            var lastFocusable = $("." + REDUI_CLASS_FOCUSABLE + ":last:not(." + REDUI_CLASS_HIDDEN + ")", windowElement);

            // Move the focus to the first control inside the modal window
            firstFocusable.focus();
            firstFocusable.focus(); // Second call fixes the issue with focus in IE

            // Prevent focus to leave the modal dialog
            windowElement.keydown(function (e) {
                if (e.keyCode === 9) { // Tab
                    if (e.target === lastFocusable[0] && !e.shiftKey) {
                        firstFocusable.focus();
                        e.preventDefault();
                    } else if (e.target === firstFocusable[0] && e.shiftKey) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                }
            });
        };

        newWindow.dock = function (divSelector: JQuery) {
            if (!divSelector.is("div")) {
                throw "Cannot dock a window. Selector '" + divSelector + "' does not return div";
            }

            var windowElement = newWindow.getElement();

            windowElement.addClass(REDUI_CLASS_HIDDEN);

            var innerClientArea = $("#" + newWindow.id + "_clientareainner");
            divSelector.append(innerClientArea);

            windowElement.trigger(REDUI_EVENT_WINDOW_DOCKED);

            newWindow.undock = function () {
                newWindow.show();

                var outerClientArea = $("#" + newWindow.id + "_clientareaouter");
                outerClientArea.append(innerClientArea);

                newWindow.undock = function () {
                };
            };
        };

        newWindow.undock = function () {
        };

        newWindow.close = function (dialogResult?: string) {
            var windowElement = newWindow.getElement();

            if (!validateControl(newWindow) && dialogResult !== DIALOG_RESULT_CANCEL) {
                return;
            }

            windowElement.trigger(REDUI_EVENT_WINDOW_CLOSING, dialogResult);

            newWindow.undock();

            if (windowElement.hasClass(REDUI_CLASS_MODALWINDOW)) {
                windowElement.css("zIndex", "");
                windowElement.removeClass(REDUI_CLASS_MODALWINDOW);
                var depth = modalDepthCounter.decrease();
            }

            $("#" + this.id + "_overlay").remove();

            windowElement.addClass(REDUI_CLASS_HIDDEN);
            windowElement.trigger(REDUI_EVENT_WINDOW_CLOSED, dialogResult);

            // Store window model changes
            saveModelChanges(newWindow.model);

            // Delete window from DOM
            windowElement.remove();
            // Delete window from the application window dictionary
            delete _redui.windows[newWindow.id];

            // Move focus into the previously opened modal dialog
            var firstFocusable = $("." + REDUI_CLASS_MODALWINDOW + ":last ." + REDUI_CLASS_FOCUSABLE + ":first:not(." + REDUI_CLASS_HIDDEN + ")");
            if (firstFocusable.length > 0) {
                firstFocusable.focus();
            }
        };

        // Adds the new window to the application windows
        _redui.windows[newWindow.id] = newWindow;

        // Create a new window html representation
        _reduiApplication.append(newWindow._toHtml());

        // Activate new window
        activateControl(newWindow);

        return newWindow;
    }

    activateCommands();

    // Make redui globally accessible
    window["redui"] = _redui;
})(window);
