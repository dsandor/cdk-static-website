<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Script Code to Deploy Infrastructure and Code</h2>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
  import cdk = require('@aws-cdk/core');
  import { CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront'
  import { Bucket } from '@aws-cdk/aws-s3';
  import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';

  const websiteDistSourcePath = '../dist';
  const deploymentVersion = '1.0.0';
  const certificateArn = 'arn:aws:acm:us-east-1:156240685218:certificate/02db033d-16b8-4207-b3a2-9e24a2dae6d5';

  export class BuyBackWebStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      const sourceBucket = new Bucket(this, 'cdk-example-website-s3', {
        websiteIndexDocument: 'index.html',
        bucketName: 'cdk-example'
      });

      new BucketDeployment(this, 'DeployWebsite', {
        source: Source.asset(websiteDistSourcePath),
        destinationBucket: sourceBucket,
        destinationKeyPrefix: `${deploymentVersion}/`,
      });

      const distribution = new CloudFrontWebDistribution(this, 'cdk-example-cfront', {
        originConfigs: [
          {
            s3OriginSource: {
            s3BucketSource: sourceBucket
            },
            behaviors : [ {isDefaultBehavior: true}]
          }
        ],
        aliasConfiguration: {
          acmCertRef: certificateArn,
          names: ['cdk-example.awsexamples.dev']
        }
      });
    }
  }
        </code>
      </pre>
    </div>

  </div>
</template>

<script>
  import { component as VueCodeHighlight } from 'vue-code-highlight';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'This app was published to AWS via CDK'
      }
    },
    components:{
      VueCodeHighlight,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  @import "../node_modules/vue-code-highlight/themes/duotone-sea.css";
  @import "../node_modules/vue-code-highlight/themes/window.css";
</style>
