const ndModal = ()=> {
    let isOpen = false;
    const handler = document.querySelectorAll('[data-nd-modal]');
    const selectors = {
        container: document.querySelector('[data-nd-modal-container]'),
        close: document.querySelector('[data-nd-modal-close]')
    }

    

    const closeFn = ()=> {
       
        if(selectors.close) {
            selectors.close.onclick = (event)=> {
                console.log(event.target)
                // if(!isOpen) return;
                // isOpen = false;
                // selectors.container.remove();
            }    
        }
    }

    const htmlTemplate = (content)=> {

        const mBody = `
            <div class="nd_modal">
            <div class="nd_modal_overlay"></div>
            <button class="nd_modal_close"><span></span></button>
            </div>
        `

        return mBody;
    }

    if(handler.length){
        handler.forEach((el)=> {
            const body = document.body;
            const content = document.getElementById(el.getAttribute('data-nd-modal'));
    
            el.onclick = (event)=> {
                event.preventDefault();
                isOpen = true;
                body.innerHTML += htmlTemplate()
            }
    
        })
 
    }



}

export default ndModal;