/**
 *  Form Wizard
 */

'use strict';

$(function () {
  const selectPicker = $('.selectpicker');

  // Bootstrap select
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }
});
(function () {
  // Vertical Wizard
  // --------------------------------------------------------------------
  const wizardVertical = document.querySelector('.wizard-vertical'),
    wizardVerticalBtnNextList = [].slice.call(wizardVertical.querySelectorAll('.btn-next')),
    wizardVerticalBtnPrevList = [].slice.call(wizardVertical.querySelectorAll('.btn-prev')),
    wizardVerticalBtnSubmit = wizardVertical.querySelector('.btn-submit');

  if (typeof wizardVertical !== undefined && wizardVertical !== null) {
    const verticalStepper = new Stepper(wizardVertical, {
      linear: false
    });
    if (wizardVerticalBtnNextList) {
      wizardVerticalBtnNextList.forEach(wizardVerticalBtnNext => {
        wizardVerticalBtnNext.addEventListener('click', event => {
          verticalStepper.next();
        });
      });
    }
    if (wizardVerticalBtnPrevList) {
      wizardVerticalBtnPrevList.forEach(wizardVerticalBtnPrev => {
        wizardVerticalBtnPrev.addEventListener('click', event => {
          verticalStepper.previous();
        });
      });
    }

    if (wizardVerticalBtnSubmit) {
      wizardVerticalBtnSubmit.addEventListener('click', event => {
        alert('Submitted..!!');
      });
    }
  }
})();
