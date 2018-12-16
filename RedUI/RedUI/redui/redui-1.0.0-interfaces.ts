/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/jqueryui/jqueryui.d.ts"/>

// Application model describes all windows used in the application
interface IApplicationModel {
    // Adds a window model to the application model
    addWindowModel(windowModel: IWindowModel): void;
    // Returns a window model
    getWindowModel(name: string): IWindowModel;
    // Removes a window model
    removeWindowModel(name: string): void;

    // Adds a menu model to the application model
    addMenuModel(menuModel: IContextMenuModel): void;
    // Returns a menu model
    getMenuModel(name: string): IContextMenuModel;
    // Removes a menu model
    removeMenuModel(name: string): void;
}

// Describes a control
interface IControlModel {
    // Control type
    type: string;
    // Control name
    name?: string;
    // Control css class
    cssClass?: string;
    // Specifies whether control is hidden
    isHidden?: boolean;
    // Context menu attached to the control
    contextMenu?: string;
}

// Describes a databound control
interface IDataBoundControlModel extends IControlModel {
    // The property of the data object that the control binds to
    bindsTo?: string;
}

// Describes a control that can contain other controls
interface IContainerControlModel extends IControlModel {
    // Collection of child controls
    controls?: IControlModel[];
    // The property of the data object that will be used as a binding context.
    // When not set, the data object itself is used as a context.
    bindingContext?: string;
}

// Describes an application window
interface IWindowModel extends IContainerControlModel {
    // The window title
    title?: string;
    // The x coordinate of the left top corner
    left?: number;
    // The y coordinate of the left top corner
    top?: number;
    // The width
    width?: number;
    // The height
    height?: number;
    // Should the changes be tracked?
    trackChanges?: boolean;
    // the window model version
    version?: number;
}

// Describes a group box
interface IGroupBoxModel extends IContainerControlModel {
    // The label
    label?: string;
}

// Describes an accordion panel
interface IAccordionPanelModel extends IContainerControlModel {
    // The label
    label?: string;
}

// Describes a text box
interface ITextBoxModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Specifies the pattern to validate the input against
    pattern?: string;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
    // Specifies the maximum length for the field
    maxlength?: number;
    // Allows to override the default input type
    inputType?: string;
}

// Describes a text area
interface ITextAreaModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // Specifies the visible width of a text area
    columns?: number;
    // Specifies the visible number of lines in a text area
    rows?: number;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
    // Specifies the maximum length for the field;
    maxlength?: number;
}

// Describes a check box
interface ICheckBoxModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a combo box
interface IComboBoxModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // The name of the function to get the possible values.
    getOptionsFunction?: string;
    // The name of the property that is used as a option id.
    optionIdProperty?: string;
    // The name of the property that is used as a option value.
    optionValueProperty?: string;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a list builder
interface IListBuilderModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // The name of the function to get the possible values.
    getOptionsFunction?: string;
    // The name of the property that is used as a option id.
    optionIdProperty?: string;
    // The name of the property that is used as a option value.
    optionValueProperty?: string;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a button
interface IButtonModel extends IControlModel {
    // The button text
    text?: string;
    // Specifies whether the button is a dialog button
    isDialogButton?: boolean;
    // Specifies the dialog result.
    dialogResult?: string;
}

// Describes a grid view
interface IGridViewModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // Columns
    columns?: IGridViewColumnModel[];
    // Specifies whether user can add rows
    canUserAddRows?: boolean;
    // The path to the function that creates a new row. 
    // Function has to be declared on a databound object.
    createNewRowValueFunction?: string;
}

// Describes a grid view column
interface IGridViewColumnModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // The width
    width?: number;
    // the column order. If not set, assumed to be 0.
    order?: number;
    // Specifies whether the column is sortable
    isSortable?: boolean;
}

