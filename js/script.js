export const backend_url = "https://thetechverse.pythonanywhere.com";

export function setLoading(msg) {
    document.getElementById('spinner').classList.add('show');
    document.getElementById('loding_status').innerHTML = msg;
}

export function offLoading() {
    document.getElementById('spinner').classList.remove('show');
    document.getElementById('loding_status').innerHTML = "Loading";
}

