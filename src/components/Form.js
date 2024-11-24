import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      counter: 0
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $donateFormInputLabel = document.createElement('label');
    $donateFormInputLabel.classList.add('donate-form__input-label');
    $donateFormInputLabel.textContent = ' Введите сумму в $';
    this.$rootElement.append($donateFormInputLabel);

    const $donateFormInput = document.createElement('input');
    this.$donateFormInput = $donateFormInput;
    $donateFormInput.classList.add('donate-form__donate-input');
    $donateFormInput.setAttribute('name', 'amount');
    $donateFormInput.setAttribute('type', 'number');
    $donateFormInput.setAttribute('max', '100');
    $donateFormInput.setAttribute('min', '1');
    $donateFormInput.setAttribute('required', '');
    $donateFormInputLabel.append($donateFormInput);

    const $donateSubmitButton = document.createElement('button');
    this.$donateSubmitButton = $donateSubmitButton;
    $donateSubmitButton.classList.add('donate-form__submit-button');
    $donateSubmitButton.setAttribute('disabled', '');
    $donateSubmitButton.setAttribute('type', 'submit');
    $donateSubmitButton.textContent = 'Задонатить';
    this.$rootElement.append($donateSubmitButton);

    $donateFormInput.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));

  }

  handleInput(event) {
    const inputValue = this.$donateFormInput.value;
    if (inputValue && inputValue >= 1 && inputValue <= 100) {
      this.$donateSubmitButton.removeAttribute('disabled');
    } else {
      this.$donateSubmitButton.setAttribute('disabled', '');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.counter = Number(this.$donateFormInput.value);
    this.$donateFormInput.value = '';
    this.$donateSubmitButton.setAttribute('disabled', '');
    this.props.onSubmit(this.state.counter);
  }
}
