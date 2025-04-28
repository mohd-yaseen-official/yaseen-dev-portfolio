export default function GetIconPrefix(str) {
    let capitalCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            capitalCount++;
            if (capitalCount === 2) {
                return str.slice(0, i);
            }
        }
    }

    return str;
}
