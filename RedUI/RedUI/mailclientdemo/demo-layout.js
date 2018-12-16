$(function () {
    var HEADER_HEIGHT = 32;
    var RIBBON_HEIGHT = 78;
    var BREADCRUMBS_HEIGHT = 0;

    var INFO_PANEL_HEIGHT = 0;
    var FOOTER_HEIGHT = 24;

    var SPLITTER_WIDTH = 5;
    var SPLITTER_HEIGHT = 5;

    var PROJECT_TREE_WIDTH = 300;
    var MAILBOX_GRID_WIDTH = 630;

    $("#header").css(
        {
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: "auto",
            width: "100%",
            height: HEADER_HEIGHT + "px"
        });

    $("#ribbon").css(
        {
            left: "0px",
            right: "0px",
            top: HEADER_HEIGHT + "px",
            bottom: "auto",
            width: "100%",
            height: RIBBON_HEIGHT + "px"
        });

    $("#breadcrumbs").css(
        {
            left: "0px",
            right: "0px",
            top: HEADER_HEIGHT + RIBBON_HEIGHT + "px",
            bottom: "auto",
            width: "100%",
            height: BREADCRUMBS_HEIGHT + "px"
        });

    $("#client_area").css(
        {
            left: "0px",
            right: "0px",
            top: HEADER_HEIGHT + RIBBON_HEIGHT + BREADCRUMBS_HEIGHT + "px",
            bottom: FOOTER_HEIGHT + "px",
            width: "100%",
            height: "auto"
        });

    $("#project_area").css(
        {
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: INFO_PANEL_HEIGHT + SPLITTER_HEIGHT + "px",
            width: "100%",
            height: "auto"
        });

    $("#project_tree").css(
        {
            left: "0px",
            right: "auto",
            top: "0px",
            bottom: "0px",
            width: PROJECT_TREE_WIDTH + "px",
            height: "100%"
        });

    $("#mailbox_grid").css(
        {
            left: PROJECT_TREE_WIDTH + SPLITTER_WIDTH + "px",
            right: "0px",
            top: "0px",
            bottom: "0px",
            width: MAILBOX_GRID_WIDTH + "px",
            height: "100%"
        });

    $("#details_view").css(
        {
            left: PROJECT_TREE_WIDTH + SPLITTER_WIDTH + MAILBOX_GRID_WIDTH + SPLITTER_WIDTH + "px",
            right: "0px",
            top: "0px",
            bottom: "0px",
            width: "auto",
            height: "100%"
        });

    $("#info_panel").css(
        {
            left: "0px",
            right: "0px",
            top: "auto",
            bottom: "0px",
            width: "100%",
            height: INFO_PANEL_HEIGHT + "px"
        });

    $("#footer").css(
        {
            left: "0px",
            right: "0px",
            top: "auto",
            bottom: "0px",
            width: "100%",
            height: FOOTER_HEIGHT + "px"
        });

    // The attempt to position splitters automatically based on the prev/next div position failed
    // since it's not possible to get the value of the next div bottom and it's required to 'dock' the horizontal splitter
    // to the top of the next div (by setting the value of its bottom).
    // Setting the top value would position the splitter correctly initially, but it would stay on the same location
    // when window resizes, breaking the layout.
    $("#vertical_splitter1").css(
        {
            left: PROJECT_TREE_WIDTH + "px",
            right: "auto",
            top: "0px",
            bottom: "0px",
            width: SPLITTER_WIDTH + "px",
            height: "100%"
        });

    $("#vertical_splitter2").css(
        {
            left: PROJECT_TREE_WIDTH + SPLITTER_WIDTH + MAILBOX_GRID_WIDTH + "px",
            right: "auto",
            top: "0px",
            bottom: "0px",
            width: SPLITTER_WIDTH + "px",
            height: "100%"
        });

    $(".horizontal_splitter").css(
        {
            left: "0px",
            right: "0px",
            top: "auto",
            bottom: INFO_PANEL_HEIGHT + "px",
            width: "100%",
            height: SPLITTER_HEIGHT + "px"
        });

    $("#vertical_splitter1").draggable(
        {
            axis: "x",
            containment: "parent",
            stop: function (event, ui) {
                $("#project_tree").width(ui.position.left);
                $("#mailbox_grid").css({ left: ui.position.left + SPLITTER_WIDTH + "px" });
                $("#vertical_splitter2").css({ left: ui.position.left + SPLITTER_WIDTH + $("#mailbox_grid").width() + "px" });
                $("#details_view").css({ left: ui.position.left + SPLITTER_WIDTH + $("#mailbox_grid").width() + SPLITTER_WIDTH + "px" });
            }
        });

    $("#vertical_splitter2").draggable(
        {
            axis: "x",
            containment: "parent",
            stop: function (event, ui) {
                $("#mailbox_grid").width(ui.position.left - $("#project_tree").width() - SPLITTER_WIDTH);
                $("#details_view").css({ left: ui.position.left + SPLITTER_WIDTH + "px" });
            }
        });

    $(".horizontal_splitter").draggable(
        {
            axis: "y",
            containment: "parent",
            stop: function (event, ui) {
                $("#project_area").css({
                    bottom: $("#client_area").height() - ui.position.top
                });
                var infoPanelNewHight = $("#client_area").height() - $("#project_area").height() - SPLITTER_HEIGHT;
                $("#info_panel").height(infoPanelNewHight);
                $(".horizontal_splitter").css(
                    {
                        left: "0px",
                        right: "0px",
                        top: "auto",
                        bottom: infoPanelNewHight + "px",
                        width: "100%",
                        height: SPLITTER_HEIGHT + "px"
                    });
            }
        });
});