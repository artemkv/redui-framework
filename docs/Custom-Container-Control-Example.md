# Custom Container Control Example

This example explains how to create a custom container control (customtabcontrol and customtabpage). This custom control is based on the jQuery Tabs control.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## Tab Control Template

{code:html}
<div id="{{id}}_template" class="redui-customtabcontrol-outer{{#model.cssClass}} {{model.cssClass}}{{/model.cssClass}}{{#model.isHidden}} redui-hidden{{/model.isHidden}}">
  <div id="{{id}}" data-name="{{name}}" class="redui-customtabcontrol">
    <ul>
    {{#controls}}
      <li><a href="#{{id}}">{{#_localize}}{{model.label}}{{/_localize}}</a></li>
    {{/controls}}
    </ul>

    {{#controls}}
    {{{_toHtml}}}
    {{/controls}}
  </div>
</div>
{code:html}

## Tab Page Template

{code:html}
<div id="{{id}}_template" class="redui-customtabpage-outer{{#model.cssClass}} {{model.cssClass}}{{/model.cssClass}}{{#model.isHidden}} redui-hidden{{/model.isHidden}}">
  <div id="{{id}}" name="{{name}}" class="redui-customtabpage">
    {{#controls}}
    {{{_toHtml}}}
    {{/controls}}
  </div>
</div>
{code:html}

## UI Model

{code:javascript}
{
    "windows": [
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
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var customerData = {
	firstName: "Mario",
	lastName: "Pizzi",
	address: {
		street: "Via Roma",
		zip: 1000,
		city: "Torino"
	}
};
{code:javascript}

## Code

{code:javascript}
redui.customControlHandlers.customtabcontrol = {
	activate: function (control) {
		control.getElement().tabs();
	}
};

var exampleWindow = redui.createNewWindow("CustomContainerControlExample");
exampleWindow.bind(customerData);
exampleWindow.show();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		alert("Model data: " + JSON.stringify(customerData));
	}
});
{code:javascript}


.