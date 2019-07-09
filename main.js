$(document).ready( () => {
    $('.button1').on('click', e => {
    $('.box1').toggleClass("show")
    $('.box2').removeClass("show")
    $('.box3').removeClass("show")
    })

    $('.button2').on('click', e => {
        $('.box2').toggleClass("show")
        $('.box1').removeClass("show")
        $('.box3').removeClass("show")
        })

        $('.button3').on('click', e => {
            $('.box3').toggleClass("show")
            $('.box2').removeClass("show")
            $('.box1').removeClass("show")
            })
})









/* $(document).ready( () => {
    $('.button1').on('click', e => {
        $('.box1').slideToggle("shows")
        .removeClass('box2','box3')
    })
    $('.button2').on('click', e => {
        $('.box2').slideToggle("shows")
        .removeClass('.box1','.box3')
    })
    $('.button3').on('click', e => {
        $('.box3').slideToggle("shows")
    })
})


//$('#button').on('click', e => {
  //  $('p').slideToggle()
//})


//var acc = document.getElementsByClassName("button");
//var i;

//for (i = 0; i < acc.length; i++) {
  //acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
   // this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    //var panel = this.nextElementSibling;
    //if (panel.style.display === "block") {
      //panel.style.display = "none";
    //} else {
      //panel.style.display = "block";
   // }
 // });
//}
