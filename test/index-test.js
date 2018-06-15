var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('myname', () => {
    it('returns "Susan"', () => {
      expect(index.myname).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the myname and height', () => {
      expect(index.message).toInclude(index.myname)
      expect(index.message).toInclude(index.height)
    })
  })

})

