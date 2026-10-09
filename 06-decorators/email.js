"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
function NotifyOnChange(target, context) {
    return function (newStatus) {
        console.log(`[NOTIFICATION]: Status changed to: ${newStatus}`);
        target.call(this, newStatus);
    };
}
function DisableDelete(constructor, context) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            // Protect methods on the instance from being overwritten or deleted
            const prototype = Object.getPrototypeOf(this);
            for (const name of Object.getOwnPropertyNames(prototype)) {
                if (name === "constructor")
                    continue;
                const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
                if (descriptor && typeof descriptor.value === "function") {
                    Object.defineProperty(this, name, {
                        value: descriptor.value.bind(this),
                        writable: false,
                        configurable: false,
                    });
                }
            }
        }
    };
}
let UserAccount = (() => {
    let _classDecorators = [DisableDelete];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _updateStatus_decorators;
    var UserAccount = _classThis = class {
        constructor(status) {
            this.status = __runInitializers(this, _instanceExtraInitializers);
            this.status = status;
        }
        updateStatus(newStatus) {
            this.status = newStatus;
        }
    };
    __setFunctionName(_classThis, "UserAccount");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _updateStatus_decorators = [NotifyOnChange];
        __esDecorate(_classThis, null, _updateStatus_decorators, { kind: "method", name: "updateStatus", static: false, private: false, access: { has: obj => "updateStatus" in obj, get: obj => obj.updateStatus }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserAccount = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserAccount = _classThis;
})();
const user = new UserAccount("Inactive");
console.log("Initial status:", user.status);
user.updateStatus("Active");
console.log("Current status:", user.status);
user.updateStatus("Suspended");
console.log("Current status:", user.status);
//# sourceMappingURL=email.js.map