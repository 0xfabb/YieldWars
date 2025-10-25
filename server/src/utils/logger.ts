import winston from 'winston';
import path from 'path';

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message, service, ...meta }) => {
    const metaStr = Object.keys(meta).length ? JSON.stringify(meta, (key, value) => 
      typeof value === 'bigint' ? value.toString() : value, 2) : '';
    return `${timestamp} [${service || 'Server'}] ${level}: ${message} ${metaStr}`;
  })
);

export function createLogger(service: string) {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: logFormat,
    defaultMeta: { service },
    transports: [
      // Console transport
      new winston.transports.Console({
        format: consoleFormat,
        level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug'
      }),
      
      // File transport for errors
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        maxsize: 5242880, // 5MB
        maxFiles: 5
      }),
      
      // File transport for all logs
      new winston.transports.File({
        filename: 'logs/combined.log',
        maxsize: 5242880, // 5MB
        maxFiles: 5
      })
    ],
    
    // Handle exceptions and rejections
    exceptionHandlers: [
      new winston.transports.File({ filename: 'logs/exceptions.log' })
    ],
    rejectionHandlers: [
      new winston.transports.File({ filename: 'logs/rejections.log' })
    ]
  });
}

// Create logs directory if it doesn't exist
import fs from 'fs';
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}
