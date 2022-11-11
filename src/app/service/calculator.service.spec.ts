import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  // let service: CalculatorService

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(CalculatorService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  //const logger = jasmine.createSpyObj('loggerService',['log']);
  let calculator: CalculatorService, logger: any;
  beforeEach(() => {
    console.log('calling beforeEach......');
    // loggerSpy= jasmine.createSpyObj('LoggerService',['log']);
    logger = new LoggerService();
    calculator = new CalculatorService(logger);
  });
  it('should add two numbers', () => {
    console.log('calling add....');
    //const calculator = new CalculatorService(new LoggerService());
    const result = calculator.add(10, 20);
    expect(result).toBe(30);
  });
  //const logger = jasmine.createSpyObj('loggerService',['log']);
  it('should sub two numbers', () => {
    console.log('calling sub....');
    //const calculator = new CalculatorService(new LoggerService());
    const result = calculator.add(20, 10);
    expect(result).toBe(30);
  });
});
