export function handleDropFile(event: DragEvent) {
    const files = event.dataTransfer!.files;

    const jsonFile = files[0];
    const reader = new FileReader();

    reader.onload = (() => {
        return () => {
            const dataJson = JSON.parse(reader.result as string);

            console.log(dataJson);
        };
    })();

    reader.readAsText(jsonFile);
}
