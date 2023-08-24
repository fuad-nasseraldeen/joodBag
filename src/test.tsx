
/**
 * Return the number that repeats the most times.
 * @param { NonEmptyArray<number> } arr
 */
function maxRepeats(arr) {
    // TODO
    let map = {}
    // myMap[‘key’] = ‘value’
    // myMap = { key: ‘value’ }
    for (let i = 1; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = 1
        } else {
            map[arr[i]] = map[arr[i]] + 1
        }

    }
    const maxRepeats = (arr) => {
        // TODO
        let map = {}
        // myMap[‘key’] = ‘value’
        // myMap = { key: ‘value’ }
        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]] === undefined) {
                map[arr[i]] = 1
            } else {
                map[arr[i]] = map[arr[i]] + 1
            }

        }
        let temp = Object.entries(map) // ('1',3)
        let values = temp.keys()
        let max = 0
        for (let i = 1; i < temp.length; i++) {
            if (temp[i] < temp[i - 1]) {
                max = values[i]
            }
            return max
        }
        return JSON.stringify(max)
    }
}

maxRepeats([1, 2, 1, 365, 2, 1]) // return 1
// maxRepeats([1])