module.exports = function wls () {
    return { getSsItem, getLsItem, setSsItem, setLsItem }

    function getSsItem (key) {
        return getStorageItem(key, 'sessionStorage')
    }

    function getLsItem (key) {
        return getStorageItem(key, 'localStorage')
    }

    function setSsItem (key, data) {
        return setStorageItem(key, data, 'sessionStorage')
    }

    function setLsItem (key, data) {
        return setStorageItem(key, data, 'localStorage')
    }

    function getStorageItem (key, type) {
        const storage = window[type]
        const data = storage && storage.getItem(key)

        try {
            return JSON.parse(data)
        } catch (e) {
            return data
        }
    }

    function setStorageItem (key, data, type) {
        const storage = window[type]
        
        try {
            storage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data))

            return true
        } catch (e) {
            return false
        }
    }
}
