import _ from 'lodash';
//~ import PrintMe './print.js';
import './style.css';
import Icon from './PicsArt_09-13-09.40.53.jpg'
function component() {
  const element = document.createElement('div');
  const body = document.getElementsByTagName('body')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('abc-body');
  
   const myIcon = new Image();
   myIcon.src = Icon;
   //~ element.appendChild(myIcon);
   const button =  document.createElement('button');
	button.innerHTML = 'Click me and check!';
   //~ button.onClick = PrintMe.printMe();
   element.appendChild(button);
   

  return element;
}

document.body.appendChild(component());
