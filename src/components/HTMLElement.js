// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}
// const kanyeWest = new HTMLElement('p', 'I still think I am the greatest.');
// console.log(kanyeWest.render());

// Export class here
export default HTMLElement;
