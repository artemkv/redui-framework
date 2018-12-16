"use strict";

$(function () {
    var ribbonWindow;
    var mailboxTreeWindow;
    var mailboxGridWindow;
    var readingPaneWindow;

    var getNewId = (function () {
        // Last generated id.
        var _lastId = 0;
        return function () {
            _lastId++;
            return _lastId;
        };
    })();

    function getDate() {
        var today = new Date();

        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        return dd + '/' + mm + '/' + yyyy;
    }

    var settingsData = {
        theme: "red",
        language: "en"
    };

    function getCurrentMailFolderId() {
        var currentMailFolderId;
        if (mailboxTreeWindow) {
            var currentNode = mailboxTreeWindow.mailboxTree.currentNode;
            if (currentNode) {
                var currentMailFolder = currentNode.bindingContext;
                currentMailFolderId = currentMailFolder.id;
            }
        }
        return currentMailFolderId;
    }

    function getCurrentMailId() {
        var currentMailId;
        if (mailboxGridWindow) {
            var currentRow = mailboxGridWindow.mailboxGridView.currentRow;
            if (currentRow) {
                var currentMail = currentRow.bindingContext;
                currentMailId = currentMail.id;
            }
        }
        return currentMailId;
    }

    function editEmail(email, windowTitle) {
        // Get editor window model
        var editorWindowModel = redui.model.getWindowModel("EditMailWindow");
        editorWindowModel.title = windowTitle;

        // New email window
        var editorMailWindow = redui.createNewWindowFromModel(editorWindowModel);
        editorMailWindow.bind(email);
        editorMailWindow.showModal();

        // This function is called when user clicks on to/cc object selector buttons
        redui.objectSources.getContacts = function (callback) {
            // Get current values of the mail to/cc
            var to = editorMailWindow.bindingContext.to;
            var cc = editorMailWindow.bindingContext.cc;

            // Get contacts, no filter, no sorting, first page
            var contacts = mailClientDemoData.getContacts();
            // Add to/cc fields
            contacts.to = to;
            contacts.cc = cc;

            // Contacts window
            var contactsWindow = redui.createNewWindow("ContactsGridWindow");
            contactsWindow.bind(contacts);
            contactsWindow.showModal();

            contactsWindow.addToButton.getElement().click(function () {
                var bindingContext = contactsWindow.bindingContext;

                var to = bindingContext.to;
                var displayedContacts = bindingContext.list;

                for (var i = 0, len = displayedContacts.length; i < len; i++) {
                    if (displayedContacts[i].isSelected) {
                        if (to) {
                            to = to + "; ";
                        }
                        to = to + displayedContacts[i].email;
                    }
                }

                bindingContext.to = to;
                contactsWindow.toTextBox.bind(bindingContext);
            });

            contactsWindow.addCcButton.getElement().click(function () {
                var bindingContext = contactsWindow.bindingContext;

                var cc = bindingContext.cc;
                var displayedContacts = bindingContext.list;

                for (var i = 0, len = displayedContacts.length; i < len; i++) {
                    if (displayedContacts[i].isSelected) {
                        if (cc) {
                            cc = cc + "; ";
                        }
                        cc = cc + displayedContacts[i].email;
                    }
                }

                bindingContext.cc = cc;
                contactsWindow.ccTextBox.bind(bindingContext);
            });

            // This function handles grid view filtering, sorting and paging
            var udpateGrid = function () {
                var bindingContext = contactsWindow.bindingContext;

                // Save current values for to/cc
                var to = bindingContext.to;
                var cc = bindingContext.cc;

                // Extract filtering, sorting and paging info
                var filterString = bindingContext.filter;
                var pagingInfo = bindingContext.pagingInfo;
                var sortingInfo = contactsWindow.contactsGridView.sortingInfo;

                // Retrieve the grid view data, this time with all filtering, sorting and paging
                var contacts = mailClientDemoData.getContacts(filterString, sortingInfo, pagingInfo);

                // Add back to/cc fields
                contacts.to = to;
                contacts.cc = cc;

                // Rebind window
                contactsWindow.bind(contacts);
            };

            // Handle filtering
            contactsWindow.filterButton.getElement().click(function () {
                // Filtering resets paging
                var bindingContext = contactsWindow.bindingContext;
                bindingContext.pagingInfo.pageNo = 1;

                udpateGrid();
            });

            // Handle sorting
            contactsWindow.contactsGridView.sortingChanged(function (target, sortingInfo) {
                udpateGrid();
            });

            // Handle paging
            contactsWindow.pager.pageChanged(function (target, pageNo) {
                udpateGrid();
            });

            // When contacts window closed with OK...
            contactsWindow.closed(function (target, dialogResult) {
                if (dialogResult === "OK") {
                    // ...prepare updated data for the new email window
                    var updatedMailData = {
                        to: contactsWindow.bindingContext.to,
                        cc: contactsWindow.bindingContext.cc,
                        subject: editorMailWindow.bindingContext.subject,
                        text: editorMailWindow.bindingContext.text
                    };

                    // ...re-bind the new email window
                    editorMailWindow.bind(updatedMailData);
                }
            });
        }

        editorMailWindow.closed(function (target, dialogResult) {
            if (dialogResult === "Send") {
                var now = new Date();

                var newMail = editorMailWindow.bindingContext;

                newMail.id = "sent" + getNewId();
                newMail.from = "arthur.farrow@reduidemo.com";
                newMail.size = now.getSeconds() + " KB"; // Fake the size
                newMail.sent = getDate();
                newMail.received = getDate();
                mailClientDemoData.sendMail(newMail);

                showMailFolderContent();
            }
        });
    }

    function createNewEmail() {
        // New email template
        var newMailData = {
            id: "",
            from: "",
            to: "",
            cc: "",
            subject: "",
            sent: "",
            received: "",
            size: "",
            text: "\n\n\
Best Regards,\n\
Test User"
        };
        
        editEmail(newMailData, "$label.newEmail");
    }

    function replyToEmail() {
        // Determine the mailbox
        var currentMailFolderId = getCurrentMailFolderId();
        // Determine the mail
        var currentMailId = getCurrentMailId();

        var mailContent = mailClientDemoData.getMailContent(currentMailFolderId, currentMailId);
        if (mailContent) {
            var replyEmailData = {
                id: "",
                from: "",
                to: mailContent.from,
                cc: "",
                subject: "RE: " + mailContent.subject,
                sent: "",
                received: "",
                size: "",
                text: "\n\n\
-------------------------------------------------------------------------\n" +
Globalize.localize("from", Globalize.culture().name) + ": " + mailContent.from + "\n" +
Globalize.localize("sent", Globalize.culture().name) + ": " + mailContent.sent + "\n" +
Globalize.localize("to", Globalize.culture().name) + ": " + mailContent.to + "\n" +
Globalize.localize("subject", Globalize.culture().name) + ": " + mailContent.subject + "\n\n" + mailContent.text
            };

            editEmail(replyEmailData, "$label.replyToEmail");
        }
    }

    function canReplyToEmail() {
        // Determine the mailbox
        var currentMailFolderId = getCurrentMailFolderId();
        // Determine the mail
        var currentMailId = getCurrentMailId();

        if (currentMailId) {
            return true;
        }
        return false;
    }

    function removeEmail() {
        // Determine the mailbox
        var currentMailFolderId = getCurrentMailFolderId();
        // Determine the mail
        var currentMailId = getCurrentMailId();

        mailClientDemoData.removeEmail(currentMailFolderId, currentMailId);

        showMailFolderContent();
    }

    function canRemoveEmail() {
        // Determine the mailbox
        var currentMailFolderId = getCurrentMailFolderId();
        // Determine the mail
        var currentMailId = getCurrentMailId();

        if (currentMailId) {
            return true;
        }
        return false;
    }

    function showMailboxTree() {
        if (mailboxTreeWindow) {
            mailboxTreeWindow.close();
        }

        mailboxTreeWindow = redui.createNewWindow("MailBoxTreeWindow");
        mailboxTreeWindow.bind(mailClientDemoData.getMailboxData());
        mailboxTreeWindow.dock($("#project_tree_inner"));

        showMailFolderContent();

        // Handle tree node selection
        mailboxTreeWindow.mailboxTree.currentNodeChanged(function (target, node) {
            showMailFolderContent();
        });

        // Expand mailbox
        mailboxTreeWindow.mailboxTree.roots[0].expand();
        // Select Inbox
        mailboxTreeWindow.mailboxTree.roots[0].nodes[0].makeCurrent();
    }

    function showMailFolderContent() {
        // Close existing mailbox grid window
        if (mailboxGridWindow) {
            mailboxGridWindow.close();
        }

        // Re-create a mailbox grid window
        mailboxGridWindow = redui.createNewWindow("MailBoxGridWindow");
        mailboxGridWindow.dock($("#mailbox_grid_inner"));

        // Determine the mailbox
        var currentMailFolderId = getCurrentMailFolderId();

        // Retrieve inital, non-sorted data
        // TODO: sorting info should already be present on the grid view allowing to sort from the beginning
        var sortedMailFolderData = mailClientDemoData.getSortedMailFolderData(currentMailFolderId);
        mailboxGridWindow.bind(sortedMailFolderData);

        // Handle sorting
        mailboxGridWindow.mailboxGridView.sortingChanged(function (target, sortingInfo) {
            var sortedData = mailClientDemoData.getSortedMailFolderData(currentMailFolderId, sortingInfo);
            mailboxGridWindow.bind(sortedData);
        });

        // Handle row selection
        mailboxGridWindow.mailboxGridView.currentRowChanged(function (target, row) {
            showMailContent();
        });

        showMailContent();
    }

    function showMailContent() {
        if (readingPaneWindow) {
            readingPaneWindow.close();
        }

        // Determine the mailbox
        var currentMailFolderId = getCurrentMailFolderId();
        // Determine the mail
        var currentMailId = getCurrentMailId();
        var mailContent = mailClientDemoData.getMailContent(currentMailFolderId, currentMailId);
        if (mailContent) {
            readingPaneWindow = redui.createNewWindow("ReadingPaneWindow");
            readingPaneWindow.bind(mailContent);
            readingPaneWindow.dock($("#details_view_inner"));
        }
    }

    function showContactBook() {
        function editContact() {
            var currentRow = contactsWindow.contactsGridView.currentRow;
            if (currentRow) {
                var rowData = currentRow.bindingContext;
                var contactCopy = $.extend(true, {}, rowData);

                // Contact editor window
                var contactEditorWindow = redui.createNewWindow("EditContactWindow");
                contactEditorWindow.bind(contactCopy);
                contactEditorWindow.showModal();

                // When editor window is closed, update the master grid view
                contactEditorWindow.closed(function (target, dialogResult) {
                    if (dialogResult === "OK") {
                        // Copy the fields
                        rowData.firstName = contactCopy.firstName;
                        rowData.lastName = contactCopy.lastName;
                        rowData.companyName = contactCopy.companyName;
                        rowData.email = contactCopy.email;
                        rowData.phone1 = contactCopy.phone1;
                        rowData.phone2 = contactCopy.phone2;
                        rowData.web = contactCopy.web;

                        rowData.address.street = contactCopy.address.street;
                        rowData.address.zip = contactCopy.address.zip;
                        rowData.address.city = contactCopy.address.city;
                        rowData.address.country = contactCopy.address.country;
                        rowData.address.state = contactCopy.address.state;

                        // TODO: this should update grid view automatically, when using observables
                        currentRow.bind(rowData);
                    }
                });
            }
        }

        function canEditContact() {
            var currentRow = contactsWindow.contactsGridView.currentRow;
            if (currentRow) {
                return true;
            }
            return false;
        }

        // Initialize commands
        redui.commands.newContact = {
            execute: function () {
            },
            canExecute: function () {
                return false;
            }
        };

        redui.commands.removeContact = {
            execute: function () {
            },
            canExecute: function () {
                return false
            }
        };

        redui.commands.editContact = {
            execute: function () {
                editContact();
            },
            canExecute: function () {
                return canEditContact();
            }
        };

        // Get contacts, no filter, no sorting, first page
        var contacts = mailClientDemoData.getContacts();

        // Contacts window
        var contactsWindow = redui.createNewWindow("ContactBookGridWindow");
        contactsWindow.bind(contacts);
        contactsWindow.showModal();

        // This function handles grid view filtering, sorting and paging
        var udpateGrid = function () {
            var bindingContext = contactsWindow.bindingContext;

            // Extract filtering, sorting and paging info
            var filterString = bindingContext.filter;
            var pagingInfo = bindingContext.pagingInfo;
            var sortingInfo = contactsWindow.contactsGridView.sortingInfo;

            // Retrieve the grid view data, this time with all filtering, sorting and paging
            var contacts = mailClientDemoData.getContacts(filterString, sortingInfo, pagingInfo);

            // Rebind window
            contactsWindow.bind(contacts);
        };

        // Handle filtering
        contactsWindow.filterButton.getElement().click(function () {
            // Filtering resets paging
            var bindingContext = contactsWindow.bindingContext;
            bindingContext.pagingInfo.pageNo = 1;

            udpateGrid();
        });

        // Handle sorting
        contactsWindow.contactsGridView.sortingChanged(function (target, sortingInfo) {
            udpateGrid();
        });

        // Handle paging
        contactsWindow.pager.pageChanged(function (target, pageNo) {
            udpateGrid();
        });
    }

    function showSettings() {
        function changeTheme(theme) {
            $("#democss").attr("href", "/mailclientdemo/css/demo-" + theme + ".css");
            $("#reduicss").attr("href", "/redui/themes/redui-1.0.0." + theme + ".css");
        }
        function changeLanguage() {
            // Apply language
            Globalize.culture(settingsData.language);
            // Reset the UI to apply the new languages
            initializeUI();
        }

        var oldSettingsData = {
            theme: settingsData.theme,
            language: settingsData.language
        };

        var themes = [
	        { id: "red", value: "Red", toString: function () { return this.value } },
	        { id: "blue", value: "Blue", toString: function () { return this.value } },
	        { id: "magenta", value: "Magenta", toString: function () { return this.value } },
            { id: "cyan", value: "Dark Cyan", toString: function () { return this.value } },
            { id: "orange", value: "Orange", toString: function () { return this.value } }
        ];

        var languages = [
	        { id: "en", value: "English", toString: function () { return this.value } },
	        { id: "ru", value: "Русский", toString: function () { return this.value } }
        ];

        redui.optionsBag.getThemes = function () {
            return themes;
        };

        redui.optionsBag.getLanguages = function () {
            return languages;
        };

        // New email window
        var settingsWindow = redui.createNewWindow("SettingsWindow");
        settingsWindow.bind(settingsData);
        settingsWindow.showModal();

        settingsWindow.themeComboBox.getElement().change(function () {
            changeTheme(settingsData.theme);
        });

        settingsWindow.languageComboBox.getElement().change(function () {
            changeLanguage();
        });

        settingsWindow.closed(function (target, dialogResult) {
            if (dialogResult === "OK") {
                // Everything is done already, so just exit
            }
            if (dialogResult === "Cancel") {
                // Restore settings
                settingsData = oldSettingsData;
                changeTheme(settingsData.theme);
                changeLanguage();
            }
        });
    }

    function initializeUI() {
        if (ribbonWindow) {
            ribbonWindow.close();
        }

        // Initialize commands

        redui.commands.createNewEmail = {
            execute: function () {
                createNewEmail();
            },
            canExecute: function () {
                return true;
            }
        };

        redui.commands.replyToEmail = {
            execute: function () {
                replyToEmail();
            },
            canExecute: function () {
                return canReplyToEmail();
            }
        };

        redui.commands.removeEmail = {
            execute: function () {
                removeEmail();
            },
            canExecute: function () {
                return canRemoveEmail();
            }
        };

        redui.commands.showContactBook = {
            execute: function () {
                showContactBook();
            },
            canExecute: function () {
                return true;
            }
        };

        redui.commands.showSettings = {
            execute: function () {
                showSettings();
            },
            canExecute: function () {
                return true;
            }
        };

        // Debug commands
        redui.commands.showModel = {
        	execute: function (menuItem) {
        		var data = {
        			info: JSON.stringify(menuItem.menu.parent.model, undefined, 2)
        		};
        		var windowModel = redui.model.getWindowModel("InfoWindow");
        		windowModel.title = "Control Model";
        		var infoWindow = redui.createNewWindowFromModel(windowModel);
        		infoWindow.bind(data);
        		infoWindow.show({ windowPosition: redui.windowPosition.center });
            },
            canExecute: function () {
                return true;
            }
        };

        redui.commands.showBindingContext = {
        	execute: function (menuItem) {
        		var bindingContext = menuItem.menu.parent.bindingContext;
            	var data = {
            		info: bindingContext ? JSON.stringify(bindingContext, undefined, 2) : "undefined"
            	};
            	var windowModel = redui.model.getWindowModel("InfoWindow");
            	windowModel.title = "Control Model";
            	var infoWindow = redui.createNewWindowFromModel(windowModel);
            	infoWindow.bind(data);
            	infoWindow.show({ windowPosition: redui.windowPosition.center });
            },
            canExecute: function () {
                return true;
            }
        };

        redui.commands.undock = {
            execute: function (menuItem) {
                menuItem.window.undock();
            },
            canExecute: function () {
                return true;
            }
        };

        ribbonWindow = redui.createNewWindow("RibbonWindow");
        ribbonWindow.dock($("#ribbon_inner"));

        showMailboxTree();
    }

    initializeUI();
});