jQuery(document).ready(function ($) {
    $("#contact-form").submit(function (e) {
        if (e.preventDefault(), "" === grecaptcha.getResponse()) return $("#response").html("Please complete the reCAPTCHA."), !1;
        var t = new FormData($(this)[0]);
        return $.ajax({
            url: "/orderform.php",
            type: "POST",
            data: t,
            async: !1,
            cache: !1,
            contentType: !1,
            processData: !1,
            success: function (e) {
                $("#response").html(e), e.includes("Form submitted successfully") && (window.location.href = "/thankyou")
            }
        }), !1
    }), $("#ajaxform").submit(function (e) {
        e.preventDefault();
        var t = $(this);
        $(".loader_icon").show(), $.ajax({
            url: "/contact.php",
            global: !1,
            type: "POST",
            data: t.serialize(),
            success: function (e) {
                $("div#form_message").html(e), $(".loader_icon").hide(), e.includes("Form submitted successfully") && (window.location.href = "/thankyou")
            }
        })
    })
});