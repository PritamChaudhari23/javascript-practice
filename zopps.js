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
// Class
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting."));
    };
    Vehicle.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is stopping."));
    };
    Vehicle.prototype.honk = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is honking."));
    };
    Vehicle.prototype.getInfo = function () {
        console.log("Vehicle: ".concat(this.make, " ").concat(this.model, ", Year: ").concat(this.year));
    };
    Vehicle.prototype.accelerate = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is accelerating."));
    };
    Vehicle.prototype.brake = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is braking."));
    };
    return Vehicle;
}());
// Object
var vehicle = new Vehicle("Toyota", "Camry", 2022);
vehicle.start();
vehicle.accelerate();
vehicle.honk();
vehicle.brake();
vehicle.stop();
vehicle.getInfo();
// INHERITANCE
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numberOfDoors) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numberOfDoors = numberOfDoors;
        return _this;
    }
    Car.prototype.openDoors = function () {
        console.log("Opening ".concat(this.numberOfDoors, " doors."));
    };
    return Car;
}(Vehicle));
var car = new Car("Honda", "Accord", 1998, 4);
car.start();
car.openDoors();
var Spaceship = /** @class */ (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship(make, model, year, fuelType) {
        var _this = _super.call(this, make, model, year) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    Spaceship.prototype.launch = function () {
        console.log("".concat(this.make, " ").concat(this.model, " in year ").concat(this.year, " spaceship is launching with ").concat(this.fuelType, " fuel."));
    };
    return Spaceship;
}(Vehicle));
var spaceship = new Spaceship("SpaceX", "Starship", 2022, "liquid methane");
spaceship.start();
spaceship.launch();
// POLYMORPHISM
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorcycle.prototype.start = function () {
        console.log("Motorcycle is revving up.");
    };
    return Motorcycle;
}(Vehicle));
var motorcycle = new Motorcycle("Harley", "Davidson", 2023);
vehicle.start(); // Outputs: Vehicle is starting.
motorcycle.start(); // Outputs: Motorcycle is revving up.
// ABSTRACTION
// Abstract Class
var AbstractVehicle = /** @class */ (function () {
    function AbstractVehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    // Concrete method (can be used as is)
    AbstractVehicle.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is stopping."));
    };
    return AbstractVehicle;
}());
var AbstractCar = /** @class */ (function (_super) {
    __extends(AbstractCar, _super);
    function AbstractCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementing the abstract method
    AbstractCar.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting."));
    };
    return AbstractCar;
}(AbstractVehicle));
var myCar = new AbstractCar("Toyota", "Corolla");
myCar.start();
myCar.stop();
var BikeImplementation = /** @class */ (function () {
    function BikeImplementation(make, model) {
        this.make = make;
        this.model = model;
    }
    // Implementing the interface method
    BikeImplementation.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " bike is starting."));
    };
    BikeImplementation.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " bike is stopping."));
    };
    return BikeImplementation;
}());
var myBike = new BikeImplementation("Honda", "CBR");
myBike.start();
myBike.stop();
// ENCAPSULATION
var EncapsulatedVehicle = /** @class */ (function () {
    function EncapsulatedVehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    EncapsulatedVehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting."));
    };
    EncapsulatedVehicle.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is stopping."));
    };
    EncapsulatedVehicle.prototype.honk = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is honking."));
    };
    EncapsulatedVehicle.prototype.getInfo = function () {
        console.log("Vehicle: ".concat(this.make, " ").concat(this.model, ", Year: ").concat(this.year));
    };
    EncapsulatedVehicle.prototype.accelerate = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is accelerating."));
    };
    EncapsulatedVehicle.prototype.brake = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is braking."));
    };
    Object.defineProperty(EncapsulatedVehicle.prototype, "getMake", {
        // Getters and setters
        get: function () {
            return this.make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncapsulatedVehicle.prototype, "setMake", {
        set: function (make) {
            this.make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncapsulatedVehicle.prototype, "getModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncapsulatedVehicle.prototype, "setModel", {
        set: function (model) {
            this.model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncapsulatedVehicle.prototype, "getYear", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncapsulatedVehicle.prototype, "setYear", {
        set: function (year) {
            if (year > 1885) {
                this.year = year;
            }
            else {
                console.log("Invalid year. Vehicles weren't around before 1885.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return EncapsulatedVehicle;
}());
var encapsulatedVehicle = new EncapsulatedVehicle("Toyota", "Camry", 2022);
console.log(encapsulatedVehicle.getMake); // Outputs: Toyota
encapsulatedVehicle.setMake = "Honda";
console.log(encapsulatedVehicle.getMake); // Outputs: Honda
console.log(encapsulatedVehicle.getModel); // Outputs: Camry
encapsulatedVehicle.setModel = "Accord";
console.log(encapsulatedVehicle.getMake); // Outputs: Accord
console.log(encapsulatedVehicle.getYear); // Outputs: 2022
encapsulatedVehicle.setYear = 2025;
console.log(encapsulatedVehicle.getYear); // Outputs: 2025
encapsulatedVehicle.setYear = 1800; // Outputs: Invalid year. Vehicles weren't around before 1885.
encapsulatedVehicle.start(); // Outputs: Honda Accord is starting.
encapsulatedVehicle.getInfo(); // Outputs: Vehicle: Honda Accord, Year: 2025
// AGGREGATION
var Engine = /** @class */ (function () {
    function Engine(type) {
        this.type = type;
    }
    Engine.prototype.start = function () {
        console.log("".concat(this.type, " engine starting..."));
    };
    return Engine;
}());
var AggregationVehicle = /** @class */ (function () {
    function AggregationVehicle(make, model, year, engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        // Aggregation: Vehicle uses an external Engine object
        this.engine = engine;
    }
    AggregationVehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting..."));
        this.engine.start(); // Starts the external engine
    };
    return AggregationVehicle;
}());
var v8Engine = new Engine("V8");
var aggregationVehicle = new AggregationVehicle("Ford", "Mustang", 2022, v8Engine);
aggregationVehicle.start();
// COMPOSITION
var Transmission = /** @class */ (function () {
    function Transmission() {
    }
    Transmission.prototype.shift = function () {
        console.log("Transmission shifting...");
    };
    return Transmission;
}());
var CompositionVehicle = /** @class */ (function () {
    function CompositionVehicle(make, model, year, engineType, transmissionType) {
        this.make = make;
        this.model = model;
        this.year = year;
        // Composition: Vehicle has an Engine and Transmission
        this.engine = new Engine(engineType);
        this.transmission = new Transmission();
    }
    CompositionVehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting..."));
        this.engine.start(); // Starting the engine
    };
    CompositionVehicle.prototype.shift = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is shifting gears..."));
        this.transmission.shift(); // Shifting the transmission
    };
    return CompositionVehicle;
}());
var compositionVehicle = new CompositionVehicle("Toyota", "Camry", 2022, "V6", "Automatic");
compositionVehicle.start();
compositionVehicle.shift();
// ASSOCIATION
var Driver = /** @class */ (function () {
    function Driver(name) {
        this.name = name;
    }
    Driver.prototype.drive = function (vehicle) {
        console.log("".concat(this.name, " is driving the ").concat(vehicle.make, " ").concat(vehicle.model, "."));
    };
    return Driver;
}());
var driver = new Driver("Alice");
var car2 = new Vehicle("BMW", "X5", 2023);
driver.drive(car2); // Outputs: Alice is driving the BMW X5.
// COUPLING
var CouplingVehicle = /** @class */ (function () {
    function CouplingVehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        // Tight Coupling: The Vehicle directly creates an Engine object
        this.engine = new Engine("V8"); // Vehicle is tightly coupled to the Engine class
    }
    CouplingVehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting..."));
        this.engine.start(); // Starts the engine created inside the vehicle
    };
    return CouplingVehicle;
}());
var couplingVehicle = new CouplingVehicle("Ford", "Mustang", 2022);
couplingVehicle.start(); // Outputs: Ford Mustang is starting... V8 engine starting...
/**
 * Entities: Base class - Vehicle
 * Car
 * Motorcycle
 * Train
 * Boat
 * Aeroplane
 * Spaceship
 */
