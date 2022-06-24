const Courses = require('../src/data/courses.json')

describe('Testing data', ()=> {
    let courses = Courses;

    it('we have an array of 12 courses', () => {
        expect(courses.length).toBe(12);
    });
    
    it('expect the category to react', () => {
        courses.map((item) => {
            expect(item.category).toMatch('react')
        });
    });
    
    it('expect the each course to have a link', () => {
        courses.map((item) => {
            expect(item.link).toBeTruthy()
        });
    });
});