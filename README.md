# Media Metadata Schemas

## Overview

The SIP-009 requires media that is minted on its smart contracts contain a URI pointing to its metadata.

The SIP-009 maintains zero opinion about the structure of that metadata. It is explicitly not enforceable at the blockchain level.

However, the SIP-016 defines a json schema and more properties to standardize the metadata.

This repository contains tools to for the SIP-016 JSON Schema, and will generate Types, Parsers, Generators, and Validators.stac

## Usage

### Generate

Given a schema version and some nonformatted json it generates a valid, minified, alphabetized json

```typescript
const metadata = {
  version: 'stacks-20220422',
  name: randomName,
  description: randomDescription,
  image: imageUrl
}
const generator = new Generator(metadata.sip)
const minified = generator.generate(metadata)
```

### Validate

```typescript
const metadata = {
  version: 'stacks-20220422',
  name: randomName,
  description: randomDescription,
  image: imageUrl
}

const validator = new Validator(metadata.sip)
const validated = validator.validate(metadata)
```

### Parse

```typescript
const json = `
  {
    "version": "stacks-20220422",
    "name": "randomName",
    "description": "randomDescription",
    "image": "image"
  }
`

const parser = new Parser('stacks-20220422')
const parsed =  parser.parse(json)
```

## Tests

`yarn test`

## Define a New Schema

To define a new schema version, locate the directory of your project's name in `schemas/`. If a directory does not already exist create one. 
Within the project directory create a new file with the desired calendar version as the file name example: `schemas/stacks/20220422.json` 

* Define the schema according to JSON Schema specification.
* Write some tests in the `schema.tests.ts` file.
* run `yarn codegen` to generate type specifically for your new schema
* Add your version to the `supportedVersions` and `supportedVersionsTypeMapping` in `versions.ts`
* Add your version type to the exported types in `types.ts`

Submit a PR! 

Someone on our team will review and merge.

## Further Reading

- JSON-schema spec: https://tools.ietf.org/html/draft-zyp-json-schema-04
- JSON-schema wiki: https://github.com/json-schema/json-schema/wiki
