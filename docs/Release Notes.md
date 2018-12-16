redui.1.0.0-beta001
* Window model gets a property 'trackChanges'. When set to true, window model is stored in the local storage when window is closed. Any changes in the model are restored when the window is created from the same model
* Window model gets a property 'version' that solves the potential issue with the stored model being incompatible with the new model. Model is only restored when version mathes
* Window for which 'trackChanges' is set to 'true' keeps the size when re-opened
* Functions createNewWindow and createNewWindowFromModel accept IWindowContext as a optional parameter that is stored in the window.context property, which solves dependency on "global" variables (defined on redui object)
* When ComboBox/ListBuilder is initialized, getOptionsFunction model property is used to look up the function on the window context first, and only if not found, on the global context (redui.optionsBag)
* When ObjectSelector select button is pressed, getObjectFunction model property is used to look up the function on the window context first, and only if not found, on the global context (redui.objectSources)
* IGridViewColumnModel allows to specify the order (when not set, defaults to column model index in the model)
* GridView allows to show/hide columns (Accessible through the context menu added by default for every column)
* GridView allows changing column order (Accessible through the context menu added by default for every column)
* GridView column order/visibility/width is saved in the localStorage (if is declared in the window with 'trackChanges' set to 'true')

redui.1.0.0-alpha0026
* Application model contains description of menus in addition to windows
* Every control model get the property 'contextMenu' that references the menu from the application model
* ContextMenu control (now only text, no image, no shortcut, but keyboard is supported)
* ContextMenu supports menu separators
* Command pattern: ribbon buttons and context menu items are bound to commands that encapsulates the command logic
* Command pattern: command canExecute method which is called automatically controls enabled/disabled state of the ribbon button/menu item
* TreeView '{"redui_treeview_nodeselected"}' event is renamed to '{"redui_treeview_currentnodechanged"}'
* GridView '{"redui_gridview_rowselected"}' event is renamed to '{"redui_gridview_currentrowchanged"}'
* It is possible to programmatically set the current row in the grid view: makeCurrent method of the GridViewRow
* It is possible to programmatically set the current node in the tree view: makeCurrent method of the TreeViewNode
* It is possible to programmatically expand the node
* Tabs/TabPage controls
* ListView Control
* AccordionPanel Control

redui.1.0.0-alpha0025
* Skipped

redui.1.0.0-alpha0024
* Application model allows to add window model created in code
* Application model allows to retrieve window model by name
* Application model allows to remove a window model by name
* Window can be created by providing a model directly, not only by name
* If view model property is observable (ko), subscribe to events and auto-update UI
* Custom control is derived from IContainerControlModel
* Css class 'redui-onchangeupdatesdata' is not required in the template anymore for the view model update. Instead control relies on activation to subscribe to element events
* When re-binding GridView, {"window._allControls"} object was not cleaned up. Now {"_allControls"} is removed and replaced with the control activation mechanism
* All script tags from templates moved to activate handlers. So templates do not contain any code anymore
* Code updated to TypeScript 1.0RC

redui.1.0.0-alpha0023
* Possibility to open the window (non-modal) center screen
* IGridViewRow has GridView property that references the GridView it belongs to
* Closing a docked window undocks it automatically

redui.1.0.0-alpha0022
* UI is localizable. Use "$label.<labelName>" to describe a localizable label, reference Globalize.js library and use Globalize.addCultureInfo to provide translations.
* ObjectSelector, ObjectSelectorCell, ComboBox and ListBuilder rely on toString() method if the optionValueProperty/objectValueProperty is not provided
* ObjectSelector and ObjectSelectorCell can be declared as editable
* Ribbon control
* RibbonButton control
* Pressing Enter in TextArea doesn't close the window anymore
* Node subnodes are accessed as "nodes" and not as "children"

redui.1.0.0-alpha0021
* GridView is sortable
* GridView re-styling

redui.1.0.0-alpha0020
* TextBox allows to override the type attribute of the rendered input element
* Templates are loaded by version to force changes to be downloaded when deploying the new version
* Support for custom databound controls
* jQueryUI Datepicker is added as a custom 'customdatapicker' control
* ListBuilder control

redui.1.0.0-alpha0019
* Window can be resized
* Controls supports validation
* Validation errors should prevent modal dialog from closing by OK/Enter
* Validation errors should not prevent modal dialog from closing by Cancel/Esc/Close

redui.1.0.0-alpha0018
* GridView column width can be adjusted

redui.1.0.0-alpha0017
* Pager control
* Tree view node should is shown as expandable only when there are subnodes

redui.1.0.0-alpha0016
* Template extension is changed to .htm, model extension is changed to .js. This avoids extra configuration in IIS to register new MIME types
* Outer html element on the template always has an id (whether it is an id of a control, or an id of a control postfixed with _template, if inner element has an id of a control)
* Css class defined in the model is put on the outer html element of the template, since you cannot reference the parent from css, but you can always reference a child
* Fixed: Binding the gridview second time while first binding is still adding rows will add rows from 2 binding attempts

