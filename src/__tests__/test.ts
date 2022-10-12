import { ean, upc, imei, eid, isbn, card } from '../index';

//EAN Testing
test('5099750442227', () => {
  expect(ean('5099750442227')).toBe(true);
});
test('5099750442227', () => {
  expect(ean(5099750442227)).toBe(true);
});
test('8682410599832', () => {
  expect(ean('8682410599832')).toBe(false);
});

//UPC Testing
test('025291289279', () => {
  expect(upc('025291289279')).toBe(true);
});
test('762042124198', () => {
  expect(upc(762042124198)).toBe(true);
});
test('762042224198', () => {
  expect(upc('762042224198')).toBe(false);
});

//IMEI Testing
test('352322311421731', () => {
  expect(imei('352322311421731')).toBe(true);
});
test('352321541273003', () => {
  expect(imei(352321541273003)).toBe(true);
});
test('352222321441731', () => {
  expect(imei('352222321441731')).toBe(false);
});

//EID Testing
test('89049032007108882600134646190573', () => {
  expect(eid('89049032007108882600134646190573')).toBe(true);
});
test('89049032007108882600133403914386', () => {
  expect(eid('89049032007108882600133403914386')).toBe(true);
});
test('99049032007108782600133403914386', () => {
  expect(eid('99049032007108782600133403914386')).toBe(false);
});

//ISBN Testing
test('9788544104545', () => {
  expect(isbn('9788544104545')).toBe(true);
});
test('9788590379867', () => {
  expect(isbn('9788590379867')).toBe(true);
});
test('9781719343229', () => {
  expect(isbn('9781719343229')).toBe(false);
});

//ISBN Testing
test('4624748233249780', () => {
  expect(card('4624748233249780')).toBe(true);
});
test('5105105105105100', () => {
  expect(card('5105105105105100')).toBe(true);
});
test('4624748233249080', () => {
  expect(card('4624748233249080')).toBe(false);
});
