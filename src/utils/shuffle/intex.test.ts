import shuffle from './'

describe('shuffle', () => {
    test('it returns an array with the same length after being shuffled', () => {
        const array = [1, 2, 3]
        shuffle(array)
        expect(array).toHaveLength(3)
    })

    test('it returns an array with the same elements after being shuffled', () => {
        const array = [1, 2, 3]
        shuffle(array)
        expect(array).toContain(1)
        expect(array).toContain(2)
        expect(array).toContain(3)
    })
})