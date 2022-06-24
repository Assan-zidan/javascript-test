const expect = require('chai').expect;
const assert = require('chai').assert;
const courses = require('../src/data/courses.json')

describe('Test data', () => {
    it('Each course should contain a number ID', () => {
        courses.map((item) => {
            assert.typeOf(item.id, 'number')
        })
    })
    
    it('Courses should have 12 items', () => {
        expect(courses).to.have.lengthOf(12)
    })

    it('courses category should be react', () => {
        courses.map((item) => {
            expect(item.category).to.equal('react')
        })
    })
})