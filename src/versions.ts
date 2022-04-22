/**
 *
 */
export const supportedVersions: { [key: string]: Array<string> } = {
  stacks: ['20220422'],
}

/**
 *
 */
export const supportedVersionsTypeMapping: {
  [key: string]: { [key: string]: string }
} = {
  stacks: {
    '20220422': 'Stacks20220422',
  }
}

/**
 *
 * @param verboseVersion
 */
export function validateVersion(verboseVersion: string): void {
  const [name, calVer] = verboseVersion.split('-')

  // require name exists in `versions`
  if (!(name in supportedVersions)) {
    throw new Error(`There are no versions with the ${name} project name`)
  }

  // require calVer exists in `versions`
  if (supportedVersions[name].indexOf(calVer) == -1) {
    throw new Error(
      `There are no versions in the ${name} namespace with the ${calVer} calendar version`
    )
  }

  return
}
