enum DocumentType {
    ID_CARD = "Удостоверение личности",
    DRIVER_LICENSE = "Водительское удостоверение",
    GOVERNMENT_SERVICES = "Госуслуги"
}

interface IOwner {
    lastName: string;
    firstName: string;
    middleName: string;
    dateOfBirth: Date;
    docType: DocumentType;
    series: string;
    number: string;
    displayInfo: () => string;
}

interface IVehicle {
    manufacturer: string;
    model: string;
    productionYear: number;
    vin: string;
    regNumber: string;
    owner: IOwner;
    displayInfo: () => string;
    getBasicInfo(): string; // Новый метод для получения базовой информации
}

interface ICar extends IVehicle {
    type: BodyType;
    category: CarClass;
}

interface IMotorbike extends IVehicle {
    chassisType: string;
    isRacing: boolean;
}

enum BodyType {
    SEDAN = "Седан",
    HATCHBACK = "Хэтчбек",
    SUV = "Внедорожник",
    COUPE = "Купе"
}

enum CarClass {
    ECONOMY = "Эконом",
    COMFORT = "Комфорт",
    BUSINESS = "Бизнес",
    LUXURY = "Люкс"
}

class Owner implements IOwner {
    constructor(
        private _lastName: string,
        private _firstName: string,
        private _middleName: string,
        private _dateOfBirth: Date,
        private _docType: DocumentType,
        private _series: string,
        private _number: string
    ) {}

    get lastName(): string { return this._lastName; }
    set lastName(value: string) { this._lastName = value; }

    get firstName(): string { return this._firstName; }
    set firstName(value: string) { this._firstName = value; }

    get middleName(): string { return this._middleName; }
    set middleName(value: string) { this._middleName = value; }

    get dateOfBirth(): Date { return this._dateOfBirth; }
    set dateOfBirth(value: Date) { this._dateOfBirth = value; }

    get docType(): DocumentType { return this._docType; }
    set docType(value: DocumentType) { this._docType = value; }

    get series(): string { return this._series; }
    set series(value: string) { this._series = value; }

    get number(): string { return this._number; }
    set number(value: string) { this._number = value; }

    displayInfo(): string {
        return `Фамилия: ${this._lastName}\nИмя: ${this._firstName}\nОтчество: ${this._middleName}\nДата рождения: ${this._dateOfBirth.toLocaleDateString()}\nТип документа: ${this._docType}\nСерия: ${this._series}\nНомер: ${this._number}`;
    }
}

class Vehicle implements IVehicle {
    constructor(
        private _manufacturer: string,
        private _model: string,
        private _productionYear: number,
        private _vin: string,
        private _regNumber: string,
        private _owner: IOwner
    ) {}

    get manufacturer(): string { return this._manufacturer; }
    set manufacturer(value: string) { this._manufacturer = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get productionYear(): number { return this._productionYear; }
    set productionYear(value: number) { this._productionYear = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get regNumber(): string { return this._regNumber; }
    set regNumber(value: string) { this._regNumber = value; }

    get owner(): IOwner { return this._owner; }
    set owner(value: IOwner) { this._owner = value; }

    displayInfo(): string {
        return `Производитель: ${this._manufacturer}\nМодель: ${this._model}\nГод выпуска: ${this._productionYear}\nVIN: ${this._vin}\nРегистрационный номер: ${this._regNumber}`;
    }

    getBasicInfo(): string {
        return JSON.stringify({
            vin: this._vin,
            owner: `${this._owner.lastName} ${this._owner.firstName} ${this._owner.middleName}`,
            regNumber: this._regNumber
        });
    }
}

class Car extends Vehicle implements ICar {
    constructor(
        manufacturer: string,
        model: string,
        productionYear: number,
        vin: string,
        regNumber: string,
        owner: IOwner,
        private _type: BodyType,
        private _category: CarClass
    ) {
        super(manufacturer, model, productionYear, vin, regNumber, owner);
    }

    get type(): BodyType { return this._type; }
    set type(value: BodyType) { this._type = value; }

    get category(): CarClass { return this._category; }
    set category(value: CarClass) { this._category = value; }

    displayInfo(): string {
        return super.displayInfo() + `\nТип кузова: ${this._type}\nКласс: ${this._category}`;
    }
}

class Motorbike extends Vehicle implements IMotorbike {
    constructor(
        manufacturer: string,
        model: string,
        productionYear: number,
        vin: string,
        regNumber: string,
        owner: IOwner,
        private _chassisType: string,
        private _isRacing: boolean
    ) {
        super(manufacturer, model, productionYear, vin, regNumber, owner);
    }

    get chassisType(): string { return this._chassisType; }
    set chassisType(value: string) { this._chassisType = value; }

    get isRacing(): boolean { return this._isRacing; }
    set isRacing(value: boolean) { this._isRacing = value; }

    displayInfo(): string {
        return super.displayInfo() + `\nТип рамы: ${this._chassisType}\nСпортивный: ${this._isRacing}`;
    }
}

interface IVehicleStorage {
    creationDate: Date;
    vehicles: IVehicle[];
    getAllVehicles(): IVehicle[];
    addVehicle(data: IVehicle): void;
    removeVehicle(index: number): void;
    sortByManufacturer(): void; 
    getVehiclesByModelEnd(modelEnd: string): IVehicle[]; 
}

class VehicleStorage implements IVehicleStorage {
    private _creationDate: Date;
    private _vehicles: IVehicle[];

    constructor() {
        this._creationDate = new Date();
        this._vehicles = [];
    }

    get creationDate(): Date { return this._creationDate; }
    get vehicles(): IVehicle[] { return this._vehicles; }

    getAllVehicles(): IVehicle[] {
        return this._vehicles;
    }

    addVehicle(data: IVehicle): void {
        this._vehicles.push(data);
    }

    removeVehicle(index: number): void {
        this._vehicles.splice(index, 1);
    }

    sortByManufacturer(): void {
        this._vehicles.sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
    }

    getVehiclesByModelEnd(modelEnd: string): IVehicle[] {
        return this._vehicles.filter(vehicle => vehicle.model.endsWith(modelEnd));
    }
}


const vehicleOwner = new Owner("Черкашин", "Данила", "Станиславович", new Date(2005, 4, 18), DocumentType.ID_CARD, "AB1234", "567890");
const vehicleCar = new Car("Audi", "A8", 2018, "12345678901234567", "B456CD", vehicleOwner, BodyType.SEDAN, CarClass.LUXURY);
const vehicleBike = new Motorbike("Kawasaki", "Ninja", 2021, "98765432109876543", "C789EF", vehicleOwner, "Спортивная", true);

const storage = new VehicleStorage();
storage.addVehicle(vehicleCar);
storage.addVehicle(vehicleBike);

storage.sortByManufacturer();

console.log("Транспортные средства после сортировки:");
storage.getAllVehicles().forEach(vehicle => console.log(vehicle.displayInfo()));

const filteredVehicles = storage.getVehiclesByModelEnd("Ninja");
console.log("\nТранспортные средства с моделью, заканчивающейся на 'Ninja':");
filteredVehicles.forEach(vehicle => console.log(vehicle.displayInfo()));

console.log("\nБазовая информация о транспортных средствах:");
storage.getAllVehicles().forEach(vehicle => console.log(vehicle.getBasicInfo()));
