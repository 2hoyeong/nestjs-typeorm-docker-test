import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const appConfig = registerAs('app', () => ({
  env: process.env.NODE_ENV,
  port: Number(process.env.APP_PORT),
  prefix: process.env.APP_PREFIX,
}));

export const appConfigValidationSchema = {
  NODE_ENV: Joi.string().valid('dev', 'prod', 'stage', 'test').required(),
  APP_PORT: Joi.number().required(),
  APP_PREFIX: Joi.string().required(),
};
