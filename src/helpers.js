export const isValidEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
export const searchText = (where, what) => {
    const regex = new RegExp(what, "i");
    return !!~where.search(regex);
}
export const toHumanReadable = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    return `${day}-${month}-${date.getFullYear()}    ${time}`;
}