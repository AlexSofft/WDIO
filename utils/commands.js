export const click = async (element) => {
    await element.click();
}

export const setText = async (element, text) => {
    await element.setValue(text);
}


