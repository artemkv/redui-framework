# Databound Custom Control With Custom Model Properties Example

This example explains how to create a custom control (customslider) which uses the custom metadata properties. This custom control is based on the jQuery Slider control.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## Template

{code:html}
<div id="{{id}}_template" class="redui-customslider-outer redui-valid{{#model.cssClass}} {{model.cssClass}}{{/model.cssClass}}{{#model.isHidden}} redui-hidden{{/model.isHidden}}">
  {{#model.label}}<label for="{{id}}" class="redui-customslider-label">
    <span>{{#_localize}}{{model.label}}{{/_localize}}: {{#model.isRequired}}*{{/model.isRequired}}</span>
  </label>{{/model.label}}
  <input id="{{id}}_amount" name="{{name}}" data-name="{{name}}" type="text" style="width: 32px; margin-bottom: 16px;" readonly="readonly" />
  <div id="{{id}}" class="redui-customslider redui-focusable" style="height:{{model.custom-length}}px;"></div>
  <div id="{{id}}_validationerrorbox" class="redui-validation-errorbox"></div>
</div>
{code:html}

## UI Model

{code:javascript}
{
    "windows": [
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
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var data = {
	drive: 50,
	bass: 60,
	mid: 70,
	treble: 80,
	volume: 30
};
{code:javascript}

## Code

{code:javascript}
redui.customControlHandlers.customslider = {
	getValue: function (control) {
		return control.getElement().slider("option", "value");
	},
	setValue: function (control, value) {
		control.getElement().slider("option", "value", value);
		$("#" + control.id + "_amount").val(value);
	},
	activate: function (control) {
		control.getElement().slider({
			orientation: control.model["custom-orientation"](_custom-orientation_),
			range: "min",
			min: control.model["custom-min"](_custom-min_),
			max: control.model["custom-max"](_custom-max_),
			slide: function (event, ui) {
				$("#" + control.id + "_amount").val(ui.value);
			},
			change: function (event, ui) {
				control.getElement().trigger("change.redui", ui);
			}
		});
	}
};

var exampleWindow = redui.createNewWindow("CustomModelPropertiesExample");
exampleWindow.bind(data);
exampleWindow.show();

exampleWindow.closed(function (target, dialogResult) {
	if (dialogResult === "OK") {
		alert("Model data: " + JSON.stringify(data));
	}
});
{code:javascript}