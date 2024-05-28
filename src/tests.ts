import { define } from "./main";

if (import.meta.env.DEV) {
  // Error propagation for non-valid custom element tag name.
  // define("abc");

  // Anonymous custom element (default base, no connected callback).
  define("x-a", void 0, console.log);

  // Renders content to self.
  define("x-b", void 0, (self) => {
    self.innerHTML = "Content";
  });

  // Attributes redefined onto self & serialize.
  define("x-c", void 0, (self) => {
    console.log(JSON.stringify(self));
  });

  // Extend different base.
  define("x-d", HTMLButtonElement, (self) => {
    self.addEventListener("click", () => console.log("x-d"));
  });
}
