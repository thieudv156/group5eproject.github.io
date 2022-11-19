$(function () {
    $('.branch-1').click(
        function () {
            // $('.1').css({'display': 'block'});
            // }
            // alert('da click');
            // $('.1').slideDown();
            if ($('.1').css('display') === 'none') {
                $('.child').slideUp();

                $('.1').slideDown();
            }
            $('.branch-1').removeClass('active');
            $('.branch-2').removeClass('active');
            $('.branch-3').removeClass('active');
            $(this).addClass('active');
            //  else {
            //     $('.1').slideUp();
            // }
        });

    $('.branch-2').click(
        function () {
            // $('.1').css({'display': 'block'});
            // }
            // alert('da click');
            // $('.1').slideDown();
            if ($('.2').css('display') === 'none') {
                $('.child').slideUp();
                $('.2').slideDown();
            }
            $('.branch-1').removeClass('active');
            $('.branch-2').removeClass('active');
            $('.branch-3').removeClass('active');
            $(this).addClass('active');
            // else {
            //     $('.2').slideUp();
            // }
        });
    $('.branch-3').click(
        function () {
            // $('.1').css({'display': 'block'});
            // }
            // alert('da click');
            // $('.1').slideDown();
            if ($('.3').css('display') === 'none') {
                $('.child').slideUp();
                $('.3').slideDown();
            }
            $('.branch-1').removeClass('active');
            $('.branch-2').removeClass('active');
            $('.branch-3').removeClass('active');
            $(this).addClass('active');
            // else {
            //     $('.2').slideUp();
            // }
        });
   
    
});