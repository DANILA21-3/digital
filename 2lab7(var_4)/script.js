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
var DocumentType;
(function (DocumentType) {
    DocumentType["ID_CARD"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
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
var Owner = /** @class */ (function () {
    function Owner(_lastName, _firstName, _middleName, _dateOfBirth, _docType, _series, _number) {
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._middleName = _middleName;
        this._dateOfBirth = _dateOfBirth;
        this._docType = _docType;
        this._series = _series;
        this._number = _number;
    }
    Object.defineProperty(Owner.prototype, "lastName", {
        get: function () { return this._lastName; },
        set: function (value) { this._lastName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "firstName", {
        get: function () { return this._firstName; },
        set: function (value) { this._firstName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "middleName", {
        get: function () { return this._middleName; },
        set: function (value) { this._middleName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "dateOfBirth", {
        get: function () { return this._dateOfBirth; },
        set: function (value) { this._dateOfBirth = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "docType", {
        get: function () { return this._docType; },
        set: function (value) { this._docType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "series", {
        get: function () { return this._series; },
        set: function (value) { this._series = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "number", {
        get: function () { return this._number; },
        set: function (value) { this._number = value; },
        enumerable: false,
        configurable: true
    });
    Owner.prototype.displayInfo = function () {
        return "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._lastName, "\n\u0418\u043C\u044F: ").concat(this._firstName, "\n\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(this._middleName, "\n\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this._dateOfBirth.toLocaleDateString(), "\n\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._docType, "\n\u0421\u0435\u0440\u0438\u044F: ").concat(this._series, "\n\u041D\u043E\u043C\u0435\u0440: ").concat(this._number);
    };
    return Owner;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(_manufacturer, _model, _productionYear, _vin, _regNumber, _owner) {
        this._manufacturer = _manufacturer;
        this._model = _model;
        this._productionYear = _productionYear;
        this._vin = _vin;
        this._regNumber = _regNumber;
        this._owner = _owner;
    }
    Object.defineProperty(Vehicle.prototype, "manufacturer", {
        get: function () { return this._manufacturer; },
        set: function (value) { this._manufacturer = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "productionYear", {
        get: function () { return this._productionYear; },
        set: function (value) { this._productionYear = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "regNumber", {
        get: function () { return this._regNumber; },
        set: function (value) { this._regNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.displayInfo = function () {
        return "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ".concat(this._manufacturer, "\n\u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this._model, "\n\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this._productionYear, "\nVIN: ").concat(this._vin, "\n\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ").concat(this._regNumber);
    };
    Vehicle.prototype.getBasicInfo = function () {
        return JSON.stringify({
            vin: this._vin,
            owner: "".concat(this._owner.lastName, " ").concat(this._owner.firstName, " ").concat(this._owner.middleName),
            regNumber: this._regNumber
        });
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(manufacturer, model, productionYear, vin, regNumber, owner, _type, _category) {
        var _this = _super.call(this, manufacturer, model, productionYear, vin, regNumber, owner) || this;
        _this._type = _type;
        _this._category = _category;
        return _this;
    }
    Object.defineProperty(Car.prototype, "type", {
        get: function () { return this._type; },
        set: function (value) { this._type = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "category", {
        get: function () { return this._category; },
        set: function (value) { this._category = value; },
        enumerable: false,
        configurable: true
    });
    Car.prototype.displayInfo = function () {
        return _super.prototype.displayInfo.call(this) + "\n\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._type, "\n\u041A\u043B\u0430\u0441\u0441: ").concat(this._category);
    };
    return Car;
}(Vehicle));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(manufacturer, model, productionYear, vin, regNumber, owner, _chassisType, _isRacing) {
        var _this = _super.call(this, manufacturer, model, productionYear, vin, regNumber, owner) || this;
        _this._chassisType = _chassisType;
        _this._isRacing = _isRacing;
        return _this;
    }
    Object.defineProperty(Motorbike.prototype, "chassisType", {
        get: function () { return this._chassisType; },
        set: function (value) { this._chassisType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "isRacing", {
        get: function () { return this._isRacing; },
        set: function (value) { this._isRacing = value; },
        enumerable: false,
        configurable: true
    });
    Motorbike.prototype.displayInfo = function () {
        return _super.prototype.displayInfo.call(this) + "\n\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._chassisType, "\n\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439: ").concat(this._isRacing);
    };
    return Motorbike;
}(Vehicle));
var VehicleStorage = /** @class */ (function () {
    function VehicleStorage() {
        this._creationDate = new Date();
        this._vehicles = [];
    }
    Object.defineProperty(VehicleStorage.prototype, "creationDate", {
        get: function () { return this._creationDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleStorage.prototype, "vehicles", {
        get: function () { return this._vehicles; },
        enumerable: false,
        configurable: true
    });
    VehicleStorage.prototype.getAllVehicles = function () {
        return this._vehicles;
    };
    VehicleStorage.prototype.addVehicle = function (data) {
        this._vehicles.push(data);
    };
    VehicleStorage.prototype.removeVehicle = function (index) {
        this._vehicles.splice(index, 1);
    };
    VehicleStorage.prototype.sortByManufacturer = function () {
        this._vehicles.sort(function (a, b) { return a.manufacturer.localeCompare(b.manufacturer); });
    };
    VehicleStorage.prototype.getVehiclesByModelEnd = function (modelEnd) {
        return this._vehicles.filter(function (vehicle) { return vehicle.model.endsWith(modelEnd); });
    };
    return VehicleStorage;
}());
var vehicleOwner = new Owner("Черкашин", "Данила", "Станиславович", new Date(2005, 4, 18), DocumentType.ID_CARD, "AB1234", "567890");
var vehicleCar = new Car("Audi", "A8", 2018, "12345678901234567", "B456CD", vehicleOwner, BodyType.SEDAN, CarClass.LUXURY);
var vehicleBike = new Motorbike("Kawasaki", "Ninja", 2021, "98765432109876543", "C789EF", vehicleOwner, "Спортивная", true);
var storage = new VehicleStorage();
storage.addVehicle(vehicleCar);
storage.addVehicle(vehicleBike);
storage.sortByManufacturer();
console.log("Транспортные средства после сортировки:");
storage.getAllVehicles().forEach(function (vehicle) { return console.log(vehicle.displayInfo()); });
var filteredVehicles = storage.getVehiclesByModelEnd("Ninja");
console.log("\nТранспортные средства с моделью, заканчивающейся на 'Ninja':");
filteredVehicles.forEach(function (vehicle) { return console.log(vehicle.displayInfo()); });
console.log("\nБазовая информация о транспортных средствах:");
storage.getAllVehicles().forEach(function (vehicle) { return console.log(vehicle.getBasicInfo()); });
