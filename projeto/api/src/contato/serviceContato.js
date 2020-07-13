const schemaCursos = require("./schemaContato")

schemaCursos.methods(['get', 'post', 'delete']);
schemaCursos.updateOptions({ new: true, runValidators: true});

module.exports = schemaCursos;