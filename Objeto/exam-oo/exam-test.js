const ExamCheck = require('./examcheck')
const ExamStats = require('./examstats')

describe('Exam Tool', () => {

  it('calculating grade by weighted average', () => {
    let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
    let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
    let examCheck = new ExamCheck(answer, weight)

    let student = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
    expect(examCheck.grade(student)).toBe(4)
  })

  xit('calculating grade by weighted average', () => {
    let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
    let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
    let examCheck = new ExamCheck(answer, weight)

    let student = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
    expect(examCheck.grade(student)).toBe(8)
  })

  xit('calculating exam values', () => {
    let examStats = new ExamStats([
      { "student": "Fulano", "grade": 10 },
      { "student": "Sicrano", "grade": 5 },
      { "student": "Beltrano", "grade": 7 },
    ])

    expect(examStats.avg()).toBe(7.333333333333333)


    expect(examStats.min()).toEqual([5])
    expect(examStats.min(2)).toEqual([5, 7])

    expect(examStats.max()).toEqual([10])

    expect(examStats.lt(6)).toEqual([5])

    expect(examStats.gt(6)).toEqual([7, 10])

  })

})
