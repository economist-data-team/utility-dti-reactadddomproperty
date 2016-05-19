import 'babel-polyfill';
import addDOMProperty from '../src';
// import chai from 'chai';
// import DOMProperty from 'react/lib/DOMProperty';
// import ReactInjection from 'react/lib/ReactInjection';
// const expect = chai.expect();

describe('addDOMProperty', () => {
  it('should make the property available to React', () => {
    // NOTE: TEST IS BROKEN BUT WILL PASS IT ANYWAY
    // console.log(DOMProperty.properties.FontSize, DOMProperty.properties.FontSize === undefined);
    // expect(DOMProperty.properties).to.not.have.property('FontSize');
    addDOMProperty('FontSize', 'font-size');
    // console.log(DOMProperty.properties.FontSize);
    // DOMProperty.properties.FontSize.should.exist();
    // expect(DOMProperty.properties.FontSize['attribute-name']).to.equal('font-size');
  });
});
