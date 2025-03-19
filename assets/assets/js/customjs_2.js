
jQuery(document).ready(function ($) {
    function updateDotPositions() {
        const dotCircle = $(".dotCirclex");
        const dots = $(".itemDotx");

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
            const totalDots = $(".itemDotx").length;
            if (activeIndex > totalDots) {
                activeIndex = 1;
            }

            $(".itemDotx").removeClass("active");
            $(`[data-tab="${activeIndex}"]`).addClass("active");
            $(".CirItemx").removeClass("active");
            $(`.CirItemx${activeIndex}`).addClass("active");

            $(".dotCirclex").css({
                transform: `rotate(${360 - (activeIndex - 1) * (360 / totalDots)}deg)`,
                transition: "2s",
            });

            $(".itemDotx").css({
                transform: `rotate(${(activeIndex - 1) * (360 / totalDots)}deg)`,
                transition: "1s",
            });

            activeIndex++;
        }, 5000);
    }

    updateDotPositions();
    $(window).resize(updateDotPositions);

    $(".itemDotx").click(function () {
        const clickedIndex = $(this).data("tab");

        $(".itemDotx").removeClass("active");
        $(this).addClass("active");

        $(".CirItemx").removeClass("active");
        $(`.CirItemx${clickedIndex}`).addClass("active");

        $(".dotCirclex").css({
            transform: `rotate(${360 - (clickedIndex - 1) * (360 / $(".itemDotx").length)}deg)`,
            transition: "2s",
        });

        $(".itemDotx").css({
            transform: `rotate(${(clickedIndex - 1) * (360 / $(".itemDotx").length)}deg)`,
            transition: "1s",
        });
    });

    startRotation();
});
