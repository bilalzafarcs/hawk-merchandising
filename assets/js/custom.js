jQuery(document).ready(function ($) {
    function updateDotPositions() {
        const dotCircle = $(".dotCircle");
        const dots = $(".itemDot");

        const circleDiameter = dotCircle.width();
        const circleRadius = circleDiameter / 2;

        const iconDiameter = dots.width();
        const adjustedRadius = circleRadius - iconDiameter / 2 ;

        let angle = 0;
        const angleIncrement = (2 * Math.PI) / dots.length;

        dots.each(function () {
            const left = Math.round(
                circleRadius + adjustedRadius * Math.cos(angle) - iconDiameter / 2
            );
            const top = Math.round(
                circleRadius + adjustedRadius * Math.sin(angle) - iconDiameter / 2
            );

            $(this).css({
                left: `${left}px`,
                top: `${top}px`,
            });

            angle += angleIncrement;
        });
    }

    function startRotation() {
        let activeIndex = 1;

        setInterval(function () {
            const totalDots = $(".itemDot").length;
            if (activeIndex > totalDots) {
                activeIndex = 1;
            }

            $(".itemDot").removeClass("active");
            $(`[data-tab="${activeIndex}"]`).addClass("active");
            $(".CirItem").removeClass("active");
            $(`.CirItem${activeIndex}`).addClass("active");

            $(".dotCircle").css({
                transform: `rotate(${360 - (activeIndex - 1) * (360 / totalDots)}deg)`,
                transition: "2s",
            });

            $(".itemDot").css({
                transform: `rotate(${(activeIndex - 1) * (360 / totalDots)}deg)`,
                transition: "1s",
            });

            activeIndex++;
        }, 5000);
    }

    updateDotPositions();
    $(window).resize(updateDotPositions);

    $(".itemDot").click(function () {
        const clickedIndex = $(this).data("tab");

        $(".itemDot").removeClass("active");
        $(this).addClass("active");

        $(".CirItem").removeClass("active");
        $(`.CirItem${clickedIndex}`).addClass("active");

        $(".dotCircle").css({
            transform: `rotate(${360 - (clickedIndex - 1) * (360 / $(".itemDot").length)}deg)`,
            transition: "2s",
        });

        $(".itemDot").css({
            transform: `rotate(${(clickedIndex - 1) * (360 / $(".itemDot").length)}deg)`,
            transition: "1s",
        });
    });

    startRotation();
});
