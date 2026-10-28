/**
 * Universal Multiplatform DOM Defense Layer for React
 * Prevents "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."
 * 
 * Root causes addressed:
 * 1. Mobile/desktop auto-translation (Google Translate, Chrome Translate) inserting or splitting <font> and text nodes.
 * 2. Third-party extensions and accessibility overlays reparenting DOM elements during dynamic React re-renders.
 * 3. Race conditions between CSS animations, synthetic events, and component unmounting.
 */

export function installDOMDefense(): void {
  if (typeof window === 'undefined' || typeof Node === 'undefined' || !Node.prototype) {
    return;
  }

  // 1. Monkey-patch Node.prototype.removeChild
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      if (console && typeof console.warn === 'function') {
        console.warn(
          '[NEXORA DOM Defense] Suppressed removeChild error: Node is not a child of this parent.',
          { parent: this, child, actualParent: child.parentNode }
        );
      }
      // If the node belongs to another parent (e.g. wrapped in a <font> tag by Google Translate), remove it from there
      if (child.parentNode && typeof child.parentNode.removeChild === 'function') {
        try {
          return child.parentNode.removeChild(child);
        } catch {
          return child;
        }
      }
      return child;
    }
    return originalRemoveChild.apply(this, [child]) as T;
  };

  // 2. Monkey-patch Node.prototype.insertBefore
  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console && typeof console.warn === 'function') {
        console.warn(
          '[NEXORA DOM Defense] Suppressed insertBefore error: Reference node is not a child of this parent.',
          { parent: this, referenceNode, actualParent: referenceNode.parentNode }
        );
      }
      // Fallback: append child at the end of the parent
      return originalInsertBefore.apply(this, [newNode, null]) as T;
    }
    return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
  };

  // 3. Global listener for unhandled DOM exceptions
  window.addEventListener('error', (event: ErrorEvent) => {
    if (
      event.message &&
      (event.message.includes('removeChild') ||
       event.message.includes('insertBefore') ||
       event.message.includes('not a child of this node'))
    ) {
      console.warn('[NEXORA DOM Defense] Intercepted unhandled DOMException:', event.message);
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });
}
