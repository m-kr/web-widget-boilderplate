import styles from './widget.module.css';

const widget = document.createElement('div');
widget.className = styles.widget;
widget.innerHTML = `<p>Hello world</p>`;

document.body.appendChild(widget);
