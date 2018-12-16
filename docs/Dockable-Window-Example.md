# Dockable Window Example

This example explains how to create a window that can be docked into the div.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
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
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
var playerData = {
	firstName: "Elvio",
	lastName: "Rizzo",
};
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("DockableWindowExample");
exampleWindow.bind(playerData);
exampleWindow.show();

exampleWindow.dockButton.getElement().click(function () {
	exampleWindow.dock($("#DockableWindowExample_DockableDiv"));
});
exampleWindow.undockButton.getElement().click(function () {
	exampleWindow.undock();
});
{code:javascript}