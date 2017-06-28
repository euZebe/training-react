export const Translator = (params) => {
    let { from, to, text } = params;
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(text)}`;

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.send()
        xhr.onload = () => resolve(JSON.parse(xhr.responseText)[0][0][0]);
    });
}