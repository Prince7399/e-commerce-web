export const tileCase = (string) => {
    if (string?.length) {
        let words = string?.trim()?.split(' ');
        let updatedString = words?.map((word) => word?.length ? word.trim().charAt(0).toUpperCase() + word.slice(1) : null).filter(data => data?.length);
        return updatedString?.join(' ');
    }
    return string;
}

export const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}