# cdk-rocks

> Simple SPA application to demonstrate CDK deployment of static assets to AWS.

## Prerequisites

- NodeJS 8+ 
- Install AWS CLI
- Install AWS SAM
- Install AWS CDK CLI
- Configure your AWS Credentials for your AWS Account
- Bootstrap the CDK `cdk bootstrap`

## Build Setup

``` bash
# install dependencies
yarn install

# build for production with minification
yarn build
```

**Example Website**

[https://cdk-example.awsexamples.dev/](https://cdk-example.awsexamples.dev/)

## Bootstrap the CDK in your account.

Otherwise you will get this error when trying to deploy.

```
This stack uses assets, so the toolkit stack must be deployed to the environment (Run "cdk bootstrap aws://unknown-account/unknown-region")
```

Bootstrapping is easy.  Just run this CLI command:

`cdk bootstrap`

Bootstrapping creates the following resources (S3 Bucket) in your AWS account and is used to move the static assets within your account.

```
 ⏳  Bootstrapping environment aws://156240685218/us-east-1...
CDKToolkit: creating CloudFormation changeset...
 0/2 | 11:42:51 | CREATE_IN_PROGRESS   | AWS::S3::Bucket | StagingBucket
 0/2 | 11:42:52 | CREATE_IN_PROGRESS   | AWS::S3::Bucket | StagingBucket Resource creation Initiated
 1/2 | 11:43:13 | CREATE_COMPLETE      | AWS::S3::Bucket | StagingBucket
 2/2 | 11:43:15 | CREATE_COMPLETE      | AWS::CloudFormation::Stack | CDKToolkit
 ✅  Environment aws://156240685218/us-east-1 bootstrapped.
```

## Configure a Certificate for your website (optional)
After creating a certificate for your website in the AWS Certificate Manager (this is free by the way) notate the ARN for the cert.  Then add a file to the root of this project called `config-cdk-sample.json` in this file add the following and replace the fake ARN with the ARN of your certificate.

```
{
    "certificateArn": "arn:aws:acm:us-east-1:123456789012:certificate/000000-0000-0000-0000-000000000000"
}
```
