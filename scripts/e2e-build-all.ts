import { exec }  from 'child_process';

const e2eProjects = ['smoke'];

e2eProjects.forEach((packageDir: string) => {
  process.chdir(`./e2e/${packageDir}`);

  console.log(`[i] Installing e2e project ${packageDir}...`);
  exec('yarn');

  console.log(`[i] Building e2e project ${packageDir}...`);
  exec('yarn build');

  process.chdir('../../');
});