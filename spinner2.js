process.stdout.write('hello from spinner2.js... \rheyyy\n');
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let interval = 100;
for (const [index, item] of spinner.entries()) {
  setTimeout(() => {
    process.stdout.write(`\r${item}  `);
    if (index === spinner.length - 1) {
      console.log('\n');
    }
  }, interval);
  interval += 200;
};