const modals = () => {
    function bindModal(selectorBtn, selectorModal, selectorCloseBtn) {
        const modalBtn = document.querySelectorAll(selectorBtn),
            modal = document.querySelector(selectorModal),
            closeBtn = document.querySelector(selectorCloseBtn);
    
        modalBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            })
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal){
                modal.style.display = '';
                document.body.style.overflow = '';
            }
        });
    
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = '';
            document.body.style.overflow = '';
        })
        
    }

    function showModalByTime(selector, time){
        setTimeout(() =>{
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
}
export default modals;