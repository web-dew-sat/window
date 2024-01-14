import checkNumInputs from "./checkNumInputs";
const forms = (state) => {
   const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        modals = document.querySelectorAll('[data-modal]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    checkNumInputs('input[name="user_phone"]', 'input');

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if(item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;

                    setTimeout(() => {
                        modals.forEach(item => {
                            item.style.display = 'none';
                        });
                    }, 3000);
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000)
                    for (let key in state) {
                        delete state[key];
                    }
                });
        });
    });
}

export default forms;