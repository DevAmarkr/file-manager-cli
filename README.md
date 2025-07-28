# 🗂️ Node.js File Manager CLI

A simple command-line tool built with Node.js to perform basic file system operations — perfect for learning the `fs` module and preparing for interviews.

---

## 🚀 Features

- 📄 Create and read files
- ✏️ Append content to files
- 🗑️ Delete files
- 🔁 Rename files
- 📂 List directory contents
- 📁 Create and remove folders

---

## 🧠 Why this project?

This project is designed to:
- Teach you how Node's `fs` module works
- Practice file system operations (both sync and async)
- Prepare for Node.js interview questions
- Understand real-world CLI handling with `process.argv`


---

## ⚙️ Setup Instructions

```bash
# 1. Clone the repo or download manually
git clone https://github.com/your-username/file-manager-cli.git
cd file-manager-cli

# 2. Run a command
node file-manager.js <command> [arguments...]

| Command  | Description               | Example                                                |
| -------- | ------------------------- | ------------------------------------------------------ |
| `create` | Create a new file         | `node file-manager.js create hello.txt "Hello world"`  |
| `read`   | Read file content         | `node file-manager.js read hello.txt`                  |
| `append` | Append content to a file  | `node file-manager.js append hello.txt "More content"` |
| `delete` | Delete a file             | `node file-manager.js delete hello.txt`                |
| `rename` | Rename a file             | `node file-manager.js rename old.txt new.txt`          |
| `ls`     | List files in a directory | `node file-manager.js ls .`                            |
| `mkdir`  | Create a directory        | `node file-manager.js mkdir testFolder`                |
| `rmdir`  | Remove a directory        | `node file-manager.js rmdir testFolder`                |

# Create a file with some content
node file-manager.js create notes.txt "Meeting notes here"

# Read the file
node file-manager.js read notes.txt

# Append more text
node file-manager.js append notes.txt "\nDon't forget the deadline."

# Rename it
node file-manager.js rename notes.txt tasks.txt

# List current directory contents
node file-manager.js ls .

# Delete the file
node file-manager.js delete tasks.txt


