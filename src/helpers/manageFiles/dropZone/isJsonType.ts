export function isJsonType(file: File) {
    if (!file.type.match("json.*")) {
        alert("Please select correct JSON file");
        return false;
    }
    return true;
}
