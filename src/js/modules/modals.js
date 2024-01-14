
const modals = (state) => {
    function bindModal(selectorBtn, selectorModal, selectorCloseBtn, closeClickOverlay = true, ) {
        const modalBtn = document.querySelectorAll(selectorBtn),
            modal = document.querySelector(selectorModal),
            closeBtn = document.querySelector(selectorCloseBtn),
            windows = document.querySelectorAll('[data-modal]');

        modalBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }
                

                if(btn.getAttribute('data-valid') === 'first'){
                    if('width' in state && 'height' in state && 'form' in state){
                        console.log('123');
                    } else{
                        alert('Заполните все поля');
                        return;
                    }
                }

                
                if(btn.getAttribute('data-valid') === 'second'){
                    if('type' in state && 'profile' in state){
                        console.log('123');
                    } else{
                        alert('Заполните все поля');
                        return;
                    }
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay){
                modal.style.display = 'none';
                document.body.style.overflow = '';

                windows.forEach(item => {
                    item.style.display = 'none';
                });
            }
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';

            windows.forEach(item => {
                item.style.display = 'none';
            });
        })
    }

    function showModalByTime(selector, time){
        setTimeout(() =>{
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
}
export default modals;