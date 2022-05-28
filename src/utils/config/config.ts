import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
    PORT: Joi.number().required(),
    JWT_SECRET: Joi.string().required(),
    // MYSQL_HOST: Joi.string().required(),
    // MYSQL_PORT: Joi.number().required(),
    // MYSQL_USER: Joi.string().required(),
    // MYSQL_PASSWORD: Joi.string().allow('', null),
    // MYSQL_DATABASE: Joi.string().required(),
    // MAIL_HOST: Joi.string().required(),
    // MAIL_USER: Joi.string().required(),
    // MAIL_PASS: Joi.string().required(),
    // MAIL_FROM: Joi.string().required(),
    // MAIL_ADMIN: Joi.string().required(),
    // AWS_BUCKET_NAME: Joi.string().required(),
    // AWS_ACCESS_KEY: Joi.string().required(),
    // AWS_SECRET_KEY: Joi.string().required(),
    // AWS_REGION: Joi.string().required(),
    // AWS_ENDPOINT: Joi.string().required(),
});

export const config = () => ({
    host: {
        port: Number(process.env.PORT),
        jwtSecret: process.env.JWT_SECRET,
    },

    mysqldb: {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: !!process.env.SYNCHRONIZE_DATA,
        bigNumberStrings: false,
        supportBigNumbers: true,
        extra: {
            decimalNumbers: true,
        },
    },
});