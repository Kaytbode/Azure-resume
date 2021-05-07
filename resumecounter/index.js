module.exports = async function (context) {   
    context.bindings.outputDocument = context.bindings.inputDocument;

    const counter = context.bindings.outputDocument.counter++;

    context.done(null,  {body: {counter}});
}
