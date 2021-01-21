var code = {
	callstack: [],
    step: function(log) {
        var calls = {};
        if (log.op.toString()==="CALL") {
            calls.from = log.contract.address();
            // calls.to = log.stack.peek(1).Bytes();
            calls.to = log.contract.caller();
            calls.value = log.stack.peek(2).String();
            if (calls.value !== '0') {
                this.callstack.push(calls);
            }
        }
    },
    result: function() {
        return this.callstack;
    },
    toHexString: function (byteArray) {
        var arr = byteArray.split(',');
        var ret = [];
        for (var i=0; i<arr; i++) {
            ret[i] = ('0' + (arr[i] & 0xFF).toString(16)).slice(-2);
        }
        return ret.join();
     }
}

