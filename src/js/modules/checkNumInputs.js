const checkNumInputs = (selector, event) => {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(item => {
        item.addEventListener(event, () => {
            if(item.nodeName == 'INPUT') {
                item.value = item.value.replace(/\D/, '');
                
                if(item.value == ''){
                    

                } else {
                    
                }
            }
           
        });
    });
};

export default checkNumInputs