import cdk = require('@aws-cdk/core');
import { StaticWebsiteStack, IStaticWebsiteProps } from './StaticWebsiteStack';
const config = require('../config-cdk-sample.json');

export class CdkExampleWebStack extends StaticWebsiteStack {
  constructor(scope: cdk.App, id: string ) {
    const props: IStaticWebsiteProps = {
      websiteDistPath: '../dist',
      deploymentVersion: '1.0.1',
      certificateArn: config.certificateArn,
      domainNames: ['cdk-example.awsexamples.dev'],
      resourcePrefix: 'cdk-test',
      indexDocument: 'index.html',
    };

    super(scope, id, props);
  }
}
