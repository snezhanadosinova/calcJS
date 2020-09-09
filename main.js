function calc() {
    let industry = $('#industry').val();
    let zip = $('#zip').val();
    let bill = $('#bill').val();
    let callsPerYear = $('#callsPerYear').val();
    let custIncr = $('#custIncr').val();
    let custLife = $('#custLife').val();

    let mrf = 149.99;
    let monthlyImpact = bill * custIncr;
    let annualImpact = monthlyImpact  * callsPerYear * 12;
    let potentialImpact = annualImpact * custLife;
    let monthlyROI = ((monthlyImpact / mrf)-1) * 100;
    let annualROI = (annualImpact / (mrf * 12) - 1) * 100;


    $("#mrf").html(mrf.toFixed(2));
    $("#monthlyImpact").html(monthlyImpact.toFixed(2));
    $("#annualImpact").html(annualImpact.toFixed(2));
    $("#potentialImpact").html(potentialImpact.toFixed(2));
    $("#monthlyROI").html(monthlyROI.toFixed(2));
    $("#annualROI").html(annualROI.toFixed(2));

    if (monthlyROI < 0) {
        $(".monthlyROI").parent().css("background-color", "#ffd9db");
    } else {
        $(".monthlyROI").parent().css("background-color", "white");
    }
    if (annualROI < 0) {
        $(".annualROI").parent().css("background-color", "#ffd9db");
    }else {
        $(".annualROI").parent().css("background-color", "white");
    }
}

function formValidation() {
    let industry = $('#industry').val();
    let zip = $('#zip').val();
    let bill = $('#bill').val();
    let callsPerYear = $('#callsPerYear').val();
    let custIncr = $('#custIncr').val();
    let custLife = $('#custLife').val();


    if (zip === '' || industry === '' || bill === '' || callsPerYear === '' || custIncr === '' || custLife === '') {
        let err = "Fields required!";
        alert(err)
    } else {
        if ((zip.length) < 5 || (zip.length) > 5) {
            let err = "zipcode should be 5 digits";
            alert(err)
        } else {
            $('#calc-table').removeClass('d-none');
            calc();
        }
    }
}

$('.resetBtn').bind('click', function () {
    $('.selectpicker').val('Nothing selected').selectpicker('refresh');
    $("#mrf").html('');
    $("#monthlyImpact").html('');
    $("#annualImpact").html('');
    $("#fiveImpact").html('');
    $("#monthlyROI").html('');
    $("#annualROI").html('');
    $('#calc-table').addClass('d-none');
});


function onlyNum () {
    this.event.target.value = this.event.target.value.replace(/([^0-9|^.,]*)+/g,'')
}

$(".floatNumberField").change(function() {
    $(this).val(parseFloat($(this).val()).toFixed(2));
});