// Describes a grid view combobox column
interface IGridViewComboBoxColumnModel extends IGridViewColumnModel {
    // The name of the function to get the possible values
    getOptionsFunction?: string;
    // The name of the property that is used as a option id.
    optionIdProperty?: string;
    // The name of the property that is used as a option value.
    optionValueProperty?: string;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a grid view object selector column
interface IGridViewTextBoxColumnModel extends IGridViewColumnModel {
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Specifies the pattern to validate the input against
    pattern?: string;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a grid view object selector column
interface IGridViewCheckBoxColumnModel extends IGridViewColumnModel {
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a tree view
interface ITreeViewModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // A model of a single node
    nodeModel: ITreeViewNodeModel; // TODO: should be optional?
}

// Describes a tree view node
interface ITreeViewNodeModel extends IContainerControlModel, IDataBoundControlModel {
}

// Describes a static text
interface IStaticTextModel extends IDataBoundControlModel {
    // Text
    text?: string;
}

// Describes an image
interface IImageModel extends IDataBoundControlModel {
    // The source of the image
    source?: string;
    // The alternate text for an image
    alternateText?: string;
    // The width
    width?: number;
    // The height
    height?: number;
}

// Describes a generic object selector
interface IObjectSelectorBaseModel extends IControlModel {
    // The name of the function to get the object
    getObjectFunction?: string;
    // The name of the property that is used as an object value.
    objectValueProperty?: string;
}

// Describes an object selector
interface IObjectSelectorModel extends IObjectSelectorBaseModel, IDataBoundControlModel {
    // The label
    label?: string;
    // Specifies whether the control allows manual editing of the value
    isEditable?: boolean;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a grid view object selector column
interface IGridViewObjectSelectorColumnModel extends IObjectSelectorBaseModel, IGridViewColumnModel {
    // Specifies whether the control allows manual editing of the value
    isEditable?: boolean;
    // Specifies whether the control value should be provided
    isRequired?: boolean;
    // Custom error message shown if control is not valid
    validationErrorMessage?: string;
}

// Describes a pager
interface IPagerModel extends IDataBoundControlModel {
    // The name of the property that has a number of the current page.
    pageNoProperty?: string;
    // The name of the property that has a total number of pages.
    pagesTotalProperty?: string;
}

// Describes a ribbon
interface IRibbonModel extends IContainerControlModel {
}

// Describes a button
interface IRibbonButtonModel extends IControlModel, ICommandBoundControlModel {
    // The button text
    text?: string;
    // The source of the icon
    iconSource?: string;
}

// Describes a context menu
interface IContextMenuModel extends IControlModel {
    // Columns
    menuItems?: IGridViewColumnModel[];
}

// Describes a menu item base
interface IMenuItemBaseModel extends IControlModel {
}

// Describes a menu item
interface IMenuItemModel extends IMenuItemBaseModel, ICommandBoundControlModel {
    // The button text
    text?: string;
}

// Describes a menu separator
interface IMenuSeparatorModel extends IMenuItemBaseModel {
}

// Describes a custom control
interface ICustomControlModel extends IContainerControlModel {
    // Specifies the custom control type.
    customType?: string;
}

// Describes a control that can trigger a command
interface ICommandBoundControlModel {
    // The command that the control should trigger
    command?: string;
}

// Describes a tabs control
interface ITabsModel extends IControlModel {
    tabPages?: ITabPageModel[];
}

// Describes a tab page
interface ITabPageModel extends IContainerControlModel {
    title?: string;
}

// Describes a list view
interface IListViewModel extends IDataBoundControlModel {
    // The label
    label?: string;
    // A model of a single item
    itemModel?: IListViewItemModel;
}

// Describes a list view node
interface IListViewItemModel extends IContainerControlModel {
}

// Describes a pager
interface IBreadcrumbsModel extends IDataBoundControlModel {
    // The name of the property that is used as an href.
    hrefProperty?: string;
    // The name of the property that is used as a text.
    textProperty?: string;
}

// Describes an anchored content
interface IAnchoredContentModel extends IContainerControlModel, IDataBoundControlModel {
    // The destination of a link
    href?: string;
}

// *****************************************************************************************
// *                             Controls                                                  *
// *****************************************************************************************

// The control
interface IControl {
    // The control model
    model: IControlModel;
    // The control id
    id: string;
    // The control type
    type: string;
    // The control name
    name: string;
    // The parent control
    parent: IControl;
    // The window
    window: IWindow;
    // The context menu
    contextMenu: IContextMenu;
    // The function that returns jQuery function to access rendered HTML element
    getElement(): JQuery;
    // The function that returns the html rendered from the control
    _toHtml(): string;
    // The function that localizes the labels
    _localize(): any;
}

// The databound control
interface IDataBoundControl extends IControl {
    // The object that is used as a binding context.
    bindingContext: any;
    // Binds the control to the data object
    bind(dataObject: any): void;
}

// The control that can contain other controls
interface IContainerControl extends IDataBoundControl {
    // Collection of child controls
    controls: IControl[];
}

// The window
interface IWindow extends IContainerControl {
    // The x coordinate of the left top corner
    left: number;
    // The y coordinate of the left top corner
    top: number;
    // The width
    width: number;
    // The height
    height: number;
    // The width
    titleWidth: number;
    // The height
    titleHeight: number;
    // The width
    clientAreaWidth: number;
    // The height
    clientAreaHeight: number;
    // The window context data
    context: IWindowContext;
    // Shows the window.
    show(options?: IWindowDisplayOptions): void;
    // Hides the window.
    close(dialogResult?: string): void;
    // Shows the window as a modal dialog.
    showModal(): void;
    // Docks the window into the div.
    dock(divSelector: JQuery): void;
    // If window is docked, undocks the window from the div. 
    // If the window is not docked, does nothing.
    undock(): void;
    // Is triggered before the window is closed.
    closing(handler: (target: any, dialogResult: string) => void): void;
    // Is triggered after the window is closed.
    closed(handler: (target: any, dialogResult: string) => void): void;
}

// Controls how the window is shown
interface IWindowDisplayOptions {
    // The window position
    windowPosition: string;
}

// The group box
interface IGroupBox extends IContainerControl {
}

// The accordion panel
interface IAccordionPanel extends IContainerControl {
}

// The textbox
interface ITextBox extends IDataBoundControl {
}

// The textarea
interface ITextArea extends IDataBoundControl {
}

// The checkbox
interface ICheckBox extends IDataBoundControl {
}

// The combobox option
interface ISelectionOption {
    // Id - identifies the object
    id: any;
    // Value - visible in the UI
    value: any;
}

// The combobox
interface IComboBox extends IDataBoundControl {
    // Combo box options
    options: ISelectionOption[];
}

// The list builder
interface IListBuilder extends IDataBoundControl {
    // List builder options
    options: ISelectionOption[];
}

// The button
interface IButton extends IControl {
}

// The grid view
interface IGridView extends IDataBoundControl {
    // Columns
    columns: IGridViewColumn[];
    // Rows
    rows: IGridViewRow[];
    // Current row
    currentRow: IGridViewRow;
    // Sorting info
    sortingInfo: IGridViewSortingInfo;
    // Creates a new row
    createNewRowValue(): () => any;
    // Is triggered when the current row changes.
    currentRowChanged(handler: (target: any, row: IGridViewRow) => void): void;
    // Is triggered when the sorting is changed.
    sortingChanged(handler: (target: any, sortingIndo: IGridViewSortingInfo) => void ): void;
}

// The grid view column
interface IGridViewColumn extends IControl {
    // The sorting order
    sortingOrder: string;
}

// The grid view combobox column
interface IGridViewComboBoxColumn extends IGridViewColumn {
    // Combobox options
    options: ISelectionOption[];
}

// The grid view row
interface IGridViewRow extends IDataBoundControl {
    // The grid veiw the row belongs to.
    gridView: IGridView;
    // Row cells.
    cells: IGridViewCell[];
    // Specifies whether the row is a sentinel row.
    isSentinel: boolean;
    // Sets the row as current row.
    makeCurrent(): void;
}

// The grid view cell
interface IGridViewCell extends IDataBoundControl {
    // The row the cell belongs to
    row: IGridViewRow;
    // The cell initial value
    value: string;
}

// The grid view combobox cell
interface IGridViewComboBoxCell extends IGridViewCell {
    // Combobox options
    options: any;
}

// The tree view
interface ITreeView extends IDataBoundControl {
    // The root nodes of the tree view.
    roots: ITreeViewNode[];
    // Currently selected node.
    currentNode: ITreeViewNode;
    // Is triggered when the current node is changed.
    currentNodeChanged(handler: (target: any, node: ITreeViewNode) => void): void;
    // Is triggered when the node is expanded.
    nodeExpanded(handler: (target: any, node: ITreeViewNode) => void): void;
}

// The tree view node
interface ITreeViewNode extends IContainerControl {
    // The child nodes of the current node
    nodes: ITreeViewNode[];
    // The tree view
    treeView: ITreeView;
    // Sets the node as current node.
    makeCurrent(): void;
    // Expands the node.
    expand(): void;
}

//Describes the window position
interface IWindowPosition {
    // Use the values as declared in the model
    declared: string;
    // Position window in the center of the parent
    center: string;
}

// RedUI object
interface IRedUI {
    // Constants
    // Window position
    windowPosition: IWindowPosition;
    // RedUI version
    version: string;
    // Application model
    model: IApplicationModel;
    // Application windows
    windows: any;
    // Creates a new window. 
    // windowName is used to find the window model in the application model, must match window model name property.
    createNewWindow(windowName: string, context?: IWindowContext): IWindow;
    // Creates a new window.
    createNewWindowFromModel(windowModel: IWindowModel, context?: IWindowContext): IWindow;
    // Options bag. Used to access functions returning options for comboboxes.
    optionsBag: any;
    // Object sources. Used to access functions returning objects for object selectors.
    objectSources: any;
    // Custom control handlers. Used to access functions to manipulate custom controls.
    customControlHandlers: any;
    // Commands
    commands: any;
}

// The static text
interface IStaticText extends IDataBoundControl {
}

// The image
interface IImage extends IDataBoundControl {
}

// The object selector
interface IObjectSelector extends IDataBoundControl {
}

// The pager
interface IPager extends IDataBoundControl {
}

// The pager info
interface IPagerInfo extends IDataBoundControl {
    // Current page number
    pageNo: number;
    // Total number of pages
    pagesTotal: number;
}

// The GridView soring info
interface IGridViewSortingInfo {
    // Sorting as text
    sortingString: string;
    // Detailed (per column) sorting info
    sortingColumns: IGridViewColumnSortingInfo[];
}

// The GridView Column soring info
interface IGridViewColumnSortingInfo {
    // The column name
    columnName: string;
    // Specifies whether the sorting is ascending
    isAscending: boolean;
}

// The ribbon
interface IRibbon extends IContainerControl {
}

// The ribbon button
interface IRibbonButton extends IControl {
}

// The context menu
interface IContextMenu extends IContainerControl {
    // Menu items
    menuItems: IMenuItemBase[];
}

// The menu separator
interface IMenuItemBase extends IControl {
    // The menu the menu item belongs to
    menu: IContextMenu;
}

// The menu item
interface IMenuItem extends IMenuItemBase {
}

// The menu separator
interface IMenuSeparator extends IMenuItemBase {
}

// The custom control
interface ICustomControl extends IContainerControl {
}

// The handler set that provides the control behavior
interface IControlHandlerSet {
    // Is called to create a new instance of a control
    create(): IControl;
    // Is called to initialize a control from model
    initializeFromModel(window: IWindow, control: IControl, model: IControlModel): void;
    // Is called to get the user-visible value of the element
    getValue(dataBoundControl: IDataBoundControl): any;
    // Is called to set the user-visible value of the element
    setValue(dataBoundControl: IDataBoundControl, value: any): void;
    // Is called after control is rendered to activate it (subscribe on events etc.)
    activate(control: IControl): void;
}

// The handler set that provides the control behavior
interface ICustomControlHandlerSet {
    // Is called to get the user-visible value of the element
    getValue(control: ICustomControl): any;
    // Is called to set the user-visible value of the element
    setValue(control: ICustomControl, value: any): void;
    // Is called after control is rendered to activate it (subscribe on events etc.)
    activate(control: ICustomControl): void;
}

// Describes a command
interface ICommand
{
    // Executes a command
    execute(control?: IControl): void;
    // Is called to determine whether the command can be executed
    canExecute(): boolean;
}

// Tabs control
interface ITabs extends IContainerControl {
    tabPages: ITabPage[];
}

// Tab page
interface ITabPage extends IContainerControl {
}

// The list view
interface IListView extends IDataBoundControl {
    // The root nodes of the tree view.
    items: IListViewItem[];
}

// The tree view node
interface IListViewItem extends IContainerControl {
    // The list view
    listView: IListView;
}

// Additional window create parameters
interface IWindowContext {
    // Options bag. Used to access functions returning options for comboboxes.
    optionsBag?: any;
    // Object sources. Used to access functions returning objects for object selectors.
    objectSources?: any;
}

// The breadcrumbs
interface IBreadcrumbs extends IDataBoundControl {
}

// The anchored content
interface IAnchoredContent extends IContainerControl {
}
