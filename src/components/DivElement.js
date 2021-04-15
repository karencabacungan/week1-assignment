// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }
}
// const kanyeWestTwo = new DivElement('Memories have to be our most painful blessing.');
// console.log(kanyeWestTwo.render());

// Export class here
export default DivElement;
