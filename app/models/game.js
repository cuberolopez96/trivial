import DS from 'ember-data';

export default DS.Model.extend({
  turno: DS.attr(),
  moves: DS.attr()
});
