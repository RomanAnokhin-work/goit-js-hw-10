import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const delayValue = event.target.elements.delay.value;
  const stateValue = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue == 'fulfilled') {
        resolve(` Fulfilled promise in ${delayValue}ms`);
      } else {
        reject(` Rejected promise in ${delayValue}ms`);
      }
    }, Number(delayValue));
  })
    .then(value => showSuccesMessage(value))
        .catch(error => showErrorMessage(error));
    form.reset();
}

function showSuccesMessage(value) {
  iziToast.success({
    title: '',
    message: value,
    position: 'topRight',
    timeout: 3000,
    close: false,
    onOpening: function (instance, toast) {
      toast.style.position = 'absolute';
      toast.style.left = 901 + 'px';
      toast.style.top = 136 + 'px';
      toast.style.margin = 0;
    },
  });
}

function showErrorMessage(error) {
  iziToast.error({
    title: '',
    message: error,
    position: 'topRight',
    timeout: 3000,
    close: false,
    onOpening: function (instance, toast) {
      toast.style.position = 'absolute';
      toast.style.left = 901 + 'px';
      toast.style.top = 136 + 'px';
      toast.style.margin = 0;
    },
  });
}
