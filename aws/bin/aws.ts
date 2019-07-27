#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkExampleWebStack } from '../lib/cdk-example-web-stack';

const app = new cdk.App();
new CdkExampleWebStack(app, 'CdkExampleWebStack');