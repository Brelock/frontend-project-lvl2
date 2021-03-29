#!/usr/bin/env node
import program from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.6')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')