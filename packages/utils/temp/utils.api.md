## API Report File for "@nextbnb/utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { TEnvironment } from '@nextbnb/common';
import * as winston from 'winston';

// @public (undocumented)
export class DateUtils {
    static checkIfValidDate(date: Date): boolean;
    static formatDate(date: Date): string;
    // (undocumented)
    static formatDateByElapsedTime(date: Date): string;
}

// @public (undocumented)
export interface IDate {
    // (undocumented)
    datetime: Date;
}

// @public (undocumented)
export interface IInfo {
    // (undocumented)
    level: string;
    // (undocumented)
    message: string;
    // (undocumented)
    timestamp?: Date;
}

// @public (undocumented)
export interface ILogger {
    // (undocumented)
    environment: TEnvironment;
    // (undocumented)
    level: TLoggerLevel;
    // (undocumented)
    requestId?: string;
    // (undocumented)
    service: string;
}

// @public (undocumented)
export class Logger {
    constructor({ service, level, requestId, environment }: ILogger);
    // (undocumented)
    output: (type: TLoggerLevel, args: winston.LogEntry) => void;
    }

// @public (undocumented)
export type TLoggerLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

// @public (undocumented)
export type TUnit = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';


// (No @packageDocumentation comment for this package)

```
