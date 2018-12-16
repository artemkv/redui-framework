# Simple Window Example

This example explains how to create a simple window and show on the screen.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "SimpleWindowExample",
            "title": "Simple Window Example",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300
        }
    ]
}
{code:javascript}

## Code

{code:javascript}
var exampleWindow = redui.createNewWindow("SimpleWindowExample");
exampleWindow.show();
{code:javascript}