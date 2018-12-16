$(function () {
    var examplesData = {
        items: [
            {
                id: "examples",
                title: "Examples",
                items: [
                    {
                        id: "application",
                        title: "Application",
                        items: []
                    },
                    {
                        id: "window",
                        title: "Window",
                        items: [
                            {
                                id: "simplewindow",
                                title: "Simple Window",
                                items: []
                            },
                            {
                                id: "dialogwindow",
                                title: "Dialog Window",
                                items: []
                            },
                            {
                                id: "modaldialogwindow",
                                title: "Modal Dialog Window",
                                items: []
                            },
                            {
                                id: "customdialogwindow",
                                title: "Custom Dialog Window",
                                items: []
                            },
                            {
                                id: "dockablewindow",
                                title: "Dockable Window",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "simplecontrols",
                        title: "Simple Controls",
                        items: [
                            {
                                id: "textbox",
                                title: "TextBox Control",
                                items: []
                            },
                            {
                                id: "textarea",
                                title: "TextArea Control",
                                items: []
                            },
                            {
                                id: "statictext",
                                title: "StaticText Control",
                                items: []
                            },
                            {
                                id: "checkbox",
                                title: "CheckBox Control",
                                items: []
                            },
                            {
                                id: "combobox",
                                title: "ComboBox Control",
                                items: [
                                    {
                                        id: "comboboxlocalbag",
                                        title: "ComboBox Control, Local Options Bag",
                                        items: []
                                    }
                                ]
                            },
                            {
                                id: "listbuilder",
                                title: "ListBuilder Control",
                                items: []
                            },
                            {
                                id: "image",
                                title: "Image Control",
                                items: []
                            },
                            {
                                id: "groupbox",
                                title: "GroupBox Control",
                                items: []
                            },
                            {
                                id: "button",
                                title: "Button Control",
                                items: []
                            },
                            {
                                id: "pager",
                                title: "Pager Control",
                                items: []
                            },
                            {
                                id: "objectselector",
                                title: "ObjectSelector Control",
                                items: [
                                    {
                                        id: "objectselectorgrid",
                                        title: "ObjectSelector Control With GridView",
                                        items: []
                                    },
                                    {
                                        id: "objectselectortree",
                                        title: "ObjectSelector Control With TreeView",
                                        items: []
                                    },
                                    {
                                        id: "objectselectorlistbuilder",
                                        title: "ObjectSelector Editable Control With ListBuilder",
                                        items: []
                                    },
                                    {
                                        id: "objectselectorlocalsource",
                                        title: "ObjectSelector Control With GridView, Local Data Source",
                                        items: []
                                    }
                                ]
                            },
                            {
                                id: "tabs",
                                title: "NEW! Tabs Control",
                                items: []
                            },
                            {
                                id: "listview",
                                title: "NEW! List View Control",
                                items: []
                            },
                            {
                                id: "accordion",
                                title: "NEW! Accordion Panel Control",
                                items: []
                            },
                            {
                                id: "breadcrumbs",
                                title: "NEW! Breadcrumbs Control",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "gridview",
                        title: "GridView Control",
                        items: [
                            {
                                id: "readonlygridview",
                                title: "ReadOnly Grid View",
                                items: []
                            },
                            {
                                id: "editablegridview",
                                title: "Editable Grid View",
                                items: []
                            },
                            {
                                id: "gridviewcanaddrows",
                                title: "Editable Grid View, Adding New Rows",
                                items: []
                            },
                            {
                                id: "gridviewbigdata",
                                title: "Grid View, Non-Blocking Rendering",
                                items: []
                            },
                            {
                                id: "gridviewbigdatapaged",
                                title: "Grid View, Pagination",
                                items: []
                            },
                            {
                                id: "gridviewsortable",
                                title: "Grid View, Sorting",
                                items: []
                            },
                            {
                                id: "gridviewcolumns",
                                title: "Grid View, Supported Column Types",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "treeview",
                        title: "TreeView Control",
                        items: [
                            {
                                id: "statictreeview",
                                title: "Static Tree View",
                                items: []
                            },
                            {
                                id: "dinamictreeview",
                                title: "Dynamic Tree View",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "validation",
                        title: "Validation",
                        items: [
                            {
                                id: "requiredFields",
                                title: "Required Fields",
                                items: []
                            },
                            {
                                id: "patternmatch",
                                title: "Pattern Match",
                                items: []
                            },
                            {
                                id: "maxlength",
                                title: "Maximum Length",
                                items: []
                            },
                            {
                                id: "modelvalidation",
                                title: "Model Validation",
                                items: []
                            },
                            {
                                id: "gridviewvalidation",
                                title: "GridView Validation",
                                items: []
                            },
                            {
                                id: "validationallcontrols",
                                title: "All Control Types",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "commanddriven",
                        title: "NEW! Command-driven controls",
                        items: [
                            {
                                id: "ribbon",
                                title: "Ribbon Control",
                                items: []
                            },
                            {
                                id: "contextmenu",
                                title: "Context Menu Control",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "observables",
                        title: "Using ko.observable",
                        items: [
                            {
                                id: "observable",
                                title: "Simple Observable",
                                items: []
                            },
                            {
                                id: "computedobservable",
                                title: "Computed Observable",
                                items: []
                            },
                            {
                                id: "observablearray",
                                title: "Observable Array",
                                items: []
                            },
                            {
                                id: "observabletreeview",
                                title: "Observable With TreeView",
                                items: []
                            },
                            {
                                id: "observableallcontrols",
                                title: "All Control Types",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "advanced",
                        title: "Advanced Scenarios",
                        items: [
                            {
                                id: "trackchanges",
                                title: "Store/Restore Window State",
                                items: []
                            },
                            {
                                id: "masterdetail",
                                title: "Master - Detail",
                                items: []
                            },
                            {
                                id: "nesteddialogs",
                                title: "Mutiple Level Nested Dialogs",
                                items: []
                            },
                            {
                                id: "inputtype",
                                title: "TextBox Control, Override Input Type",
                                items: []
                            },
                            {
                                id: "windowdisplayoptions",
                                title: "Window Display Options",
                                items: []
                            },
                            {
                                id: "editabletreeview",
                                title: "Editable Tree View",
                                items: []
                            }
                        ]
                    },
                    {
                        id: "custom",
                        title: "Custom Controls",
                        items: [
                            {
                                id: "customcontrol",
                                title: "Databound Custom Control",
                                items: []
                            },
                            {
                                id: "custommodelproperties",
                                title: "Custom Model Properties",
                                items: []
                            },
                            {
                                id: "customcontainercontrol",
                                title: "Custom Container Control",
                                items: []
                            }
                        ]
                    }
                ]
            }
        ]
    };

    var examplesTreeWindow = redui.createNewWindow("ExamplesTree");
    examplesTreeWindow.bind(examplesData);
    examplesTreeWindow.dock($("#project_tree_inner"));

    var emptyWindow = redui.createNewWindow("EmptyWindow");
    emptyWindow.dock($("#details_view_inner"));

    // Expand examples
    $("#" + examplesTreeWindow.examplesTree.roots[0].id + "_expander").trigger("click");
    // Expand window examples
    $("#" + examplesTreeWindow.examplesTree.roots[0].nodes[1].id + "_expander").trigger("click");
    // Expand simple control examples
    $("#" + examplesTreeWindow.examplesTree.roots[0].nodes[2].id + "_expander").trigger("click");

    function loadPage(url) {
        var page = "";
        $.ajax({
            url: url + "?v=" + redui.version,
            dataType: "html",
            async: false,
            success: function (data) {
                page = data;
            }
        });
        return page;
    }

    // Load start page
    var page = loadPage("/examples/resources/Examples.html");
    $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

    examplesTreeWindow.examplesTree.currentNodeChanged(function (target, node) {
        if (node.bindingContext.id === "examples") {
            var page = loadPage("/examples/resources/Examples.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);
        }
        else if (node.bindingContext.id === "application") {
            var page = loadPage("/examples/resources/Application_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);
        }
        else if (node.bindingContext.id === "textbox") {
            var page = loadPage("/examples/resources/TextBox_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#TextBoxControlExample").click(function () {
                showTextBoxExample();
            });
        }
        else if (node.bindingContext.id === "textarea") {
            var page = loadPage("/examples/resources/TextArea_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#TextAreaControlExample").click(function () {
                showTextAreaExample();
            });
        }
        else if (node.bindingContext.id === "checkbox") {
            var page = loadPage("/examples/resources/CheckBox_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#CheckBoxControlExample").click(function () {
                showCheckBoxExample();
            });
        }
        else if (node.bindingContext.id === "statictext") {
            var page = loadPage("/examples/resources/StaticText_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#StaticTextControlExample").click(function () {
                showStaticTextExample();
            });
        }
        else if (node.bindingContext.id === "combobox") {
            var page = loadPage("/examples/resources/ComboBox_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ComboBoxControlExample").click(function () {
                showComboBoxExample();
            });
        }
        else if (node.bindingContext.id === "comboboxlocalbag") {
            var page = loadPage("/examples/resources/ComboBox_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ComboBoxControlLocalBagExample").click(function () {
                showComboBoxLocalOptionsBagExample();
            });
        }
        else if (node.bindingContext.id === "listbuilder") {
            var page = loadPage("/examples/resources/ListBuilder_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ListBuilderControlExample").click(function () {
                showListBuilderExample();
            });
        }
        else if (node.bindingContext.id === "image") {
            var page = loadPage("/examples/resources/Image_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ImageControlExample").click(function () {
                showImageExample();
            });
        }
        else if (node.bindingContext.id === "groupbox") {
            var page = loadPage("/examples/resources/GroupBox_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#GroupBoxControlExample").click(function () {
                showGroupBoxExample();
            });
        }
        else if (node.bindingContext.id === "tabs") {
            var page = loadPage("/examples/resources/Tabs_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#TabsControlExample").click(function () {
                showTabsExample();
            });
        }
        else if (node.bindingContext.id === "listview") {
            var page = loadPage("/examples/resources/ListView_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ListViewControlExample").click(function () {
                showListViewControlExample();
            });
        }
        else if (node.bindingContext.id === "accordion") {
            var page = loadPage("/examples/resources/AccordionPanel_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#AccordionPanelControlExample").click(function () {
                showAccordionPanelControlExample();
            });
        }
        else if (node.bindingContext.id === "breadcrumbs") {
            var page = loadPage("/examples/resources/Breadcrumbs_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#BreadcrumbsControlExample").click(function () {
                showBreadcrumbsControlExample();
            });
        }
        else if (node.bindingContext.id === "button") {
            var page = loadPage("/examples/resources/Button_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ButtonControlExample").click(function () {
                showButtonExample();
            });
        }
        else if (node.bindingContext.id === "pager") {
            var page = loadPage("/examples/resources/Pager_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#PagerControlExample").click(function () {
                showPagerExample();
            });
        }
        if (node.bindingContext.id === "objectselector") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "objectselectorgrid") {
            var page = loadPage("/examples/resources/ObjectSelector_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObjectSelectorControlWithGridExample").click(function () {
                showObjectSelectorWithGridExample();
            });
        }
        else if (node.bindingContext.id === "objectselectortree") {
            var page = loadPage("/examples/resources/ObjectSelector_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObjectSelectorControlWithTreeExample").click(function () {
                showObjectSelectorWithTreeExample();
            });
        }
        else if (node.bindingContext.id === "objectselectorlistbuilder") {
            var page = loadPage("/examples/resources/ObjectSelector_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObjectSelectorControlWithListBuilder").click(function () {
                showObjectSelectorWithListBuilderExample();
            });
        }
        else if (node.bindingContext.id === "objectselectorlocalsource") {
            var page = loadPage("/examples/resources/ObjectSelector_Example4.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObjectSelectorControlLocalSourceExample").click(function () {
                showObjectSelectorLocalSourceExample();
            });
        }
        if (node.bindingContext.id === "window") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "simplewindow") {
            var page = loadPage("/examples/resources/Window_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#SimpleWindowExample").click(function () {
                showSimpleWindowExample();
            });
        }
        else if (node.bindingContext.id === "windowdisplayoptions") {
            var page = loadPage("/examples/resources/Window_Example12.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#WindowDisplayOptionsExample").click(function () {
                showWindowDisplayOptionsExample();
            });
        }
        else if (node.bindingContext.id === "dialogwindow") {
            var page = loadPage("/examples/resources/Window_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#DialogWindowExample").click(function () {
                showDialogWindowExample();
            });
        }
        else if (node.bindingContext.id === "modaldialogwindow") {
            var page = loadPage("/examples/resources/Window_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ModalDialogWindowExample").click(function () {
                showModalDialogWindowExample();
            });
        }
        else if (node.bindingContext.id === "customdialogwindow") {
            var page = loadPage("/examples/resources/Window_Example4.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#CustomDialogWindowExample").click(function () {
                showCustomDialogWindowExample();
            });
        }
        else if (node.bindingContext.id === "dockablewindow") {
            var page = loadPage("/examples/resources/Window_Example5.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#DockableWindowExample").click(function () {
                showDockableWindowExample();
            });
        }
        if (node.bindingContext.id === "simplecontrols") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        if (node.bindingContext.id === "gridview") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "readonlygridview") {
            var page = loadPage("/examples/resources/GridView_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ReadOnlyGridViewExample").click(function () {
                showReadOnlyGridViewExample();
            });
        }
        else if (node.bindingContext.id === "editablegridview") {
            var page = loadPage("/examples/resources/GridView_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#EditableGridViewExample").click(function () {
                showEditableGridViewExample();
            });
        }
        else if (node.bindingContext.id === "gridviewcanaddrows") {
            var page = loadPage("/examples/resources/GridView_Example21.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#EditableGridViewCanAddRowsExample").click(function () {
                showEditableGridViewCanAddRowsExample();
            });
        }
        else if (node.bindingContext.id === "gridviewbigdata") {
            var page = loadPage("/examples/resources/GridView_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#GridViewBigDataExample").click(function () {
                showGridViewBigData();
            });
        }
        else if (node.bindingContext.id === "gridviewbigdatapaged") {
            var page = loadPage("/examples/resources/GridView_Example4.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#GridViewBigDataPagedExample").click(function () {
                showPagedGridViewBigData();
            });
        }
        else if (node.bindingContext.id === "gridviewsortable") {
            var page = loadPage("/examples/resources/GridView_Example41.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#GridViewSortingExample").click(function () {
                showGridViewSortingExample();
            });
        }
        else if (node.bindingContext.id === "gridviewcolumns") {
            var page = loadPage("/examples/resources/GridView_Example5.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#GridViewColumnsExample").click(function () {
                showGridViewColumns();
            });
        }
        if (node.bindingContext.id === "treeview") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "statictreeview") {
            var page = loadPage("/examples/resources/TreeView_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#TreeViewControlExample").click(function () {
                showTreeViewExample();
            });
        }
        else if (node.bindingContext.id === "dinamictreeview") {
            var page = loadPage("/examples/resources/TreeView_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#DynamicTreeViewControlExample").click(function () {
                showDynamicTreeViewExample();
            });
        }
        else if (node.bindingContext.id === "editabletreeview") {
            var page = loadPage("/examples/resources/TreeView_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#EditableTreeViewControlExample").click(function () {
                showEditableTreeViewExample();
            });
        }
        if (node.bindingContext.id === "validation") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "requiredFields") {
            var page = loadPage("/examples/resources/Validation_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ValidationRequiredFieldsExample").click(function () {
                showValidationRequiredFieldsExample();
            });
        }
        else if (node.bindingContext.id === "patternmatch") {
            var page = loadPage("/examples/resources/Validation_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ValidationPatternMatchExample").click(function () {
                showValidationPatternMatchExample();
            });
        }
        else if (node.bindingContext.id === "maxlength") {
            var page = loadPage("/examples/resources/Validation_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#MaxLengthValidationExample").click(function () {
                showMaxLengthValidationExample();
            });
        }
        else if (node.bindingContext.id === "modelvalidation") {
            var page = loadPage("/examples/resources/Validation_Example21.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ModelValidationExample").click(function () {
                showModelValidationExample();
            });
        }
        else if (node.bindingContext.id === "gridviewvalidation") {
            var page = loadPage("/examples/resources/Validation_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#GridViewValidationExample").click(function () {
                showGridViewValidationExample();
            });
        }
        else if (node.bindingContext.id === "validationallcontrols") {
            var page = loadPage("/examples/resources/Validation_Example4.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ValidationAllControlsExample").click(function () {
                showValidationAllControlsExample();
            });
        }
        if (node.bindingContext.id === "commanddriven") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "ribbon") {
            var page = loadPage("/examples/resources/Ribbon_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#RibbonControlExample").click(function () {
                showRibbonControlExample();
            });
        }
        else if (node.bindingContext.id === "contextmenu") {
            var page = loadPage("/examples/resources/ContextMenu_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ContextMenuControlExample").click(function () {
                showContextMenuControlExample();
            });
        }
        if (node.bindingContext.id === "advanced") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "trackchanges") {
            var page = loadPage("/examples/resources/TrackChanges_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#TrackChangesExample").click(function () {
                showTrackChangesExample();
            });
        }
        else if (node.bindingContext.id === "masterdetail") {
            var page = loadPage("/examples/resources/MasterDetail_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#MasterDetailExample").click(function () {
                showMasterDetailExample();
            });
        }
        if (node.bindingContext.id === "observables") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "observable") {
            var page = loadPage("/examples/resources/Observable_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#SimpleObservableExample").click(function () {
                showSimpleObservableExample();
            });
        }
        else if (node.bindingContext.id === "computedobservable") {
            var page = loadPage("/examples/resources/Observable_Example1.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ComputedObservableExample").click(function () {
                showComputedObservableExample();
            });
        }
        else if (node.bindingContext.id === "observablearray") {
            var page = loadPage("/examples/resources/Observable_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObservableArrayExample").click(function () {
                showObservableArrayExample();
            });
        }
        else if (node.bindingContext.id === "observabletreeview") {
            var page = loadPage("/examples/resources/Observable_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObservableTreeViewExample").click(function () {
                showObservableTreeViewExample();
            });
        }
        else if (node.bindingContext.id === "observableallcontrols") {
            var page = loadPage("/examples/resources/Observable_Example4.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#ObservableAllControlsExample").click(function () {
                showObservableAllControlsExample();
            });
        }
        else if (node.bindingContext.id === "nesteddialogs") {
            var page = loadPage("/examples/resources/NestedDialogs_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#NestedDialogsExample").click(function () {
                showNestedDialogsExample();
            });
        }
        else if (node.bindingContext.id === "inputtype") {
            var page = loadPage("/examples/resources/InputType_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#InputTypeExample").click(function () {
                showInputTypeExample();
            });
        }
        if (node.bindingContext.id === "custom") {
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
        }
        else if (node.bindingContext.id === "customcontrol") {
            var page = loadPage("/examples/resources/CustomControl_Example.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#CustomControlExample").click(function () {
                customControlExample();
            });
        }
        else if (node.bindingContext.id === "custommodelproperties") {
            var page = loadPage("/examples/resources/CustomControl_Example2.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#CustomModelPropertiesExample").click(function () {
                customModelPropertiesExample();
            });
        }
        else if (node.bindingContext.id === "customcontainercontrol") {
            var page = loadPage("/examples/resources/CustomControl_Example3.html");

            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").empty();
            $("#" + emptyWindow.id + "_clientareainner .redui-window-clientarea-layoutpanel").append(page);

            $("#CustomContainerControlExample").click(function () {
                customcontainercontrolExample();
            });
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////7
    // Examples
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////7

    function showTextBoxExample() {
        var playerData = {
            firstName: "Claudio",
            lastName: "Lucchesi",
        };

        var exampleWindow = redui.createNewWindow("TextBoxExample");
        exampleWindow.bind(playerData);
        exampleWindow.show();
    }

    function showTextAreaExample() {
        var data = {
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };

        var exampleWindow = redui.createNewWindow("TextAreaExample");
        exampleWindow.bind(data);
        exampleWindow.show();
    }

    function showCheckBoxExample() {
        var animalData = {
            canWalk: true,
            canFly: false,
            canSwim: true
        };

        var exampleWindow = redui.createNewWindow("CheckBoxExample");
        exampleWindow.bind(animalData);
        exampleWindow.show();
    }

    function showStaticTextExample() {
        var info = {
            text: "Are you sure?"
        };

        var exampleWindow = redui.createNewWindow("StaticTextExample");
        exampleWindow.bind(info);
        exampleWindow.show();
    }

    function showComboBoxExample() {
        var addressData = {
            country: "fr"
        };

        var countries = [
            { id: "", value: "", toString: function () { return this.value } },
            { id: "be", value: "Belgium", toString: function () { return this.value } },
            { id: "fr", value: "France", toString: function () { return this.value } },
            { id: "it", value: "Italy", toString: function () { return this.value } },
            { id: "nl", value: "Netherlands", toString: function () { return this.value } }
        ];

        redui.optionsBag.getcountries = function () {
            return countries;
        };

        var exampleWindow = redui.createNewWindow("ComboBoxExample");
        exampleWindow.bind(addressData);
        exampleWindow.show();
    }

    function showListBuilderExample() {
        var addressData = {
            countries: [ "fr", "it" ]
        };

        var countries = [
            { id: "be", value: "Belgium", toString: function () { return this.value } },
            { id: "fr", value: "France", toString: function () { return this.value } },
            { id: "it", value: "Italy", toString: function () { return this.value } },
            { id: "nl", value: "Netherlands", toString: function () { return this.value } }
        ];

        redui.optionsBag.getcountries = function () {
            return countries;
        };

        var exampleWindow = redui.createNewWindow("ListBuilderExample");
        exampleWindow.bind(addressData);
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                alert("Model data: " + JSON.stringify(addressData));
            }
        });
    }

    function showImageExample() {
        var userData = {
            imageUri: "/examples/resources/user-admin.png"
        };

        var exampleWindow = redui.createNewWindow("ImageExample");
        exampleWindow.bind(userData);
        exampleWindow.show();
    }

    function showGroupBoxExample() {
        var customerData = {
            firstName: "Mario",
            lastName: "Pizzi",
            address: {
                street: "Via Roma",
                zip: 1000,
                city: "Torino"
            }
        };

        var exampleWindow = redui.createNewWindow("GroupBoxExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showButtonExample() {
        var exampleWindow = redui.createNewWindow("ButtonExample");
        exampleWindow.show();

        exampleWindow.SimpleButton.getElement().click(function () {
            alert("Simple button clicked");
        });
        exampleWindow.DialogButton.getElement().click(function () {
            alert("Dialog button clicked");
        });
    }

    function showPagerExample() {
        var pagingData = {
            pagerInfo1: {
                pageNo: 2,
                pagesTotal: 4
            },
            pagerInfo2: {
                pageNo: 5,
                pagesTotal: 7
            },
            pagerInfo3: {
                pageNo: 2,
                pagesTotal: 15
            },
            pagerInfo4: {
                currentPage: 123456,
                pagesCount: 1234567
            }
        };

        var exampleWindow = redui.createNewWindow("PagersExample");
        exampleWindow.bind(pagingData);
        exampleWindow.show();

        exampleWindow.pager1.pageChanged(function (target, pageNo) {
            pagingData.pagerInfo1.pageNo = pageNo;
            exampleWindow.bind(pagingData);
        });

        exampleWindow.pager2.pageChanged(function (target, pageNo) {
            pagingData.pagerInfo2.pageNo = pageNo;
            exampleWindow.bind(pagingData);
        });

        exampleWindow.pager3.pageChanged(function (target, pageNo) {
            pagingData.pagerInfo3.pageNo = pageNo;
            exampleWindow.bind(pagingData);
        });

        exampleWindow.pager4.pageChanged(function (target, pageNo) {
            pagingData.pagerInfo4.currentPage = pageNo;
            exampleWindow.bind(pagingData);
        });
    }

    function showObjectSelectorWithGridExample() {
        var playerData = {
            firstName: "Claudio",
            lastName: "Lucchesi",
            manager: {}
        };

        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function sets the current row in the GridView
        function setGridViewCurrentRow(gridView, rowId) {
            for (var i = 0, len = gridView.rows.length; i < len; i++) {
                var nextRow = gridView.rows[i];
                if (nextRow.bindingContext.id === rowId) {
                    nextRow.makeCurrent();
                    return;
                }
            }
        }

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
            managersWindow.bind(teamManagement);
            setGridViewCurrentRow(managersWindow.managersGrid, playerData.manager.id);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = managersWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("ObjectSelectorExample");
        exampleWindow.bind(playerData);
        exampleWindow.show();
    }

    function showObjectSelectorWithTreeExample() {
        var playerData = {
            firstName: "Claudio",
            lastName: "Lucchesi",
            manager: {}
        };

        // Options for object selector
        var corporateManagement = {
            items: [
                {
                    id: 1,
                    title: "Chairman",
                    name: "Gerardo Marcelo",
                    items: []
                },
                {
                    id: 2,
                    title: "CFO",
                    name: "Salvo Folliero",
                    items: []
                },
                {
                    id: 3,
                    title: "General Manager",
                    name: "Arrigo Onio",
                    items: [
                        {
                            id: 5,
                            title: "Sports Director",
                            name: "Edoardo Manna",
                            items: []
                        },
                        {
                            id: 6,
                            title: "Team Manager",
                            name: "Giulio Bellucci",
                            items: [
                                {
                                    id: 7,
                                    title: "Manager",
                                    name: "Fiorello Lombardi",
                                    items: []
                                },
                                {
                                    id: 8,
                                    title: "Goalkeeping Coach",
                                    name: "Armando Arcuri",
                                    items: []
                                },
                                {
                                    id: 9,
                                    title: "Assistant Manager",
                                    name: "Alessio Ferri",
                                    items: []
                                },
                                {
                                    id: 10,
                                    title: "First-team Coach",
                                    name: "Giuseppe Milani",
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Director",
                    name: "Manlio Ferrari",
                    items: []
                }
            ]
        };

        // This function sets the current node in the TreeView
        function setTreeViewCurrentNode(treeView, nodeIds) {
            var allNodes = [];
            function traverse(nodes) {
                for (var i = 0, len = nodes.length; i < len; i++) {
                    if (nodes[i].nodes.length > 0) {
                        traverse(nodes[i].nodes);
                    }
                    allNodes.push(nodes[i]);
                }
            }

            traverse(treeView.roots);

            for (var i = allNodes.length - 1; i >= 0; i--) {
                if (allNodes[i].bindingContext.id === nodeIds) {
                    allNodes[i].makeCurrent();
                    
                    var parent = allNodes[i].parent;
                    while (parent !== treeView) {
                        parent.expand();
                        parent = parent.parent;
                    }
                }
            }
        }

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var managersWindow = redui.createNewWindow("ObjectSelectorTreeSelector");
            managersWindow.bind(corporateManagement);
            setTreeViewCurrentNode(managersWindow.managersTree, playerData.manager.id);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the node was selected,
                    // Get the object bound to the current node
                    var currentNode = managersWindow.managersTree.currentNode;
                    if (currentNode) {
                        var object = currentNode.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("ObjectSelectorExample");
        exampleWindow.bind(playerData);
        exampleWindow.show();
    }

    function showObjectSelectorWithListBuilderExample() {
        var data = {
            tags: ""
        };

        var tags = [
            { id: "web", toString: function () { return this.id } },
            { id: "ui", toString: function () { return this.id } },
            { id: "framework", toString: function () { return this.id } },
            { id: "javascript", toString: function () { return this.id } }
        ];

        redui.optionsBag.getTags = function () {
            // Union of existing tags and tags currently selected by user.
            var enteredTagsObj = [];
            var enteredTags = data.tags.split(/[\s,]+/);
            for (var i = 0, len = enteredTags.length; i < len; i++) {
                if (enteredTags[i]) {
                    if (enteredTags[i] !== "web" && enteredTags[i] !== "ui" && enteredTags[i] !== "framework" && enteredTags[i] !== "javascript") {
                        var tag = { id: enteredTags[i], toString: function () { return this.id } };
                        enteredTagsObj.push(tag);
                    }
                }
            }

            return tags.concat(enteredTagsObj);
        };

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getTags = function (callback) {
            var tagsList = {
                list: data.tags.split(/[\s,]+/)
            };

            // This window is used to select tags
            var tagsWindow = redui.createNewWindow("ObjectSelectorListBuilderSelector");
            tagsWindow.bind(tagsList);

            tagsWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // Return object to the object selector
                    callback(tagsList.list.join(", "));
                }
            });

            tagsWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("ObjectSelectorListBuilderExample");
        exampleWindow.bind(data);
        exampleWindow.show();
    }

    function showSimpleWindowExample() {
        var exampleWindow = redui.createNewWindow("SimpleWindowExample");
        exampleWindow.show();
    }

    function showWindowDisplayOptionsExample() {
        var exampleWindow = redui.createNewWindow("SimpleWindowExample");
        exampleWindow.show({ windowPosition: redui.windowPosition.center });
    }

    function showDialogWindowExample() {
        var exampleWindow = redui.createNewWindow("DialogWindowExample");
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                alert("You clicked OK");
            }
            if (dialogResult === "Cancel") {
                alert("You clicked Cancel");
            }
        });
    }

    function showModalDialogWindowExample() {
        var exampleWindow = redui.createNewWindow("DialogWindowExample");
        exampleWindow.showModal();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                alert("You clicked OK");
            }
            if (dialogResult === "Cancel") {
                alert("You clicked Cancel");
            }
        });
    }

    function showCustomDialogWindowExample() {
        var exampleWindow = redui.createNewWindow("CustomDialogWindowExample");
        exampleWindow.showModal();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "Yes") {
                alert("You clicked Yes");
            }
            if (dialogResult === "No") {
                alert("You clicked No");
            }
            if (dialogResult === "Cancel") {
                alert("Closing window this way returns Cancel");
            }
        });
    }

    function showDockableWindowExample() {
        var playerData = {
            firstName: "Elvio",
            lastName: "Rizzo",
        };

        var exampleWindow = redui.createNewWindow("DockableWindowExample");
        exampleWindow.bind(playerData);
        exampleWindow.show();

        exampleWindow.dockButton.getElement().click(function () {
            exampleWindow.dock($("#DockableWindowExample_DockableDiv"));
        });
        exampleWindow.undockButton.getElement().click(function () {
            exampleWindow.undock();
        });
    }

    function showReadOnlyGridViewExample() {
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        var exampleWindow = redui.createNewWindow("ReadOnlyGridViewExample");
        exampleWindow.bind(teamManagement);

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                var currentRow = exampleWindow.managersGrid.currentRow;
                if (currentRow) {
                    var object = currentRow.bindingContext;
                    alert("Selected row: " + JSON.stringify(object));
                } else {
                    alert("Row was not selected.");
                }
            }
        });

        exampleWindow.show();
    }

    function showEditableGridViewExample() {
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        var exampleWindow = redui.createNewWindow("EditableGridViewExample");
        exampleWindow.bind(teamManagement);
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            alert("GridView data: " + JSON.stringify(exampleWindow.managersGrid.bindingContext));
        });
    }

    function showEditableGridViewCanAddRowsExample() {
        var teamManagement = {
            createNewRowValue: function() {
                return {
                    id: 0,
                    title: "",
                    name: "",
                }
            },
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        var exampleWindow = redui.createNewWindow("EditableGridViewCanAddRowsExample");
        exampleWindow.bind(teamManagement);
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            alert("GridView data: " + JSON.stringify(exampleWindow.managersGrid.bindingContext));
        });
    }

    function showGridViewBigData() {
        var bigCustomerData = {
            createNewRowValue: function () {
                return {
                    id: -1,
                    firstName: "",
                    lastName: "",
                    isVip: false,
                    isSelected: false,
                    age: 0,
                    description: "",
                    manager: { id: 0, name: "" },
                    address: {
                        street: "",
                        zip: 0,
                        city: "",
                        country: ""
                    }
                };
            },
            list: []
        };
        // Generate 3000 records
        for (var i = 0; i < 3000; i++) {
            var customer = {
                id: i,
                firstName: "First name " + (i + 1).toString(),
                lastName: "Last name " + (i + 1).toString(),
                isVip: i % 2 > 0,
                isSelected: false,
                age: i + 1,
                description: "",
                manager: { id: 0, name: "" },
                address: {
                    street: "",
                    zip: 0,
                    city: "",
                    country: ""
                }
            }
            bigCustomerData.list.push(customer);
        }

        // Countries to choose from
        var countries = [
            { optid: "", optvalue: "" },
            { optid: "be", optvalue: "Belgium" },
            { optid: "fr", optvalue: "France" },
            { optid: "it", optvalue: "Italy" },
            { optid: "nl", optvalue: "Netherlands" }
        ];

        redui.optionsBag["getcountries"] = function () {
            return countries;
        };

        var exampleWindow = redui.createNewWindow("NonBlockingRenderingExample");
        exampleWindow.bind(bigCustomerData);
        exampleWindow.show();
    }

    function showPagedGridViewBigData() {
        // Generate 3000 records
        var bigCustomerData = { list: [] };
        for (var i = 0; i < 3000; i++) {
            var customer = {
                isSelected: i % 2 > 0,
                id: i,
                firstName: "First name " + (i + 1).toString(),
                lastName: "Last name " + (i + 1).toString()
            }
            bigCustomerData.list.push(customer);
        }

        // Function that returns data in a paged fashion.
        // In the real life this function would perform an ajax request to the server.
        function getPagedData(pageNo) {
            var pageSize = 10;
            var pagedData = {
                pagerInfo: {
                    pageNo: pageNo,
                    pagesTotal: Math.ceil(bigCustomerData.list.length / pageSize)
                },
                list: []
            };
            for (var i = 0; i < pageSize; i++) {
                var j = (pageNo - 1) * pageSize + i;
                if (j >= bigCustomerData.list.length)
                    break;

                pagedData.list[i] = bigCustomerData.list[j];
            }
            return pagedData;
        }

        var exampleWindow = redui.createNewWindow("PaginationExample");
        var pagedData = getPagedData(1);
        exampleWindow.bind(pagedData);
        exampleWindow.show();

        exampleWindow.pager.pageChanged(function (target, pageNo) {
            var pagedData = getPagedData(pageNo);
            exampleWindow.bind(pagedData);
        });
    }

    function showGridViewSortingExample() {
        // Function that returns data sorted.
        // In the real life this function would perform an ajax request to the server.
        function getSortedData(sortingInfo) {
            var teamManagement = {
                list: [
                    {
                        id: 7,
                        title: "Manager",
                        name: "Fiorello Lombardi",
                    },
                    {
                        id: 8,
                        title: "Goalkeeping Coach",
                        name: "Armando Arcuri",
                    },
                    {
                        id: 9,
                        title: "Assistant Manager",
                        name: "Alessio Ferri",
                    },
                    {
                        id: 10,
                        title: "First-team Coach",
                        name: "Giuseppe Milani",
                    },
                    {
                        id: 17,
                        title: "Manager",
                        name: "Armando Arcuri",
                    },
                    {
                        id: 18,
                        title: "Goalkeeping Coach",
                        name: "Alessio Ferri",
                    },
                    {
                        id: 19,
                        title: "Assistant Manager",
                        name: "Giuseppe Milani",
                    },
                    {
                        id: 20,
                        title: "First-team Coach",
                        name: "Fiorello Lombardi",
                    }
                ]
            };

            if (!sortingInfo) {
                return teamManagement;
            }
            
            var columns = sortingInfo.sortingColumns;
            var len = columns.length;

            teamManagement.list.sort(function (a, b) {
                for (var i = 0; i < len; i++) {
                    var valueA = a[columns[i].columnName];
                    var valueB = b[columns[i].columnName];

                    if (valueA === valueB) {
                        continue;
                    }

                    if (columns[i].isAscending) {
                        return valueA > valueB ? 1 : -1;
                    } else {
                        return valueA < valueB ? 1 : -1;
                    }
                }
                // All equal
                return 0;
            });

            return teamManagement;
        }

        var exampleWindow = redui.createNewWindow("GridViewSortingExample");
        var sortedData = getSortedData();
        exampleWindow.bind(sortedData);
        exampleWindow.show();

        exampleWindow.managersGrid.sortingChanged(function (target, sortingInfo) {
            var sortedData = getSortedData(sortingInfo);
            exampleWindow.bind(sortedData);
        });
    }

    function showGridViewColumns() {
        var customerData = {
            createNewRowValue: function () {
                return {
                    id: -1,
                    firstName: "",
                    lastName: "",
                    isVip: false,
                    isSelected: false,
                    age: 0,
                    description: "",
                    manager: { id: 0, name: "" },
                    address: {
                        street: "",
                        zip: 0,
                        city: "",
                        country: ""
                    }
                };
            },
            list: [
                {
                    id: 1,
                    firstName: "Mario",
                    lastName: "Pizzi",
                    isVip: false,
                    isSelected: false,
                    age: 0,
                    description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
                    manager: { id: 7, name: "Fiorello Lombardi" },
                    address: {
                        street: "Via Roma",
                        zip: 1000,
                        city: "Torino",
                        country: "it"
                    }
                },
                {
                    id: 2,
                    firstName: "Jacques",
                    lastName: "Petit",
                    isVip: true,
                    isSelected: true,
                    age: 27,
                    description: "",
                    manager: { id: 0, name: "" },
                    address: {
                        street: "Bld. Voltaire",
                        zip: 2345,
                        city: "Paris",
                        country: "fr"
                    }
                },
                {
                    id: 3,
                    firstName: "Koen",
                    lastName: "Van Bommel",
                    isVip: false,
                    isSelected: false,
                    age: 54,
                    description: "",
                    manager: { id: 0, name: "" },
                    address: {
                        street: "Strandstradt",
                        zip: 5434,
                        city: "Den Haag",
                        country: "nl"
                    }
                }
            ]
        };

        // Countries to choose from
        var countries = [
            { optid: "", optvalue: "" },
            { optid: "be", optvalue: "Belgium" },
            { optid: "fr", optvalue: "France" },
            { optid: "it", optvalue: "Italy" },
            { optid: "nl", optvalue: "Netherlands" }
        ];

        redui.optionsBag["getcountries"] = function () {
            return countries;
        };

        // Managers to choose from
        var corporateManagement = {
            items: [
                {
                    id: 1,
                    title: "Chairman",
                    name: "Gerardo Marcelo",
                    items: []
                },
                {
                    id: 2,
                    title: "CFO",
                    name: "Salvo Folliero",
                    items: []
                },
                {
                    id: 3,
                    title: "General Manager",
                    name: "Arrigo Onio",
                    items: [
                        {
                            id: 5,
                            title: "Sports Director",
                            name: "Edoardo Manna",
                            items: []
                        },
                        {
                            id: 6,
                            title: "Team Manager",
                            name: "Giulio Bellucci",
                            items: [
                                {
                                    id: 7,
                                    title: "Manager",
                                    name: "Fiorello Lombardi",
                                    items: []
                                },
                                {
                                    id: 8,
                                    title: "Goalkeeping Coach",
                                    name: "Armando Arcuri",
                                    items: []
                                },
                                {
                                    id: 9,
                                    title: "Assistant Manager",
                                    name: "Alessio Ferri",
                                    items: []
                                },
                                {
                                    id: 10,
                                    title: "First-team Coach",
                                    name: "Giuseppe Milani",
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Director",
                    name: "Manlio Ferrari",
                    items: []
                }
            ]
        };

        redui.objectSources.getManager = function (callback) {
            var departmentTreeWindow = redui.createNewWindow("ObjectSelectorTreeSelector");
            departmentTreeWindow.bind(corporateManagement);

            departmentTreeWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    var object = departmentTreeWindow.managersTree.currentNode.bindingContext;
                    callback(object);
                }
            });

            departmentTreeWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("GridViewColumnsExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showTreeViewExample() {
        var corporateManagement = {
            items: [
                {
                    id: 1,
                    title: "Chairman",
                    name: "Gerardo Marcelo",
                    items: []
                },
                {
                    id: 2,
                    title: "CFO",
                    name: "Salvo Folliero",
                    items: []
                },
                {
                    id: 3,
                    title: "General Manager",
                    name: "Arrigo Onio",
                    items: [
                        {
                            id: 5,
                            title: "Sports Director",
                            name: "Edoardo Manna",
                            items: []
                        },
                        {
                            id: 6,
                            title: "Team Manager",
                            name: "Giulio Bellucci",
                            items: [
                                {
                                    id: 7,
                                    title: "Manager",
                                    name: "Fiorello Lombardi",
                                    items: []
                                },
                                {
                                    id: 8,
                                    title: "Goalkeeping Coach",
                                    name: "Armando Arcuri",
                                    items: []
                                },
                                {
                                    id: 9,
                                    title: "Assistant Manager",
                                    name: "Alessio Ferri",
                                    items: []
                                },
                                {
                                    id: 10,
                                    title: "First-team Coach",
                                    name: "Giuseppe Milani",
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Director",
                    name: "Manlio Ferrari",
                    items: []
                }
            ]
        };

        var exampleWindow = redui.createNewWindow("TreeViewExample");
        exampleWindow.bind(corporateManagement);

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                var currentNode = exampleWindow.managersTree.currentNode;
                if (currentNode) {
                    var object = currentNode.bindingContext;
                    alert("Selected node: " + JSON.stringify(object));
                } else {
                    alert("Node was not selected.");
                }
            }
        });

        exampleWindow.show();
    };

    function showDynamicTreeViewExample() {
        var stubNode = {
            text: "",
            items: []
        };

        var treeRootNode = {
            items: [
                {
                    text: "root",
                    // Adding a stub subnode allows to expand the node
                    items: [stubNode]
                }
            ]
        };

        // In the real life this function would do an ajax request to the server
        var getSubnodes = (function () {
            var counter = 0;
            return function () {
                return [
                    {
                        text: "node" + counter++,
                        items: [stubNode]
                    },
                    {
                        text: "node" + counter++,
                        items: [stubNode]
                    },
                    {
                        text: "node" + counter++,
                        items: [stubNode]
                    }
                ]
            };
        })();

        var exampleWindow = redui.createNewWindow("DynamicTreeViewExample");
        exampleWindow.bind(treeRootNode);
        exampleWindow.show();

        exampleWindow.dynamicTree.nodeExpanded(function (target, node) {
            var nodeData = node.bindingContext;
            nodeData.items = getSubnodes();
            node.bind(nodeData);
        });
    }

    function showEditableTreeViewExample() {
        var corporateManagement = {
            items: [
                {
                    id: 1,
                    title: "chairman",
                    name: "Gerardo Marcelo",
                    mentor: {},
                    items: []
                },
                {
                    id: 2,
                    title: "cfo",
                    name: "Salvo Folliero",
                    mentor: {},
                    items: []
                },
                {
                    id: 3,
                    title: "general_manager",
                    name: "Arrigo Onio",
                    mentor: {},
                    items: [
                        {
                            id: 5,
                            title: "sports_director",
                            name: "Edoardo Manna",
                            mentor: {},
                            items: []
                        },
                        {
                            id: 6,
                            title: "team_manager",
                            name: "Giulio Bellucci",
                            mentor: {},
                            items: [
                                {
                                    id: 7,
                                    title: "manager",
                                    name: "Fiorello Lombardi",
                                    mentor: {},
                                    items: []
                                },
                                {
                                    id: 8,
                                    title: "gk_coach",
                                    name: "Armando Arcuri",
                                    mentor: {},
                                    items: []
                                },
                                {
                                    id: 9,
                                    title: "assist_manager",
                                    name: "Alessio Ferri",
                                    mentor: {},
                                    items: []
                                },
                                {
                                    id: 10,
                                    title: "coach",
                                    name: "Giuseppe Milani",
                                    mentor: {},
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "director",
                    name: "Manlio Ferrari",
                    mentor: {},
                    items: []
                }
            ]
        };

        var titles = [
            { id: "", value: "", toString: function () { return this.value } },
            { id: "chairman", value: "Chairman", toString: function () { return this.value } },
            { id: "cfo", value: "CFO", toString: function () { return this.value } },
            { id: "general_manager", value: "General Manager", toString: function () { return this.value } },
            { id: "sports_director", value: "Sports Director", toString: function () { return this.value } },
            { id: "team_manager", value: "Team Manager", toString: function () { return this.value } },
            { id: "manager", value: "Manager", toString: function () { return this.value } },
            { id: "gk_coach", value: "Goalkeeping Coach", toString: function () { return this.value } },
            { id: "assist_manager", value: "Assistant Manager", toString: function () { return this.value } },
            { id: "coach", value: "First-team Coach", toString: function () { return this.value } },
            { id: "director", value: "Director", toString: function () { return this.value } }
        ];

        redui.optionsBag.getTitles = function () {
            return titles;
        };
        
        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getMentor = function (callback) {
            // This window is used to select a mentor
            var mentorsWindow = redui.createNewWindow("ObjectSelectorGridSelector");
            mentorsWindow.bind(teamManagement);

            mentorsWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = mentorsWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            mentorsWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("EditableTreeViewExample");
        exampleWindow.bind(corporateManagement);

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                var currentNode = exampleWindow.managersTree.currentNode;
                if (currentNode) {
                    var object = currentNode.bindingContext;
                    alert("Selected node: " + JSON.stringify(object));
                } else {
                    alert("Node was not selected.");
                }
            }
        });

        exampleWindow.show();
    };

    function showMasterDetailExample() {
        // Data for master window
        var customersData = {
            list: [
                {
                    id: 1,
                    firstName: ko.observable("Mario"),
                    lastName: ko.observable("Pizzi"),
                    isVip: ko.observable(false),
                    age: 35,
                    description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
                    manager: ko.observable({ id: 7, name: "Fiorello Lombardi" }),
                    address: {
                        street: "Via Roma",
                        zip: 1000,
                        city: "Torino",
                        country: ko.observable("it")
                    }
                },
                {
                    id: 2,
                    firstName: ko.observable("Jacques"),
                    lastName: ko.observable("Petit"),
                    isVip: ko.observable(true),
                    age: 27,
                    description: "",
                    manager: ko.observable({ id: 0, name: "" }),
                    address: {
                        street: "Bld. Voltaire",
                        zip: 2345,
                        city: "Paris",
                        country: ko.observable("fr")
                    }
                },
                {
                    id: 3,
                    firstName: ko.observable("Koen"),
                    lastName: ko.observable("Van Bommel"),
                    isVip: ko.observable(false),
                    age: 54,
                    description: "",
                    manager: ko.observable({ id: 0, name: "" }),
                    address: {
                        street: "Strandstradt",
                        zip: 5434,
                        city: "Den Haag",
                        country: ko.observable("nl")
                    }
                }
            ]
        };

        // Countries to choose from
        var countries = [
            { optid: "", optvalue: "" },
            { optid: "be", optvalue: "Belgium" },
            { optid: "fr", optvalue: "France" },
            { optid: "it", optvalue: "Italy" },
            { optid: "nl", optvalue: "Netherlands" }
        ];

        redui.optionsBag["getcountries"] = function () {
            return countries;
        };

        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
            managersWindow.bind(teamManagement);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = managersWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        // Master window
        var masterWindow = redui.createNewWindow("MasterWindowExample");
        masterWindow.bind(customersData);
        masterWindow.show();

        // Detail Window
        var detailWindow;

        // Register to the grid events
        masterWindow.customersGrid.currentRowChanged(function (target, row) {
            // Clear existing detail window
            if (detailWindow) {
                detailWindow.close();
            }
            // Create a new detail window
            detailWindow = redui.createNewWindow("DetailsWindowExample");

            // Get the selected customer's data
            var customerData = row.bindingContext;

            if (customerData) {
                // Bind the detail window to the selected customer details
                detailWindow.bind(customerData);

                // Show the details window
                detailWindow.show();
            }
        });
    }

    function showNestedDialogsExample() {
        var customersData = {
            list: [
                {
                    id: 1,
                    firstName: "Mario",
                    lastName: "Pizzi",
                    age: 35,
                    manager: { id: 7, name: "Fiorello Lombardi" }
                },
                {
                    id: 2,
                    firstName: "Jacques",
                    lastName: "Petit",
                    age: 27,
                    manager: { id: 0, name: "" }
                },
                {
                    id: 3,
                    firstName: "Koen",
                    lastName: "Van Bommel",
                    age: 54,
                    manager: { id: 0, name: "" }
                }
            ]
        };

        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var thirdLevelWindow = redui.createNewWindow("ThirdLevelWindow");
            thirdLevelWindow.bind(teamManagement);

            thirdLevelWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = thirdLevelWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            thirdLevelWindow.showModal();
        };

        var firstLevelWindow = redui.createNewWindow("FirstLevelWindow");
        firstLevelWindow.bind(customersData);
        firstLevelWindow.show();

        var nextId = 4;
        firstLevelWindow.addNewButton.getElement().click(function (target) {
            newCustomerData = {
                id: nextId++,
                firstName: "",
                lastName: "",
                age: 0,
                manager: { id: 0, name: "" }
            };

            var secondLevelWindow = redui.createNewWindow("SecondLevelWindow");
            secondLevelWindow.bind(newCustomerData);
            secondLevelWindow.showModal();

            secondLevelWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    customersData.list.push(secondLevelWindow.bindingContext);
                    firstLevelWindow.bind(customersData);
                }
            });
        });
    }

    function showValidationRequiredFieldsExample() {
        var customerData = {
            firstName: "",
            lastName: "",
        };

        var exampleWindow = redui.createNewWindow("ValidationExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showValidationPatternMatchExample() {
        var siteData = {
            url: "",
            email: "",
            ipAddress: ""
        };

        var exampleWindow = redui.createNewWindow("PatternValidationExample");
        exampleWindow.bind(siteData);
        exampleWindow.show();
    }

    function showMaxLengthValidationExample() {
        var customerData = {
            firstName: "This name is too long",
            lastName: "This name is too long",
            description: "This description is too long"
        };

        var exampleWindow = redui.createNewWindow("MaxLengthValidationExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showModelValidationExample() {
        var customerData = {
            firstName: "Claudio",
            lastName: "Lucchesi",
            email1: "claudio.lucchesi@xmail.com",
            email2: "",
            // This is a custom validation function
            // When return value is a "falsy" value, control is considered valid
            // When return value is a "thruthy" value, is is treated as an error message
            validate: function (control, value) {
                if (control.name === "emailTextBox" || control.name === "repeatEmailTextBox") {
                    if (this.email1 !== this.email2) {
                        return "Emails do not match"
                    }
                    return null;
                }
            }
        };

        var exampleWindow = redui.createNewWindow("ModelValidationExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showGridViewValidationExample() {
        var customerData = {
            createNewRowValue: function () {
                return {
                    id: -1,
                    firstName: "",
                    lastName: "",
                    isVip: false,
                    isSelected: false,
                    age: 0,
                    description: "",
                    manager: null,
                    address: {
                        street: "",
                        zip: 0,
                        city: "",
                        country: ""
                    }
                };
            },
            list: [
                {
                    id: 1,
                    firstName: "",
                    lastName: "Pizzi",
                    isVip: false,
                    isSelected: false,
                    age: 0,
                    description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
                    manager: { id: 7, name: "Fiorello Lombardi" },
                    address: {
                        street: "Via Roma",
                        zip: 1000,
                        city: "Torino",
                        country: "it"
                    }
                },
                {
                    id: 2,
                    firstName: "Jacques",
                    lastName: "",
                    isVip: true,
                    isSelected: true,
                    age: 27,
                    description: "",
                    manager: null,
                    address: {
                        street: "Bld. Voltaire",
                        zip: 2345,
                        city: "Paris",
                        country: "fr"
                    }
                },
                {
                    id: 3,
                    firstName: "Koen",
                    lastName: "Van Bommel",
                    isVip: false,
                    isSelected: false,
                    age: 54,
                    description: "",
                    manager: null,
                    address: {
                        street: "Strandstradt",
                        zip: 5434,
                        city: "Den Haag",
                        country: ""
                    }
                }
            ]
        };

        // Countries to choose from
        var countries = [
            { optid: "", optvalue: "" },
            { optid: "be", optvalue: "Belgium" },
            { optid: "fr", optvalue: "France" },
            { optid: "it", optvalue: "Italy" },
            { optid: "nl", optvalue: "Netherlands" }
        ];

        redui.optionsBag["getcountries"] = function () {
            return countries;
        };

        // Managers to choose from
        var corporateManagement = {
            items: [
                {
                    id: 1,
                    title: "Chairman",
                    name: "Gerardo Marcelo",
                    items: []
                },
                {
                    id: 2,
                    title: "CFO",
                    name: "Salvo Folliero",
                    items: []
                },
                {
                    id: 3,
                    title: "General Manager",
                    name: "Arrigo Onio",
                    items: [
                        {
                            id: 5,
                            title: "Sports Director",
                            name: "Edoardo Manna",
                            items: []
                        },
                        {
                            id: 6,
                            title: "Team Manager",
                            name: "Giulio Bellucci",
                            items: [
                                {
                                    id: 7,
                                    title: "Manager",
                                    name: "Fiorello Lombardi",
                                    items: []
                                },
                                {
                                    id: 8,
                                    title: "Goalkeeping Coach",
                                    name: "Armando Arcuri",
                                    items: []
                                },
                                {
                                    id: 9,
                                    title: "Assistant Manager",
                                    name: "Alessio Ferri",
                                    items: []
                                },
                                {
                                    id: 10,
                                    title: "First-team Coach",
                                    name: "Giuseppe Milani",
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Director",
                    name: "Manlio Ferrari",
                    items: []
                }
            ]
        };

        redui.objectSources.getManager = function (callback) {
            var managersWindow = redui.createNewWindow("ObjectSelectorTreeSelector");
            managersWindow.bind(corporateManagement);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    var currentNode = managersWindow.managersTree.currentNode;
                    if (currentNode) {
                        var object = currentNode.bindingContext;
                    }
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("GridViewValidationExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showValidationAllControlsExample() {
        var customerData = {
            id: 1,
            firstName: "",
            lastName: "",
            isVip: false,
            age: 0,
            description: "",
            manager: null,
            address: {
                street: "",
                zip: 0,
                city: "",
                country: ""
            }
        };

        // Countries to choose from
        var countries = [
            { optid: "", optvalue: "" },
            { optid: "be", optvalue: "Belgium" },
            { optid: "fr", optvalue: "France" },
            { optid: "it", optvalue: "Italy" },
            { optid: "nl", optvalue: "Netherlands" }
        ];

        redui.optionsBag["getcountries"] = function () {
            return countries;
        };

        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
            managersWindow.bind(teamManagement);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = managersWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("ValidationAllControlsExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showRibbonControlExample() {
        var customersData = {
            list: [
                {
                    id: 1,
                    firstName: "Mario",
                    lastName: "Pizzi"
                },
                {
                    id: 2,
                    firstName: "Jacques",
                    lastName: "Petit"
                },
                {
                    id: 3,
                    firstName: "Koen",
                    lastName: "Van Bommel"
                }
            ]
        };
        var nextCustomerId = 4;

        redui.commands.ribbon_example_remove = {
            execute: function () {
                var currentRow = exampleWindow.customersGrid.currentRow;
                if (currentRow) {
                    var customer = currentRow.bindingContext;

                    var index = -1;
                    for (var i = 0, len = customersData.list.length; i < len; i++) {
                        if (customersData.list[i].id == customer.id) {
                            index = i;
                            break;
                        }
                    }

                    customersData.list.splice(index, 1);
                    exampleWindow.customersGrid.bind(customersData);
                }
            },
            canExecute: function () {
                var currentRow = exampleWindow.customersGrid.currentRow;
                if (currentRow) {
                    return true;
                }
                return false;
            }
        };
        redui.commands.ribbon_example_addnew = {
            execute: function () {
                var newCustomer = {
                    id: nextCustomerId++,
                    firstName: "",
                    lastName: ""
                };

                var newCustomerWindow = redui.createNewWindow("NewCustomerWindow");
                newCustomerWindow.bind(newCustomer);
                newCustomerWindow.showModal();

                newCustomerWindow.closed(function (target, dialogResult) {
                    if (dialogResult === "OK") {
                        customersData.list.push(newCustomer);
                        exampleWindow.customersGrid.bind(customersData);
                    }
                });
            },
            canExecute: function () {
                if (customersData.list.length < 5) {
                    return true;
                }
                return false;
            }
        };

        var exampleWindow = redui.createNewWindow("RibbonExample");
        exampleWindow.bind(customersData);
        exampleWindow.show();
    }

    function showContextMenuControlExample() {
        var customersData = {
            list: [
                {
                    id: 1,
                    firstName: "Mario",
                    lastName: "Pizzi"
                },
                {
                    id: 2,
                    firstName: "Jacques",
                    lastName: "Petit"
                },
                {
                    id: 3,
                    firstName: "Koen",
                    lastName: "Van Bommel"
                }
            ]
        };
        var nextCustomerId = 4;

        redui.commands.context_menu_example_add = {
            execute: function () {
                var newCustomer = {
                    id: nextCustomerId++,
                    firstName: "",
                    lastName: ""
                };

                var newCustomerWindow = redui.createNewWindow("NewCustomerWindow");
                newCustomerWindow.bind(newCustomer);
                newCustomerWindow.showModal();

                newCustomerWindow.closed(function (target, dialogResult) {
                    if (dialogResult === "OK") {
                        customersData.list.push(newCustomer);
                        exampleWindow.customersGrid.bind(customersData);
                    }
                });
            },
            canExecute: function () {
                return true;
            }
        };
        redui.commands.context_menu_example_remove = {
            execute: function () {
                var currentRow = exampleWindow.customersGrid.currentRow;
                if (currentRow) {
                    var customer = currentRow.bindingContext;

                    var index = -1;
                    for (var i = 0, len = customersData.list.length; i < len; i++) {
                        if (customersData.list[i].id == customer.id) {
                            index = i;
                            break;
                        }
                    }

                    customersData.list.splice(index, 1);
                    exampleWindow.customersGrid.bind(customersData);
                }
            },
            canExecute: function () {
                var currentRow = exampleWindow.customersGrid.currentRow;
                if (currentRow) {
                    return true;
                }
                return false;
            }
        };
        redui.commands.context_menu_example_disabled = {
            execute: function () {
            },
            canExecute: function () {
                return false;
            }
        };

        var exampleWindow = redui.createNewWindow("ContextMenuExample");
        exampleWindow.bind(customersData);
        exampleWindow.show();
    }

    function showSimpleObservableExample() {
        var customerData = {
            firstName: ko.observable(""),
            lastName: ko.observable("")
        };

        var exampleWindow = redui.createNewWindow("SimpleObservableExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showComputedObservableExample() {
        var customerData = {
            firstName: ko.observable(""),
            lastName: ko.observable("")
        };

        // Computed observable
        customerData.fullName = ko.computed(function () { return this.firstName() + " " + this.lastName(); }, customerData);

        var exampleWindow = redui.createNewWindow("ComputedObservableExample");
        exampleWindow.bind(customerData);

        // Disable full text textbox
        exampleWindow.fullNameTextBox.getElement().prop('readonly', true);

        exampleWindow.show();
    }

    function showObservableArrayExample() {
        var teamManagement = {
            createNewRowValue: function () {
                return {
                    id: 0,
                    title: ko.observable(""),
                    name: ko.observable(""),
                }
            },
            list: ko.observableArray([
                {
                    id: 7,
                    title: ko.observable("Manager"),
                    name: ko.observable("Fiorello Lombardi"),
                },
                {
                    id: 8,
                    title: ko.observable("Goalkeeping Coach"),
                    name: ko.observable("Armando Arcuri"),
                }
            ])
        };

        var exampleWindow = redui.createNewWindow("ObservableArrayExample");
        exampleWindow.bind(teamManagement);
        exampleWindow.show();
    }

    function showObservableTreeViewExample() {
        var subnodes = ko.observableArray([
            {
                title: "Manager",
                name: "Fiorello Lombardi",
                items: []
            },
            {
                title: "Goalkeeping Coach",
                name: "Armando Arcuri",
                items: []
            }
        ]);

        var corporateManagement = {
            items: ko.observableArray([
                {
                    title: "Team Manager",
                    name: "Giulio Bellucci",
                    items: subnodes
                }
            ])
        };

        var exampleWindow = redui.createNewWindow("ObservableTreeViewExample");
        exampleWindow.bind(corporateManagement);
        exampleWindow.show();

        var counter = 1;
        exampleWindow.myRibbon.addNewRibbonButton.getElement().click(function () {
            var newItem = {
                title: "title" + counter.toString(),
                name: "name" + counter.toString(),
                items: []
            };

            subnodes.push(newItem);
            counter++;
        });
    }

    function showObservableAllControlsExample() {
        var customerData = {
            id: 1,
            firstName: ko.observable(""),
            lastName: ko.observable(""),
            fullName: null,
            isVip: ko.observable(false),
            description: ko.observable(""),
            manager: ko.observable(null),
            country: ko.observable("")
        };

        customerData.fullName = ko.computed(function () { return this.firstName() + " " + this.lastName(); }, customerData);

        // Countries to choose from
        var countries = [
            { optid: "", optvalue: "" },
            { optid: "be", optvalue: "Belgium" },
            { optid: "fr", optvalue: "France" },
            { optid: "it", optvalue: "Italy" },
            { optid: "nl", optvalue: "Netherlands" }
        ];

        redui.optionsBag["getcountries"] = function () {
            return countries;
        };

        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function will be called when user clicks lookup button of the object selector
        redui.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
            managersWindow.bind(teamManagement);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = managersWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        var window1 = redui.createNewWindow("ObservableWindow1Example");
        window1.bind(customerData);

        // Disable full text textbox
        window1.generalGroupBox.fullNameTextBox.getElement().prop('readonly', true);

        window1.show();

        var window2 = redui.createNewWindow("ObservableWindow2Example");
        window2.bind(customerData);

        // Disable full text textbox
        window2.generalGroupBox.fullNameTextBox.getElement().prop('readonly', true);

        window2.show();

        var closing = false;
        window1.closed(function () {
            if (!closing) {
                closing = true;
                window2.close();
                closing = false;
            }
        });

        window2.closed(function () {
            if (!closing) {
                closing = true;
                window1.close();
                closing = false;
            }
        });
    }

    function showInputTypeExample() {
        var data = {
            text: "",
            fileName: "",
            password: "",
            date: "",
        };

        var exampleWindow = redui.createNewWindow("InputTypeExample");
        exampleWindow.bind(data);
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                alert("Model data: " + JSON.stringify(data));
            }
        });
    }

    function customControlExample() {
        var data = {
            selectedDate: "01/15/2014"
        };

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
    }

    function customModelPropertiesExample() {
        var data = {
            drive: 50,
            bass: 60,
            mid: 70,
            treble: 80,
            volume: 30
        };

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
                    orientation: control.model["custom-orientation"],
                    range: "min",
                    min: control.model["custom-min"],
                    max: control.model["custom-max"],
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
    }

    function customcontainercontrolExample() {
        var customerData = {
            firstName: "Mario",
            lastName: "Pizzi",
            address: {
                street: "Via Roma",
                zip: 1000,
                city: "Torino"
            }
        };

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
    }

    function showTabsExample() {
        var customerData = {
            firstName: "Mario",
            lastName: "Pizzi",
            address: {
                street: "Via Roma",
                zip: 1000,
                city: "Torino"
            }
        };

        var exampleWindow = redui.createNewWindow("TabsControlExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                alert("Model data: " + JSON.stringify(customerData));
            }
        });
    }

    function showListViewControlExample() {
        var albumsData = {
            items: [
                {
                    title: "The Doors",
                    year: "1967",
                    imageUri: "/examples/resources/images/1967a.jpg"
                },
                {
                    title: "Strange Days",
                    year: "1967",
                    imageUri: "/examples/resources/images/1967b.jpg"
                },
                {
                    title: "Waiting for the Sun",
                    year: "1968",
                    imageUri: "/examples/resources/images/1968.jpg"
                },
                {
                    title: "The Soft Parade",
                    year: "1969",
                    imageUri: "/examples/resources/images/1969.jpg"
                },
                {
                    title: "Morrison Hotel",
                    year: "1970",
                    imageUri: "/examples/resources/images/1970.jpg"
                },
                {
                    title: "L.A. Woman",
                    year: "1971",
                    imageUri: "/examples/resources/images/1971.jpg"
                },
            ]
        };

        var exampleWindow = redui.createNewWindow("ListViewExample");
        exampleWindow.bind(albumsData);
        exampleWindow.show();
    }

    function showAccordionPanelControlExample() {
        var customerData = {
            firstName: "Mario",
            lastName: "Pizzi",
            address: {
                street: "Via Roma",
                zip: 1000,
                city: "Torino"
            }
        };

        var exampleWindow = redui.createNewWindow("AccordionPanelControlExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();

        exampleWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                alert("Model data: " + JSON.stringify(customerData));
            }
        });
    }

    function showComboBoxLocalOptionsBagExample() {
        var addressData = {
            country: "fr"
        };

        var countries = [
            { id: "", value: "", toString: function () { return this.value } },
            { id: "be", value: "Belgium", toString: function () { return this.value } },
            { id: "fr", value: "France", toString: function () { return this.value } },
            { id: "it", value: "Italy", toString: function () { return this.value } },
            { id: "nl", value: "Netherlands", toString: function () { return this.value } }
        ];

        var windowContext = {
            optionsBag: {
                getcountries: function () {
                    return countries;
                }
            }
        };

        var exampleWindow = redui.createNewWindow("ComboBoxExample", windowContext);
        exampleWindow.bind(addressData);
        exampleWindow.show();
    }

    function showObjectSelectorLocalSourceExample() {
        var playerData = {
            firstName: "Claudio",
            lastName: "Lucchesi",
            manager: {}
        };

        // Options for object selector
        var teamManagement = {
            list: [
                {
                    id: 7,
                    title: "Manager",
                    name: "Fiorello Lombardi",
                },
                {
                    id: 8,
                    title: "Goalkeeping Coach",
                    name: "Armando Arcuri",
                },
                {
                    id: 9,
                    title: "Assistant Manager",
                    name: "Alessio Ferri",
                },
                {
                    id: 10,
                    title: "First-team Coach",
                    name: "Giuseppe Milani",
                }
            ]
        };

        // This function sets the current row in the GridView
        function setGridViewCurrentRow(gridView, rowId) {
            for (var i = 0, len = gridView.rows.length; i < len; i++) {
                var nextRow = gridView.rows[i];
                if (nextRow.bindingContext.id === rowId) {
                    nextRow.makeCurrent();
                    return;
                }
            }
        }

        var windowContext = {};
        windowContext.objectSources = {};
        // This function will be called when user clicks lookup button of the object selector
        windowContext.objectSources.getManager = function (callback) {
            // This window is used to select a manager
            var managersWindow = redui.createNewWindow("ObjectSelectorGridSelector");
            managersWindow.bind(teamManagement);
            setGridViewCurrentRow(managersWindow.managersGrid, playerData.manager.id);

            managersWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // If the row was selected,
                    // Get the object bound to the current row
                    var currentRow = managersWindow.managersGrid.currentRow;
                    if (currentRow) {
                        var object = currentRow.bindingContext;
                    }
                    // Return object to the object selector
                    callback(object);
                }
            });

            managersWindow.showModal();
        };

        var exampleWindow = redui.createNewWindow("ObjectSelectorExample", windowContext);
        exampleWindow.bind(playerData);
        exampleWindow.show();
    }

    function showTrackChangesExample() {
        var customerData = {
            list: [
                {
                    id: 1,
                    firstName: "Mario",
                    lastName: "Pizzi",
                    isVip: false,
                    isSelected: false,
                    age: 0,
                    description: "Welcome Mario. Mario is italian who lives in Torino. He likes espresso and pizza. He doesn't like hamburgers and beer.",
                    manager: { id: 7, name: "Fiorello Lombardi" },
                    address: {
                        street: "Via Roma",
                        zip: 1000,
                        city: "Torino",
                        country: "it"
                    }
                },
                {
                    id: 2,
                    firstName: "Jacques",
                    lastName: "Petit",
                    isVip: true,
                    isSelected: true,
                    age: 27,
                    description: "",
                    manager: { id: 0, name: "" },
                    address: {
                        street: "Bld. Voltaire",
                        zip: 2345,
                        city: "Paris",
                        country: "fr"
                    }
                },
                {
                    id: 3,
                    firstName: "Koen",
                    lastName: "Van Bommel",
                    isVip: false,
                    isSelected: false,
                    age: 54,
                    description: "",
                    manager: { id: 0, name: "" },
                    address: {
                        street: "Strandstradt",
                        zip: 5434,
                        city: "Den Haag",
                        country: "nl"
                    }
                }
            ]
        };

        var exampleWindow = redui.createNewWindow("TrackChangesExample");
        exampleWindow.bind(customerData);
        exampleWindow.show();
    }

    function showBreadcrumbsControlExample() {
        var getHref = function () {
            return "#tree=BreadcrumbsControlExample&id=" + this.id
        };

        var corporateManagement = {
            path: ko.observableArray([]),
            items: [
                {
                    id: 1,
                    title: "Chairman",
                    name: "Gerardo Marcelo",
                    href: getHref,
                    items: []
                },
                {
                    id: 2,
                    title: "CFO",
                    name: "Salvo Folliero",
                    href: getHref,
                    items: []
                },
                {
                    id: 3,
                    title: "General Manager",
                    name: "Arrigo Onio",
                    href: getHref,
                    items: [
                        {
                            id: 5,
                            title: "Sports Director",
                            name: "Edoardo Manna",
                            href: getHref,
                            items: []
                        },
                        {
                            id: 6,
                            title: "Team Manager",
                            name: "Giulio Bellucci",
                            href: getHref,
                            items: [
                                {
                                    id: 7,
                                    title: "Manager",
                                    name: "Fiorello Lombardi",
                                    href: getHref,
                                    items: []
                                },
                                {
                                    id: 8,
                                    title: "Goalkeeping Coach",
                                    name: "Armando Arcuri",
                                    href: getHref,
                                    items: []
                                },
                                {
                                    id: 9,
                                    title: "Assistant Manager",
                                    name: "Alessio Ferri",
                                    href: getHref,
                                    items: []
                                },
                                {
                                    id: 10,
                                    title: "First-team Coach",
                                    name: "Giuseppe Milani",
                                    href: getHref,
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Director",
                    name: "Manlio Ferrari",
                    href: getHref,
                    items: []
                }
            ]
        };

        // This function sets the current node in the TreeView
        function setTreeViewCurrentNode(treeView, nodeId) {
            var allNodes = [];
            function traverse(nodes) {
                for (var i = 0, len = nodes.length; i < len; i++) {
                    if (nodes[i].nodes.length > 0) {
                        traverse(nodes[i].nodes);
                    }
                    allNodes.push(nodes[i]);
                }
            }

            traverse(treeView.roots);

            for (var i = allNodes.length - 1; i >= 0; i--) {
                if (allNodes[i].bindingContext.id === nodeId) {
                    allNodes[i].makeCurrent();

                    var parent = allNodes[i].parent;
                    while (parent !== treeView) {
                        parent.expand();
                        parent = parent.parent;
                    }
                }
            }
        }

        // This function gets the node chain to bind to breadcrumbs
        function getNodesChain(node) {
            var chain = [];
            var currentNode = node;
            while (currentNode && currentNode.type === "treeviewnode") {
                currentNodePath = {
                    href: currentNode.bindingContext.href(),
                    text: currentNode.bindingContext.name
                };
                
                chain = [currentNodePath].concat(chain);
                currentNode = currentNode.parent;
            }
            return chain;
        }

        var exampleWindow = redui.createNewWindow("BreadcrumbsControlExample");
        exampleWindow.bind(corporateManagement);
        exampleWindow.show();

        exampleWindow.managersTree.currentNodeChanged(function (target, node) {
            var chain = getNodesChain(node);
            corporateManagement.path(chain);
        });

        $(window).on('hashchange', function () {
            var a = new Tanchor(window.location.href);
            var hash = a.getHashVars();

            if (hash.tree === "BreadcrumbsControlExample") {
                setTreeViewCurrentNode(exampleWindow.managersTree, +hash.id);
            }
        });
    };
});