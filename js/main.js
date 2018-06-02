

/* Particle.js*/
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 88,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 15
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.5,
                "opacity_min": 0.15,
                "sync": false
            }
        },
        "size": {
            "value": 2.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.15,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#33b1f8",
            "opacity": 0.25,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/* Typing.js */
$(function(){
	$(".typed").typed({
		strings: ["Tech Agnostic", "Consultant", "Web Dev", "Mentor"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


/* Main.js */
document.addEventListener("DOMContentLoaded", function () {
    // new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 19.18081918081918,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 4,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            nb: 80
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: !1,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
}, !1);


function manageProjects(hide, doHide){
    var allProjects = ["ax", "java", "python", "others", "all"];
    $.each(allProjects, function(i, v){
        var className = v;
        if(doHide === "hideall"){
            $("."+className).hide();
        } else if(doHide === "showall"){
            $("."+className).show();
        } else if(hide === className){
            if(doHide === "hide"){
                $("."+className).hide();
            } else if(doHide === "show"){
                $("."+className).show();
            } 
        }
    });
}
$(document).ready(function () {
    $('body').toggleClass('loaded');
    // document.addEventListener('DOMContentLoaded', () => {
    //     const scroller = new SweetScroll({});
    // }, false);
    // new WOW().init();
    $(".down").click(function(){
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
    manageProjects("NA", "hideall");
    manageProjects("ax", "show");
});

$(document).ready(function () {
    $("#ax").on("click", function(){
        manageProjects("NA", "hideall");
        manageProjects("ax", "show");
    });
    $("#java").on("click", function(){
        manageProjects("NA", "hideall");
        manageProjects("java", "show");
    });
    $("#python").on("click", function(){
        manageProjects("NA", "hideall");
        manageProjects("python", "show");
    });
    $("#others").on("click", function(){
        manageProjects("NA", "hideall");
        manageProjects("others", "show");
    });
    $("#all").on("click", function(){
        manageProjects("NA", "showall");
    });


    $(".smooth-scroll").click(function(){
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
});