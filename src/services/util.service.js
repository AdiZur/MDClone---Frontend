export const utilService = {
    capitalizeWords
}

function capitalizeWords(string) {
    let regex = /(?:^|\s)\S/g
    return string.replace(regex, function (x) { return x.toUpperCase() });
}