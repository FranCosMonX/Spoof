import { S3 } from 'aws-sdk';

export const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const bucketName = process.env.AWS_BUCKET_NAME;
