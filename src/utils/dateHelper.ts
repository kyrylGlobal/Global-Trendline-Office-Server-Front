export function convertUnixToString(unixDate: number) {
    const date = new Date(unixDate*1000);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}