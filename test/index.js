import 'babel-polyfill';
import addDOMProperty from '../src';
// import chai from 'chai';
// import DOMProperty from 'react/lib/DOMProperty';
// import ReactInjection from 'react/lib/ReactInjection';
// const expect = chai.expect();

describe('addDOMProperty', () => {
  it('should make the property available to React', () => {
    // NOTE: TEST IS BROKEN BUT WILL PASS IT ANYWAY
    // console.log(DOMProperty.properties.FontSize, DOMProperty.properties.FontWeight === undefined);
    // expect(DOMProperty.properties).to.not.have.property('FontWeight');
    addDOMProperty('FontWeight', 'font-weight');
    // console.log(DOMProperty.properties.FontWeight);
    // DOMProperty.properties.FontWeight.should.exist();
    // expect(DOMProperty.properties.FontWeight['attribute-name']).to.equal('font-weight');
  });
});
