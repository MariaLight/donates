import { Component } from '../core/Component';

function getFormatDate(date) {
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth() + 1;
  const dateDate = date.getDate();
  const dateHours = date.getHours();
  const dateMinutes = date.getMinutes();
  const dateSeconds = date.getSeconds();
  return `${dateDate}/${dateMonth}/${dateYear}, ${dateHours}:${dateMinutes}:${dateSeconds}`;
}
export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const datetime = this.props.datetime;
    const amount = this.props.amount;

    // this.$rootElement.setAttribute('data-id', datetime.getTime());

    this.$rootElement.innerHTML = `${getFormatDate(datetime)} - <b>$${amount}</b>`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Удалить';
    this.$rootElement.append(deleteButton);
    deleteButton.addEventListener('click', this.deleteListItem.bind(this));
  }
  deleteListItem() {
    this.props.onDelete(this);
  }
}
