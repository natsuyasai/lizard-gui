import { describe, expect, test } from 'vitest'
import { FileNameValidator } from '@renderer/validator/fileNameValidator'

describe('ファイル名の確認', () => {
  test.each([
    ['test', true],
    [
      '254aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      true
    ],
    [
      '255aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      false
    ],
    [
      '256aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      false
    ],
    ['t\\est', false],
    ['te/st', false],
    ['te:st', false],
    ['te*st', false],
    ['te?st', false],
    ['te<st', false],
    ['te>st', false],
    ['tes|t', false],
    ['te"st', false],
    ['CON', false],
    ['ACON', true],
    ['CONA', true],
    ['COM0', false]
  ])(
    '不正なファイル名の場合は失敗となること(filename: %s)',
    (fileName: string, expected: boolean) => {
      const target = new FileNameValidator(fileName)

      const result = target.validate()
      expect(result).toBe(expected)
    }
  )
})
