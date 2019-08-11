class Utilities {
    get isMobileScreen() {
        const mql = window.matchMedia('(max-width: 500px)')
        return mql.matches
    }
}

export { Utilities };