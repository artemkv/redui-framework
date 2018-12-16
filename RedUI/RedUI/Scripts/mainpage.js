"use strict";

$(function () {

    // Left panel updates right panel

    $("#window_model_window").hover(function () {
        $("#redui_window_1").addClass("highlight");
    },
    function () {
        $("#redui_window_1").removeClass("highlight");
    });

    $("#window_model_firstname").hover(function () {
        $("#redui_control_2_template").addClass("highlight");
    },
    function () {
        $("#redui_control_2_template").removeClass("highlight");
    });

    $("#window_model_lastname").hover(function () {
        $("#redui_control_3_template").addClass("highlight");
    },
    function () {
        $("#redui_control_3_template").removeClass("highlight");
    });

    $("#window_model_okbutton").hover(function () {
        $("#redui_control_4").addClass("highlight");
    },
    function () {
        $("#redui_control_4").removeClass("highlight");
    });

    $("#window_model_cancelbutton").hover(function () {
        $("#redui_control_5").addClass("highlight");
    },
    function () {
        $("#redui_control_5").removeClass("highlight");
    });

    // Right panel updates left panel

    $("#redui_control_2_template").hover(function () {
        $("#window_model_firstname").addClass("highlight");
    },
    function () {
        $("#window_model_firstname").removeClass("highlight");
    });

    $("#redui_control_3_template").hover(function () {
        $("#window_model_lastname").addClass("highlight");
    },
    function () {
        $("#window_model_lastname").removeClass("highlight");
    });

    $("#redui_control_4").hover(function () {
        $("#window_model_okbutton").addClass("highlight");
    },
    function () {
        $("#window_model_okbutton").removeClass("highlight");
    });

    $("#redui_control_5").hover(function () {
        $("#window_model_cancelbutton").addClass("highlight");
    },
    function () {
        $("#window_model_cancelbutton").removeClass("highlight");
    });

    $("#redui_window_1_titleouter").hover(function () {
        $("#window_model_window_title").addClass("highlight");
    },
    function () {
        $("#window_model_window_title").removeClass("highlight");
    });

    // Programming code - left panel updates right panel

    $("#programming_model_create_window").click(function () {
        $("#program_code span.hoverable").removeClass("highlight");
        $("#program_code_illustration img").hide();

        $("#programming_model_create_window").addClass("highlight");
        $("#model2html").show();
    });
    $("#programming_model_show_window").click(function () {
        $("#program_code span.hoverable").removeClass("highlight");
        $("#program_code_illustration img").hide();

        $("#programming_model_show_window").addClass("highlight");
        $("#showwindow").show();
    });
    $("#programming_model_bind_window").click(function () {
        $("#program_code span.hoverable").removeClass("highlight");
        $("#program_code_illustration img").hide();

        $("#programming_model_bind_window").addClass("highlight");
        $("#databind").show();
    });
    $("#programming_model_window_props").click(function () {
        $("#program_code span.hoverable").removeClass("highlight");
        $("#program_code_illustration img").hide();

        $("#programming_model_window_props").addClass("highlight");
        $("#windowprops").show();
    });
    $("#programming_model_control_props").click(function () {
        $("#program_code span.hoverable").removeClass("highlight");
        $("#program_code_illustration img").hide();

        $("#programming_model_control_props").addClass("highlight");
        $("#controlprops").show();
    });
    $("#programming_model_events").click(function () {
        $("#program_code span.hoverable").removeClass("highlight");
        $("#program_code_illustration img").hide();

        $("#programming_model_events").addClass("highlight");
        $("#okclick").show();
    });
});