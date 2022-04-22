import { Validator } from '../src/validator'

describe('schemas', () => {
  describe('stacks', () => {
    describe('20220422', () => {
      it('requires only name and sip', () => {
        const validator = new Validator('stacks-20220422')
        const json = {
          name: 'An NFT on bitcoin',
          sip: 16,
        }
        const result = validator.validate(json)
        expect(result).toBe(true)
      })

      it('requires at least name and sip', () => {
        const validator = new Validator('stacks-20220422')
        const json = {
          description: 'The NFT has the most utility in the world.',
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('can have image, attributes, properties and localization', () => {
        const validator = new Validator('stacks-20220422')
        const json = {
          sip: 16,
          name: 'An NFT on bitcoin',
          description: 'The NFT has the most utility in the world.',
          image: 'ipfs://QmZ15eQX8FPjfrtdX3QYbrhZxJpbLpvDpsgb2p3VEH8Bqq',
          attributes: [
            {
              trait_type: 'hair',
              value: 'red',
            },
            {
              trait_type: 'strength',
              display_type: 'number',
              value: 99,
            },
          ],
          properties: {
            collection: 'Foo Collection',
            total_supply: '10000',
          },
          localization: {
            uri: 'ipfs://somerandomcid/{locale}.json',
            default: 'en',
            locales: ['en', 'pt-BR', 'de'],
          },
        }

        const result = validator.validate(json)
        expect(result).toBe(true)
      })
    })
  })
})
