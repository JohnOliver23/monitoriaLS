const exam = require('./exam')

describe('generating exams', () => {
  studend1 = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
  studend2 = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
  weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
  answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

  students = [
    {"student": "Fulano", "grade": 10},
    {"student": "Sicrano", "grade": 5},
    {"student": "Beltrano", "grade": 7}

  ]

  it('generating exams studend1', () => {
    expect(exam.grade(studend1, weight, answer)).toBe(4)
  })

  xit('generating exams studend2', () => {
    expect(exam.grade(studend2, weight, answer)).toBe(8)
  })

  xit('generating avg of all studants', () => {
    expect(exam.avg(students)).toBe(7.333333333333333)
  })

  xit('generating min grade of studants', () => {
    expect(exam.min(students)).toBe(5)
  })

  xit('generating min grade of studants', () => {
    expect(exam.min(students, 2)).toEqual([5, 7])
  })



  xit('generating max grade of studants', () => {
    expect(exam.max(students)).toBe(10)
  })

  xit('generating max grade of studants', () => {
    expect(exam.max(students, 2)).toEqual([10, 7])
  })

  xit('generating lt grade of studants', () => {
    expect(exam.lt(students, 6)).toEqual([5])
  })
  
  xit('generating lt grade of studants', () => {
    expect(exam.lt(students, 10)).toEqual([5, 7])
  })
  
  xit('generating gt grade of studants', () => {
    expect(exam.gt(students, 8)).toEqual([10])
  })

  xit('generating gt grade of studants', () => {
    expect(exam.gt(students, 6)).toEqual([7, 10])
  })
})
