/**
 * Retrieves an item from sessionStorage.
 * @param {string} key - The key of the item to retrieve.
 * @returns {*} The value associated with the key.
 */
export function getSsItem(key: string): any;

/**
 * Retrieves an item from localStorage.
 * @param {string} key - The key of the item to retrieve.
 * @returns {*} The value associated with the key.
 */
export function getLsItem(key: string): any;

/**
 * Sets an item in sessionStorage.
 * @param {string} key - The key of the item to set.
 * @param {*} data - The data to store.
 * @returns {boolean} True if successful, false otherwise.
 */
export function setSsItem(key: string, data: any): boolean;

/**
 * Sets an item in localStorage.
 * @param {string} key - The key of the item to set.
 * @param {*} data - The data to store.
 * @returns {boolean} True if successful, false otherwise.
 */
export function setLsItem(key: string, data: any): boolean;
