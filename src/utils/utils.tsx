export function isValidEmail(email: string) {
    if (!email) {
        return false
    }
    return true;
}

export function remove_hash_from_url() {
    try {
        if ("history" in window) { // Check if History API is supported by the browser
  history.pushState({}, null, window.location.href.split('#')[0]);
}

    } catch (error) {
        console.error(error)
    }

}