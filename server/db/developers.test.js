const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const dev = require('./developers')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('Join developers and Projects', () => {
  it('Will return developer and all list data', () => {
    return dev.getDevelopers(testDb)
      .then(devs => {
        console.log(JSON.stringify(devs, null, 2))
        expect(devs).toHaveLength(3)
        expect(devs[0].firstName).toMatch('multi')
        expect(devs[0].projects[1].projectId).toBe(2)
        expect(devs[0].languages).toHaveLength(3)
        expect(devs[0].languages[0].languageName).toMatch('JS')
        return null
      })
  })
})
