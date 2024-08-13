"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketName = exports.s3 = void 0;
const aws_sdk_1 = require("aws-sdk");
exports.s3 = new aws_sdk_1.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
exports.bucketName = process.env.AWS_BUCKET_NAME;
//# sourceMappingURL=aws.config.js.map