#!/usr/bin/env node
const whichPMRuns = require('which-pm-runs');
const argv = require('yargs').argv;

const which = whichPMRuns();

process.exit(which && argv.is === which.name ? 0 : 1);
