import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
	const debugMessage = 'Running main.ts run()';
	core.debug(debugMessage);
	  
    const ms: string = core.getInput('milliseconds');
    core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    core.debug(new Date().toTimeString());
    await wait(parseInt(ms, 8));
    core.debug(new Date().toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
