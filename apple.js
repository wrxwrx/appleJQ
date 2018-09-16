$(function () {
    $(".icon-liebia").click(function () {
        $(document.body).toggleClass("hidden");
        $(".tanchu").slideToggle();
        $(".icon-gouwudai101").toggleClass("display");
        $(".gang11").toggleClass("gang1");
        $(".gang22").toggleClass("gang2");
        $(".gang22").toggleClass("gang222");
    })
    $(".icon-gouwudai101").click(function () {
        $(".xiaochu").toggleClass("display2");
    })
    $(".coluumn h3").click(function () {
        $(this).next().children().toggleClass("display2");
        $(this).children().toggleClass("icon-cuowu");
        $(this).children().toggleClass("icon-jia");
})

})
// <span class="iconfont icon-jia"></span>icon-cuowu