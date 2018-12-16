# Pager Control Example

This example explains how to create a window with 5 Pager controls, bind them the data and handle paging. Note how pager4 uses proprietary properties "currentPage" and "pagesCount" for paging.

_See interactive example on [http://www.redui.net](http://www.redui.net)_

## UI Model

{code:javascript}
{
    "windows": [
        {
            "name": "PagersExample",
            "title": "Pagers",
            "left": 500,
            "top": 100,
            "width": 550,
            "height": 300,
            "controls": [
                {
                    "name": "unboundPager",
                    "type": "pager"
                },
                {
                    "name": "pager1",
                    "type": "pager",
                    "bindsTo": "pagerInfo1"
                },
                {
                    "name": "pager2",
                    "type": "pager",
                    "bindsTo": "pagerInfo2"
                },
                {
                    "name": "pager3",
                    "type": "pager",
                    "bindsTo": "pagerInfo3"
                },
                {
                    "name": "pager4",
                    "type": "pager",
                    "bindsTo": "pagerInfo4",
                    "pageNoProperty": "currentPage",
                    "pagesTotalProperty": "pagesCount"
                }
            ]
        }
    ]
}
{code:javascript}

## Data Model

{code:javascript}
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
{code:javascript}

## Code

{code:javascript}
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
{code:javascript}