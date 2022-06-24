import courses from './courses'

test('Expect to have 12 courses in the list', () => {
    expect(courses.length).toBe(12)
})

test('Each courses should have a number ID', () => {
    courses.map((item) => {
        expect(typeof item.id).toBe('number')
    })
})