const firstDelay = document.querySelector('#delay');
const delayStep = document.querySelector('#step');
const amount = document.querySelector('#amount');

const Btn = document.querySelector('button[data-action]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve(
          `Fulfilled promise ${position} in ${
            Number(firstDelay.value) + position * delay
          }ms`
        );
        // Fulfill
      } else {
        return reject(
          `Rejected promise ${position} in ${
            Number(firstDelay.value) + position * delay
          }ms`
        );
        // Reject
      }
    }, delay);
  });
  promis
    .then(text => {
      console.log(text);
    })
    .catch(error => {
      console.log(error);
    });
}

Btn.addEventListener('click', e => {
  e.preventDefault();

  setTimeout(() => {
    for (let i = 1; i <= amount.value; i++) {
      createPromise(i, delayStep.value);
    }
  }, firstDelay.value);
});
