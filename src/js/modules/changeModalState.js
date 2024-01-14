import checkNumInputs from "./checkNumInputs";


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
    
    checkNumInputs('#width', 'input');
    checkNumInputs('#height', 'input');

    function bindActionToElems (event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            element.forEach((box, j) => {
                                box.checked = false;
                                if ( i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            if(item.value != ''){
                                state[prop] = item.value;
                            } else {
                                item.style.border = '1px solid red';
                            }
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);    
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};
export default changeModalState;