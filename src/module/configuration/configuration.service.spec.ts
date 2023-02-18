import { Test, TestingModule } from '@nestjs/testing';
import {
  IConfigurationService,
  IConfigurationServiceToken,
} from './configuration.service.interface';
import { configurationServiceProvider } from './configuration.service.provider';

describe('ConfigurationService', () => {
  let service: IConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [configurationServiceProvider],
    }).compile();

    service = module.get<IConfigurationService>(IConfigurationServiceToken);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get db port that should to be bigger than 0', () => {
    expect(service.getDbPort()).toBeGreaterThan(0);
  });

  it('should get db port that should to be integer', () => {
    const isDbPortInteger = Number.isInteger(service.getDbPort());

    expect(isDbPortInteger).toBeTruthy();
  });
});
