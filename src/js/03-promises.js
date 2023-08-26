import Notiflix from 'notiflix';
import { firstDelay, delayStep, amount, Btn } from './myVariables';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      return Promise.resolve(
        `Fulfilled promise ${position} in ${Number(firstDelay.value) + delay}ms`
      ).then(text => {
        Notiflix.Notify.success(text);
        console.log(text);
      });
      // Fulfill
    } else {
      return Promise.reject(
        `Rejected promise ${position} in ${Number(firstDelay.value) + delay}ms`
      ).catch(error => {
        Notiflix.Notify.failure(error);
        console.log(error);
      });
      // Reject
    }
  }, delay);
}

Btn.addEventListener('click', e => {
  e.preventDefault();

  setTimeout(() => {
    for (let i = 1; i <= amount.value; i++) {
      createPromise(i, i * delayStep.value);
    }
  }, firstDelay.value);
});
