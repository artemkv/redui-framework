{
    "windows": [
        {
            "name": "RibbonWindow",
            "title": "Ribbon",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "contextMenu": "WindowDebugContextMenu",
            "controls": [
               {
                   "name": "mailRibbon",
                   "type": "ribbon",
                   "cssClass": "ribbon-topwindow",
                   "controls": [
                      {
                          "name": "newMailRibbonButton",
                          "type": "ribbonbutton",
                          "text": "$label.newEmail",
                          "iconSource": "/mailclientdemo/resources/addnew32x32.png",
                          "cssClass": "ribbonbutton-smallfont",
                          "command": "createNewEmail",
                          "contextMenu": "DebugContextMenu"
                      },
                      {
                          "name": "replyRibbonButton",
                          "type": "ribbonbutton",
                          "text": "$label.reply",
                          "iconSource": "/mailclientdemo/resources/reply32x32.png",
                          "cssClass": "ribbonbutton-smallfont",
                          "command": "replyToEmail",
                          "contextMenu": "DebugContextMenu"
                      },
                      {
                          "name": "removeRibbonButton",
                          "type": "ribbonbutton",
                          "text": "$label.remove",
                          "iconSource": "/mailclientdemo/resources/remove32x32.png",
                          "cssClass": "ribbonbutton-smallfont",
                          "command": "removeEmail",
                          "contextMenu": "DebugContextMenu"
                      },
                      {
                          "name": "contactsRibbonButton",
                          "type": "ribbonbutton",
                          "text": "$label.contacts",
                          "iconSource": "/mailclientdemo/resources/contacts32x32.png",
                          "cssClass": "ribbonbutton-smallfont",
                          "command": "showContactBook",
                          "contextMenu": "DebugContextMenu"
                      },
                      {
                          "name": "settingsRibbonButton",
                          "type": "ribbonbutton",
                          "text": "$label.settings",
                          "iconSource": "/mailclientdemo/resources/options32x32.png",
                          "cssClass": "ribbonbutton-smallfont",
                          "command": "showSettings",
                          "contextMenu": "DebugContextMenu"
                      }
                   ]
               }
            ]
        },
        {
            "name": "MailBoxTreeWindow",
            "title": "MailBox",
            "left": 50,
            "top": 50,
            "width": 400,
            "height": 400,
            "contextMenu": "WindowDebugContextMenu",
            "controls": [
                {
                    "name": "mailboxTree",
                    "type": "treeview",
                    "bindsTo": "mailbox",
                    "contextMenu": "DebugContextMenu",
                    "nodeModel": {
                        "name": "folderTreeNode",
                        "type": "treeviewnode",
                        "bindsTo": "folders",
                        "controls": [
                            {
                                "name": "nodeIcon",
                                "type": "image",
                                "alternateText": "Icon",
                                "width": 16,
                                "height": 16,
                                "source": "/mailclientdemo/resources/folder16x16.png"
                            },
                            {
                                "name": "nameStaticText",
                                "type": "statictext",
                                "text": "",
                                "bindsTo": "nameWithCount"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "MailBoxGridWindow",
            "trackChanges": true,
            "version": 0,
            "title": "Mailbox",
            "left": 500,
            "top": 100,
            "width": 700,
            "height": 500,
            "contextMenu": "WindowDebugContextMenu",
            "controls": [
                {
                    "name": "mailboxGridView",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "contextMenu": "DebugContextMenu",
                    "columns": [
                        {
                            "name": "from",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.from",
                            "width": 150,
                            "bindsTo": "from",
                            "isSortable": true
                        },
                        {
                            "name": "subject",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.subject",
                            "width": 250,
                            "bindsTo": "subject",
                            "isSortable": true
                        },
                        {
                            "name": "received",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.received",
                            "width": 100,
                            "bindsTo": "received",
                            "isSortable": true
                        },
                        {
                            "name": "size",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.size",
                            "width": 100,
                            "bindsTo": "size",
                            "isSortable": true
                        }
                    ]
                }
            ]
        },
        {
            "name": "ReadingPaneWindow",
            "title": "ReadingPane",
            "left": 500,
            "top": 100,
            "width": 500,
            "height": 300,
            "contextMenu": "WindowDebugContextMenu",
            "controls": [
                {
                    "name": "subjectStaticText",
                    "type": "statictext",
                    "bindsTo": "subject",
                    "cssClass": "readingpane-subject"
                },
                {
                    "name": "fromLabelStaticText",
                    "type": "statictext",
                    "text": "$label.fromlabel",
                    "cssClass": "readingpane-label"
                },
                {
                    "name": "fromStaticText",
                    "type": "statictext",
                    "bindsTo": "from",
                    "cssClass": "readingpane-field"
                },
                {
                    "name": "toLabelStaticText",
                    "type": "statictext",
                    "text": "$label.tolabel",
                    "cssClass": "readingpane-label"
                },
                {
                    "name": "toStaticText",
                    "type": "statictext",
                    "bindsTo": "to",
                    "cssClass": "readingpane-field"
                },
                {
                    "name": "sentLabelStaticText",
                    "type": "statictext",
                    "text": "$label.sentlabel",
                    "cssClass": "readingpane-label"
                },
                {
                    "name": "sentStaticText",
                    "type": "statictext",
                    "bindsTo": "sent",
                    "cssClass": "readingpane-field"
                },
                {
                    "name": "textStaticText",
                    "type": "statictext",
                    "bindsTo": "text",
                    "cssClass": "readingpane-text"
                }
            ]
        },
        {
            "name": "EditMailWindow",
            "title": "$label.newEmail",
            "left": 500,
            "top": 100,
            "width": 700,
            "height": 600,
            "controls": [
                {
                    "name": "toObjectSelector",
                    "type": "objectselector",
                    "label": "$label.to",
                    "isEditable": true,
                    "bindsTo": "to",
                    "getObjectFunction": "getContacts",
                    "cssClass": "newemail-field",
                    "isRequired": true,
                    "validationErrorMessage": "$label.toFieldIsRequiredErrorMessage"
                },
                {
                    "name": "copyObjectSelector",
                    "type": "objectselector",
                    "label": "$label.cc",
                    "isEditable": true,
                    "bindsTo": "cc",
                    "getObjectFunction": "getContacts",
                    "cssClass": "newemail-field"
                },
                {
                    "name": "subjectTextBox",
                    "type": "textbox",
                    "label": "$label.subject",
                    "isEditable": true,
                    "bindsTo": "subject",
                    "cssClass": "newemail-field"
                },
                {
                    "name": "textTextArea",
                    "type": "textarea",
                    "bindsTo": "text",
                    "rows": 22,
                    "cssClass": "newemail-text"
                },
                {
                    "name": "SendButton",
                    "type": "button",
                    "text": "$label.send",
                    "isDialogButton": true,
                    "dialogResult": "Send"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "$label.cancel",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        },
        {
            "name": "ContactsGridWindow",
            "title": "$label.contacts",
            "left": 500,
            "top": 100,
            "width": 910,
            "height": 600,
            "controls": [
                {
                    "name": "filterTextBox",
                    "type": "textbox",
                    "bindsTo": "filter",
                    "cssClass": "contacts-searchtextbox"
                },
                {
                    "name": "filterButton",
                    "type": "button",
                    "text": "$label.search",
                    "cssClass": "contacts-searchbutton"
                },
                {
                    "name": "contactsGridView",
                    "type": "gridview",
                    "label": "$label.contacts",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "name": "isSelected",
                            "type": "gridviewcheckboxcolumn",
                            "label": "",
                            "width": 60,
                            "bindsTo": "isSelected",
                            "isSortable": false
                        },
                        {
                            "name": "firstName",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.firstName",
                            "width": 150,
                            "bindsTo": "firstName",
                            "isSortable": true
                        },
                        {
                            "name": "lastName",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.lastName",
                            "width": 150,
                            "bindsTo": "lastName",
                            "isSortable": true
                        },
                        {
                            "name": "email",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.email",
                            "width": 200,
                            "bindsTo": "email",
                            "isSortable": true
                        },
                        {
                            "name": "phone1",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.phone1",
                            "width": 150,
                            "bindsTo": "phone1",
                            "isSortable": false
                        },
                        {
                            "name": "phone2",
                            "type": "gridviewstatictextcolumn",
                            "label": "$label.phone2",
                            "width": 150,
                            "bindsTo": "phone2",
                            "isSortable": false
                        }
                    ]
                },
                {
                    "name": "pager",
                    "type": "pager",
                    "bindsTo": "pagingInfo"
                },
                {
                    "name": "spaceStaticText",
                    "type": "statictext",
                    "cssClass": "contacts-space"
                },
                {
                    "name": "addToButton",
                    "type": "button",
                    "text": "$label.addTo",
                    "cssClass": "contacts-addcontactbutton"
                },
                {
                    "name": "toTextBox",
                    "type": "textbox",
                    "bindsTo": "to",
                    "cssClass": "contacts-addcontacttextbox"
                },
                {
                    "name": "addCcButton",
                    "type": "button",
                    "text": "$label.addCc",
                    "cssClass": "contacts-addcontactbutton"
                },
                {
                    "name": "ccTextBox",
                    "type": "textbox",
                    "bindsTo": "cc",
                    "cssClass": "contacts-addcontacttextbox"
                },
                {
                    "name": "okButton",
                    "type": "button",
                    "text": "$label.ok",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "$label.cancel",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        },
        {
            "name": "ContactBookGridWindow",
            "title": "$label.contacts",
            "left": 500,
            "top": 100,
            "width": 850,
            "height": 600,
            "controls": [
                {
                    "name": "contactBookRibbon",
                    "type": "ribbon",
                    "cssClass": "ribbon-contactbook",
                    "controls": [
                       {
                           "name": "newContactRibbonButton",
                           "type": "ribbonbutton",
                           "text": "$label.newContact",
                           "iconSource": "/mailclientdemo/resources/addnew32x32.png",
                           "cssClass": "ribbonbutton-smallfont",
                           "command": "newContact"
                       },
                       {
                           "name": "removeContactRibbonButton",
                           "type": "ribbonbutton",
                           "text": "$label.remove",
                           "iconSource": "/mailclientdemo/resources/remove32x32.png",
                           "cssClass": "ribbonbutton-smallfont",
                           "command": "removeContact"
                       },
                       {
                           "name": "editContactRibbonButton",
                           "type": "ribbonbutton",
                           "text": "$label.edit",
                           "iconSource": "/mailclientdemo/resources/edit32x32.png",
                           "cssClass": "ribbonbutton-smallfont",
                           "command": "editContact"
                       }
                    ]
                },
                {
                    "name": "filterTextBox",
                    "type": "textbox",
                    "bindsTo": "filter",
                    "cssClass": "contacts-searchtextbox"
                },
                {
                    "name": "filterButton",
                    "type": "button",
                    "text": "$label.search",
                    "cssClass": "contacts-searchbutton"
                },
                {
                    "name": "contactsGridView",
                    "type": "gridview",
                    "label": "$label.contacts",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "name": "firstName",
                            "type": "gridviewtextboxcolumn",
                            "label": "$label.firstName",
                            "width": 150,
                            "bindsTo": "firstName",
                            "isSortable": true
                        },
                        {
                            "name": "lastName",
                            "type": "gridviewtextboxcolumn",
                            "label": "$label.lastName",
                            "width": 150,
                            "bindsTo": "lastName",
                            "isSortable": true
                        },
                        {
                            "name": "email",
                            "type": "gridviewtextboxcolumn",
                            "label": "$label.email",
                            "width": 200,
                            "bindsTo": "email",
                            "isSortable": true
                        },
                        {
                            "name": "phone1",
                            "type": "gridviewtextboxcolumn",
                            "label": "$label.phone1",
                            "width": 150,
                            "bindsTo": "phone1",
                            "isSortable": false
                        },
                        {
                            "name": "phone2",
                            "type": "gridviewtextboxcolumn",
                            "label": "$label.phone2",
                            "width": 150,
                            "bindsTo": "phone2",
                            "isSortable": false
                        }
                    ]
                },
                {
                    "name": "pager",
                    "type": "pager",
                    "bindsTo": "pagingInfo"
                },
                {
                    "name": "okButton",
                    "type": "button",
                    "text": "$label.ok",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "$label.cancel",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        },
        {
            "name": "EditContactWindow",
            "title": "$label.editcontact",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 550,
            "controls": [
                {
                    "name": "tabsControl",
                    "type": "tabs",
                    "tabPages": [
                        {
                            "name": "generalTabPage",
                            "type": "tabpage",
                            "title": "$label.general",
                            "controls": [			
                                {
                                    "name": "firstNameTextBox",
                                    "type": "textbox",
                                    "label": "$label.firstName",
                                    "bindsTo": "firstName",
                                    "isRequired": true,
                                    "validationErrorMessage": "$label.firstNameFieldIsRequiredErrorMessage"
                                },
                                {
                                    "name": "lastNameTextBox",
                                    "type": "textbox",
                                    "label": "$label.lastName",
                                    "bindsTo": "lastName",
                                    "isRequired": true,
                                    "validationErrorMessage": "$label.lastNameFieldIsRequiredErrorMessage"
                                },
                                {
                                    "name": "companyNameTextBox",
                                    "type": "textbox",
                                    "label": "$label.companyName",
                                    "bindsTo": "companyName"
                                },
                                {
                                    "name": "emailTextBox",
                                    "type": "textbox",
                                    "label": "$label.email",
                                    "bindsTo": "email",
                                    "isRequired": true,
                                    "validationErrorMessage": "$label.emailFieldIsRequiredErrorMessage"
                                },
                                {
                                    "name": "phone1TextBox",
                                    "type": "textbox",
                                    "label": "$label.phone1",
                                    "bindsTo": "phone1"
                                },
                                {
                                    "name": "phone2TextBox",
                                    "type": "textbox",
                                    "label": "$label.phone2",
                                    "bindsTo": "phone2"
                                },
                                {
                                    "name": "webTextBox",
                                    "type": "textbox",
                                    "label": "$label.web",
                                    "bindsTo": "web"
                                }
                            ]
                        },
                        {
                            "name": "addressTabPage",
                            "type": "tabpage",
                            "title": "$label.address",
                            "controls": [			
                                {
                                    "name": "streetTextBox",
                                    "type": "textbox",
                                    "label": "$label.street",
                                    "bindsTo": "address.street"
                                },
                                {
                                    "name": "zipTextBox",
                                    "type": "textbox",
                                    "label": "$label.zip",
                                    "bindsTo": "address.zip"
                                },
                                {
                                    "name": "cityTextBox",
                                    "type": "textbox",
                                    "label": "$label.city",
                                    "bindsTo": "address.city"
                                },
                                {
                                    "name": "countryComboBox",
                                    "type": "textbox",
                                    "label": "$label.country",
                                    "bindsTo": "address.country"
                                },
                                {
                                    "name": "stateComboBox",
                                    "type": "textbox",
                                    "label": "$label.state",
                                    "bindsTo": "address.state"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "$label.ok",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "$label.cancel",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        },
        {
            "name": "SettingsWindow",
            "title": "$label.settings",
            "left": 500,
            "top": 100,
            "width": 400,
            "height": 300,
            "controls": [
                {
                    "name": "themeComboBox",
                    "type": "combobox",
                    "label": "$label.theme",
                    "bindsTo": "theme",
                    "getOptionsFunction": "getThemes"
                },
                {
                    "name": "languageComboBox",
                    "type": "combobox",
                    "label": "$label.language",
                    "bindsTo": "language",
                    "getOptionsFunction": "getLanguages"
                },
                {
                    "name": "OKButton",
                    "type": "button",
                    "text": "$label.ok",
                    "isDialogButton": true,
                    "dialogResult": "OK"
                },
                {
                    "name": "CancelButton",
                    "type": "button",
                    "text": "$label.cancel",
                    "isDialogButton": true,
                    "dialogResult": "Cancel"
                }
            ]
        },
        {
        	"name": "InfoWindow",
        	"title": "Info",
        	"width": 700,
        	"height": 450,
        	"controls": [
				{
				    "name": "infoTextArea",
				    "type": "textarea",
				    "bindsTo": "info",
				    "rows": 22,
				    "cssClass": "widetextarea"
				},
                {
                	"name": "OKButton",
                	"type": "button",
                	"text": "$label.ok",
                	"isDialogButton": true,
                	"dialogResult": "OK"
                }
        	]
        }
    ],
    "menus": [
        {
            "name": "DebugContextMenu",
            "type": "contextmenu",
            "menuItems": [
                {
                    "name": "showModelMenuItem",
                    "type": "menuitem",
                    "text": "Debug: Show Model",
                    "command" : "showModel"
                },
                {
                    "name": "showBindingContextMenuItem",
                    "type": "menuitem",
                    "text": "Debug: Show Binding Context",
                    "command" : "showBindingContext"
                }
            ]
        },
        {
            "name": "WindowDebugContextMenu",
            "type": "contextmenu",
            "menuItems": [
                {
                    "name": "showModelMenuItem",
                    "type": "menuitem",
                    "text": "Debug: Show Model",
                    "command" : "showModel"
                },
                {
                    "name": "showBindingContextMenuItem",
                    "type": "menuitem",
                    "text": "Debug: Show Binding Context",
                    "command" : "showBindingContext"
                },
                {
                    "name": "separator1",
                    "type": "menuseparator"
                },
                {
                    "name": "undockBindingContextMenuItem",
                    "type": "menuitem",
                    "text": "Debug: Undock",
                    "command" : "undock"
                }
            ]
        }
    ]
}