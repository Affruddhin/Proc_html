import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private logger: LoggerService) {}
  add(no1: number, no2: number) {
    this.logger.log('add funtion');
    return no1 + no2;
  }
  sub(no1: number, no2: number) {
    this.logger.log('sub funtion');
    return no1 * no2;
  }
}
