import "../assets/scss/app.scss"
import Swiper, { Navigation, Autoplay} from 'swiper';
import 'swiper/css';
import ndModal from './modal';
import inView from 'in-view'
import GLightbox from 'glightbox';


// Loade Event

const webControls = {
    menuToggler: ()=> {
        const btn = document.getElementById('menuToggler');

        btn.onclick = (e)=> {
            document.body.classList.toggle('menu_open')
            btn.classList.toggle('active_')
        }
    },
    scrollClass: ()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 5){
                document.body.classList.add('scrolled_')
            }else{
                document.body.classList.remove('scrolled_')
            }
        }) 
    },
    smoothScroll: ()=> {
        const state = document.querySelectorAll('[data-hash]');
        
        if(state.length){
            state.forEach((el)=> {
            
                const target = el.getAttribute('data-hash');
    
                el.onclick = (e)=> {
                    e.preventDefault();
                    document.getElementById('menuToggler').click();
                    document.querySelector(target).scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
                
            })
        }

    },
    counterAnim: ()=> {
        let obj = document.querySelectorAll('[data-nd-counter]')
            let startTime = null;
            let currentTime = Date.now();
            let initVal = 0;
            let duration = 2000;
    
    
            obj.forEach((el)=> {
    
                let lastVal = el.getAttribute('data-nd-counter');
                const step = (currentTime ) => {
    
                    if (!startTime) {
                        startTime = currentTime ;
                    }
                    
    
                    const progress = Math.min((currentTime  - startTime) / duration, 1);
                    let fVal = Math.floor(progress * (lastVal - initVal) + initVal);
    
                    el.innerHTML = (fVal < 10) ? `0${fVal}`: fVal;
    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                    else{
                        window.cancelAnimationFrame(window.requestAnimationFrame(step));
                    }
                };
    
                window.requestAnimationFrame(step);
            })
    }
}

webControls.menuToggler();
webControls.scrollClass();
webControls.smoothScroll();

// Modal
const lightbox = GLightbox({
    selector: '[data-nd-modal]',
    openEffect: 'zoom',
    closeEffect: 'fade',
    height: 'auto',
});
// Swiper Area

const serviceSwiper = new Swiper('.services_wrapper .swiper_', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        prevEl: '[data-s-nav="services"] .prev_',
        nextEl: '[data-s-nav="services"] .next_'
    },
    autoplay: {
        delay: 5000,
      },
    breakpoints: {
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    },
});


const associatesSwiper = new Swiper('.associates_wrapper .swiper_', {
    modules: [Navigation, Autoplay],
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        prevEl: '[data-s-nav="associates"] .prev_',
        nextEl: '[data-s-nav="associates"] .next_'
    },
    autoplay: {
        delay: 5000,
      },
    breakpoints: {
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
    },
});

const testiMonials = new Swiper('.testimonial_wrapper .swiper_', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        prevEl: '[data-s-nav="testimonail"] .prev_',
        nextEl: '[data-s-nav="testimonail"] .next_'
    },
    autoplay: {
        delay: 5000,
      },
    breakpoints: {
        768: {
        slidesPerView: 1,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 2,
        spaceBetween: 60,
        },
    },
});

// Inview
const activeClass = (value, unbound = false)=> {
    const h = document.querySelectorAll('[data-hash]');

    h.forEach((event, ind, arr)=> {
        let tag = event.getAttribute('data-hash');

        if(value == tag.substring(1)){
            for(let x = 0; x < arr.length; x++){
                arr[x].parentElement.classList.remove('active_')
            }

            if(unbound) {
                event.parentElement.classList.remove('active_');
                return
            }
            event.parentElement.classList.add('active_');
        }
    })
}

inView('.in_section').on('enter', (event)=> {
    event.classList.add('animte_')

    if(event.id == 'about'){
        webControls.counterAnim();
    }

}).on('exit', el => { 
   
})



inView.offset(200)


window.addEventListener('load', ()=> {
    const lodaer = document.getElementById('domloader');
    setTimeout(()=> {
        document.body.classList.add('dom_loded');

        setTimeout(()=> {
            lodaer.remove();
        }, 1200)
    },500)
})