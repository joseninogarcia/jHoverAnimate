/*
    jHoverAnimate Plugin 
    Developer: Jose Nino N. Garcia
    Date Created: 12-2-2014
    Date Updated: 12-2-2014 / 3:21 pm - Added with the new featre which is the automatic animation
    Description: This plugin used to display the Images by means of hovering the div's that might be used for presentations.
*/

(function ($) {

    $.fn.jHoverAnimate = function (options) {

        var $this = $(this);
        var li_length = $this.find("li");
        var img_pth = $this.find("img");
        var ul_pth = $this.find("ul");
        var settings = $.extend({
            paging: false,
            intervals : 3000
        }, options);


        $this.after("<div id=\"paging\"></div>");

        var str = "";
        for (var i = 0; i < li_length.length; i++) {
            str += "<a href='#' class='color" + (i + 1) + "' style='float:left;'></a>";
        }
        str += "<div class='clear'></div>";

        $("#paging").html(str);
        $("#paging a").css("margin-right", "0px");

        var getLink = $("#paging a");

        var intLine = 1;
        var length_key = li_length.length;
        var elem_width1 = img_pth.width();

        setInterval(function(){
            if(intLine == length_key){
                ul_pth.animate({
                    "margin-left" : "0px" 
                });
                intLine = 1;
            }else{
                ul_pth.animate({
                    "margin-left" : "-" +  intLine++ * elem_width1
                });
            }
        }, settings.intervals);

        getLink.hover(function () {
            var num_count = getLink.index(this);
            var elem_width = img_pth.width();

            ul_pth.animate({
                "margin-left" : "-" + (num_count * elem_width),
            });
        });
    };
} (jQuery));