export function useLogger(message) {
  const error = new Error();
  const stack = error.stack.split(/\r\n|\n/);
  // Parse the second line of the stack trace for details
  const stackLine = stack[2].trim();

  // Regular expression to extract function name and URL with line and column numbers
  const regex = /at (.*) \(?(http.*):(\d+):(\d+)\)?/;
  const match = stackLine.match(regex);

  if (match) {
    const [, functionName, url, line] = match;
    const folderPath = url.substring(0, url.lastIndexOf("/"));

    console.log(
      `${message}\nFolderPath: ${folderPath}\nFunction Called: ${functionName}`
    );
  } else {
    console.log(`${message} - Unable to parse stack details`);
  }
}
