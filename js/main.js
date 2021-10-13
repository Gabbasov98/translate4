$(document).ready(function() {
    // File name
    $('input[type="file"]').each(function() {
        var $input = $(this),
            $label = $('.choose span'),
            labelVal = $label.html();

        $input.on('change', function(element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.html(fileName) : $label.html(labelVal);
        });
    });
    
    // Choose category
    $('.product-item a').on('click', function(){
        var product = $(this).data('product');
        console.log(product);
        localStorage.setItem('product', product);
    });
    $('.form .form-btn').on('click', function(){
        window.location.replace(localStorage.getItem('product'));
    });
    
    // Page replace
    $('.stars label:nth-child(6), .stars label:nth-child(8), .stars label:nth-child(10)').on('click', function(){
        window.location.replace('index7.html');
    });
    $('.stars label:nth-child(2), .stars label:nth-child(4), .send-again').on('click', function(){
        window.location.replace('index8.html');
    });
    
    // Lang switch
    var baseUrl = 'http://euro.do/match';
    $('.lang').on('change', function(){
        var lang = $(this).val();
        window.location.replace(baseUrl + lang);
    });
});