redui.1.0.0-alpha0015
* Grid view rows are appended in a non-blocking fashion. UI doesn't freeze while grid view rows are still being rendered
* Template extension is changed to .htm, model extension is changed to .js. This avoids extra configuration in IIS to register new MIME types.

redui.1.0.0-alpha0014

* Code relies on class for operations on multiple elements (like clear all grid view rows), and on id for operations on a single elements (broadcast expanding event of a specific node)
* Fixed: Css selectors using the window element as a context do not work for docked windows
* Fixed: Double-dock, then undock doesn't undock the window correctly
* Fixed: Make special ids use postfix instead of prefix (like "{{id}}_clientareainner")
* Css classes, ids and events standardized
* Dialog buttons are no longer reversed

redui.1.0.0-alpha0013

* Potentially conflicting css classes (like "focusable", "hidden") prefixed with "redui-"
* Label control renamed to StaticText
* Panel control renamed to GroupBox
* Every control has a property model to access the model instead of individual properties copied from the model. Model is used for rendering.
* TreeView has label

redui.1.0.0-alpha0012

* Modal window doesn't allow focus to go outside of the modal window when tabbing
* After the modal window is closed, the focus goes into the previous modal window, if any
* Fixed: Clicking between 2 controls in the tree node doesn't select the node
* Fixed: Grid row only gets selected when clicked inside the text box. Should work with any column type
* Fixed: In the grid with 'canUserAddRows: true' newly added row does not generate redui.gridview.rowselected
* Fixed: In the grid with 'canUserAddRows: true' newly added row does not show as selected
* Fixed: Check box label should be on the right
* ObjectSelector control as a text box with a lookup button
* ObjectSelector grid view column
* Every control updates the property of the contextObject when it's value changes, no need to call getDataObject explicitly

redui.1.0.0-alpha0011

* Every control gets a reference to the window
* When window is shown as modal the first editable control inside the modal window gets focus
* When window is shown as modal, it is positioned in the screen center, regardless of what was set in the model
* Pressing Esc closes (hides) the modal window (only works when focus stays inside the modal findow)
* Pressing Enter closes (hides) the modal window (only works when focus stays inside the modal findow)
* Window accepts an object with hooks for its life cycle events: initializing, initialized, binding, bound, showing, closing, closed
* Window exposes {"redui_window_closing"} and {"redui_window_closed"} events returning a dialog result
* Clicking a Cancel button (declared as "isDialogButton" with "dialogResult": "Cancel"), closing the window with the cross button or by pressing Esc closes the window and triggers {"redui_window_closed"} with dialogResult "Cancel"
* Clicking OK button (declared as "isDialogButton" with "dialogResult": "OK") or pressing Enter closes the window and triggers {"redui_window_closed"} with dialogResult "OK"
* Clicking any button declared as "isDialogButton" with non-empty "dialogResult" closes the window and triggers {"redui_window_closed"} with the specified dialogResult

redui.1.0.0-alpha0010

* Window.ShowModal with any level of modal windows on top of each other
* Buttons are based on BUTTON element and re-styled
* Dialog buttons (OK, Cancel or any other, driven by isDialogButton property) are shown in the footer of the window
* Form layout: labels on top of fields, good margins, sizes and fonts, tab order
* Close button in the window title area closes(hides) the modal window

redui.1.0.0-alpha0007

* Window control (Rectangle with title which can contain controls)
* TextBox cotrol
* TextArea control
* CheckBox control
* ComboBox control
* Label control
* Image control
* Panel control (Rectangle with label which can contain controls)
* Button control
* GridView control (Column headers, rows, cells)
* GridView TextBoxCell
* GridView CheckBoxCell
* GridView StaticTextCell
* GridView ComboBoxCell
* TreeView control (any control inside the node)
* Window can be dragged to the new location
* Window is scrollable when inner controls do not fit
* Highlight GridView row on hover
* GridView exposes event RowSelected
* GridView allows inserting new rows
* GridView selected row has a special class and is shown with the different style
* Any control can be rendred as hidden if specified in the model
* TreeView exposes event NodeExpanded
* Image control is databound
* Highlight TreeView node on hover
* TreeView selected node has a special class and is shown with the different style
* TreeView exposes event NodeSelected
* Any window can be docked into any div
* Performance: when rendering repeating elements (i.e. grid rows) insert them into the document all at once in the end
* Use moustache to generate html from templates
* Hidden elements do not occupy any space
* CanUserAddRows property for the GridView controls whether it is possible to add new rows
* If the GridVIew model property CanUserAddRows is set to true, CreateNewRowValueFunction property is required and refers to the function creating a data value for the new row
* The object that the control is bound to is saved as a contextObject in the control itself. getDataObject returns a stored object with updated properties
* ComboBox implements GetOptionsFunction property that refers to the function from redui.otionsBag that is used to retrieve the options
* Colors are separated from the rest of css rules
* Simplified binding to events like {"redui_treeviewnode_expanded"} using functions like nodeExpanded

.