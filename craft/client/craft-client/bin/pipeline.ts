#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CraftPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new CraftPipelineStack(app, 'CraftPipelineStack', {
  
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

});