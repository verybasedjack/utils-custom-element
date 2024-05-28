import "./tests";

function define(
  name: string,
  baseClass: typeof HTMLElement = HTMLElement,
  initCallback?: (element: HTMLElement) => void
) {
  const baseClassName = baseClass.name
    .replace(/^HTML|Element$/g, "")
    .toLowerCase();
  const options =
    baseClass !== HTMLElement ? { extends: baseClassName } : undefined;

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
          (this as any)[attr.name] = attr.value;
        });
      }
    },
    options
  );
}

export { define };
