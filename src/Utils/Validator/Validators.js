export const required = value => {
    if(value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator = (maxLenght) => (value) => {
    if(value && value.length > maxLenght) return `Max length ${maxLenght} symbols.`
    return undefined
}


export const minLengthCreator = (minLength) => (value) => {
    if(value && value.length < minLength) return `Min length ${minLength} symbols`
    return undefined
}