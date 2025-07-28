const [, , cmd, ...args] = process.argv;
const commands = {
  read: require("./commands/read"),
  create: require("./commands/create"),
  append: require("./commands/append"),
  delete: require("./commands/delete"),
  rename: require("./commands/rename"),
  ls: require("./commands/list"),
  mkdir: require("./commands/mkdir"),
  rmdir: require("./commands/rmdir"),
};

if (commands[cmd]) {
  commands[cmd](...args);
} else {
  console.log(`unkown command used ${cmd}`);
}
