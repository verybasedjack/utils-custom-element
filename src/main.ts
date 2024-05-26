import "./tests";

function define(
  name: string,
  baseClass: typeof HTMLElement = HTMLElement,
  initCallback?: (element: HTMLElement) => void
) {
  customElements.define(
    name,
    class extends baseClass {
      constructor() {
        super();
      }

      connectedCallback() {
        this.initializeAttributes();
        if (initCallback) {
          initCallback(this);
        }
      }

      initializeAttributes() {
        Array.from(this.attributes).forEach((attr) => {
          this[attr.name] = attr.value;
        });
      }
    }
  );
}

export { define };
