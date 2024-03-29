export const required = value => {
    if(value) return undefined
    return "Field is required" 
}

export const maxLengthCreator = maxlength => value => {
    if(value && value.length > maxlength) return `Maximun length is ${maxlength} symbols`
    return undefined
}