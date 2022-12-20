export function preventEvent(e: Event) {
    e.stopPropagation();
    e.preventDefault();
}
