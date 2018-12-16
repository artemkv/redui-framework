# Databound Custom Control Example

This example explains how to create a custom control (customdatapicker). This custom control is based on the jQuery Datapicker control.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## Creation of a custom control requires the following steps:
1. Create a template for the custom control and save it in the template folder under the name of custom control type + extension ".htm". In this example the template file is named "customdatapicker.htm", because custom control type is "customdatapicker".
	* Use the [moustache](https://github.com/janl/mustache.js) syntax to refer to the model properties.
	* Apply _redui-onchangeupdatesdata_ class to indicate that the element updates the binding context.

## Template

{code:html}
<div id="{{id}}_template" class="redui-customdatapicker-outer redui-valid{{#model.cssClass}} {{model.cssClass}}{{/model.cssClass}}{{#model.isHidden}} redui-hidden{{/model.isHidden}}">
  {{#model.label}}<label for="{{id}}" class="redui-customdatapicker-label">
    <span>{{#_localize}}{{model.label}}{{/_localize}}: {{#model.isRequired}}*{{/model.isRequired}}</span>
  </label>{{/model.label}}
  <input id="{{id}}" name="{{name}}" data-name="{{name}}" class="redui-customdatapicker redui-focusable" type="text" />
  <div id="{{id}}_validationerrorbox" class="redui-validation-errorbox"></div>
</div>
{code:html}



2. Declare the custom control in the model. Use "custom" as a "type" property value, and specify the custom control type as a "customType" property value. In this example custom type is "customdatapicker" (As mentioned before, should match the template).

## UI Model

{code:javascript}
{
    "windows": [
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
        }
    ]
}
{code:javascript}



3. Define a handler for the data binding as a property of a _redui.customControlHandlers_ object. The handler name should match the custom type. In this example handler name is "customdatapicker". Handler should be an object with 2 methods: "bind" and "getValue".
	* Implement "getValue(control: ICustomControl): any" method on the handler.
	* Implement "setValue(control: ICustomControl, value: any): void" method on the handler.
	* Implement "activate(control: ICustomControl): void" method on the handler.

## Data Model

{code:javascript}
var data = {
    selectedDate: "01/15/2014"
};
{code:javascript}

## Code

{code:javascript}
redui.customControlHandlers.customdatapicker = {
	getValue: function (control) {
		return control.getElement().val();
	},
	setValue: function (control, value) {
		control.getElement().val(value);
	},
	activate: function (control) {
		control.getElement().datepicker();
	}
};

var exampleWindow = redui.createNewWindow("CustomControlExample");
exampleWindow.bind(data);
exampleWindow.show();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		alert("Model data: " + JSON.stringify(data));
	}
});
{code:javascript}


.