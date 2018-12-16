# GridView Pagination Example

This example explains how to create a window with an editable GridView control, bind to the paged data and handle the pagination using Pager Control.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "PaginationExample",
            "title": "Pagination",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 450,
            "controls": [
                {
                    "name": "customersGrid",
                    "label": "Customers",
                    "type": "gridview",
                    "bindsTo": "list",
                    "canUserAddRows": false,
                    "columns": [
                        {
                            "type": "gridviewcheckboxcolumn",
                            "name": "isSelected",
                            "label": "Select",
                            "width": 60,
                            "bindsTo": "isSelected"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "id",
                            "label": "Id",
                            "width": 60,
                            "bindsTo": "id"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "firstName",
                            "label": "First Name",
                            "width": 170,
                            "bindsTo": "firstName"
                        },
                        {
                            "type": "gridviewtextboxcolumn",
                            "name": "lastName",
                            "label": "Last Name",
                            "width": 170,
                            "bindsTo": "lastName"
                        }
                    ]
                },
                {
                    "name": "pager",
                    "type": "pager",
                    "bindsTo": "pagerInfo"
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
// Generate 3000 records
var bigCustomerData = { list: []() };
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
		list: []()
	};
	for (var i = 0; i < pageSize; i++) {
		var j = (pageNo - 1) * pageSize + i;
		if (j >= bigCustomerData.list.length)
			break;

		pagedData.list[i](i) = bigCustomerData.list[j](j);
	}
	return pagedData;
}
{code:javascript}

## Code

{code:javascript}
var myWindow = redui.createNewWindow("PaginationExample");
var pagedData = getPagedData(1);
myWindow.bind(pagedData);
myWindow.show();

myWindow.pager.pageChanged(function (target, pageNo) {
	var pagedData = getPagedData(pageNo);
	myWindow.bind(pagedData);
});
{code:javascript}


.