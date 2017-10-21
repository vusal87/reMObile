$(document).ready(function(){
 var bar = new ProgressBar.Circle(container, {
  color: '#585B6F',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#585B6F', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
bar.text.style.margin = '-11px';

bar.animate(0.1);




var bar = new ProgressBar.Circle(container2, {
  color: '#585B6F',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#585B6F', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '3rem';
bar.text.style.margin = '-10px';

bar.animate(0.7);


var bar = new ProgressBar.Circle(container3, {
  color: '#585B6F',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#585B6F', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '3rem';
bar.text.style.margin = '-10px';

bar.animate(.9);



var countDownDate = new Date("aug 31,2017 3:28:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
 
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  

    document.getElementById("demo1").innerHTML = days;
    document.getElementById("demo1-2").innerHTML ="days";
    document.getElementById("demo2").innerHTML = hours;
    document.getElementById("demo2-2").innerHTML ="hours";
    document.getElementById("demo3").innerHTML = minutes;
    document.getElementById("demo3-2").innerHTML ="minutes";
    document.getElementById("demo4").innerHTML = seconds;
    document.getElementById("demo4-2").innerHTML ="seconds";
    
    
}, 500)



    var $btnScroll= $(".scroll-top")
    $(window).on("scroll",function () {
        if($(window).scrollTop() >=20){
         $btnScroll.css({
             'opacity':1
         })
        }
        else{
            $btnScroll.css({
                'opacity':0
            });
        }

        $btnScroll.on("click",function(){
            $(window).scrollTop(0,900)
        })
    });



    $(window).scroll(function(){
        if ($(this).scrollTop() >=50) {
            $('.main-menu').addClass('fixed');
        } else {
            $('.main-menu').removeClass('fixed');
        }
    });

})