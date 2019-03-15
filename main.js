

    alert("gg");
    $('#div1').hover(
        function () {
            alert("hello");
            $(this).css({'background-color': 'lightseagreen'});
        }
    );
    $('.time').mouseout(
        function () {
            $(this).css({'background-color': 'none'});
        }
    );

