var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function Freeze_class(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
function Upper_method(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
var DocumentType;
(function (DocumentType) {
    DocumentType["PASSPORT"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentType["DRIVER_LICENSE"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocumentType["GOVERNMENT_SERVICES"] = "\u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433\u0438";
})(DocumentType || (DocumentType = {}));
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["COMFORT"] = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442";
    CarClass["BUSINESS"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["LUXURY"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
var Owner = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _printOwnerInfo_decorators;
    return _a = /** @class */ (function () {
            function Owner(_surname, _name, _patronymic, _birthDate, _documentType, _documentSeries, _documentNumber) {
                this._surname = (__runInitializers(this, _instanceExtraInitializers), _surname);
                this._name = _name;
                this._patronymic = _patronymic;
                this._birthDate = _birthDate;
                this._documentType = _documentType;
                this._documentSeries = _documentSeries;
                this._documentNumber = _documentNumber;
            }
            Object.defineProperty(Owner.prototype, "surname", {
                get: function () { return this._surname; },
                set: function (value) { this._surname = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Owner.prototype, "name", {
                get: function () { return this._name; },
                set: function (value) { this._name = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Owner.prototype, "patronymic", {
                get: function () { return this._patronymic; },
                set: function (value) { this._patronymic = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Owner.prototype, "birthDate", {
                get: function () { return this._birthDate; },
                set: function (value) { this._birthDate = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Owner.prototype, "documentType", {
                get: function () { return this._documentType; },
                set: function (value) { this._documentType = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Owner.prototype, "documentSeries", {
                get: function () { return this._documentSeries; },
                set: function (value) { this._documentSeries = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Owner.prototype, "documentNumber", {
                get: function () { return this._documentNumber; },
                set: function (value) { this._documentNumber = value; },
                enumerable: false,
                configurable: true
            });
            Owner.prototype.printOwnerInfo = function () {
                return "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._surname, "\n\u0418\u043C\u044F: ").concat(this._name, "\n\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(this._patronymic, "\n\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this._birthDate.toLocaleDateString(), "\n\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentType, "\n\u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentSeries, "\n\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentNumber);
            };
            return Owner;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _printOwnerInfo_decorators = [Upper_method];
            __esDecorate(_a, null, _printOwnerInfo_decorators, { kind: "method", name: "printOwnerInfo", static: false, private: false, access: { has: function (obj) { return "printOwnerInfo" in obj; }, get: function (obj) { return obj.printOwnerInfo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var Vehicle = /** @class */ (function () {
    function Vehicle(_brand, _model, _year, _vin, _registrationNumber, _owner) {
        this._brand = _brand;
        this._model = _model;
        this._year = _year;
        this._vin = _vin;
        this._registrationNumber = _registrationNumber;
        this._owner = _owner;
    }
    Object.defineProperty(Vehicle.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.printVehicleInfo = function () {
        return "\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand, "\n\u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this._model, "\n\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this._year, "\nVIN: ").concat(this._vin, "\n\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ").concat(this._registrationNumber);
    };
    return Vehicle;
}());
var Car = function () {
    var _classDecorators = [Freeze_class];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Vehicle;
    var Car = _classThis = /** @class */ (function (_super) {
        __extends(Car_1, _super);
        function Car_1(brand, model, year, vin, registrationNumber, owner, _bodyType, _carClass) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
            _this._bodyType = _bodyType;
            _this._carClass = _carClass;
            return _this;
        }
        Object.defineProperty(Car_1.prototype, "bodyType", {
            get: function () { return this._bodyType; },
            set: function (value) { this._bodyType = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car_1.prototype, "carClass", {
            get: function () { return this._carClass; },
            set: function (value) { this._carClass = value; },
            enumerable: false,
            configurable: true
        });
        Car_1.prototype.printVehicleInfo = function () {
            return _super.prototype.printVehicleInfo.call(this) + "\n\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType, "\n\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this._carClass);
        };
        return Car_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Car");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Car = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Car = _classThis;
}();
var owner = new Owner("Черкашин", "Данила", "Станиславович", new Date(2005, 4, 18), DocumentType.PASSPORT, "1234", "567890");
var car = new Car("Audi", "A8", 2015, "12345678901234567", "A123BC", owner, BodyType.SEDAN, CarClass.COMFORT);
console.log(owner.printOwnerInfo());
console.log(car.printVehicleInfo());
try {
    Car.prototype.newProperty = "Новое свойство";
    console.log("Новое свойство добавлено в прототип.");
}
catch (e) {
    if (e instanceof Error) {
        console.log("Ошибка: невозможно добавить свойство в замороженный прототип.");
    }
}
