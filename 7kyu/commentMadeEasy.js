/*
Your task is to create a function that takes two parameters:

text: A string containing the text to be wrapped in comments.
style: A string indicating the style of comments to use. It can be one of the following:

"Bash"
"Bash Multiline"
"JavaDoc"
"Python"
"Python Multiline"
"Javascript"
"Javascript Multiline"
"SGML"
"SQL"

The function should wrap the given text in the appropriate comment style and return the result.

function comment(text, style) {

}
*/

// Answer:
// I focused on the JavaDoc style of commenting
// I used a conditional statement saying that if style matched with "JavaDoc",
// then it outputted the style related to it. I had to use \n to make sure that
// the output when the string is returned matches the comment style exactly
function comment(text, style) {
  if (style === "Bash") {
    return text.split("\n").map(line => `# ${line}`).join("\n");
  } else if (style === "Bash Multiline") {
    return `: "\n${text}\n"`;
  } else if (style === "JavaDoc") {
    return `/**\n${text.split("\n").map(line => `* ${line}`).join("\n")}\n*/`;
  } else if (style === "Python") {
    return text.split("\n").map(line => `# ${line}`).join("\n");
  } else if (style === "Python Multiline") {
    return `"""\n${text}\n"""`;
  } else if (style === "Javascript") {
    return text.split("\n").map(line => `// ${line}`).join("\n");
  } else if (style === "Javascript Multiline") {
    return `/*\n${text}\n*/`;
  } else if (style === "SGML") {
    return text.split("\n").map(line => `<!-- ${line} -->`).join("\n");
  } else if (style === "SQL") {
    return text.split("\n").map(line => `-- ${line}`).join("\n");
  }
}