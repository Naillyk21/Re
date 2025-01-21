"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
// entities/Hospital.ts
const typeorm_1 = require("typeorm");
let Hospital = class Hospital {
    constructor() {
        this.id = 0;
        this.official_name = 'Hôpital Général';
        this.full_address = '12B Rue de la Santé, Paris, France';
        this.department_number = '75';
        this.postal_code = '75013';
        this.facility_type = 'Hôpital';
        this.latitude = 48.856600;
        this.longitude = 2.352200;
        this.finess = '1000024';
        this.occupancy_rate = 85;
        this.last_update = new Date('2025-01-19 00:00:00.000');
    }
};
exports.Hospital = Hospital;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Hospital.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: 'Hôpital Général' }),
    __metadata("design:type", Object)
], Hospital.prototype, "official_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, default: '12B Rue de la Santé, Paris, France' }),
    __metadata("design:type", Object)
], Hospital.prototype, "full_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: '75' }),
    __metadata("design:type", Object)
], Hospital.prototype, "department_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: '75013' }),
    __metadata("design:type", Object)
], Hospital.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, default: 'Hôpital' }),
    __metadata("design:type", Object)
], Hospital.prototype, "facility_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 9, scale: 6, default: 48.856600 }),
    __metadata("design:type", Object)
], Hospital.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 9, scale: 6, default: 2.352200 }),
    __metadata("design:type", Object)
], Hospital.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, default: '1000024' }),
    __metadata("design:type", Object)
], Hospital.prototype, "finess", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true, default: 85 }),
    __metadata("design:type", Object)
], Hospital.prototype, "occupancy_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => `'2025-01-19 00:00:00.000'` }),
    __metadata("design:type", Object)
], Hospital.prototype, "last_update", void 0);
exports.Hospital = Hospital = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Hospital);
