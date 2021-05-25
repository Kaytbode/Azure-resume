module.exports = {
    log: jest.fn(),
    bindings: {
        inputDocument: {
            counter: 0
        },
        outputDocument: {}
    },
    counter: null,
    done: function(a, b) {
        module.exports.counter = b.body.counter;
        module.exports.counter += 1;
    }
};
