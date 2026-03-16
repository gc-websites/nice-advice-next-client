module.exports = {
  apps: [
    {
      name: 'nice-advice-next',
      script: 'npm',
      args: 'run start',
      instances: 'max', // Use all available CPU cores
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
