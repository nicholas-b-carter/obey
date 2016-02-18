/* global describe, it, expect, sinon */
import string from 'src/types/string'

describe('type:string', () => {
  it('calls context.fail if type is not a string', () => {
    const context = {
      value: true,
      fail: sinon.spy()
    }
    string(context)
    expect(context.fail).to.be.calledWith('Value must be a string')
  })
})