import CsvAutoFill from '../src/react-csvautofill'

/**
 * Dummy test
 */
describe('TemperatureTest', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('convert celcius to kelvin', () => {
    expect(CsvAutoFill.celciusToKelvin(10)).toBe(283.15)
  })
})
