{code:javascript}
{
    "windows": [
        {
            "name": "CustomerDataWindow",
            "title": "Customer Data",
            "width": 280,
            "height": 250,
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
        }
    ]
}
{code:javascript}

{code:javascript}
{
"use strict";

$(function () {
    // RedUI will render the window that you described in the UI model
    var welcomeWindow = redui.createNewWindow("CustomerDataWindow");

    // All you need is to bind it to the view model...
    var customerData = {
        firstName: "Claudio",
        lastName: "Lucchesi",
    };
    welcomeWindow.bind(customerData);

    // ... and decide when it will appear on the screen
    welcomeWindow.show();

    // You can access controls by names...
    var firstNameControl = welcomeWindow.firstNameTextBox;

    // ...or by index
    var firstControl = welcomeWindow.controls[0](0);

    // From control you can access...

    // ...the element
    var element = firstNameControl.getElement();
    // ...model properties
    var label = firstNameControl.model.label;
    // ...view model bound to the control
    var dataObject = firstNameControl.bindingContext;

    // Controls generate events you can handle
    welcomeWindow.closed(function (target, dialogResult) {
        if (dialogResult === "OK") {
            // Save the updated model view
        }
    });
});
{code:javascript}

{code:html}
<div id="redui_window_1" data-name="CustomerDataWindow" class="redui-window ui-draggable ui-resizable" style="top: 371px; left: 885px;">
  <div id="redui_window_1_titleouter" class="redui-window-title-outer" style="width: 280px; height: 32px;">
    <div class="redui-window-title-inner">
      <span class="redui-window-title">Customer Data</span>
    </div>
    <span class="redui-window-closebutton"></span>
  </div>
  <div id="redui_window_1_clientareaouter" class="redui-window-clientarea-outer" style="width: 280px; height: 218px;">
    <div id="redui_window_1_clientareainner" class="redui-window-clientarea-inner">
      <div class="redui-window-clientarea-layoutpanel">
        <div id="redui_control_2_template" class="redui-textbox-outer redui-valid">
  <label for="redui_control_2" class="redui-textbox-label">
    <span>First Name: </span>
  </label>
  <input id="redui_control_2" name="firstNameTextBox" data-name="firstNameTextBox" class="redui-textbox redui-focusable redui-onchangeupdatesdata" type="text">
  <div id="redui_control_2_validationerrorbox" class="redui-validation-errorbox"></div>
</div>
        <div id="redui_control_3_template" class="redui-textbox-outer redui-valid">
  <label for="redui_control_3" class="redui-textbox-label">
    <span>Last Name: </span>
  </label>
  <input id="redui_control_3" name="lastNameTextBox" data-name="lastNameTextBox" class="redui-textbox redui-focusable redui-onchangeupdatesdata" type="text">
  <div id="redui_control_3_validationerrorbox" class="redui-validation-errorbox"></div>
</div>
        <div id="redui_control_4_template" class="redui-button-outer">
  
</div>
<script>
  $(".redui-window-dialogbuttonspanel-inner", $("#redui_control_4").closest(".redui-window")).append($("#redui_control_4"));
</script>

        <div id="redui_control_5_template" class="redui-button-outer">
  
</div>
<script>
  $(".redui-window-dialogbuttonspanel-inner", $("#redui_control_5").closest(".redui-window")).append($("#redui_control_5"));
</script>

      </div>
    </div>
  </div>
  <div id="redui_window_1_dialogbuttonspanelouter" class="redui-window-dialogbuttonspanel-outer" style="width: 280px">
    <div class="redui-window-dialogbuttonspanel-inner">
    <button id="redui_control_4" name="OKButton" data-name="OKButton" class="redui-button redui-focusable redui-dialogbutton" tabindex="0" type="button">OK</button><button id="redui_control_5" name="CancelButton" data-name="CancelButton" class="redui-button redui-focusable redui-dialogbutton" tabindex="0" type="button">Cancel</button></div>
  </div>
<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div>
{code:html}