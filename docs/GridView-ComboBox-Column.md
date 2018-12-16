# GridView ComboBox Column

![](GridView-ComboBox-Column_ComboBoxColumn.png)

## Model

![](GridView-ComboBox-Column_IGridViewComboBoxColumnModel.png)

**type: string** - type of the control. Use _"gridviewcomboboxcolumn"_ to declare a ComboBox column.

**name?: string** (optional) - name of the control. In javascript code, a child control is accessible from its parent control by name. In HTML, the value is put into the _name_ attribute of the element.

**cssClass?: string** (optional) - custom CSS class that will be applied to the control's outer element.

**isHidden?: boolean** (optional) - allows to declare control as hidden.

**bindsTo?: string** (optional) - path of the property that the control will be databound to.

**label?: string** (optional) - control label.

**width?: number** (optional) - column width.

**getOptionsFunction?: string** (optional) - name of the function to get the possible values. The function has to be defined on redui.optionsBag object.

**optionIdProperty?: string** (optional) - name of the property that is used as a option id. In HTML, the value of this property is put into the _value_ attribute of the _option_ element. By default, the control looks for the property called "id".

**optionValueProperty?: string** (optional) - name of the property that is used as a option value. In HTML, the value of this property is put as an inner text of the _option_ element. By default, the control looks for the property called "value".

### Example

```javascript
{
	"type": "gridviewcomboboxcolumn",
	"name": "country",
	"label": "Country",
	"width": 100,
	"bindsTo": "address.country",
	"getOptionsFunction": "getcountries",
	"optionIdProperty": "optid",
	"optionValueProperty": "optvalue"
}
```

## Control

![](GridView-ComboBox-Column_IGridViewComboBoxColumn.png)

**model: IControlModel** - reference to the model.

**id: string** - control id. Returns value of the _id_ attribute of the element.

**type: string** - type of the control.

**name: string** - name of the control.

**parent: IControl** - reference to the parent control.

**window: IWindow** - reference to the window that owns the control.

**options: any[]()** - reference to the array with the ComboBox options.

**getElement(): JQuery** - returns the HTML element that represents the control.
